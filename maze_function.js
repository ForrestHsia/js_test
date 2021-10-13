let mouse;
let gameInterval;
let blockSize = 20;
let blockCount = 20;
let canvas = document.getElementById("maze");

function gameStart(){
    gameInterval = setInterval(gameRoutine, 1000);
    mouse ={
        body:[
            {x:blockCount/2, y:blockCount/2}
        ],
        size:1,
        direction:{x:0,y:-1}
    }
}

function gameRoutine(){
    moveMouse()
    makeMaze();
}

function moveMouse(){
    let newBlock = {
        x: mouse.body[0].x + mouse.direction.x,
        y: mouse.body[0].x + mouse.direction.y
    }
    mouse.body.unshift(newBlock);

    while(mouse.body.length > mouse.size){
        mouse.body.pop();
    }
}

function makeMaze(){
    
    let context = canvas.getContext("2d");

    context.fillStyle = 'black';
    context.fillRect(0,0, canvas.width, canvas.height);

    context.fillStyle = "green";

    // make mouse
    for(let i=0; i<mouse.body.length; i++){
        context.fillRect(
            mouse.body[i].x,
            mouse.body[i].y,
            blockSize,
            blockSize
        )
    }
}

