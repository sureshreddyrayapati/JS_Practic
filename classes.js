const person={firstName:'Suresh Reddy',lastName:'Rayapati',age:25,gender:'Male'};
document.getElementById('demo').textContent="My name is "+person.firstName+" "+person.lastName+" and my age is "+person.age;

let car={
    brand:'Toyota',
    model:'Camry',
    year:2015,
    color:'Silver',
    mileage:50000,
    owner:'Suresh Reddy',
    details:function(){
        return ("This car is a "+this.year+" "+this.color+" "+this.brand+" "+" and the own is "+this.owner).toUpperCase();
    }
}
document.getElementById('demo1').textContent=car.details();


//object constructor function
function Family(name,age,gender){
    this.firstName=name;
    this.age=age;
    this.gender=gender;
}

let Myself=new Family('Suresh',23,'Male');
let MyLover=new Family('____________',23,'Female');
document.getElementById('demo2').textContent="My name is "+Myself.firstName+" and my Lover name is "+MyLover.firstName;

class Numb{
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;

    }
        Addition(){
        return this.num1+this.num2;
    }
}
const nw=new Numb(5,6);
document.getElementById('demo3').innerHTML= "Sum of two numbers is "+nw.Addition();

//set 

const nu=new Set(['a','d','f','a'])
nu.add("b");

let text="";
for(let x of nu){
    text+=x;
    }
document.getElementById('demo4').innerHTML=text;



