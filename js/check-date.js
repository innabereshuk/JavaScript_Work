(function(){
    'use strict';
    
    // '16/01/2020'
    // '16.01.2020'
    // '16-01-2020'
    
    // '2020-01-16 20:18:30'
    
    let userDate = '29.02.2020'.split('.');
    let pureDate = new Date(`${userDate[2]}-${userDate[1]}-${userDate[0]}`);
    
    let month = pureDate.getMonth() + 1;
    month = month.toString().length == 1 ? ('0' + month) : month;
    
    let day = pureDate.getDate();
    day = day.toString().length == 1 ? ('0' + day) : day;
    
    console.log(`${day}-${month}-${pureDate.getFullYear()}`);
    
    pureDate.setDate(pureDate.getDate() + 1); 
    
    month = pureDate.getMonth() + 1;
    month = month.toString().length == 1 ? ('0' + month) : month;
    
    day = pureDate.getDate();
    day = day.toString().length == 1 ? ('0' + day) : day;
    
    console.log(`${day}-${month}-${pureDate.getFullYear()}`);
})();