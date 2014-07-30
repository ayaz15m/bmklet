// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// javascript:(function(){ window.open(http://www.cnn.com/); })();
// javascript:void(document.bgColor=prompt('Color? Hex or name will do. May I suggest pink?','pink'))

javascript:(function(){location.href='http://jigsaw.w3.org/css-validator/validator?uri='+encodeURIComponent(location.href);})();

javascript(function(){
	var%20script=document.createElement('script');
	script.type='text/javascript';
	script.src='http://mywebsite.com/script.js';
	document.getElementsByTagName('head')[0].appendChild(script);
})();


javascript:(function()%7Balert(%22Ayaz!%22)%7D)()


function(){

	// the minimum version of jQuery we want
	var v = "1.3.2";

	// check prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}

	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			// your JavaScript code goes here!
		})();
	}

  (function(){
    var s = document.createElement('script');
    s.src = 'http://bookmarklet-720pify.heroku.com/js/720pify.js';
    document.body.appendChild(s);
})();

})();
