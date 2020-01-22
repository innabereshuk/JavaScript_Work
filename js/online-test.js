(function(){
    'use strict';
     
    let questions = [
        {
            text : "Какой сейчас год?",
            variants : ['a) 2000', 'b) 2015', 'c) 2020'],
            answer : 'c',
            point : 2
        },
        {
            text : "В каком городе мы сейчас?",
            variants : ['a) Одесса', 'b) Мариполь', 'c) Львов'],
            answer : 'b',
            point : 5
        },
        {
            text : "В какой академии мы учимся?",
            variants : ['a) Beetroot', 'b) Шаг', 'c) Ярослава Мудрого'],
            answer : 'a',
            point : 7
        }
    ];
     
    let total = 0;

    for (let index in questions) {
         let question = questions[index];
         let answer = prompt(question.text + '\n' + question.variants.join('\n'));
         let answers = answer ? answer.split(',') : [];
        
        if (answers.length <= question.answer.length) {

            answers = answers.filter(ans => {
                if (question.answer.indexOf(ans) > -1) {
                   return ans;
                } else {
                    return false;
                }
            })
            if (answers.length == question.answer.length) {
                total += question.point ? question.point : 1;
            } else {
                let k = answers.length/question.answer.length;
                total += question.point ? question.point * k : 0;
            }
        } 

        // if (answer && answer.toLowerCase() == question.answer) {
        //     total = total + question.point;

        //     // total += question.point;  другой, сокращенный вариант
        //     total += question.point ? question.point : 1;  /*проверяем, если point tcnm в question, тогда считаем, если ет, то начисляем 1 балл*/ 
        // }

    }

    document.write(`Вы набрали ${total} баллов!`);

})();