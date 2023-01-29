<template>
  <div>
    <h1>TIC TAC TOE</h1>
    <div class="container">
      <div v-for="(row, i) in board" :key="i" class="flex-container">
        <button v-for="(cell, j) in row" :key="j" @click="play(i, j)" class="item">{{ cell }}</button>
      </div>
    </div>
    <div>
      <button @click="resetGame">Reset</button>
      <p v-if="winner">Player {{ winner }} wins!</p>
      <p v-if="isTie">It's a tie!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      currentPlayer: 'X',
      winner: null,
      isTie: false
    }
  },
  methods: {
    play(i, j) {
      if (this.board[i][j] === ''&& this.winner == null ) {
        this.board[i][j] = this.currentPlayer;
        this.checkForWinner();
        this.checkForTie();
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    },
    checkForWinner() {
      const winningCombinations = [        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
      ];
      
      for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        const [x, y] = a;
        const [p, q] = b;
        const [m, n] = c;
        if (this.board[x][y] === this.currentPlayer && this.board[p][q] === this.currentPlayer && this.board[m][n] === this.currentPlayer) {
          this.winner = this.currentPlayer;
          this.loadContacts();
          return;
        }
      }
    },
    checkForTie() {
      let emptyCells = 0;
      for (let i = 0; i < this.board.length; i++) {
        for (let j = 0; j < this.board[i].length; j++) {
          if (this.board[i][j] === '') {
            emptyCells++;
          }
        }
      }
      if (emptyCells === 0 && !this.winner) {
        this.isTie = true;
      }
    },
    resetGame() {
      this.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
      this.currentPlayer = 'X';
      this.winner = null;
      this.isTie = false;
    },
    loadContacts(){
      fetch("https://tictactoe-98ea7-default-rtdb.europe-west1.firebasedatabase.app/winners.json", {method: "POST", body: JSON.stringify({winner:this.winner})}).then((response) => {
        return response.json();
      })
    }
  }
}
</script>

<style>
body, * {
  background-color: #afa9a9;
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.flex-container {
  display: flex;
}

button {
  width: 100px;
  height: 100px;
  font-size: 24px;
  font-weight: bold;
  border: none;
  background-color: rgb(255, 255, 255);
}


.item {
  flex: 1;
  border: 1px solid black; /* Add a border around the cell */
  box-sizing: border-box;
  align-items: center;
  text-align: center;
}

p {
  color: rgb(0, 0, 0);
  font-size: 50px;
  text-align: center;
  margin-top: 10px;
}

</style>
