(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function setDelay(func, time) {
    setTimeout(function () {
        func();
    }, time);
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
            break;
        }
    }
}

Array.prototype.bubblesort = function () {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < this.length; i++) {
            if (this[i - 1] > this[i]) {
                done = false;
                // sleep(1000);
                var _ref = [this[i], this[i - 1]];
                this[i - 1] = _ref[0];
                this[i] = _ref[1];

                return this;
            }
        }
    }
    return this;
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3J0aW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxTQUFTLFFBQVQsQ0FBa0IsSUFBbEIsRUFBd0IsSUFBeEIsRUFBOEI7QUFDMUIsZUFBVyxZQUFZO0FBQ25CLGVBRG1CO0tBQVosRUFFUixJQUZILEVBRDBCO0NBQTlCOztBQU1BLFNBQVMsS0FBVCxDQUFlLFlBQWYsRUFBNkI7QUFDM0IsUUFBSSxRQUFRLElBQUksSUFBSixHQUFXLE9BQVgsRUFBUixDQUR1QjtBQUUzQixTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxHQUFKLEVBQVMsR0FBekIsRUFBOEI7QUFDNUIsWUFBSSxJQUFLLElBQUosR0FBVyxPQUFYLEtBQXVCLEtBQXZCLEdBQWdDLFlBQWpDLEVBQThDO0FBQ2hELGtCQURnRDtTQUFsRDtLQURGO0NBRkY7O0FBU0EsTUFBTSxTQUFOLENBQWdCLFVBQWhCLEdBQTZCLFlBQVk7QUFDckMsUUFBSSxPQUFPLEtBQVAsQ0FEaUM7QUFFckMsV0FBTyxDQUFDLElBQUQsRUFBTztBQUNWLGVBQU8sSUFBUCxDQURVO0FBRVYsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksS0FBSyxNQUFMLEVBQWEsR0FBakMsRUFBc0M7QUFDbEMsZ0JBQUksS0FBSyxJQUFJLENBQUosQ0FBTCxHQUFjLEtBQUssQ0FBTCxDQUFkLEVBQXVCO0FBQ3ZCLHVCQUFPLEtBQVA7O0FBRHVCLDJCQUdFLENBQUMsS0FBSyxDQUFMLENBQUQsRUFBVSxLQUFLLElBQUksQ0FBSixDQUFmLEVBSEY7QUFHdEIscUJBQUssSUFBSSxDQUFKLFlBSGlCO0FBR1QscUJBQUssQ0FBTCxZQUhTOztBQUl2Qix1QkFBTyxJQUFQLENBSnVCO2FBQTNCO1NBREo7S0FGSjtBQVdBLFdBQU8sSUFBUCxDQWJxQztDQUFaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIHNldERlbGF5KGZ1bmMsIHRpbWUpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmMoKTtcclxuICAgIH0sIHRpbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzbGVlcChtaWxsaXNlY29uZHMpIHtcclxuICB2YXIgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IDFlNzsgaSsrKSB7XHJcbiAgICBpZiAoKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnQpID4gbWlsbGlzZWNvbmRzKXtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5BcnJheS5wcm90b3R5cGUuYnViYmxlc29ydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBkb25lID0gZmFsc2U7XHJcbiAgICB3aGlsZSAoIWRvbmUpIHtcclxuICAgICAgICBkb25lID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXNbaSAtIDFdID4gdGhpc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgZG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gc2xlZXAoMTAwMCk7XHJcbiAgICAgICAgICAgICAgICBbdGhpc1tpIC0gMV0sIHRoaXNbaV1dID0gW3RoaXNbaV0sIHRoaXNbaSAtIDFdXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn0iXX0=
