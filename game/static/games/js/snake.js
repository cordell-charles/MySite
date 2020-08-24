var lastRenderTime = 0
const gameBoard = document.getElementById('game-board')
var gameOver = false


function main(currentTime) {

	if (gameOver) {
		if (confirm('You lost. Press ok to restart.')) {
			location.reload();
		}
		return 
	}

	window.requestAnimationFrame(main)
	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
	if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
		return
	}

	lastRenderTime = currentTime

	update();
	render();
	checkLoss();
}

window.requestAnimationFrame(main)



function update() {
	updateSnake();
	updateFood();
}



function render() {
	gameBoard.innerHTML = ''
	renderSnake(gameBoard);
	renderFood(gameBoard);
}



// Grid positioning:
function randomGridPosition() {
	return {
		x: Math.floor(Math.random() * 21) + 1,
		y: Math.floor(Math.random() * 21) + 1,
	}
}


function outsideGrid(position) {
	return position.x < 1 || position.x > 21 || position.y < 1 || position.y > 21	
}






// Snake drawing and updating goes here 
const SNAKE_SPEED = 6 // How many times the snake moves per second
const snakeBody = [{ x:11, y:11 }]
var newSegments = 0


function updateSnake() {
	addSegments()
	const inputDirection = getInputDirection()
	for (var i = snakeBody.length - 2; i >= 0; i--) {
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


function expandSnake(num) {
	newSegments += num
}

function onSnake(position, {ignoreHead = false} = {} ) {
	return snakeBody.some((segments, index) => {
		if (ignoreHead && index === 0) {
			return false
		}
		return equalPositions(segments, position)
	}) 
}

function equalPositions(pos1, pos2) {
	return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
	for (var i = 0; i < newSegments; i++) {
		snakeBody.push( snakeBody[snakeBody.length - 1])
	}

	newSegments = 0
}

function snakeIntersection() {
	return onSnake(snakeBody[0], {ignoreHead: true})
}






// Food drawing and updating goes here 
var food = randomFoodPosition()
const EXPANSION_RATE = 1

function updateFood() {
	if (onSnake(food)) {
		expandSnake(EXPANSION_RATE);
		food = randomFoodPosition()
	}
}


function renderFood(gameBoard) {
	const foodElement = document.createElement('div');
	foodElement.style.gridRowStart = food.y
	foodElement.style.gridColumnStart = food.x
	foodElement.classList.add('food')
	gameBoard.appendChild(foodElement)
}

function randomFoodPosition() {
	var newFoodPosition
	while (newFoodPosition == null || onSnake(newFoodPosition)) {
		newFoodPosition = randomGridPosition()
	}
	return newFoodPosition
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





// Check for losses: 
function checkLoss() {
	gameOver = outsideGrid(snakeBody[0]) || snakeIntersection()
}