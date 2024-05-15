"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function f(p1) {
    console.log("parameter 1 ".concat(p1));
    // return 'dadas';      not allowed
    return 10;
}
// const v:number = f('sadsadsa');
var v = f('dasdasd'); //type inference(automatic detect number instead of any)
console.log(v);
