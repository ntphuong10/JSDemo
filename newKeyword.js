//khởi tạo 1 biến  
// var today = new Date();

//Create a new object, object literal
var mouse = {
    weight: 0.2,
    getWeight: function () {
        return this.weight;
    }
};

var mouse = {
    weight: 0.2,
    getWeight: function () {
        return this.weight
    },
    height: 5,
};
console.log(mouse.getWeight());
//constructor function
function Mouse(color, weight) {
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;
}
var mouse1 = new Mouse('white', 0.2);
var mouse2 = new Mouse('black', 0.5);
console.log(mouse1);
console.log(mouse2);
//////
var tom = {
    name: 'Tom',
    stomach: [],
    eat: function (mouse) {
        this.stomach.push(mouse);
        return this;
    }
};
var m1 = { name: 'm1' };
var m2 = { name: 'm2' };
var m3 = { name: 'm3' };

tom.eat(m1).eat(m2).eat(m3);//method chaining
console.log('Tom:');
console.log(tom);

console.log("-------------------------------")

//bằng new

var Tom = {
    name: 'Tom',
    stomach: [],
    eat: function (Mouse) {
        this.stomach.push(Mouse);
        return this;
    }
};

function Mouse(name) {
    this.name = name;
}

var m1 = new Mouse('m1');
var m2 = new Mouse('m2');
var m3 = new Mouse('m3');
Tom.eat(m1).eat(m2).eat(m3);
console.log('Tom:');
console.log(Tom);

var data_demo = {
    age: 23,
    name: "Data1",
    role: "student",
    number1: 5,
    getAgePlus: function () {
        return (this.number1 +this.age)
    }
}
console.log(data_demo.getAgePlus())