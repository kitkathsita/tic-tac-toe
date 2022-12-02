const spaces = document.querySelectorAll('.space')

let value = -1

function gameBoard() {
  if (this.innerHTML === '') {
    if (value === -1) {
      this.innerHTML = 'x'
      value = 1
    } else {
      this.innerHTML = 'o'
      value = -1
    }
  }
}

spaces.forEach(spaces => spaces.addEventListener('click', gameBoard))