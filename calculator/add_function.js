let inspectors = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.','e']

let inspections = (calculator) =>{
    let I = 0 //
    for(a in calculator){
        for(i in inspectors){
        if(calculator[a].includes(inspectors[i]))
            I++
        }   
    }
    if(I === calculator.length){
        return calculator;
    }else{
        return undefined;
        console.log("Input is not correct");
    }
}

let new_eval = (a) =>{
    let new_eval = Function
    return new new_eval("return " + a)()
}