"use strict"

// Release 0
class AppleTree {
  constructor(property = {}){
    this._age = property["age"];
    this._max_age = property["max_age"];
    this._diameter = property["diameter"]; // Unit meter
  }
  set age(value){ this._age = value; }
  get age(){ return this._age; }
  set max_age(value){ this._max_age = value; }
  get max_age(){ return this._max_age; }
  set diameter(value){ this._diameter = value; }
  get diameter(){ return this._diameter; }
}
class Apple extends AppleTree {
  constructor(property = {}){
    super(property);
    this._max_age = 10;
  }
  set apple_age(value){ this._max_age = value; }
  get apple_age(){ return this._max_age; }
}

let apple_tree = new AppleTree({
      age:0,
      max_age:10,
      diameter:10
    });

let apple = new Apple({
      age:0,
      max_age:10,
      diameter:0.5
    });

apple_tree.age = 3;
console.log(apple_tree.age);
console.log(apple._diameter);

// Release 1
class FruitTree {
  constructor(property = {}){
    this._age = property["age"]
    this._height = property["height"]
    this._max_fruit = property["max_fruit"]
  }
  set age(value){ this._age = value; }
  get age(){ return this._age; }
  set setHeight(value){ this._height = value; }
  get getHeight(){ return this._height; }
  set max_fruit(value){ this._max_fruit = value; }
  get max_fruit(){ return this._max_fruit; }
}

class PineappleTree extends FruitTree{
  constructor(property = {}){
    super(property);
  }
  set setHeight(value){ this._height = value * 1.2; }
}

class MangoTree extends FruitTree{
  constructor(property = {}){
    super(property);
  }
  set setHeight(value){ this._height = value * 0.8; }
}

let pineapple_tree = new PineappleTree({
      age:0,
      max_age:10,
      height:0,
      max_fruit: 2
    });
let mango_tree = new MangoTree({
      age:0,
      max_age:8,
      height:0
    });

mango_tree.setHeight = 10
console.log(mango_tree.getHeight)

class Fruit {}

// Release 2
class TreeGrove {
  constructor(){
    this._tree_array = [];
  }
  push(tree){
    this._tree_array[this._tree_array.length] = tree;
  }
  getCount(){
    return this._tree_array.length;
  }
}

let tree_grove = new TreeGrove();
tree_grove.push(PineappleTree)
tree_grove.push(MangoTree)

console.log(tree_grove.getCount())
