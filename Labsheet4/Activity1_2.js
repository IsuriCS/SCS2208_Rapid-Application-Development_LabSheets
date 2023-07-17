class Rectangle{
    width;
    height;

    constructor(width,height){
        this.width=width
        this.height=height
    }

    getArea(){
        return this.width * this.height
    }

}

// Activity 1
const rec1= new Rectangle(10,20)
console.log("Width of the rectangle is "+ rec1.width)

// Activity 2
const rec2= new Rectangle(20,30)
console.log(`Area of the rectangle 1 is ${rec1.getArea()}`)
console.log(`Area of the rectangle 2 is ${rec2.getArea()}`)
