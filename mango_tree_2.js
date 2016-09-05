"use strict"

// Release 0
class AppleTree {
  constructor(components) {

    this.name = components['name']
    this.age = components['age']
    this.height = components['height']
    this.produce = components['produce']
    this.harvested = components['harvested']
    this.healthy = components ['healthy']

  }

  suicide() {
    return this.lifestatus = false
  }
  grow(components) {

    this.age += components['age'];
    this.height += components['height'];
    return age, height
  }

}


class Apple extends AppleTree {
  constructor(components) {
    super(components)
    this.taste = components['taste']


  }
}

// Release 1
class FruitTree extends AppleTree {
  constructor(components){
    super(components)

  }

}
class Fruit extends FruitTree {
  constructor(components) {
    super (components)
    this.taste = components ['taste']
  }

}

// Release 2
class TreeGrove {
  constructor (){
    this.treeGroveArr = [];
  }

  umur() {
    for (let i=0;i<this.treeGroveArr.length;i++) {
        console.log("Umur Pohon " + this.treeGroveArr[i].name +" adalah " +this.treeGroveArr[i].age);

    }

  }

  trees(){
    for (let i=0;i<this.treeGroveArr.length;i++) {
        console.log("Detail Pohon " + this.treeGroveArr[i].name + "\nAge: " + this.treeGroveArr[i].age +", Height: " + this.treeGroveArr[i].height +", Produce: " + this.treeGroveArr[i].produce +", Harvested:" + this.treeGroveArr[i].harvested +", Healthy: " + this.treeGroveArr[i].healthy);
    }
  }

  mature_trees(){
    for (let i=0;i<this.treeGroveArr.length;i++) {
        if (this.treeGroveArr[i].harvested == true){
          console.log("Pohon " + this.treeGroveArr[i].name +" sedang berbuah");
        }
    }
  }

  dead_trees(){
    for (let i=0;i<this.treeGroveArr.length;i++) {
        if (this.treeGroveArr[i].harvested == false){
          console.log("Pohon " + this.treeGroveArr[i].name +" telah mate");
        }
    }
  }

  push (value) {

    this.treeGroveArr.push(value);

  }
  // age ,
  // trees,
  // mature tree,
  // dead trees
}

function randomnumber (){
    return Math.floor((Math.random() * 50) + 1) ;
}

let appleTree = new AppleTree({
  name:"Apel",
  age:20,
  height:30,
  produce:randomnumber(),
  harvested:true,
  healthy:true
});

let appleTree2 = new AppleTree({
  name:"Mangga",
  age:20,
  height:30,
  produce:randomnumber(),
  harvested:true,
  healthy:true
});

let fruitTree = new FruitTree({
  name:"Jeruk",
  age:15,
  height:30,
  produce:randomnumber(),
  harvested:false,
  healthy:true
});


let fruitTree2 = new FruitTree({
  name:"Melon",
  age:15,
  height:30,
  produce:randomnumber(),
  harvested:false,
  healthy:true
});




//
// console.log(appleTree);
// console.log(fruitTree);


let treeGroveObj = new TreeGrove();

treeGroveObj.push(appleTree)

treeGroveObj.push(appleTree2)
treeGroveObj.push(fruitTree)
treeGroveObj.push(fruitTree2)
//console.log(treeGroveObj)
//
//
// console.log(treeGrove);
// console.log(treeGrove[0].produce);
// console.log(treeGrove[1].produce);
//console.log(treeGroveObj.treeGroveArr[0]);
treeGroveObj.umur()
treeGroveObj.trees()
treeGroveObj.mature_trees()
treeGroveObj.dead_trees()
