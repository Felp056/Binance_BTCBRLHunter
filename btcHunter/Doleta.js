const WebSocket = require('ws');
const ws = new WebSocket(`${process.env.STREAM_URL}/${process.env.SYMBOL}@ticker`);
var MenValor = 0 ;
var base = 340326.041;
ws.onmessage = (event) =>
{
    const obj = JSON.parse(event.data);
    console.clear();
    console.log(`Symbol: ${obj.s} `);
    console.log(`Ask Price: ${obj.a}`);
    if(MenValor != 0 && obj.a < MenValor && obj.a < base){
    MenValor = obj.a;
    }else if(MenValor == 0) {
        MenValor = base
    }
    console.log(`Menor valor em BRL : ${MenValor}`);
    var calc = ((obj.a/base )*100) -100;
    var Total = obj.a * 0.00029383;
    console.log(`Taxa : `+calc);
    console.log(`Base : ${base}`);
    console.log(`Verba disponivel : ${Total}`)

}