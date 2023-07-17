function Q1(){
    let inone;
    let intwo;
    if(document.getElementById('Input1t').checked) {   
        inone = 1;
    } 
    else if(document.getElementById('Input1f').checked){
        inone=0;
    }
    else{
        alert("Input 1 is not checked");
    }

    if(document.getElementById('Input2t').checked) {   
        intwo = 1
    } 
    else if(document.getElementById('Input2f').checked){
        intwo=0
    }
    else{
        alert("Input 2 is not checked")
    }
 
    if (inone && intwo ){
        alert("Result :- True")
    }
    else{
        alert("Result :- False")

    }
}

function Q2(){
    let x=document.getElementById('naturalNum').value
    alert("Type of input is "+typeof(x))
}

function Q3(){
    const date=new Date()
    let type = typeof(date)

    alert("Currunt Time : "+date+"\nType : "+type)
}

function Q4(){
    let s='OceanGate'
    if (s.len>10){
        alert("Length of Oceangate grater than  10 ")
    }
    else{
        alert("Length of Oceangate less than  10 ")
    }
}