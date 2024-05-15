
function f(p1 : string):number {
    console.log(`parameter 1 ${p1}`);
    
    // return 'dadas';      not allowed
    return 10;
}

// const v:number = f('sadsadsa');
const v = f('dasdasd');     //type inference(automatic detect number instead of any)
console.log(v);

//f(1);         not allowed

export {}