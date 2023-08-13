 const fruit ={};
const TERMINATE = 'stop';
let key;
let value;
do{
    key=prompt('Enter fruit');
    value=prompt('enter quantity');

    if(+value == 1){
        // ^ check ว่า value ที่รับเข้าเป็น string 
// แล้วใช้ + เพื่อให้กลายเป็น number แล้วหรือยัง
// โดยใช้ boolean  หาค่าว่า value เป็น true หรือไม่
        fruits[key] = value;
    }else if (+value > 1){
        fruits [`${key}s`] = value;
    }
    console.log(key,value);
    console.log(key != TERMINATE && value != TERMINATE);
} while (key != TERMINATE && value != TERMINATE);

console.log(fruits);