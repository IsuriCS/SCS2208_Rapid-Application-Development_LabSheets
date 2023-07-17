class book{
    name
    price
    author
    publisher
    discount

    constructor(name, price, author, publisher) {
        this.name = name
        this.price = price
        this.author = author
        this.publisher = publisher
    }

    showDetails() {
        console.log("Name : " + this.name)
        console.log("Price : " + this.price)
        console.log("Author : " + this.author)
        console.log("Publisher : " + this.publisher)
        console.log("Discount : " + this.price * this.discount)
        console.log("\n")
    }
}

class novels extends book{
    constructor(name, price, author, publisher) {
        super(name,price,author,publisher)
        this.discount=0.15
    }
}

class ShortStories extends book{
    constructor(name, price, author, publisher) {
        super(name,price,author,publisher)
        this.discount=0.15
    }
}

class Education extends book{
    constructor(name, price, author, publisher) {
        super(name,price,author,publisher)
        this.discount=0.2
    }
}

class biograpy extends book{
    constructor(name, price, author, publisher) {
        super(name,price,author,publisher)
        this.discount=0.1
    }
}


const nov1 = new novels('Wonder Land', 1400, 'James Wond', 'Disny')
const bio1 = new biograpy('Human Body', 5000, 'Dr.Perera', 'Samudra')

nov1.showDetails()
bio1.showDetails()