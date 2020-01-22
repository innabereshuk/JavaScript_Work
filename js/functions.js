(function(){
    // 6, 28, 496
     'use strict';

    let maxNumbers = 4,
        perfectNumbers = [],
        iterator = 1;

    do {
        if (isPerfectNumber(iterator)) {
            console.log(iterator);
            perfectNumbers.push(iterator);
        }
         iterator++;
    } while (perfectNumbers.length < maxNumbers);
     
    // document.write(isPerfectNumber(6));
     
    function isPerfectNumber(number) {

     let dividers = [];

        for (let i= 1; i < number; i++ ) {
            if ((number % i) == 0) {
               dividers.push(i);
            }
        }
         
       let sum = 0;
       dividers.forEach(divider => {
           sum += divider
       });
       
     
       if (sum != number) {
           return false;
       }
   
      return true;
    }
})();

// Эта функция перебирает и выдает совершенные числа.dividers - это делители, вычесляли все делители числа, перебирая методом forEach все делители и сумировали их. Если сумма делителей равнялась значению числа, то это число -совершенное. Его записывали в массив dividers. Потом циклом do while вычисляли совершенные числа в количестве, заданном переменной maxNumbers, и результат - каждое найденное совершенное число, записывали в массив perfectNumbers. Если длина совершенного числа была меньше чем заданное количество maxNumbers, тогда цикл останавливался.