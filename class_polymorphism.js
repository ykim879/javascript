/**
Task: Implement a class hierarchy in JavaScript with inheritance, following the given specifications:
*/

/**
Create a base class called Shape with the following properties and methods:
name: a string representing the name of the shape.
area(): a method that calculates and returns the area of the shape (to be implemented by subclasses).
 */
class Shape {
    constructor(name) {
        this.name = name
    }
    area() {

    }
}
/**
Create a subclass called Rectangle that extends the Shape class. It should have the following additional properties and methods:
width: a number representing the width of the rectangle.
height: a number representing the height of the rectangle.
Implement the area() method to calculate and return the area of the rectangle.
 */
class Rectangle extends Shape {
    constructor(width, height) {
        super("rectangle")
        this.width = width
        this.height = height
    }
    area() {
        return this.width * this.height
    }
}
/**
 Create another subclass called Circle that extends the Shape class. It should have the following additional properties and     methods:
    radius: a number representing the radius of the circle.
Implement the area() method to calculate and return the area of the circle.
 */
 class Circle extends Shape {
    constructor(radius) {
        super("rectangle")
        this.radius = radius
    }
    area() {
        return this.radius ** 2
    }
}
