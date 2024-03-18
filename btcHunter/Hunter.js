/**
 * 1-Monitorar
 * 2 - Estrategia
 * 3 - Trade notfy
 * //wss://stream.binance.com:9443/ws
 */

const WebSocket = require('ws');
const ws = new WebSocket(`${process.env.STREAM_URL}/${process.env.SYMBOL}@ticker`);
const base = 340326.041;
var Menvalor = 340326.041;
var MaxValor = 361000.00;
ws.onmessage = (event) => {
    const obj = JSON.parse(event.data);
    if(base == Menvalor){
    if(obj.a <= base ){
    console.clear();
    console.log(`Symbol: ${obj.s} `);
    console.log(`Ask Price: ${obj.a}`);
    console.log(`Preço abaixo da media de compra`);
    console.log( (((obj.a /base) *100) -100) + `% a baixo`);
    Menvalor = obj.a;
    console.log(`Menor valor diario :${Menvalor}`);
    console.log(`Maior valor diario :${MaxValor}`);
    console.log(`Base : ${base}`);
    }else if(obj.a  >= MaxValor){
        console.clear();
        console.log(`Symbol: ${obj.s}`);
        console.log(`Ask Price: ${obj.a}`);
        console.log(`Preço acima do melhor valor de compra`);
        console.log( (((obj.a /Menvalor) *100) -100) + `% acima do menor valor`);
        MaxValor = obj.a;
        console.log(`Menor valor diario :${Menvalor}`);
        console.log(`Maior valor diario :${MaxValor}`);
        console.log(`Base : ${base}`);
    }else if(obj.a  >=base && obj.a <MaxValor){
        console.clear();
        console.log(`Symbol: ${obj.s}`);
        console.log(`Ask Price: ${obj.a}`);
        console.log(`Levemente acima do valor de compra`);
        console.log( (((obj.a /Menvalor) *100) -100) + `% acima da base`);
        console.log(`Menor valor diario :${Menvalor}`);
        console.log(`Maior valor diario :${MaxValor}`);
        console.log(`Base : ${base}`);
    }
}else{
    if(obj.a <= Menvalor ){
        console.clear();
        console.log(`Symbol: ${obj.s}`);
        console.log(`Ask Price: ${obj.a}`);
        console.log(`Preço abaixo da media de compra`);
        console.log( (((obj.a /Menvalor) *100) -100) + `% a baixo`);
        Menvalor = obj.a;
        console.log(`Menor valor diario :${Menvalor}s`);
        console.log(`Maior valor diario :${MaxValor}`);
        console.log(`Base : ${base}`);
        }else if(obj.a  >= MaxValor){
            console.clear();
            console.log(`Symbol: ${obj.s}`);
            console.log(`Ask Price: ${obj.a}`);
            console.log(`Preço acima do melhor valor de compra`);
            console.log( (((obj.a /Menvalor) *100) -100) + `% acima do menor valor`);
            MaxValor = obj.a;
            console.log(`Menor valor diario :${Menvalor}`);
            console.log(`Maior valor diario :${MaxValor}`);
            console.log(`Base : ${base}`);
        }else if(obj.a  >=Menvalor && obj.a <MaxValor){
            console.clear();
            console.log(`Symbol: ${obj.s}`);
            console.log(`Ask Price: ${obj.a}`);
            console.log(`Levemente acima do valor de compra`);
            console.log( (((obj.a /Menvalor) *100) -100) + `% acima da base`);
            console.log(`Menor valor diario :${Menvalor}`);
            console.log(`Maior valor diario :${MaxValor}`);
            console.log(`Base : ${base}`);
        }
}
}