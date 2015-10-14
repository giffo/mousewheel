/*
 * author:giffo, written end of 2013 if not earlier
 */

(function($) {

	var wheelHandler = function(event) {
		/*
			the ternary statement below is a simplication of this
		
			var ud = (event.deltaY)? event.deltaY : event.wheelDeltaY; // Y is up or down
			var lr = (event.deltaX) ? event.deltaX:event.wheelDeltaX;
			var dir = direction(ud, lr);
		*/
		var dir = direction((event.deltaY)? event.deltaY : event.wheelDeltaY, (event.deltaX) ? event.deltaX:event.wheelDeltaX); 
		event = new jQuery.Event(event); // adds $.expando code and makes it writable
		event.type = "mousewheel"; // needed for ff
		
		return $.event.dispatch.apply(this, [event, dir]);
	}
	
	
	
	// y = up/down, x = left/right, or combination
	var direction = function(deltaY, deltaX) {
		var dir = "";
		
		if(deltaY && deltaY != 0) {
			dir = deltaY < 0?"up":"down";
		}
		
		if(deltaX && deltaX != 0) {
			dir+= deltaX < 0?"left":"right";
		}
		
		return dir;
		
	}
	

	// http://james.padolsey.com/jquery/#v=2.0.3&fn=jQuery.event
	$.event.special.mousewheel = {
		setup: function() {			
			if(this.addEventListener) {
				this.addEventListener("wheel", wheelHandler, false); // ff + ie
				this.addEventListener("mousewheel", wheelHandler, false); // chrome
				
			} else {
				//this.onmousewheel = wheelHandler; // fallback // window. + document.
			}
			
		},
		
		teardown:function(){
			if(this.removeEventListener) {
				this.removeEventListener("wheel", wheelHandler, false); // ff + ie
				this.removeEventListener("mousewheel", wheelHandler, false); // chrome
			}
		}
	
	}

	
	// jquery event binder
	// $(".some-page").mousewheel(); = trigger? if(!fn) return this.trigger("mousewheel")??
	// ?? is there any need to switch mousewheel off an element?
	$.fn.extend({
		mousewheel: function(fn) {return this.bind("mousewheel", fn);}
	});
	
})(jQuery);