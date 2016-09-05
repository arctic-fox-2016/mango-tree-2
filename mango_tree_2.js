"use strict"

// Release 0
// Release 1

class FruitTree {
  constructor(){
    this._akar = "merambat"
    this._batang = "kayu"
  }

}
class Fruit {
  constructor(){
    this._rasa = "manis"
    this._busuk = "ya"
  }

}

class AppleTree extends FruitTree{
  constructor(umur){
    super()
    kumpulanBuah._semuaBuah.push(this)
    this._namaBuah = "Apple"
    this._durasiPanenDalamMinggu = 16
    this._penambahanTinggi = 1.5
    this._umurBerhenti = 10
    this._umurSekarang = umur
  }

}
class Apple extends Fruit{
  constructor(){
    super()
    this._jumlahBiji = 1
    this._diameterCm = 12
  }
}

class MangoTree extends FruitTree {
  constructor(umur){
    super()
    kumpulanBuah._semuaBuah.push(this)
    this._namaBuah = "Mangga"
    this._durasiPanenDalamMinggu = 12
    this._penambahanTinggi = 2
    this._umurBerhenti = 15
    this._umurSekarang = umur
  }

}
class Mango extends Fruit{
  constructor(){
    super()
    this._jumlahBiji = 1
    this._diameterCm = 18
  }
}

class PearTree extends FruitTree {
  constructor(umur){
    super()
    kumpulanBuah._semuaBuah.push(this)
    this._namaBuah = "Pear"
    this._durasiPanenDalamMinggu = 8
    this._penambahanTinggi = 1
    this._umurBerhenti = 7
    this._umurSekarang = umur
  }

}
class Pear extends Fruit{
  constructor(){
    super()
    this._jumlahBiji = 1
    this._diameterCm = 10
  }
}

// Release 2
class TreeGrove {
  constructor(){
    this._semuaBuah = []
  }
  age(){
    for (let idx in kumpulanBuah._semuaBuah){
        console.log("Umur pohon "+kumpulanBuah._semuaBuah[idx]._namaBuah+" : "
                      +kumpulanBuah._semuaBuah[idx]._umurBerhenti
                      +" tahun")
    }
  }
  trees(){
    console.log("=========Data Pohon Yang Ada=========")
    for(let idx in kumpulanBuah._semuaBuah){
      console.log("Sudah ada Pohon : " +kumpulanBuah._semuaBuah[idx]._namaBuah
                + " Umur : " +kumpulanBuah._semuaBuah[idx]._umurSekarang + " tahun" )
    }
  }

  mature_trees(){
    console.log("=========Data Pohon Hidup=========")
    for(let idx in kumpulanBuah._semuaBuah){
      if(kumpulanBuah._semuaBuah[idx]._umurSekarang < kumpulanBuah._semuaBuah[idx]._umurBerhenti)
        console.log("Pohon " +kumpulanBuah._semuaBuah[idx]._namaBuah
            + " yang berumur "+ +kumpulanBuah._semuaBuah[idx]._umurSekarang
            + " tahun masih hidup")
    }
  }

  dead_trees(){
    console.log("=========Data Pohon Mati=========")
    for(let idx in kumpulanBuah._semuaBuah){
      if(kumpulanBuah._semuaBuah[idx]._umurSekarang >= kumpulanBuah._semuaBuah[idx]._umurBerhenti)
        console.log("Pohon " +kumpulanBuah._semuaBuah[idx]._namaBuah
            + " yang berumur "+ +kumpulanBuah._semuaBuah[idx]._umurSekarang
            + " tahun sudah mati")
    }
  }
}


let kumpulanBuah = new TreeGrove()
let mangga1 = new MangoTree(20)
let mangga2 = new MangoTree(2)
let apple1 = new AppleTree(1)

//console.log(kumpulanBuah)
kumpulanBuah.trees()
kumpulanBuah.mature_trees()
kumpulanBuah.dead_trees()
