class Student{
    #indexNUum
    Name
    dateOfBirth
    Address
    ContactNum
    groupnumber

    constructor(indexNUum, Name, dateOfBirth, Address, ContactNum) {
        this.#indexNUum = indexNUum
        this.Name = Name
        this.dateOfBirth = dateOfBirth
        this.Address = Address
        this.ContactNum = ContactNum
        this.#setGroup()
    }

    setDetails(n,dob,ad,cnum) {
        this.Name = n
        this.Address = ad
        this.dateOfBirth = dob
        this.ContactNum = cnum
        console.log("Details updated !")
        console.log('\n')
    }

    showDetails() {
        console.log("Index number :" + this.#indexNUum)
        console.log("Name :"+this.Name)
        console.log("Date of Birth :"+this.dateOfBirth)        
        console.log("Address :"+this.Address)
        console.log("Contact Number :" + this.ContactNum)
        console.log('\n')
        
    }

    #setGroup() {
        let x=(this.#indexNUum )% 4
        if (x == 0) {
            this.groupnumber=1
        }
        else if (x == 1) {
            this.groupnumber =2
        }
        else if (x == 2) {
            this.groupnumber=3
        }
        else {
            this.groupnumber=4
        }
    }

    showGroupNumber() {
        console.log("Index number :" + this.#indexNUum)
        console.log("Name :" + this.Name)
        console.log("Group Number :" + this.groupnumber)
        console.log('\n')
        
    }
}


const stu1 = new Student(2100178, 'Isuri', '12.04.2000', '54B,Okewela,Modarawana', '0715484651')
const stu2 = new Student(2100175, 'Chathurika', '17.05.2000', '14/A,Robet Gunawardana road', '0765986420')

stu1.showDetails()
stu1.showGroupNumber()
stu2.showDetails()
stu2.showGroupNumber()

stu1.setDetails("Sathsarani", '12.04.2000', '54B,Okewela,Modarawana', '0715484651')
stu1.showDetails()