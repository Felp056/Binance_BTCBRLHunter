/**
 * 1-Monitorar
 * 2 - Estrategia
 * 3 - Trade notfy
 * wss://stream.binance.com:9443/ws
 */

const WebSocket = require('ws');
const ws = new WebSocket(`${process.env.STREAM_URL}/${process.env.SYMBOL}@ticker`);

ws.onmessage = (event) => {
    console.clear();
    const obj = JSON.parse(event.data);
    console.log(`Symbol: ${obj.s}`);
    console.log(`Ask Price: ${obj.a}`);
}