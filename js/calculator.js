(function(){
    'use strict';
     
    let data = {
        leftOperand: {
             pattern: /^-?\d+(\.\d{1,2})?$/,
             message: 'Введите первое число',
             value: null,
            },
        rightOperand: {
             pattern: /^-?\d+(\.\d{1,2})?$/,
             message: 'Введите второе число',
             value: null,
        },
        operator: {
             pattern: /^(\+|-|\*|\/|>|<|>=|<=|&|\||%|\^|\*\*)$/,
             message: 'Введите знак математической операции',
             value: null
        }
    };

    let rezultMaker = {
        '+' : function(x, y) {return x + y},
        '-' : function(x, y) {return x - y},
        '*' : function(x, y) {return x * y},
        '/' : function(x, y) {return x / y},
        '>' : function(x, y) {return x > y},
        '<' : function(x, y) {return x < y},
        '>=' : function(x, y) {return x >= y},
        '<=' : function(x, y) {return x <= y},
        '&' : function(x, y) {return x & y},
        '|' : function(x, y) {return x | y},
        '%' : function(x, y) {return x % y},
        '^' : function(x, y) {return x ^ y},
        '**' : function(x, y) {return x ** y}
    };

let rezult = null;
do {

    for (let i in data) {
        let option = data[i];
        let accepted = false;

        do {
            let answer = prompt(option.message);

             if (option.pattern.test(answer)) {
                 accepted = true;
                 option.value = answer;
            } 

        } while (!accepted);

}

// let rezult = eval(data.leftOperand.value + data.operator.value + data.rightOperand.value);
rezult = rezultMaker[data.operator.value](+data.leftOperand.value, +data.rightOperand.value);


} while (confirm(`Результат: ${rezult}. Хотите продолжить?`))

})();