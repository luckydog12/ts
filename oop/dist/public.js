"use strict";
(() => {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        // 定义方法 获取（修改）age属性 
        // getAge() {
        //   return this.age
        // }
        // setAge(value: number) {
        //   this.age = value
        // }
        get _age() {
            return this.age;
        }
        set _age(value) {
            this.age = value;
        }
    }
    const per = new Person('luckydog', 21);
    per.name = 'new luckydog'; // 可以修改
    // per.age = 22 报错  
    // per.setAge(222)
    // console.log(per.getAge())
    per._age = 22222;
    console.log(per);
    class A {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const a = new A('luckydog', 21);
})();
