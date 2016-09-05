"use strict"

// Release 0
class Fruit {
  constructor(){
    // this.banyakBuah = 10;
    // this.buahApple = 3;
    // this.buahGrove = 2;
  }
}

class AppleTree extends Fruit {
  constructor(umur){
  super()
  this.namaBuah = "Apple"
  this.umurMati = 5
  this.tinggiPohon = 10;
  this.umurPohonAwal = 1;
  this.umurPohonAkhir = 35;
  this.awalBerbuah = 2;
    }
  }

class Apple extends Fruit{
  constructor (){
  super()
  this.banyak = banyak;
  this.diamater = jumlahBuah;
  }
}
class MangoTree extends Fruit {
  constructor(umur){
  super()
  this.namaBuah = "Mango"
  this.umurMati = 10
  this.tinggiPohon = 15;
  this.umurPohonAwal = 5;
  this.umurPohonAkhir = 45;
  this.awalBerbuah = 3
    }
  }

class Mango extends Fruit{
  constructor (){
  super()
  this.banyak = banyak;
  this.diamater = jumlahBuah;
  }
}
class PearTree extends Fruit {
  constructor(umur){
  super()
  this.namaBuah = "Pear"
  this.umurMati = 15
  this.tinggiPohon = 20;
  this.umurPohonAwal = 2;
  this.umurPohonAkhir = 20;
  this.awalBerbuah = 4;
    }
  }

class Pear extends Fruit{
  constructor (){
  super()
  this.banyak = banyak;
  this.diamater = jumlahBuah;
  }
}
// Release 1
class FruitTree extends Fruit {
  constructor(umur){
  super()
  this.namaBuah = "Buah"
  this.umurMati = 5
  this.tinggiPohon = tinggiPohon;
  this.umurPohon = umurPohon;
  this.awalBerbuah = awalBerbuah;
  }
}

// class Fruit {
//   constructor(){
//     this.banyakBuah = banyakBuah;
//     this.buahApple = apel;
//     this.buahGrove = grove;
//   }
// }

// Release 2
class TreeGrove {
  constructor(){
    this._treegrovearray = []

  }
    push(value){
    this._treegrovearray.push(value)
    }
    age(){
      for (let i = 0; i < this._treegrovearray.length; i++)
        console.log("nama Pohon : " +this._treegrovearray[i].namaBuah + " Umur Pohon : " + this._treegrovearray[i].umurPohonAwal);

    }
    trees(){
      console.log(this._treegrovearray);
    }
    mature_trees(){
      for (let i = 0; i < this._treegrovearray.length; i++)
        console.log("nama Pohon : " +this._treegrovearray[i].namaBuah + " Banyak Buah : " + this._treegrovearray[i].awalBerbuah);

      // return this.age;
    }
    dead_trees(){
      for (let i = 0; i < this._treegrovearray.length; i++)
        console.log("Lama Hidup Pohon : " +(this._treegrovearray[i].umurPohonAkhir - this._treegrovearray[i].umurPohonAwal));
      return this.age;
    }
}



let namaBuah = new TreeGrove()
let apel = new AppleTree ()
let mangga = new MangoTree ()
let pear = new PearTree ()

namaBuah.push(apel)
namaBuah.push(mangga)
namaBuah.push(pear)



console.log(namaBuah);

namaBuah.age();
namaBuah.trees();
namaBuah.mature_trees();
namaBuah.dead_trees();


namaBuah.trees;
namaBuah.mature_trees;
namaBuah.dead_trees;
