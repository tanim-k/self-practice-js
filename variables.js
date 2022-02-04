//* case-1 *//
// string array //
const myClothings = ['thirs', 'pant', 'belt', 'watch', 'glass']
console.log(typeof myClothings);
console.log(myClothings);

// boolean //
const isBigMyMind = true;
console.log(typeof isBigMyMind);
console.log(isBigMyMind);

// numeric //
const lungiPrice = 444;
console.log(typeof lungiPrice);
console.log(lungiPrice);

// numeric array //
const oddNumbers = [21, 43, 43, 54, 65];
console.log(typeof oddNumbers);
console.log(oddNumbers);

// string //
const familyHead = 'ma';
console.log(typeof familyHead);
console.log(familyHead);

//* case-2 *//
// changing variable- let //
/* 
let weatherUpdate = '40℃';
let weatherUpdate = '-10℃'; 
 */
function weatherUpdateChange(celcius){
    if(weatherUpdate<0){
       console.log('its cold')
    }
    else{
        console.log(' its hot');
    }
    return weatherUpdate;
}
let weatherUpdate = -34;
const todaysWeatherUpdate = weatherUpdateChange(weatherUpdate);
console.log( 'weather temperature:', todaysWeatherUpdate);
//* case-3 *//
// addition substruction multiplication division //
// addition //
const num1 = 33;
const num2 = 44;  
const num3 = 54;
const total = num1+num2+num3;
console.log('total:', total);
// substruction //
const difference = num2-num1;
console.log('difference:',difference);
/* MULTIPLICATION */
const mul = num1*num2*num3;
console.log('multiplication:', mul);
//* case-4 *//
//* case-5 *//
//* case-6 *//
//* case-7 *//
//* case-8 *//
//* case-9 *//
//* case-10 *//
//* case-11 *//
//* case-12 *//
