let c=''


function concating(a,b){
    c=a.concat(b)
    alert(c)
    return c
}

function lowerCase(){
    c=c.toLowerCase()
    alert(c)
}

function upperCase(){
    c=c.toUpperCase()
    alert(c)
}

function splitArray(a){
    let array=a.split(",")
    alert("[\'"+array[0]+"\', \'"+array[1]+"\']")
}

function findIndex(a){
    var s="Phobia"
    var n= s.indexOf(a)
    if (n==-1){
        alert("No \'"+a+"\' in \'"+s+"\'")
    }
    else{
        alert("Index of \'"+a+"\' is "+ n)
    }
}