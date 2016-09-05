"use strict"

// Release 0


// Release 1

function randomAngka(value) {
  if (value > 1) {
    return Math.floor(Math.random() * value)
  } else {
    return Math.round(Math.random())
  }
}

class Fruit {
  constructor(diameter, taste) {
    this.diameter = diameter
    this.taste = taste
    this.tasteList = ["Asam", "Manis"];
  }

  fruitCondition(){
    this.diameter = randomAngka(10) + 1
    this.taste = this.tasteList[randomAngka(1)]
  }
}



class FruitTree {
  constructor(age, ageWhenGiveFruit, height, maxGrowAge, maxAge){ // initialize General FruitTree
      this.age = age || 0
      this.ageWhenGiveFruit = ageWhenGiveFruit || 5
      this.height = height || 0.2
      this.fruit = 0
      this.isHealty = true
      this.maxGrowAge = maxGrowAge || 15
      this.maxAge = maxAge || 30
      this.arrayFruits = [] // array of class Fruit
    }

    produceFruit(){
      this.arrayFruits = []
      for (var i = 0; i < this.fruit; i++) {
        let temp = new Fruit()
        temp.fruitCondition()
        this.arrayFruits.push({diameter: temp.diameter, taste : temp.taste})
      }
    }

    grow(){
      this.age += 1;
      if (this.age == this.maxAge){
        this.isHealty = false
      }

      if (this.isHealty) {
        if (this.age >= this.ageWhenGiveFruit) {
          this.fruit = randomAngka(5)
          this.produceFruit()
        }

        if (this.age <= this.maxGrowAge){
          this.height += randomAngka(10)
        }
      }
    }


}


class AppleTree extends FruitTree{
  constructor(age = 0, ageWhenGiveFruit = 5, height = 0.2, maxGrowAge = 15, maxAge = 20){ // initialize AppleTree
    super(age, ageWhenGiveFruit, height, maxGrowAge, maxAge)
  }

}

class Apple extends Fruit{
  constructor(diameter, taste) {
    super(diameter, taste)
  }
}



let pohonApple = new AppleTree()

console.log("Pohon Apel")
do {
  pohonApple.grow()
  console.log(`[Year ${pohonApple.age} Report] Height = ${pohonApple.height} | Fruits harvested = ${pohonApple.fruit} | Fruits Condition : ${JSON.stringify(pohonApple.arrayFruits)}`)
} while (pohonApple.isHealty);


class Peer extends Fruit{
  constructor(diameter, taste) {
    super(diameter, taste)
  }
}

class PeerTree extends FruitTree{
  constructor(age, ageWhenGiveFruit, height, maxGrowAge, maxAge, isTropic = false) {
    super(age, ageWhenGiveFruit, height, maxGrowAge, maxAge)
    this.isTropic = isTropic
  }
}

let pohonPeer = new PeerTree(0, 2, 1, 8,12, false)
console.log("\n\nPohon Peer")
do {
  pohonPeer.grow()
  console.log(`[Year ${pohonPeer.age} Report] Height = ${pohonPeer.height} | Fruits harvested = ${pohonPeer.fruit} | Fruits Condition : ${JSON.stringify(pohonPeer.arrayFruits)}`)
} while (pohonPeer.isHealty);


// Release 2
class TreeGrove {}
