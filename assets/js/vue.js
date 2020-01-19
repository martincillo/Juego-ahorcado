const app = new Vue({
  el: '#app',
  mounted() {
    this.word = this.words[Math.floor(Math.random() * 10)]
    this.hiddenWord = '_ '.repeat(this.word.length)
  },
  data: {
    lettersArray: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
      'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    tries: 0,
    words: ['CASA', 'MENTIRAS', 'TERROR', 'CARRO', 'HOSPITAL', 'PELICULAS', 'TELEFONO', 'ESPEJO', 'AVION', 'CIUDAD'],
    word: '',
    hiddenWord: '',
    win: false,
    lose: false
  },
  methods: {
    checkLetter(letter) {
      if (this.word.indexOf(letter) !== -1) {
        let wordArray =  this.hiddenWord.split(' ')

        for (let i = 0; i < this.word.length; i++ ){
          if(this.word[i] === letter) {
            wordArray[i] = letter
          }
        }
        this.hiddenWord = wordArray.join(' ')
        this.checkWin()
      } else {
        this.tries++
        this.checkLose()
      }
    },
    checkWin() {
      let wordArray2 = this.hiddenWord.split(' '),
          wordFinal = wordArray2.join('')

      if (this.word === wordFinal) this.win = true
    },
    checkLose() {
      if (this.tries >= 9) this.lose = true
    },
    refresh() {
      location.reload()
    }
  },
  computed: {
    showLetters() {
      return !this.win && !this.lose
    } 
  }
})