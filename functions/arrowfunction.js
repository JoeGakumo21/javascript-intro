var add=(number1,number2)=>number1+number2;
console.log(add(4,6));

var purchase=(liters,cost)=>liters*cost;
console.log(purchase(80,0.9));

var divide=(x,y)=>{
    if(y!=0){
        return x/y;
    }
}
console.log(divide(0,2));


var elements=['Hydrogen','helium','lithium'];
console.log(elements.map(elements=>elements.length));

console.log(a=>a+100);

(a, b)=>a+b+100;

let a=4;
let b=2;
()=>a+b+100;


(a,b)=>{
    let chuck=42;
    return a+b+chuck;
}

let bob=(a)=>a+100;