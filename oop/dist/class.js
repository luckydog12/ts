"use strict";
class Person {
    constructor() {
        // 直接定义的属性是实例属性 需要通过对象的实例去访问
        // readonly name: string = 'luckydog'
        // 静态属性
        // static age: number = 21
        this.name = 'luckydog';
        this.age = 21;
    }
    // 定义方法
    sayHello() {
        console.log('hello');
    }
}
const per = new Person();
per.sayHello();
console.log(per);
