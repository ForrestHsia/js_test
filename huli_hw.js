function star(n){
    if(n<=0){
        console.log("請輸入正整數，謝謝")
    }else{
        
        n = Math.ceil(n)

        for(let i=1;i<=n;i++){
    document.write("*")
}
    }
}
star(5)

let str="Ascasf"
function isUpperCase(a){
if(str.charCodeAt(0)<65 ||  str.charCodeAt(0)>90){
    console.log("Not upper case sting")
    return false
}else{
    console.log("Upper case sting")
    return true
}
}

function firstLetterUpperCase(a){
    if(a.length === 0){
        return "-1";
    }else{
        array = a.split("");
        for (i=1;i<a.length;i++){
            if(array[i].charCodeAt(0)>64 || array[i].charCodeAt(0)<91){
                console.log("第一個大寫字母" + array[i] + ",在第" + i + "個");
                return true;
            }
        }
    }
}



function checkVariable(a){
    if (typeof a !== "undefined"){
        console.log("變數存在")
    }else{
        console.log(a + "存在")
    }
}