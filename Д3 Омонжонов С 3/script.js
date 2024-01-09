function calc(){
    let a = prompt("vvedite arifmetiku (+ - * /): ")
    
    let numA = parseInt(prompt("vvedite chislo A: "))
    let numB = parseInt(prompt("vvedite chislo B: "))
    
    if (a == "+"){
        alert(numA + numB)
    }
    if (a == "-") {
        alert(numA - numB)
        
    }
    if (a=="*") {
        alert(numA * numB)
        
    }
     if(a == "/") {
        alert(numA / numB)

        
    }

}

calc()