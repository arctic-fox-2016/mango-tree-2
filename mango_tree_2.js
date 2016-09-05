"use strict"

// Release 0


// Release 1
class FruitTree {
  constructor(values) {
    this._name = values['name']
    this._age = values['age']
    this._mature = values['mature']
    this._harvestAge = values['harvestAge']
    this._matureAge = values['matureAge']
    this._height = values['height']
    this._dead = values['dead']
    this._fruitProd = []
  }
}
class Fruit {
  constructor(options) {
    this._name = options['name']
    this._diameter = options['diameter']
    this._color = options['color']
    this._weight = options['weight']
  }
}
class AppleTree extends FruitTree {
  constructor(component) {
    super(component)
  }
}
class Apple extends Fruit {
  constructor(component) {
    super(component)
  }

}
class Peartree extends FruitTree {
  constructor(component) {
    super(component)
  }
}

class Pear extends Fruit {
  constructor(component) {
    super(component)
  }

}

// Release 2
class TreeGrove {
  constructor(component) {
    let apples = component['aple']
    this._Apples = []
    this._Apples.push(apples)
    let pears = component['pear']
    this._Pears = []
    this._Pears.push(pears)
  }
  age() {
    for (var i = 0; i < this._Apples.length; i++) {
      let apple = this._Apples[i]
      console.log(`Apple ${i} Age =${apple._age}`);
    }
    for (var i = 0; i < this._Pears.length; i++) {
      let pear = this._Pears[i]
      console.log(`Pear ${i} Age =${pear._age}`);
    }
  }
  trees() {
    return [this._Apples, this._Pears]
  }
  mature_tress() {
    let matures = []
    for (var i = 0; i < this._Apples.length; i++) {
      if (this._Apples[i]._mature) matures.push(this._Apples[i])
    }
    for (var i = 0; i < this._Pears.length; i++) {
      if (this._Pears[i]._mature) matures.push(this._Pears[i])
    }
    return matures
  }
  dead_trees() {
    let deads = []
    for (var i = 0; i < this._Apples.length; i++) {
      if (this._Apples[i]._dead) matures.push(this._Apples[i])
    }
    for (var i = 0; i < this._Pears.length; i++) {
      if (this._Pears[i]._dead) matures.push(this._Pears[i])
    }
  }
}
let apple = new Apple({
  name: "apple",
  diameter: 10,
  colors: "read",
  weight: 300
})
let pear = new Pear({
  name: "pear",
  diameter: 8,
  colors: "light yellow",
  weight: 350
})
let appleTree = new AppleTree({
  name: "apple's tree",
  age: 1,
  mature: false,
  harvestAge: 5,
  matureAge: 30,
  height: 1,
  dead: false
})
appleTree._fruitProd.push(apple)
let pearTree = new Peartree({
  name: "pear's tree",
  age: 20,
  mature: true,
  harvestAge: 7,
  matureAge: 20,
  height: 3,
  dead: false
})
let treeGrove = new TreeGrove({
  aple: appleTree,
  pear: pearTree
})
treeGrove.age()
treeGrove.trees()
treeGrove.mature_tress()
treeGrove.dead_trees()
