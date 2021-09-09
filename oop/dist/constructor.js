"use strict";
class Cat {
    constructor(name, age) {
        // this表示当前实例
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log('miaomiao');
    }
}
const cat = new Cat('钢镚', 1);
const cat2 = new Cat('钢镚1', 2);
console.log(cat, cat2);
