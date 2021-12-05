const username : string = 'nicobytes';
const username2  = 'nicobytes';
const username3: string | number  = 'nicobytes';

const sum = (a: number,b: number) => {
  return a+b;
}

sum(1,3);

class Person {
  age: number;
  lastName: string;

  constructor(age: number,lastName: string){
    this.age = age;
    this.lastName = lastName;
  }



}

class Person2 {
  constructor(public age: number,public lastName: string){ }
}

const nico = new Person(15,'Molina');
nico.age;
