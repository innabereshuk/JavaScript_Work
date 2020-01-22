(function(){
   'use strict';

   let showMustGoOn = true;

   do {
    let num = prompt("Введите трехзначное число"); 

    if (typeof num == 'string') {
        num = +num;
        let numStr = Math.abs(num).toString();

        if (Number.isInteger(num) && numStr.length == 3) {
            // нам подходит
             if (numStr[0] == numStr[1] ||
                numStr[0] == numStr[2] ||
                numStr[0] == numStr[3]) {
                    document.write('Есть одинаковые цифры');
                } else {
                    document.write('Нет одинаковых цифр');
                }

            showMustGoOn = false;
            
        }
    } else {
        // закончить скрипт
        document.write(`Операция отменена`);
        showMustGoOn = false;
    }
} while (showMustGoOn)

})();

// Проверка на наличие одинаковых цифр