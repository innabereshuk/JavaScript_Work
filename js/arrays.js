//  методы перебора массивов

(function(){
    'use strict';

     let strings = [
     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quia vero sint libero voluptatem quaerat, numquam eius ',
     'excepturi at atque laboriosam repellendus quasi repudiandae perferendis',
     'excepturi at atque laboriosam repellendus quasi repudiandae perferendis',
     'Lorem ipsum dolor sit amet consectetur ',
     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quia vero sint libero voluptatem quaerat, numquam eius excepturi at atque laboriosam repellendus quasi repudiandae perferendis blanditiis itaque facilis quae quam tempora dolore maxime ipsum ullam iste praesentium? Veritatis, perferendis quam'
     ],
     numbers = [123, 235, 568, 2, 56, 12356, 12, 589],
     objects = [
         {
             name:'Text',
             value:'Lorem ipsum dolor', 
             created_at: '2020-01-26 10:28:00', 
             updated_at: '2020-01-26 10:28:00',
             deleted_at: '2020-01-26 10:28:00'
        },
        {
            name:'Description',
            value:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quia vero sint libero voluptatem quaerat, numquam eius excepturi', 
            created_at:'2020-01-25 09:15:48', 
            updated_at:'2020-01-26 10:00:28',
            deleted_at: null
       },
       {
        name:'Coordinates',
        value: {
           lat: 47.123434,
           lng:37.003434
        },
        created_at:'2020-01-26 12:56:40', 
        updated_at:'2020-01-26 10:29:17',
        deleted_at: null
   }
];

const MONTHS = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
];


// 1. Используются для того чтобы вывести чт-то на экран

// strings.forEach((string, index, array) => {
//     document.write(`<p>${++index} - ${string}</p>`);
// });


// for (let index in strings) {
//     document.write(`<p>${+index + 1} - ${strings[index]}</p>`);
// }

// 2. Используется если нужно как-то видоизменить массив

// strings = strings.map((string, index) => {
//     if (strings.length < 50) {
//         string = string.substr(0,50) + '...';
//     }
//     document.write(`<p class="uppercase">${++index} - ${string}</p>`);
//     return string;
// });


let table = document.getElementById('table'),
    tbody = table.querySelector('tbody');

let filteredObject = objects.filter((object) => {
    return !object.deleted_at;
});

//  console.log(filteredObject);

filteredObject.map((object, index) => {
    if(object.value  && typeof(object.value) == 'object') {
        let str = '';
        for (let i in object.value) {
            str += `<b>${i}: </b>${object.value[i]}<br>`;
            console.log(i);
        }
        object.value = str;
    }

    
    let tr = `
     <tr>
     <th scope="row">${++index}</th>
     <td>${object.name}</td>
     <td>${object.value}</td>
     <td class="text-success">${transformDate(object.created_at)}</td>
     <td class="text-info">${transformDate(object.updated_at)}</td>
   </tr>`;
   tbody.innerHTML = tbody.innerHTML + tr;
  
});

function transformDate(timestemp) {

    let date = new Date(timestemp),
        dateYear = date.getFullYear(),
        dateMonth = MONTHS[date.getMonth()],
        dateDay = date.getDate(),
        dateHour= date.getHours().toString().length == 1 ?
                                '0' + date.getHours() :
                                date.getHours(),
        dateMinute = date.getMinutes().toString().length ==1 ?
                                '0' + date.getMinutes() :
                                date.getMinutes();

    return `${dateDay} ${dateMonth} ${dateYear } ${dateHour} ${dateMinute}`;
   
};



})();