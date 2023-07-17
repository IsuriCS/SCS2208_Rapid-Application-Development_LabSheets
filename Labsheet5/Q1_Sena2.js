class marks{
    #index
    #mcq
    #essay
    #total
    #grade

    constructor(index, mcq, essay) {
        this.#index = index
        this.#mcq = mcq
        this.#essay = essay
        this.#calculatetotal()
        this.#checkgrade()
    }

    #calculatetotal() {
        this.#total=this.#mcq+this.#essay
    }

    #checkgrade() {
        if (this.#total >= 75) {
           this.#grade='A' 
        }
        else if (this.#total >= 65) {
            this.#grade = 'B'
        }
        else if (this.#total >= 55) {
            this.#grade = 'C'
        }
        else if (this.#total >= 35) {
            this.#grade = 'S'
        }
        else {
            this.#grade = 'W'
        }
    }

    displayTotal() {
        
        console.log('Index : ' + this.#index)
        console.log("Total marks : " + this.#total)
        console.log('\n')
        
    }

    displayPassOrFail() {
        if (this.#total >= 55) {
            console.log('Index : ' + this.#index)
            console.log("Pass")
        }
        else {
            console.log('Index : ' + this.#index)
            console.log("Fail")
        }
        console.log('\n')

    }

    displayGrade() {
        console.log('Index : ' + this.#index)
        console.log("Grade : " + this.#grade)
        console.log('\n')
    }
}

const m1 = new marks(21001, 47, 30)
const m2 = new marks(21002, 12, 10)

m1.displayTotal()
m1.displayPassOrFail()
m1.displayGrade()

m2.displayTotal()
m2.displayPassOrFail()
m2.displayGrade()