// const programmer =
// {
//     skill:function()
//     {
//         console.log('I am sleeping');
//     },

//     meet: () => console.log('Im meeting'),
//     // method shorthand
//     sleep(){
//         console.log("sleeping")
//     }
// };

// programmer.skill();

// const jibun ={
//     run : function run(){console.log('Running')},
//     wake : function () {console.log('wake up')},
//     look : () =>{(console.log('looking'))},
//     lick(){  (console.log('licking'))  } 
// }
// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// const log = console.log;
// log('Method and this keyword');

// // ###############################
// // ########### 1. Intro Method
// // ##############################

// // Object === Collection of properties and/or method
// // each record => called property
// // each property => <key>:<value>

// // some record => <key>:<FN>
// // called method == ความสามารถของ Object
// // const programmer = {
// //     name: 'Pavit',
// //     age: 30,
// //     dev: devWebsite,
// //     meet: meeting,
// //     sleep: sleep,
// // };

// // function devWebsite() {
// //     console.log("I'm working");
// // }
// // function meeting() {
// //     console.log("I'm meeting");
// // }

// // function sleep() {
// //     console.log("I'm sleeping");
// // }
// // property
// // Syntax <obj>.<key>
// // log(programmer.name);
// // log(programmer.age);

// // method == ความสามารถของ Object
// // Syntax : <obj>.<method>()
// // programmer.dev();
// // programmer.meet();
// // programmer.dev();
// // programmer.meet();
// // programmer.sleep();
// // programmer.dev();
// // เพิ่ม method ให้ programmer 1 อย่าง และลองเรียกใช้งาน

// // #################################
// // ########### 2. Alternative Syntax
// // ##################################

// let name = 'John';
// let age = 30;
// const programmer = {
//     // property shorthand
//     name,
//     age,
//     dev: function () {
//         console.log("I'm working");
//     },
//     meet: () => console.log("I'm meeting"),
//     // method shorthand
//     sleep() {
//         console.log("I'm sleeping");
//     },
//     // sleep : () => console.log("I'm sleeping")
// };

// programmer.dev();
// programmer.meet();
// programmer.sleep();

// // Mini-lab
// // สร้าง Object ของตัวเอง
// // ระบุคุณสมบัติของตัวเองสัก 2-3 ข้อ
// // ระบุความสามารถของตัวเองสัก 4 อย่าง (cover ทุก syntax)
// // key : namedFunction
// // key : anonymous FN
// // key : arrowFN
// // key : shortHand

// function playSport(type) {
//     console.log(`I'm playing ${type}`);
// }
// // log(typeof playFootball);

// const me = {
//     name: 'Pavit',
//     hair: 'Black',
//     eye: 'Brown',
//     gender: 'Male',
//     myEx: ['John', 'Jane'],
//     sport: playSport,
//     sleepAllDay: function () {
//         console.log("I'm dead");
//     },
//     eatAllNight: (menu) => console.log(`I'm eating ${menu} all the time`),
//     focus(task) {
//         console.log(`I'm working on ${task} in focus mode`);
//     },
//     // focus : () => {...logic...}
//     // focus : function focus () {...logic...}
// };

// me.sport('basketball');
// me.sport();
// me.sleepAllDay();
// me.eatAllNight('TAX');
// me.focus('javascript lab');

// // #########################
// // ########### 3. Intro OOP
// // #########################

// // OOP : Object Oriented Program

// const car = {
//     brand: 'Tesla',
//     model: 'X',
//     speed: 80,
//     drive: () => console.log('Driving'),
//     'auto pilot': () => console.log('Self Driving'),
// };

// log(car.brand, car.model);

// // Caller.Method
// car.drive();
// car['auto pilot']();

// const calculator = {
//     sum: (x, y) => x + y,
//     minus: (x, y) => x - y,
// };

// let r1 = calculator.sum(5, 7);
// let r2 = calculator.minus(7, 3);
// log(r1, r2);

// log(car.speed);
// car.speed = calculator.sum(car.speed, 20);
// log(car.speed);

// // #########################
// // ########### 4.This keyword
// // #########################