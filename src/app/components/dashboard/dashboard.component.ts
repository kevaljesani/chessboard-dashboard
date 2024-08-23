import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  board: string[][] = [];

  constructor() {
    this.initializeBoard();
  }

  initializeBoard(): void {
    for (let row = 0; row < 8; row++) {
      this.board[row] = [];
      for (let col = 0; col < 8; col++) {
        const isWhite = (row + col) % 2 === 0;
        this.board[row][col] = isWhite ? 'white' : 'black';
      }
    }
  }

  toggleColor(row: number, col: number): void {
    if (this.board[row][col] === 'white' || this.board[row][col] === 'black') {
      this.board[row][col] = 'red'; 
    }
     else {
      const isWhite = (row + col) % 2 === 0;
      this.board[row][col] = isWhite ? 'white' : 'black';
    }
  }
}
