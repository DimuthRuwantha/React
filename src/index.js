import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  
  render() {
    return (
      <button 
        className="square" 
        onClick={() => this.props.onClick()} 
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }
  renderSquare(i) {
    return (
      <Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)} />
    );
  }

  renderRow(j){
    return(
      <div className="board-row">
        {this.renderSquare(0+j*3)}
        {this.renderSquare(1+j*3)}
        {this.renderSquare(2+j*3)}
      </div>
    )
  }
  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderRow(0)}
        </div>
        <div className="board-row">
          {this.renderRow(1)}
        </div>
        <div className="board-row">
          {this.renderRow(2)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
