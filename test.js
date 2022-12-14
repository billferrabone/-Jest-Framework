// importar la función sum del archivo app.js
// const { default: test } = require('node:test');
// const { sum } = require('./app.js');

// // comienza tu primera prueba
// test('adds 14 + 9 to equal 23', () => {
//     //dentro de la prueba llamamos a nuestra función sum con 2 números
//     let total = sum(14, 9);

//  // esperamos que la suma de esos 2 números sea 23
//  expect(total).toBe(23);

// });

// test("One euro should be 1.206 dollars", function(){
//     // importo la funcion desde app.js
//     const { fromEuroToDollar } = require('./app.js')
    
//     // hago mi comparacion (la prueba)
//     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
// })

// test("One 1.206 dollar should be 127.9 yen", function(){
//     // importo la funcion desde app.js
//     const { fromDollarToYen } = require('./app.js')
    
//     // hago mi comparacion (la prueba)
//     expect(fromDollarToYen(2.4)).toBe(255.8); //1.2 euro son 127.9 dolares, entonces 2.4 dollares deberian ser = (2.4 * 127.9)
// })

// test("0.8 pounds should be 127.9 yen", function(){
//     // importo la funcion desde app.js
//     const { fromYenToPound } = require('./app.js')
    
//     // hago mi comparacion (la prueba)
//     expect(fromYenToPound(0.8)).toBe(255.8); //0.8 pounds son 127.9 yen, entonces 255.8 dollares deberian ser = (0.8 * 127.9)
// })

const {fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('One euro should be 1.206 dollars', () => {
    expect(fromEuroToDollar(5)).toBe(6);
});

test('One dollar should be 106.58', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(106.58);
});

test('One yen should be 0.0062', ()  => {
    expect(fromYenToPound(1)).toBeCloseTo(0.0062);
});
