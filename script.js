var timer = 10;
var score = 0;
var hitnum = 0;

let btn = document.querySelector("#pbtm .btn")
btn.addEventListener("click", function startGame() {
    btn.style.display = "none";
    function bubble() {
        var clutter = "";
        for (var i = 1; i <= 270; i++) {
            var num = Math.floor(Math.random() * 10)
            clutter += `<div class="bubble">${num}</div>`;
        }
        document.querySelector("#pbtm").innerHTML = clutter;
    }
    function runTimer() {
        var timerInterval = setInterval(() => {
            if (timer > 0) {
                timer--;
                document.querySelector("#timerVal").textContent = timer;
            }
            else {
                clearInterval(timerInterval);
                document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1> <h1>Score: ${score}</h1> <a href="/" > <div class="btn">New Game</div> </a>`;

            }
        }, 1000);
    }

    function hit() {
        hitnum = Math.floor(Math.random() * 10)
        document.querySelector("#hitVal").textContent = hitnum;
    }

    function increaseScore() {
        score += 10;
        document.querySelector("#scoreVal").textContent = score;
    }

    document.querySelector("#pbtm").addEventListener("click", function (dets) {
        var clickedNum = Number(dets.target.textContent);
        if (clickedNum === hitnum) {
            increaseScore();
            bubble();
            hit();
        }
    });
    hit();
    bubble();
    runTimer();
});