// Позволяет применять разные стили к элементам на странице, в том числе и рандомно

(function(){
    'use strict';

    let styles = [
        {name : 'background-color', value : 'yellow'},
        {name : 'color', value : 'orang'},
        {name : 'font-size', value : '24px'},
        {name : 'font-weignt', value : '700'},
    ];

    let strings = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Reprehenderit adipisci corrupti unde rerum fugiat consequuntur recusandae architecto soluta voluptatum eveniet excepturi, consectetur qui ab laboriosam tempora exercitationem eligendi aut culpa.',
        'Reprehenderit adipisci corrupti unde rerum fugiat consequuntur recusandae architecto soluta voluptatum eveniet excepturi, consectetur qui ab laboriosam tempora exercitationem eligendi aut culpa.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit adipisci corrupti unde rerum fugiat consequuntur recusandae architecto soluta voluptatum eveniet excepturi, consectetur qui ab laboriosam tempora exercitationem eligendi aut culpa. Unde id excepturi sint iusto velit qui deleniti quibusdam, suscipit incidunt natus esse ab quaerat veritatis, debitis quasi laborum impedit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    ];

    // amount - сумма. Эта функция позволяет выводить нужное количество квадратов рандомного цвета
    function showSqueres(amount) {

        for (let i = 0; i < amount; i++) {
            let r = getRandNumberTo(256),
                g = getRandNumberTo(256),
                b = getRandNumberTo(256);
        document.write(`
            <div style="
               width: 100px;
               height:100px;
               display: inline-block;
               background-color: rgb(${r}, ${g}, ${b});">

            </div>`);
     }
   }
   
    showSqueres(8);


    function getRandNumberTo(max) {
        return Math.floor(Math.random() * max)
    }

    function showColoredStrings(elems) {
        elems.forEach(elem => {
            let r = getRandNumberTo(256),
                g = getRandNumberTo(256),
                b = getRandNumberTo(256);
            document.write(`<p style="color: rgb(${r}, ${g}, ${b});">${elem}</p>`);
        })
    }
    showColoredStrings(strings);

    function showStrings(elems) {
          elems.forEach(elem => {
              let index = getRandNumberTo(styles.length);
              document.write(`<p styles="${styles[index].name}:${styles[index].value}">${elem}</p>`);
          })
    }
    showStrings(strings);

    function showStyledText(text, properties) {
        // Первый способ
        // let str = '';
        // for (let i in properties) {
        //     str += `${properties[i].name}:${properties[i].value};`
        //     // properties[i].name или .value
        //     console.log(str);
        // }
        // document.write(`<p>${text}</p>`);

        // Второй способ
        // for (let i in properties) {
        //     properties[i] = `${properties[i].name}:${properties[i].value};`
        // }

        // console.log(properties.join(''));
        // document.write(`<p>${text}</p>`);

        // Третий способ
        let str = '';
         properties.forEach(property => {
            str += `${property.name}:${property.value};`
        });
        console.log(str);

        document.write(`<p style="${str};">${text}</p>`);
    }

    showStyledText('Hello, guys!', styles);
    showStyledText('Bye, guys!', styles);


})();