## Table of Contents
### Variables And Important Functions
- Array
- Object
### Functional Programming
- Closure
- Currying
### Function Declaration
- Function Declaration vs Function Expression
  - Function Expression Example: Callback Function
  - Function Expression Example: Arrow Function
  - IIFE (Immediately Invoked Function Expression)
- Scope: var vs let vs const
- Closure
- Curring
### Asynchronous Programming
### DOM
### ES6+ Features
## Variables And Important Functions
### OOP
# 2.1 Functional Programming

## 2.1.1 Closure

- The inner function retains a reference to the variables and scope of its outer function.
- When the o**uter function finishes executing and returns, the closure is still intact with its captured variables and scope chain.**
- The closure allows the inner function to access and manipulate the variables of its outer function, even if the outer function's execution has been completed.
- This behavior is possible because the closure maintains a reference to its outer function's variables and scope chain, preventing them from being garbage collected.

## 2.1.2 **Currying**

Currying is a transformation technique of functions that translates a function
from callable as f(a, b, c) into callable as f(a)(b)(c). Curried function
allows **partial application of function**, i.e., it converts a multi-argument function
into a sequence of single-argument function calls.
```jsx
function currySum(a) { return function(b) {
return function(c) { return a + b + c;
} }
}
console.log(currySum(1)(2)(3)); // 6
```
## OOP
JavaScript isn’t a class-based object-oriented language, it can certainly act like one.
## **Prototype Inheritance**
The process where an object can inherit properties from another object. JavaScript applies prototype inheritance, using object.__proto__ syntax object can directly visit the properties but object can override it if they have same key. An **inherited function** acts just as any other property and the value of this points to the inheriting object (which applies overriding as well)
```jsx
const o = {
  a: 1,
  b: 2,
  __proto__: {
    b: 3,
    c: 4,
  },
};
//o.a = 1, o.b = 2, o.c = 4
```
Two main ways of doing it is using Object.setPropertyOf() and extends. For the example below, boths obj is following prototype chain like this : obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```jsx
function Base() {}
function Derived() {}
Object.setPrototypeOf(Derived.prototype, Base.prototype);

const obj = new Derived();
```
```jsx
class Base {}
class Derived extends Base {}

const obj = new Derived();
```
For more example check: https://github.com/ykim879/javascript/blob/f987c980b9d92022240c87a49ef4243601d64265/class_polymorphism.js
