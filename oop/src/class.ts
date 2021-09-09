class Person {
  // 直接定义的属性是实例属性 需要通过对象的实例去访问
  // readonly name: string = 'luckydog'

  // 静态属性
  // static age: number = 21

  name: string = 'luckydog'
  age: number = 21

  // 定义方法
  sayHello():any {
    console.log('hello')
  }
}

const per = new Person()
per.sayHello()
console.log(per)