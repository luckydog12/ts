function fn<T>(a: T): T {
  return a
}

fn(10)
fn<string>('hello')

function fn1<T, K>(a: T, b: K): T {
  return a 
}
fn1<number, string>(123, 'hello')

interface Inter {
  length: number
}
function fn2<T extends Inter>(a: T): number {
  return a.length
}
fn2('123')

class Myclass<T> {
  name: T
  constructor(name: T) {
    this.name = name
  }
}
const mc = new Myclass<string>('luckydog')