const spaces = document.querySelectorAll('.space')
const playAgainButton = document.getElementById('playagain')

const gameboard = (() => {
  let game = ['', '', '', '', '', '', '', '', '']
  let value = -1

  function gameBoard() {
    if (this.innerHTML === '') {
      if (value === -1) {
        this.innerHTML = 'x'
        game[this.getAttribute('position')] = 'x'
        value = 1
      } else {
        this.innerHTML = 'o'
        game[this.getAttribute('position')] = 'o'
        value = -1
      }
    }
    checkWinner(game)
  }

  function checkWinner(game) {
    console.log(game)
    if (game[0]===game[3] && game[3]===game[6] && game[0] != '' || game[1]===game[4] && game[4]===game[7] && game[1] != ''|| game[2]===game[5]&& game[5]===game[8] && game[2] != '') {
      gameover()
    } else if (game[0]===game[1] && game[1]===game[2] && game[0] != '' || game[3]===game[4] && game[4]===game[5] && game[3] != '' || game[6]===game[7] && game[7]===game[8] && game[6] != '') {
      gameover()
    } else if (game[0]===game[4] && game[4]===game[8] && game[0] != ''|| game[2]===game[4] && game[4]===game[6] && game[2] != '') {
      gameover()
    }
  }

  function playAgain() {
    game = ['', '', '', '', '', '', '', '', '']
    value = -1
    spaces.forEach(spaces => spaces.innerHTML = '')
    spaces.forEach(spaces => spaces.addEventListener('click', gameboard.gameBoard))
    playAgainButton.classList.add('hide')
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