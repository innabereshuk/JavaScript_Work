(function(){
    'use strict';
    // Функция выводящая время на экран и показывающая текущее времяБ меняющие секунды

    let time = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        init: function(){
            let date = new Date();
            this.hours = date.getHours();
            this.minutes= date.getMinutes();
            this.seconds = date.getSeconds();
        },
        display: function(){
             return `${this._f(this.hours)}:${this._f(this.minutes)}:${this._f(this.seconds)}`;
        },
        _f: function(str) {
            return ('0' +str).substr(-2);
        },
        countUp: function(){
            setInterval(() => {
               this.init();
               document.getElementById('countUp').innerText = this.display();
            }, 1000);
        },
        countDown: function(){
           this.init();
           let interval = setInterval(() => {

               this.seconds = (this.seconds == 0) ? 59 : this.seconds - 1;

               this.minutes = (this.minutes == 0 && this.seconds ==59) ? 59 :
                    (this.seconds == 59) ? 
                    this.minutes -1 : 
                    this.minutes;

                this.hours =  (this.minutes == 59 && this.seconds == 59) ?
                   this.hours - 1 :
                   this.hours;

                   document.getElementById('countDown').innerText = this.display();

                if (this.seconds == 0 && this.minutes == 0 && this.hours == 0) {
                    clearInterval(interval);
                }
            }, 1000);
        }
    };

//    time.countDown();

    let timeUp = Object.assign({}, time);

    let timeDown = Object.assign({}, time);
    

    timeUp.countUp();
    timeDown.countDown();

})();