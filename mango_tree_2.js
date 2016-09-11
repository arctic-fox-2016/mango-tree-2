"use strict"

// Release 0
class AppleTree {
  constructor(component){
    this._heightTree = component["heightTree"]
    this._age = component["age"]
    this._fruit = component["fruit"]
  }
  set heightTree(value){
    this._heightTree = value
  }
  get heightTree(){
    return this._heightTree
  }
  set age(value){
    this._age = value
  }
  get age(){
    return this._age
  }
  set fruit(value){
    this._fruit = value
  }
  get fruit(){
    return this._fruit
  }
}
class Apple extends AppleTree{
  constructor(component){
    super(component)
    this._maxAge = 30
  }
  set appleAge(value){
    this._maxAge = value
  }
  get appleAge(){
    return this._appleAge
  }
}
let appleTree = new AppleTree({
  age: 15,
  heightTree: 20,
  fruit: 100
})
let apple = new Apple({
  age: 3,
  heightTree: 5,
  fruit: 12
})



// Release 1
class FruitTree {
  constructor(component){
    this._age = component["age"]
    this._height = component["height"]
    this._mature = component["mature"]
    this._dead = component["dead"]
    this._maxAge = component["maxAge"]
    this._prod = []
  }
  set age(value){
    this._age = value
  }
  get age(){
    return this._age
  }
  set height(value){
    this._height = value
  }
  get height(){
    return this._height
  }

}

class Fruit extends FruitTree {
  constructor(component){
    super(component)
    this._fruit = 10
  }
  set fruit(value){
    this._fruit = value
  }
  get fruit(){
    return this._fruit
  }
}

class Pear extends FruitTree {
  constructor(component){
    super(component)
    this._fruit = 15
  }
  set fruit(value){
    this._fruit = value
  }
  get fruit(){
    return this._fruit
  }
}

class DragonFruit extends FruitTree {
  constructor(component){
    super(component)
    this._fruit = 5
  }
  set fruit(value){
    this._fruit = value
  }
  get fruit(){
    return this._fruit
  }
}
let fruit = new Fruit({
  age:10,
  height:20,
  mature:false,
  dead:false,
  maxAge:20,
  fruit:10
})
fruit._prod.push(fruit)
let pearFruit = new Pear({
  age:5,
  height:10,
  mature:true,
  dead:false,
  maxAge:20,
  fruit:5
})
fruit._prod.push(pearFruit)
let dragonF = new DragonFruit({
  age:3,
  height:2,
  mature:true,
  dead:false,
  maxAge:8,
  fruit:15
})
fruit._prod.push(dragonF)



// Release 2
class TreeGrove {
  constructor(component){
    this._allTree = []
    this._fruits = []
    this._fruits.push(fruit)
    this._pears = []
    this._pears.push(pearFruit)
    this._dragonfruits = []
    this._dragonfruits.push(dragonF)
  }
  age(){
    for (var i = 0; i < this._fruits.length; i++) {
      let apple = this._fruits[i]
      console.log(`\nFruit ${i+1} Age : ${fruit._age}`)
    }
    for (var i = 0; i < this._pears.length; i++) {
      let apple = this._pears[i]
      console.log(`Pear ${i+1} Age : ${pearFruit._age}`)
    }
    for (var i = 0; i < this._dragonfruits.length; i++) {
      let apple = this._dragonfruits[i]
      console.log(`Dragon Fruit ${i+1} Age : ${dragonF._age}`)
    }
  }
  trees(){
    return [this._fruits, this._pears, this._dragonfruits]
  }
  maturetrees(){
    let matures = []
    for (var i = 0; i < this._fruits.length; i++) {
      if(this._fruits[i]._mature) matures.push(this._fruits[i])
      console.log(`\nFruit ${i+1} mature : ${fruit._mature}`)
    }
    for (var i = 0; i < this._pears.length; i++) {
      if(this._pears[i]._mature) matures.push(this._pears[i])
      console.log(`Pear ${i+1} mature : ${pearFruit._mature}`)
    }
    for (var i = 0; i < this._dragonfruits.length; i++) {
      if(this._dragonfruits[i]._mature) matures.push(this._dragonfruits[i])
      console.log(`Dragon Fruit ${i+1} mature : ${dragonF._mature}`)
    }
    return matures
  }
  deadTrees(){
    let deads = []
    for (var i = 0; i < this._fruits.length; i++) {
      if(this._fruits[i]._dead)
      dead.push(this._fruits[i])
      console.log(`\nFruit ${i+1} dead : ${fruit._dead}`)
    }
    for (var i = 0; i < this._pears.length; i++) {
      if(this._pears[i]._dead)
      dead.push(this._pears[i])
      console.log(`Pear ${i+1} dead : ${pearFruit._dead}`)
    }
    for (var i = 0; i < this._dragonfruits.length; i++) {
      if(this._dragonfruits[i]._dead)
      dead.push(this._dragonfruits[i])
      console.log(`Dragon Fruit ${i+1} dead : ${dragonF._dead}`)
    }
  }
  }
let grove = new TreeGrove(
)

grove.age()
grove.trees()
grove.maturetrees()
grove.deadTrees()
