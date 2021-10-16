let showDigital = 10;
let doubleZero = document.querySelector('.doublezero');
let decimal = document.querySelector('.decimal');
let disPlayDetail = document.querySelector('.disPlayDetail');
let disPlayResult = document.querySelector('.disPlayResult');
let ac = document.querySelector('.ac');
let percent = document.querySelector('.percent');
let backspace = document.querySelector('.backspace');
let num_button = document.querySelectorAll('.num_button');
let cal_button = document.querySelectorAll('.cal_button');
let pendingVal;
let evalStrAry = [];
let evalStrAry_math = [];
let displayVal = "0";
let btnText;


let updateDisplayVal = (e) => { // 數字輸入功能
    btnText = e.target.dataset.num;
    if(displayVal === '0' || displayVal === 0)
        displayVal = '';

    displayVal += btnText;
    disPlayResult.innerText = displayVal;
    disPlayDetail.innerText = displayVal;
}

for(let i=0; i<num_button.length; i++){
    num_button[i].addEventListener('click',updateDisplayVal,false);
}

let performOperation = (e) => { // "加減乘除"以及"等於"計算功能
    let operator = e.target.dataset.cal;
    let operator_Text = e.target.innerText;
    if (displayVal !== undefined && operator !== '=') {
        pendingVal = displayVal;
        disPlayDetail.innerText = displayVal;
        displayVal = "0";

        evalStrAry.push(pendingVal); // 顯示用
        evalStrAry.push(operator_Text);
        evalStrAry_math.push(pendingVal);  //計算用
        evalStrAry_math.push(operator);

        let evaluation = evalStrAry.join(' ');
        disPlayDetail.innerText = evaluation;
    } else {
        evalStrAry_math.push(displayVal);
        evalStrAry.push(displayVal);

        let evaluation = evalStrAry_math.join('');
        let evaluation_list = evalStrAry.join(' '); // 顯示用

        evalStrAry_math = makeDigital(eval(evaluation));
        
        disPlayResult.innerText = evalStrAry_math; // 計算用
        disPlayDetail.innerText = evaluation_list; // 顯示用

        displayVal = "0";
        evalStrAry = [];
        evalStrAry_math = []; 
    }
}

for(let i=0; i<cal_button.length; i++){
    cal_button[i].addEventListener('click',performOperation,false);
}

ac.addEventListener('click',function(){ //歸零功能
    displayVal = "0";
    pendingVal = undefined;
    evalStrAry = [];
    evalStrAry_math = [];
    disPlayDetail.innerText = displayVal;
    disPlayResult.innerText = displayVal;
},false)

percent.addEventListener('click',function(){  //瑋俊新增取percent功能
    let percent_buff = Number(disPlayResult.innerText)/100
    disPlayResult.innerText = percent_buff;

    evalStrAry.push(percent_buff);
    evalStrAry_math.push(percent_buff);

    let evaluation = evalStrAry.join(' ');
    disPlayDetail.innerText = evaluation;

});

backspace.addEventListener("click",function(){ //退位功能
        let displayVal_length = displayVal.length;
        displayVal = displayVal.slice(0, displayVal_length - 1);
        if (displayVal === ''){
            displayVal = '0';
        }
        disPlayResult.innerText = displayVal;
        disPlayDetail.innerText = displayVal;
    },false);

decimal.addEventListener('click', function(){ //小數點功能
    if(!displayVal.includes('.')){
        displayVal += '.';
    }
    disPlayResult.innerText = displayVal;
    disPlayDetail.innerText = displayVal;
},false);

doubleZero.addEventListener('click',function(){ //鍵入00功能
    if(displayVal !== '0'){
        displayVal += '00';
    }
    disPlayResult.innerText = displayVal;
    disPlayDetail.innerText = displayVal;
},false)


let makeDigital = (number) =>{ // 瑋俊新增調整顯示位數

    if(Math.abs(number)<Math.pow(10,7) && Math.abs(number)>Math.pow(10,-5)){
        let buff = number.toString().includes('.')
        switch (buff){
            case false:
                return number;
                break;

            case true:
                let arr = number.toString().split('.')
                let buff2 = arr[1].length
                if (buff2 > showDigital-arr[0].length){
                    return number = number.toFixed(showDigital-arr[0].length)
                }else{
                    return number = number.toFixed(buff2)
                }
                break;
        }

    }else{
        number = number.toExponential();
        let arr = number.split("e");//從計算結果取arr後，分別把element加工製作顯示結果

        arr[1] = "e"+arr[1];
        arr[0] = Number(arr[0]);
        
        if(arr[0].length < showDigital-arr[1].length){
            arr[0] = arr[0].toFixed(arr[0].length);
        }else{
            arr[0] = arr[0].toFixed(showDigital-arr[1].length);
        }
        return arr.join("");
    }
}