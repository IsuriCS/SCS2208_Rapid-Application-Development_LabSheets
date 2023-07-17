function sum(){
    var mark1 =30
    var mark2 = 40
    var mark3 = 90

    alert ("Mark 1 = "+mark1+"\nMark 2 = "+mark2+"\nMark 3 = "+mark3+"\nSum = "+(mark1 + mark2 + mark3))
}

function displayDetails(){
    let details="Name : Isuri \nAge : 23\nGender : Female"
    alert(details) 
}

function AreaOfRectangle(h,w){
    alert("Area of rectangle \nHeight = "+h+"\nWeight = "+w+"\n Area = "+(h*w))
}

function Q4(){
    let a=10
    let b=20
    let t1=("a = "+ a + "\tb = "+ b) 
    let t2=("a += b --> a = "+ (a+=b) + "\tb = "+ b)
    let t3=("a -= b --> a = "+ (a-=b) + "\tb = "+ b)
    let t4=("a += b --> a = "+ (a+=b) + "\tb = "+ b)
    let t5=("a *= b --> a = "+ (a*=b) + "\tb = "+ b)
    let t6=("a /= b --> a = "+ (a/=b) + "\tb = "+ b)
    let t7=("a %= b --> a = "+ (a%=b) + "\tb = "+ b)

    alert(t1+"\n"+t2+"\n"+t3+"\n"+t4+"\n"+t5+"\n"+t6+"\n"+t7)
}

function Q5(){
    let x =5
    let y = 4
    let text1 = "A"
    let text2 = "B"

    alert ("x = "+x+"\ny = "+y+"\nText 1 = "+text1+"\nText 2 = "+ text2 +"\nx >= y -->" + (x>=y)+"\nx != y -->" + (x!=y) +"\nText 1 < Text 2 -->" + (text1<text2))
}

function Q6(){
    let statement1 = "What a very "
    let statement2 = "nice day"
    alert (statement1+statement2)
}

function Q7(){
    let x = 5 + 5
    let y = "5" + 5
    let z = "Hello" + 5

    let t1 = "x = 5 + 5 -->" + x
    let t2 = "y = \"5\" + 5 -->" + y
    let t3 = "z = \"Hello\" + 5  -->" + z

    alert(t1+"\n"+t2+"\n"+t3)
}