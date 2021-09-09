(() => {

  interface myInterface {
    name: string,
    age: number,
    sayHello(): void
  }

  class MyClass implements myInterface {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    sayHello(): void {
      console.log('hello world')
    }
  }

})()