(function(){
    'use strict';

    let resizer = document.querySelector('.resizer'),
        corners = document.querySelectorAll('.resizer__corner'),
        motionX = null,
        motionY = null,
        windowSquare = window.innerWidth * window.innerHeight;


    document.body.addEventListener('mousedown', (e) => {
        motionX = e.x;
        motionY = e.y;
        console.log(`${motionX} - ${motionY}`);
    });


    document.body.addEventListener('mouseup', (e) => {
        motionX = null;
        motionY = null;
        console.log(`${motionX} - ${motionY}`);
    });


    corners.forEach((corner) => {
       corner.addEventListener('mousemove', (e) => {
           resize(e);
       })
    })


    function resize(e) {

        if (e.which != 1){
            return;
        }
        
        let rect    = e.target.getBoundingClientRect();
           
        // Отсекаем движение извне, за пределами дива
        if (motionX < rect.left || motionX > rect.right) {
            return;
        }

        if (motionY < rect.top || motionY > rect.bottom) {
            return;
        }
        // Определение углов
        let classes = e.target.classList,
            signX   = 1,
            signY   = 1;

        if (classes.contains('left-top')) {
            signX = -1;
            signY = -1;
        }
        if (classes.contains('right-top')) {
            signY= -1;
        }
        if (classes.contains('left-bottom')) {
            signX = -1;
        }

        let deltaX = signX * (e.x - motionX),
            deltaY = signY * (e.y - motionY),

            resizerRect = resizer.getBoundingClientRect(),

            newWidth = resizerRect.width + deltaX * 2,
            newHeight = resizerRect.height + deltaY * 2,

            percent = (newWidth * newHeight) * 100 / windowSquare;
         
         if (percent > 65) {
            resizer.style.backgroundColor = "#dd455e";

         }else if (percent < 35) {
            resizer.style.backgroundColor = "#45a0dd";

         }else {
            resizer.style.backgroundColor = "#45dd90";
        }


         if (newWidth > 60 && newHeight > 60 && 
                  (newWidth < window.innerWidth - 60) && 
                  (newHeight < window.innerHeight - 60)) {
             resizer.style.width = newWidth + 'px';
             resizer.style.height = newHeight + 'px';
         }

        motionX = e.x;
        motionY = e.y;
    }

    
})();