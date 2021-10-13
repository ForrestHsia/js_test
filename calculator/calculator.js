let doubleZero = document.querySelector('.doublezero');
let decimal = document.querySelector('.decimal');
let disPlayDetail = document.querySelector('.disPlayDetail');
let disPlayResult = document.querySelector('.disPlayResult');
let ac = document.querySelector('.ac');
let backspace = document.querySelector('.backspace');
let num_button = document.querySelectorAll('.num_button');
let cal_button = document.querySelectorAll('.cal_button');
let pendingVal;
let evalStrAry = [];
let evalStrAry_math = [];
let displayVal = "0";
let btnText;


let updateDisplayVal = (e) => {
    btnText = e.target.dataset.num;
    if(displayVal === '0' || displayVal === 0)
        displayVal = '';
    
     //console.log("display-1:" + displayVal)  //檢查用
    displayVal += btnText;
    disPlayResult.innerText = displayVal;
    disPlayDetail.innerText = displayVal;
}

for(let i=0; i<num_button.length; i++){
    num_button[i].addEventListener('click',updateDisplayVal,false);
}

let performOperation = (e) => {
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
         //console.log("evalStrAry not yet =:" + typeof evalStrAry + "，inner is：" + evalStrAry)  // 檢查用
         //console.log("evalStrAry_math not yet =:" + typeof evalStrAry_math + "，inner is：" + evalStrAry_math)  // 檢查用
        let evaluation = evalStrAry.join(' ');
        //let evaluation_list = evalStrAry.join(' ');
        disPlayDetail.innerText = evaluation;
         //console.log("evaluation_list not yet =:" + typeof evaluation_list + "，inner is：" + evaluation_list)   
    } else {
        
        evalStrAry_math.push(displayVal);
        evalStrAry.push(displayVal);

        let evaluation = evalStrAry_math.join('');
        let evaluation_list = evalStrAry.join(' '); // 顯示用

        evalStrAry_math = eval(evaluation);

        disPlayResult.innerText = evalStrAry_math.toFixed(6); // 計算用
        console.log(evalStrAry_math.length)
        disPlayDetail.innerText = evaluation_list; // 顯示用

        displayVal = "0";
        evalStrAry = [];
        evalStrAry_math = []; 
    }
}

for(let i=0; i<cal_button.length; i++){
    cal_button[i].addEventListener('click',performOperation,false);
}

ac.addEventListener('click',function(){
    displayVal = "0";
    pendingVal = undefined;
    evalStrAry = [];
    evalStrAry_math = [];
    disPlayDetail.innerText = displayVal;
    disPlayResult.innerText = displayVal;
},false)

backspace.addEventListener("click",function(){
        let displayVal_length = displayVal.length;
        displayVal = displayVal.slice(0, displayVal_length - 1);
        if (displayVal === ''){
            displayVal = '0';
        }
        disPlayResult.innerText = displayVal;
        disPlayDetail.innerText = displayVal;
    },false);

decimal.addEventListener('click', function(){
    if(!displayVal.includes('.')){
        displayVal += '.';
    }
    disPlayResult.innerText = displayVal;
    disPlayDetail.innerText = displayVal;
},false);

doubleZero.addEventListener('click',function(){
    if(displayVal !== '0'){
        displayVal += '00';
    }
    disPlayResult.innerText = displayVal;
    disPlayDetail.innerText = displayVal;
},false)