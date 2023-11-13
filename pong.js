//defines canvas, paddleL and the ball
const board = document.getElementById("board")
const paddleL = board.getContext("2d")
const ball = board.getContext("2d")

//draws paddle on the left
paddleL.fillStyle = "#000000"
paddleL.fillRect(20, 150, 20, 200)

//draws the ball
ball.beginPath()
ball.arc(800, 250, 10, 0, 2 * Math.PI)
ball.fillStyle = "#000000"
ball.stroke()


ballx = 800
bally = 250
function start()
{
    a = setInterval("ballMove()", 1000)

}
direction = Math.floor(Math.random() * 4)
function ballMove()
{
    
    console.log(direction)
    switch (direction)
    {
        case 0:
            while(ballx < 1000)
            {
                ballx -= 1
            }
            break 
        case 1:
            ballx += 1
            break
        case 2:
            bally -= 1
            break
        case 3:
            bally += 1
            break 
    }
    ball.beginPath()
    ball.arc(ballx, bally, 10, 0, 2 * Math.PI)
    ball.fillStyle = "#000000"
    ball.stroke()       
}