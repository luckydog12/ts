(()=>{
  // 抽象类 不能用来创建实例 专门被用来继承的类
  // 抽象类中 可以添加抽象方法
  abstract class Animal {
    name: string
  
    constructor(name: string) {
      // this表示当前实例
      this.name = name
    }
    
    abstract say(): void

    bark() {
      console.log('animal',this)
    }
  }
  
  class Dog extends Animal {
  
    age: number
    constructor(name:string, age: number) {
      super(name)  // 调用父类的构造函数
      this.age = age
    }
    say() {
      // super代表当前类的父类
      super.bark()
    }
    run() {
      console.log(`${this.name} is running`)
    }
  }
  
  class Cat extends Animal {
    say() {
      console.log('111')
    }
  }
  
  const dog = new Dog('钢镚', 1)
  // dog.say()
  // dog.run()
  // dog.bark()
  console.log(dog)
  
})()

