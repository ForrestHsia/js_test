let mazeArray = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,1,2,2,1,2,1,2,1,2],
    [2,1,2,1,1,1,1,1,1,2],
    [2,1,2,1,1,2,1,2,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,2],
    [2,1,1,2,1,2,1,1,1,2],
    [2,1,2,1,1,1,2,1,1,2],
    [2,1,2,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,0,2]
    ];



    var isStart = false;
    var isInMap = false;
    window.onload = function () {
        var wall = document.getElementsByClassName("wall");
        /*start */
        document.getElementById("start").addEventListener("mouseover", function () {
            document.getElementById("result").textContent = "";
            isStart = true;
            isInMap = true;
            for (var i = 0; i < wall.length; i++) { wall[i].style.backgroundColor = "#EEEEEE"; }
    
        })
    
        /*out of the map */
        document.getElementById("wholeMaze").addEventListener("mouseleave", function () {
            isInMap = false;
        });
        /*wall */
        for (var i = 0; i < wall.length; i++)
            wall[i].addEventListener("mouseover", function (event) {
                if (isStart) {
                    event.target.style.backgroundColor = "#FF0000";
                    document.getElementById("result").textContent = "You hit the wall, lost the game!";
                    isStart = false;
                }
            });
        for (var i = 0; i < wall.length; i++)
            wall[i].addEventListener("mouseleave", function (event) {
                event.target.style.backgroundColor = "#EEEEEE";
            });
        /*end */
        document.getElementById("end").addEventListener("mouseover", function () {
            if (isStart) {
                if (isInMap) { document.getElementById("result").textContent = "Congratulation! You win the game!"; }
                else {
                    document.getElementById("result").textContent = "Oh, my friend, please don't cheat!";
                    isStart = false;
                }
            }
            isStart = false;
        });
    }