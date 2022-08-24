// // declaramos una funcion con el mismo nombre "formEuroToDollar"
// const fromEuroToDollar = function(valueInEuro){
//     // convertimos el valor a dolares
//     let valueInDollar = valueInEuro * 1.2;
//     // retornamos el valor
//     return valueInDollar;
// }

// // declaramos una funcion con el mismo nombre "fromDollarToYen"
// const fromDollarToYen = function(valueInDollar){
//     // convertimos el valor a yen
//     let valueInEuro = valueInDollar * 1.2;
//     let valueInYen = valueInDollar * 127.9;
//     // retornamos el valor
//     return valueInYen;
// }

// // declaramos una funcion con el mismo nombre "fromYenToPound"
// const fromYenToPound = function(valueInYen){
//     // convertimos el valor a yen
//     let valueInEuro = valueInYen + 129.9;
//     let valueInPound = valueInEuro * 0.8;
//     // retornamos el valor
//     return valueInPound;
// }

// // esta es mi función que suma dos números
// const sum = (a,b) => {
//     return a + b
// }

// // solo un registro en consola para nosotros.
// console.log(sum(7,3))

// // exporta la función para usarla en otros archivos 
// // (similar a la palabra clave `export` cuando se usa webpack)
// module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
//  function fromEuroToDollar(euro: any): number
 function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD;
 }

 function fromDollarToYen(dollar) {
    return (oneEuroIs.JPY / oneEuroIs.USD) * dollar;
 }

 function fromYenToPound(yen) {
    return (oneEuroIs.GBP / oneEuroIs.JPY) * yen;
 }

 console.log(fromEuroToDollar(5));
 console.log(fromDollarToYen(5));
 console.log(fromYenToPound(5));

 module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound};

