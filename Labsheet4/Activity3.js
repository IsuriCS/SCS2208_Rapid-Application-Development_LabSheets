class Dog {
    Breed
    Age
    Color

    constructor(Breed,Age,Color){
        this.Breed=Breed
        this.Age=Age
        this.Color=Color
    }

    Eat(){
        console.log(`${this.Breed} is eating`)
    }

    Sleep(){
        console.log(`${this.Breed} is sleeping.`)
    }

    Sit(){
        console.log(`${this.Breed} is sitting.`)
    }
    
    Run(){
        console.log(`${this.Breed} is running.`)
    }
}

const d1= new Dog("Pug",3,"Black")
const d2= new Dog("Boxer",2,"White")
const d3= new Dog("Poodle",1,"Brown")

d1.Eat()
d2.Run()
d3.Sit()
d3.Sleep()