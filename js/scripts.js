(function(){
    'use strict';
    
    // 1.апросить у пользователя число 3-х значое
    // 1а.проверитьь на число
    // 1б.проверить на -х значное число
    // let num = prompt("Введите трехзначное число");
    
        

    // while (showMustGoOn) {

    //     if (typeof num == 'string') {
    //         num = +num;
    //         if (Number.isInteger(num) && Math.abs(num).toString().length == 3){
    //             // нам подходит
    //             let units = num % 10;         /*units = 123 % 10 = 3*/
    //             num = (num - units) / 10;     /*num = (123 -3) / 10 = 120 / 10 = 12*/
    //             let dozens = num % 10;        /*dozens = 12 % 10 = 2*/
    //             num = (num - dozens) / 10;    /*num = (12 - 2) / 10 = 10 / 10 = 1*/
    //             document.write(`${units}${dozens}${num}`);
    
    //             showMustGoOn = false;
                
    //         }else {
    //             // запросить у пользователя число еще один раз
    //             num = prompt("Введите трехзначное число");
    //         }
    //     } else {
    //         // закончить скрипт
    //         document.write(`Операция отменена`);
    //         showMustGoOn = false;
    //     }
    // }
    
   
    do {
        let num = prompt("Введите трехзначное число"); 

        if (typeof num == 'string') {
            num = +num;
            if (Number.isInteger(num) && Math.abs(num).toString().length == 3){
                // нам подходит
                let units = num % 10;         /*units = 123 % 10 = 3*/
                num = (num - units) / 10;     /*num = (123 -3) / 10 = 120 / 10 = 12*/
                let dozens = num % 10;        /*dozens = 12 % 10 = 2*/
                num = (num - dozens) / 10;    /*num = (12 - 2) / 10 = 10 / 10 = 1*/
                document.write(`${units}${dozens}${num}`);
    
                showMustGoOn = false;
                
            }
        } else {
            // закончить скрипт
            document.write(`Операция отменена`);
            showMustGoOn = false;
        }
    } while (showMustGoOn)
    
    
    
    // console.log(num);
    // console.log(num.length);
    // console.log(typeof num);
    
    // 2.выделить сотни
    // 3.выделить десятки
    // 4.выделить единицы
    // 5.вывод
})();
// Меняем все точки в переменной нум на пробел
// num = num.replace('.', '');  