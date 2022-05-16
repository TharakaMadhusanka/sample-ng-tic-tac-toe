import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  gridSize = 9;
  gridSquares = Array(this.gridSize).fill(null);
  currentPlayer: "X" | "O" = "X";
  winner: string | null = null;
  displayImagePath: string = "";
  totalClicks = 0;
  isDrawn: boolean = false;

  // Sorted each inner array
  winningIndexPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  ngOnInit(): void {
    this.initializeGame();
  }

  onPlayerClick(playerPosition: number): void {
    if (!this.gridSquares[playerPosition] && !this.winner) {
      this.totalClicks += 1;
      this.gridSquares.splice(playerPosition, 1, this.currentPlayer);
      this.winOrLose();
      if(!this.winner) this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  winOrLose(): void {
    let equalAdjecents = null;
    this.winningIndexPatterns.forEach((path: number[]) => {
      const [x, y, z] = path;
      equalAdjecents = this.gridSquares[x] && (this.gridSquares[x] === this.gridSquares[y]) && (this.gridSquares[x] === this.gridSquares[z]);
      if (equalAdjecents) { this.winner = this.gridSquares[x]; this.displayImagePath = "../../assets/Winner.gif"; return;}
    });
    if (!equalAdjecents) this.isGameOver();
  }

  isGameOver(): void {
    this.isDrawn = (this.totalClicks === this.gridSize && !this.winner);
    if (this.isDrawn) this.displayImagePath = "../assets/game-tie.gif";
  }

  initializeGame(): void {
    this.gridSquares = new Array(this.gridSize).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
    this.isDrawn = false;
    this.totalClicks = 0;
    this.displayImagePath = "../../assets/tic-tac-toe.gif";
  }

  playAgain(): void {
    this.initializeGame();
  }
}
