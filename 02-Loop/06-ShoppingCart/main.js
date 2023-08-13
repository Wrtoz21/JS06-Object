// Sub Program-1 : input
// let name = 'Hermes';
// let quantity = '20';
// let price = '500_000';
// let discount = '0.1';
let name = +prompt('Product name');
let quantity = +prompt('Quantity');
let price = +prompt('Price');
let discount = prompt('Discount') *1;
// Sub program 2 : createObject
// const product = {
//     name:name, // name = 'Hermes'
//     quantity:quantity, // quantity = 20
//     price:price, //price = 500_000
//     discount:discount, // discount 0.1
// };
// (((((((((((((((((((())))))))))))))))))))

const product = {
    name, // name = 'Hermes'
    quantity, // quantity = 20
    price, //price = 500_000
    discount, // discount 0.1
};
if (discount != 0) {
    products['discount'] = discount;
}
console.log(product);

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ***เมื่อชื่อ key ตรงกับชื่อตัวแปรที่เก็ฐ value 
// สามารถยุบ syntax(Property shorthand)
// 
// (((((((((((((((((((())))))))))))))))))))

// Sub program 3 : calculate price
// function calculate(price,quantity,discount){
//     let result = price * quantity * (1-discount);
//     return totalPrice;
// }
// // (((((((((((((((((((())))))))))))))))))))
//
// let result = calculate(products.price,product.quantity,product.discount);
// console.log(result);

function calculate(productObj){
    let price = productObj.price
    let quantity = productObj.quantity
    let discount = productObj.discount ? productObj.discount:0;
    //                          ^ ถ้าไม่มีdiscount 
    // หมายถึง = 0 = false
    return price *quantity*(1 -discount);
}
let result = calcPrice(product);