# javascript
## Table of Contents
### Variables
- Array
- Object
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
