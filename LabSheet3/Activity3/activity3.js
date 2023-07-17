function Q1(){
    const games = ["The Last of Us", "Uncharted", "God of War", "Bloodborne"]
    let x = games.indexOf("God of War")
    alert("Array : "+games+"\nIndex : "+x)
}


const details =new Map()

function Q2(){
    let v1=document.getElementById('v1').value
    let v2=document.getElementById('v2').value
    let v3=document.getElementById('v3').value

    details.set('Name',v1)
    details.set('Age',v2)
    details.set('City',v3)

    let s="[ Name, "+ details.get('Name')+"], [ Age, "+details.get('Age')+"], [ City, "+details.get('City')+"]"
    
    alert("Map : \n"+s)
    return details
}

function Q3(){
    details.delete("Age")
    alert("Age key is deleted . Map size is "+details.size)
}

const Fruits =new Map()

function Q4(){
    Fruits.set('Banana',3)
    Fruits.set('Apple',5)
    Fruits.set('Orange',2)
    alert("Value of key Banana :"+Fruits.get('Banana')+"\n Size of map :"+Fruits.size)
   
}