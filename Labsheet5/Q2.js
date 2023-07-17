class solid{
    area
    volume

    calculateArea() {
        throw new Error("calculateArea can't be intantiated")
    }

    calculateVolume() {
        throw new Error("calculateArea can't be intantiated")
    }
}

class cube extends solid{
    length

    constructor(l) {
    
        this.length=l
    }
    
    calculateArea() {
        this.area= l*l *6
    }

    calculateVolume() {
        this.volume = l*l*l
    }
}

class cuboid extends solid{
    length
    width
    hight

    constructor(l,w,h) {
        this.length = l
        this.width = w
        this.hight=h
    }
    
    calculateArea() {
        this.area= (this.length* this.width*2)+ (this.hight* this.width*2)+(this.length* this.hight*2)
    }

    calculateVolume() {
        this.volume = this.length + this. hight + this.length
    }
    
}

class cylinder extends solid{
    radious
    hight

    constructor(r, h) {
        this.radious = r
        this.hight =h
    }

    calculateArea() {
        this.area=( this.hight*2*Math.PI*this.radious)+(Math.PI*this.radious*this.radious)
    }

    calculateVolume() {
        this.volume = Math.PI*this.radious*this.radious *this.hight
    }
}

class sphere extends solid{
    radious

    constructor(r) {
        this.radious=r
    }

    calculateArea() {
        this.area = 4*Math.PI *this.radious*this.radious
    }

    calculateVolume() {
        this.volume = 4/3*Math.PI*this.radious*this.radious*this.radious
    }
}

class cone extends solid{
    radious
    hight

    constructor(r, h) {
        this.radious = r
        this.hight =h
    }

    calculateArea() {
        this.area= Math.PI * this.radious( this.radious + Math.sqrt(this.hight*this.hight + this.radious *this.radious))
    }

    calculateVolume() {
        this.volume = Math.PI * this.radious* this.radious *this.hight /3
    }
    
}


const cube1 = new cube(5)
const cuboid1 = new cuboid(5, 8, 2)
const cylinder1 = new cylinder(7, 10)
const sphere1 = new sphere(7)
const cone1 = new cone(5,4)

