"use strict"

// Release 0
class AppleTree {
  constructor(property={}){
    this._age = property['age']
    this._maxAge = property['maxAge'] || 10
    this._diameter = property['diameter'] || 50
    this._fruitType = "apple"
  }

  set age(value){this._age=value}
  get age(){return this._age}
  set maxAge(value){this._maxAge=value}
  get maxAge(){return this._maxAge}
  set diameter(value){this._diameter=value}
  get diameter(){return this._diameter}

}
class Apple extends AppleTree {
 constructor(property={}){
   super(property)
 }
}
let apel1 = new Apple({
  age : 2,
  maxAge : 13,
  diameter : 52
})
apel1.age = 5 // contoh define variable dengan setter
// console.log(apel1.age)
// console.log(apel1.maxAge)
// console.log(apel1.diameter) // contoh deklarasi variable dgn setter

// Release 1
class FruitTree {
  constructor(property={}){
    this._name = property['name']
    this._age = property['age'] || 1
    this._maxAge = property['maxAge'] || 10
    this._diameter = property['diameter'] || 15
    this._height = property['height'] || 7
  }
  set name(value){this._name=value}
  get name(){return this._name}
  set age(value){this._age=value}
  get age(){return this._age}
  set maxAge(value){this._maxAge=value}
  get maxAge(){return this._maxAge}
  set diameter(value){this._diameter=value}
  get diameter(){return this._diameter}
  set height(value){this._height=value}
  get height(){return this._height}
}

class MangoTree extends FruitTree {
  constructor(property={}){
    super(property)
    this._fruitType = "mango"
  }

}
class Fruit extends FruitTree{
  constructor(property={}){
    super(property)
}
}
class PearTree extends FruitTree {
  constructor(property={}){
    super(property)
    this._fruitType = "pear"
  }
}

class Pear extends PearTree{
  constructor(property={}){
    super(property)
}
}
let pear = new Fruit()
pear._name = "pear"
pear._age = 3
pear._height = 70
// console.log(pear.age)
// console.log(pear.height)
// console.log(pear._fruitType)

let mangga = new Fruit()
mangga._name = "mangga"
mangga._age = 1
mangga._diameter = 20
// console.log(mangga.age)
// console.log(mangga.diameter)
let anggur = new Fruit()
anggur._name = "anggur"
anggur._age = 4
anggur._diameter = 2
// Release 2
class TreeGrove extends FruitTree {
  constructor(property={}){
    super(property)
    this._tree_array = [];
  }

push(tree){
  this._tree_array[this._tree_array.length] = tree
}

getCount(){
  return `jumlah objek dalam array ini adalah ${this._tree_array.length}`
}

getAge(){ //fungsi untuk cek umur dalam setiap objek pada array
  for(var i=0; i< this._tree_array.length; i++)
  console.log(`Umur ${this._tree_array[i].name} adalah ${this._tree_array[i].age} bulan`)
}


}

let tree_grove = new TreeGrove()
tree_grove.push(pear)
tree_grove.push(mangga)
tree_grove.push(anggur)
console.log(tree_grove._tree_array)
console.log(tree_grove.getAge())
console.log(tree_grove.getCount())

// console.log(tree_grove())
