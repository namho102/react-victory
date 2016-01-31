function setDelay(func, time) {
    setTimeout(function () {
        func();
    }, time);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
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
                [this[i - 1], this[i]] = [this[i], this[i - 1]];
                return this;
            }
        }
    }
    return this;
}