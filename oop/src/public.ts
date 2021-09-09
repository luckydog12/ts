(() => {

  class Person {

    /*
      public 修饰的属性可以在任意位置访问（修改）默认值
      private 私有属性 只能在类内部进行访问（修改）
              - 通过在类中添加方法 使得私有属性可以被外部访问 
      protected 受保护的属性 只能在当前类 和 当前类的子类中 访问
    */

    public name: string
    private age: number

    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }

    // 定义方法 获取（修改）age属性 
    // getAge() {
    //   return this.age
    // }
    // setAge(value: number) {
    //   this.age = value
    // }

    get _age() {
      return this.age
    }
    set _age(value: number) {
      this.age = value
    }
  }

  const per = new Person('luckydog', 21)
  per.name = 'new luckydog' // 可以修改
  // per.age = 22 报错  
  // per.setAge(222)
  // console.log(per.getAge())

  per._age = 22222
  console.log(per)






  class A {
    constructor( public name: string, public age: number) {}
  }

  const a = new A('luckydog', 21)



})()