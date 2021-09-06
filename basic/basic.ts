// let a: number
// a = 1

// function sum(a: number, b: number): number {
//   return a + b
// }
// let res = sum(1, 2)
// console.log(res)

// let a: 10 = 10
// console.log(a)

// let c: 'male' | 'female'
// c = 'male'

// any表示任意类型 相当于对该变量关闭了ts的类型检测
// let d: any
// d = 10
// d = 'hello'


// let e: unknown
// e = 10
// e = 'hello'

// // d的类型是any 他可以赋值给任意变量
// let f: string
// // f = d
// // 不能将类型“unknown”分配给类型“string”
// if ( typeof e === 'string') {
//   f = e
// }

// // 类型断言
// f = e as string
// f = <string>e

// void用来表示空 以函数为例 就表示没有返回值的函数
// function fn():void {
//   return
// }

// never不能是任何值
// function fn2(): never {
//   throw new Error('error')
// }

// // ?: 表示可选
// let obj1: { name: string, age?: number }
// obj1 = { name: 'luckydog' }

// // 除了name属性 其他属性任意类型 
// let obj2: { name: string, [propName: string]: any }
// obj2 = { name: 'luckydog', age: 21, gender: '男'}

// let bar: (a: number, b: number) => number
// bar = (a, b) => {
//   return a + b
// }

// let arr1: string[]
// arr1 = ['1', 2]

// let arr2: Array<number>
// arr2 = [1, 2]

// 元祖： 固定长度的数组
// let arr3: [number, string]
// arr3 = [1, '2']

// enum: 枚举
// enum Gender{
//   Male = 0,
//   Female = 1
// }
// // { '0': 'Male', '1': 'Female', Male: 0, Female: 1 }
// let obj3: { name: string, gender: Gender}
// obj3 = {
//   name: 'luckydog',
//   gender: Gender.Male
// }

// 类型的别名 
// type myType = 1 | 2 | 3 | 4
// let m: myType
// m = 2










// 防止变量重复声明
export {}