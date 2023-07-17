const mammal={
    color : "Orange",
    type : "cat" ,
    legs : 4,
    name : "Kitty" ,
    speed : 24,
    display : function(){
        alert("Mammal Object\nColor : "+this.color+"\nType : "+this.type+"\nLegs : "+this.legs+"\nName : "+this.name+"\nSpeed : "+this.speed)
    }
};

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },

    display : function(){
        alert("Full Name : "+this.fullName())
    }
};

const triangle={
    height : 25,
    base : 24,
    color : "red",
    area: function(){
        return (this.height*this.base)
    },
    display : function(){
        alert("\nHeight = "+ this.height + "\nBase = " + this.base + "\nColor = "+this.color+"\nArea = "+this.area())
    }
};