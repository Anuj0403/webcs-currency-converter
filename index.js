import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_AtnyyHEDNkK7qeulr9uNbTZ3xFWPZvehaVDlR63z');
 convertCurrency("INR","USD",3);
export async function convertCurrency(fromCurrency,toCurrency,units){
     const res=await freecurrencyapi.latest({
        base_currency:fromCurrency,
        currencies:toCurrency
     });
     const multiplier=res.data[toCurrency];
     console.log(multiplier);
    // return multiplier*units;
}

// freecurrencyapi.latest({
//     base_currency: 'USD',
//     currencies: 'EUR'
// }).then(response => {
//     console.log(response);
// });