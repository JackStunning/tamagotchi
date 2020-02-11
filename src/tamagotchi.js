export class Tamagotchi {
  constructor(name, age, foodLevel, sleepLevel, playLevel, originalLevel){
    this.name = name;
    this.age = age;
    this.foodLevel = foodLevel;
    this.sleepLevel= sleepLevel; 
    this.playLevel = playLevel;
    this.happyLevel = true;
    this.originalLevel = originalLevel;
  }

  setFood(){
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  setSleep(){
    setInterval(() => {
      this.sleepLevel--;
    }, 2000);
  }

  setPlay(){
    setInterval(() => {
      this.playLevel--;
    }, 1500);
  }

  setAge(){
    setInterval(() => {
      this.age++;
    }, 5000);
  }

  sleepTamagotchi(){
    this.sleepLevel = this.originalLevel;
  }

  feedTamagotchi(){
    this.foodLevel += Math.round(this.originalLevel / 3);
    if (this.foodLevel  > this.originalLevel){
      this.foodLevel = this.originalLevel;
    }
  }

  playTamagotchi(){
    this.playLevel += Math.round(this.originalLevel / 2);
    if (this.playLevel  > this.originalLevel){
      this.playLevel = this.originalLevel;
    }
  }

}

