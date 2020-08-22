const SNAKE_SPEED = 5 // How many times the snake moves per second
var lastRenderTime = 0
const snakeBody = [{ x:11, y:11 }]
const gameBoard = document.getElementById('game-board')


function main(currentTime) {
	window.requestAnimationFrame(main)
	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
	if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
		return
	}

	lastRenderTime = currentTime

	update();
	render();
}

window.requestAnimationFrame(main)








// Snake drawing and updating goes here 


function updateSnake() {
	const inputDirection = getInputDirection()
	for (let i = snakeBody.length - 2; i >= 0; i--) {
		snakeBody[i + 1] = { ...snakeBody[i] } 
	}

	snakeBody[0].x += inputDirection.x
	snakeBody[0].y += inputDirection.y
}


function renderSnake(gameBoard) {
	snakeBody.forEach(segment => {
		const snakeElement = document.createElement('div');
		snakeElement.style.gridRowStart = segment.y;
		snakeElement.style.gridColumnStart = segment.x;
		snakeElement.classList.add('snake')
		gameBoard.appendChild(snakeElement);
	})
}


function update() {
	updateSnake();
	updateFood();
}



function render() {
	gameBoard.innerHTML = ''
	renderSnake(gameBoard);
	renderFood(gameBoard);
}



// Food drawing and updating goes here 
var food = { x: 0, y: 1 }

function updateFood() {

}


function renderFood(gameBoard) {
	const foodElement = document.createElement('div');
	foodElement.style.gridRowStart = food.y
	foodElement.style.gridColumnStart = food.x
	foodElement.classList.add('food')
	gameBoard.appendChild(foodElement)
}




// User input code goes here 

var inputDirection = { x: 0, y: 0 }
var lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
	switch (e.key) {
		case 'ArrowUp':
			if (lastInputDirection.y !== 0) break
			inputDirection = { x: 0, y: -1 }
			break
		case 'ArrowDown':
			if (lastInputDirection.y !== 0) break
			inputDirection = { x: 0, y: 1 }
			break
		case 'ArrowLeft':
			if (lastInputDirection.x !== 0) break
			inputDirection = { x: -1, y: 0 }
			break
		case 'ArrowRight':
			if (lastInputDirection.x !== 0) break
			inputDirection = { x: 1, y: 0 }
			break
	}
})


function getInputDirection() {
	lastInputDirection = inputDirection
	return inputDirection
}