function Q1(){
    let time = document.getElementById("time").value
    if (time===""){
        alert("Please enter time !")
    }
    else if (time < 10.00){
        alert("Good morning !")
    }
    else if (time <20.00){
        alert("Good Day !")
    }
    else{
        alert("Good evevning !")
    }
}

function Q2(){
    let f= document.getElementById("fruit").value
    switch (f) {
        case ("Banana"):
            alert("Yellow")
            break;
        
        case ("Pinapple"):
            alert("Orange")
            break;
        
        case ("Apple"):
            alert("Green")
            break;

        default:
            alert("Invalied Input!")
            break;
    }
}

function Q3(){
    let n1=document.getElementById("num1").value
    let n2=document.getElementById("num2").value
    let n3=document.getElementById("num3").value
    
   
    if (n1>=n2){
        if (n1>=n3){
            alert("Maximum number is "+n1)
        }
        else{
            alert("Maximum number is "+n3)
        }
    }
    else{
        if (n2>=n3){
            alert("Maximum number is "+n2)
        }
        else{
            alert("Maximum number is "+n3)
        }
    }

}

function Q4(){
    let n=document.getElementById("num").value
    let isprime = false
  
    for (let i = 2; i<= n/2;i++){
        if (n%i == 0){
            isprime=true
            alert(n+ " is not a prime number.")
            break;
        }
    }

    if (!isprime){
        alert(n+ " is a prime number.")
    }
    
}

function Q5(){
    var newtab=window.open("","Odd Numbers")
    newtab.document.write("Odd numbers 1 to 30 <br>")
    
    for(let i=1; i<30;i+=2){
        newtab.document.write(i+"<br>")
        
    }
    
}

function Q6(){
    const numArray =[12,23,45,67,78.4]
    alert("Array Elements : \n"+numArray)
    
}

function Q7(){
    const numbers= [80,30,40,50,23]
    numbers[2]=78
    let len=numbers.length
    numbers.sort()

    alert("Sorted Array Elements : \n"+numbers+"\nArray length : "+len )
    
}

function Q8(){
    const names = ["sadun","kamal","nimal","ruwan"]
    let nameSt=names.toString()
    names.pop()
    names.push("Nuwani")

    alert("Joined Array : \n" + nameSt +"\nNew Modified Array : \n"+names)
}

function Q9(){
    const myGirls = ["Cecilie", "Lone"]
    const myBoys = ["Emil", "Tobias", "Linus"]

    alert(myGirls+myBoys)
}

function Q10(){
    const numbersArray = [1,13,22,123,49]
    let sum=0

    for(let i=0;i<5;i++){
        sum+=numbersArray[i]
    }

    alert(sum)
}