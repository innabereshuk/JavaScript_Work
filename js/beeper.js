//  Функция позволяет вставить на страницу аидио и проигрывать его через определенные промежутки времени

(function(){
    'use strict';
     
    class Beeper {

        constructor(interval) {
            this.runner   = null;
            this.interval = interval ? 
                            interval * 60 * 1000 : /*переводим минуты в милисикунды*/
                            1000 * 5;    /* 5 секунд по умолчанию*/
            
            let now = new Date();
            this.id = 'beep-' + now.getMilliseconds();

            let audio = document.createElement('audio');
                audio.id       = this.id;
                audio.controls = false;
                // audio.muted    = true;   
                audio.src      = "audio/signal.mp3";
                audio.type     = 'audio/mpeg';
               
                document.body.appendChild(audio);

                this.audio = audio; 
             
        }
       
        beep() {
            this.audio.play();
        }

        run() {
            this.runner = setInterval(() => {
                this.beep();
            }, this.interval);
        }

        stop() {
            clearInterval(this.runner);
        }
       
    };


    let btnStart =  document.getElementById('start');
    let btnStop =  document.getElementById('stop');
    let minutes = document.getElementById('minutes');

    let beeper = false;

    btnStart.addEventListener('click', (e) => {
            beeper = beeper ? beeper : new Beeper();
            beeper.interval = minutes.value * 60 * 1000;
           
            beeper.beep();
            beeper.run();

            btnStart.disable = true;
            
    });

    btnStop.addEventListener('click', () => {
                if (beeper) {
                    beeper.stop();
                    btnStart.disable = false;
                }
            })

     
})();