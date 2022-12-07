const spaces = document.querySelectorAll('.space')
const playAgainButton = document.getElementById('playagain')
const playerOne = document.querySelector('.one')
const playerTwo = document.querySelector('.two')
const winner = document.querySelector('.winner')

const gameboard = (() => {
  let game = ['', '', '', '', '', '', '', '', '']
  let value = -1

  function gameBoard() {
    if (this.innerHTML === '') {
      if (value === -1) {
        this.innerHTML = 'x'
        game[this.getAttribute('position')] = 'x'
        playerTwo.classList.add('active')
        playerOne.classList.remove('active')
        value = 1
      } else {
        this.innerHTML = 'o'
        game[this.getAttribute('position')] = 'o'
        playerOne.classList.add('active')
        playerTwo.classList.remove('active')
        value = -1
      }
    }
    checkWinner(game)
  }

  function checkWinner(game) {
    console.log(game)
    if (game[0]===game[3] && game[3]===game[6] && game[0] != '' || game[1]===game[4] && game[4]===game[7] && game[1] != ''|| game[2]===game[5]&& game[5]===game[8] && game[2] != '') {
      playerOne.classList.remove('active')
      playerTwo.classList.remove('active')
      if (game[0]==='o' || game[1]==='o' || game[2]==='o') {
        winner.innerHTML = 'WINNER: PLAYER 2'
      } else {
        winner.innerHTML = 'WINNER: PLAYER 1'
      }
      winner.classList.remove('now')
      gameover()
    } else if (game[0]===game[1] && game[1]===game[2] && game[0] != '' || game[3]===game[4] && game[4]===game[5] && game[3] != '' || game[6]===game[7] && game[7]===game[8] && game[6] != '') {
      playerOne.classList.remove('active')
      playerTwo.classList.remove('active')
      if (game[0]==='o' || game[3]==='o' || game[6]==='o') {
        winner.innerHTML = 'WINNER: PLAYER 2'
      } else {
        winner.innerHTML = 'WINNER: PLAYER 1'
      }
      winner.classList.remove('now')
      gameover()
    } else if (game[0]===game[4] && game[4]===game[8] && game[0] != ''|| game[2]===game[4] && game[4]===game[6] && game[2] != '') {
      playerOne.classList.remove('active')
      playerTwo.classList.remove('active')
      if (game[0]==='o' || game[2]==='o') {
        winner.innerHTML = 'WINNER: PLAYER 2'
      } else {
        winner.innerHTML = 'WINNER: PLAYER 1'
      }
      winner.classList.remove('now')
      gameover()
    } else if (game[0]!='' && game[1]!='' && game[2]!='' && game[3]!='' && game[4]!='' && game[5]!='' && game[6]!='' && game[7]!='' && game[8]!='') {
      playerOne.classList.remove('active')
      playerTwo.classList.remove('active')
      winner.innerHTML = 'TIED'
      winner.classList.remove('now')
      gameover()
    }
  }

  function playAgain() {
    game = ['', '', '', '', '', '', '', '', '']
    value = -1
    spaces.forEach(spaces => spaces.innerHTML = '')
    spaces.forEach(spaces => spaces.addEventListener('click', gameboard.gameBoard))
    playAgainButton.classList.add('hide')
    winner.classList.add('now')
  }

  return {
    gameBoard,
    playAgain,
  }
}
)()

function gameover() {
  spaces.forEach(spaces => spaces.removeEventListener('click', gameboard.gameBoard))
  playAgainButton.classList.remove('hide')
}

spaces.forEach(spaces => spaces.addEventListener('click', gameboard.gameBoard))
playAgainButton.addEventListener('click', gameboard.playAgain)