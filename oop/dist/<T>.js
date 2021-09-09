"use strict";
function fn(a) {
    return a;
}
fn(10);
fn('hello');
function fn1(a, b) {
    return a;
}
fn1(123, 'hello');
function fn2(a) {
    return a.length;
}
fn2('123');
class Myclass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new Myclass('luckydog');
