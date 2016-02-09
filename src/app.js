var UI = require('ui');
var ajax = require('ajax');


var dlcard = new UI.Card({
	title: "Downloading...",
	body: "Please wait"
});

dlcard.show();


ajax({
        url: 'http://45.55.231.183/slc/',
        type: 'json'
    },
    function(json) {
		
        var menu = new UI.Menu({
			sections: json.data
        });
        menu.on('select', function(e) {
            var splashCard = new UI.Card({
    			title: json.list[0][e.itemIndex].teacher,
    			body: json.list[0][e.itemIndex].time + "\n" + json.list[0][e.itemIndex].course_name + "\n" + json.list[0][e.itemIndex].course_type,
				scrollable: true
			});
			splashCard.show();
        });
		dlcard.hide();
        menu.show();

    },
    function(error) {
        var errorcard = UI.Card({
			title: "Error:",
			body: error
		});
		errorcard.show();
		dlcard.hide();
    }
);