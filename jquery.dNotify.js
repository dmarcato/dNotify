/**************************************************
*   dNotify - A simple user notification system   *
*             based on jQuery and CSS             *
*   https://github.com/dmarcato/dNotify           *
*                                                 *
*   Version 1.0 (6 November 2011)                 *
*                                                 *
*   Copyright(c) 2011, Dario Marcato              *
*   Web: http://about.me/dariomarcato             *
*   Mail: dm0388@gmail.com                        *
***************************************************/
(function($){

	var defaults = {
		sticky: false,
		duration: 5000,
		slideTime: 500,
		message: "Test message",
		type: "normal",
		showIcon: false,
		iconPosition: "left",
		iconFile: ""
	};

	jQuery.dNotify = function(method) {
		
		var methods = {
			show: function(options) {
				options = $.extend(defaults, options);
				showMsg(options);
			},
			good: function(msg, options) {
				options = $.extend(defaults, {
					message: msg,
					type: 'good',
					showIcon: true,
					iconFile: './imgs/good.png'
				}, options);
				showMsg(options);
			},
			bad: function(msg, options) {
				options = $.extend(defaults, {
					message: msg,
					type: 'bad',
					sticky: true,
					showIcon: true,
					iconFile: './imgs/bad.png'
				}, options);
				showMsg(options);
			},
			warn: function(msg, options) {
				options = $.extend(defaults, {
					message: msg,
					type: 'warn',
					sticky: true,
					showIcon: true,
					iconFile: './imgs/warn.png'
				}, options);
				showMsg(options);
			},
			fromArray: function(errors) {
				for (i = 0; i < errors.length; i++) {
					if (errors[i][0] == false) {
						methods.bad(errors[i][1]);
					} else {
						methods.good(errors[i][1]);
					}
				}
			},
			closeAll: function() {
				$('#dnotify .msg').stop().slideUp(defaults.slideTime, function() {
					$(this).remove();
				});
			},
			close: function(type) {
				$('#dnotify .msg.'+type).stop().slideUp(defaults.slideTime, function() {
					$(this).remove();
				});	
			}
		}
		
		var showMsg = function(options) {
			if ($('#dNotify').length == 0) {
				$(document.createElement('div')).attr('id', 'dNotify').appendTo('body');
			}
		
			var id = Math.floor(Math.random()*101) + new Date().valueOf();
			var not = $(document.createElement('div'));
			not.addClass("msg").addClass(options.type).attr('id', id).attr('title', 'Click to close me');
			if (options.showIcon) {
				not.append('<img src="'+options.iconFile+'" alt="'+options.type+'" class="icon '+options.iconPosition+'" />');
			}
			not.append("<span>"+options.message+"</span>");
			not.appendTo('#dNotify');
			not.stop().slideDown(options.slideTime);
		
			not.click(function() {
				$(this).stop().slideUp(options.slideTime, function() {
					$(this).remove();
				});
			});
		
			if (!options.sticky) {
				setTimeout("$('#"+id+"').stop().slideUp("+options.slideTime+", function() { $('#"+id+"').remove(); });", options.duration);
			}
		}
		
		try {
			if (methods[method]) {
				return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			} else if (typeof method === 'object') {
				defaults = $.extend(defaults, method);
				return this;
			} else {
				$.error('Method ' + method + ' does not exists on jQuery.dNotify');
			}
		} catch (e) {
			methods.bad(e);
		}

	};

})(jQuery);