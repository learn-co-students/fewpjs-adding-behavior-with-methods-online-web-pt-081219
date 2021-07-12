class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} says meow!`;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    if (this.sex === "male") {
      console.log(`${this.sex}`);
      return `It's me! ${this.name}, the parrot!`;
    } else {
      console.log(this.sex);
      return `${this.name} says squawk!`;
    }
  }
}
