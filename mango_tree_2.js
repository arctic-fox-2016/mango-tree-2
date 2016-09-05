"use strict"

// Release 0
class AppleTree {
  constructor() {
      allTree.allFruits.push(this)
        this.height = 10
        this.age = 10
        this.fruits = "Apel"
        this.deadFruit = true;
  }
}
class Apple extends AppleTree{
  constructor()
  {
    super()
  }
}

// Release 1
class FruitTree {
  constructor()
  {
    allTree.allFruits.push(this)
    this.height = 10;
    this.age = 4
    this.fruits = "Fruit"

  }
}
class Fruit extends FruitTree{
  constructor()
  {

    super()
  }
}
class PearTree{
  constructor()
  {
    allTree.allFruits.push(this)
    this.height = 100
    this.age = 20
    this.fruits = "Pear"
    this.berbuah = true;
  }
}
class Pear extends PearTree
{
  constructor()
  {
    super()

  }
}
class JambuTree{
  constructor()
  {
    allTree.allFruits.push(this)
    this.height = 25
    this.age = 5
    this.fruits = "Jambu"
  }
}
class Jambu extends JambuTree
{
  constructor()
  {
    super()

  }
}

// Release 2
class TreeGrove {
    constructor()
    {
      this.allFruits = []
    }

    age()
    {
        console.log("Apple's age : "+apple.age+" Pear's age : "+ pear.age+"Jambu's age "+jambu.age)
    }

    trees()
    {
        console.log("Jenis Pohon : "+apple.fruits+" "+pear.fruits+" "+jambu.fruits)
    }

    mature_trees()
    {
      if(pear.berbuah)
      {
        console.log("Pohon yang berbuah "+pear.fruits)
      }
    }


    dead_trees()
    {
      if(apple.deadFruit)
      {
        console.log("Pohon yang mati "+apple.fruits)
      }
    }
}



var allTree = new TreeGrove()
var apple = new AppleTree()
var pear = new PearTree()
var jambu = new JambuTree()
console.log(allTree)
allTree.age()
allTree.trees()
allTree.mature_trees()
allTree.dead_trees()
