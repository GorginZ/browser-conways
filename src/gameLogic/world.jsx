import Grid from "./grid";
import React, { Component } from "react";

import RowColumn from "./rowColumn";

class World extends Component {
  constructor(props) {
    super(props);
    this.rows = props.rows;
    this.columns = props.columns;
    this.grid = this.BuildWorld(this.rows, this.columns);
  }

  BuildWorld(rows, columns) {
    this.grid = new Grid(rows, columns);
    return this.grid;
  }

  IsLiveCell(cell) {
    if (cell.isAlive) {
      return true;
    } else {
      return false;
    }
  }

  GetListOfCoordinatesForThisCellsNeighbours(cell) {
    let leftNeighbour =
      cell.column === 0 ? this.grid.RowCount() - 1 : cell.column - 1;
    let rightNeighbour =
      cell.column === this.grid.ColumnCount() - 1 ? 0 : cell.column + 1;
    let upNeighbour = cell.row === 0 ? this.grid.RowCount() - 1 : cell.row - 1;
    let downNeighbour =
      cell.row === this.grid.RowCount() - 1 ? 0 : cell.row + 1;

    let neighbourList = [
      new RowColumn(cell.row, rightNeighbour),
      new RowColumn(cell.row, leftNeighbour),

      new RowColumn(upNeighbour, cell.column),
      new RowColumn(downNeighbour, cell.column),

      new RowColumn(upNeighbour, rightNeighbour),
      new RowColumn(upNeighbour, leftNeighbour),

      new RowColumn(downNeighbour, rightNeighbour),
      new RowColumn(downNeighbour, leftNeighbour),
    ];

    return neighbourList;
  }

  LiveNeighbourCount(neighbourList) {
    let count = 0;

    neighbourList.forEach((cell) => {
      if (this.IsLiveCell(this.grid[(cell.Row, cell.Column)])) {
        count++;
      }
    });

    return count;
  }

  CellsToMakeAliveOnTick() {
    let coordinatesOfCellsToAlive = [];

    for (let row = 0; row < this.grid.RowCount(); row++) {
      for (let column = 0; column < this.grid.ColumnCount(); column++) {
        let neighboursList = this.GetListOfCoordinatesForThisCellsNeighbours(
          row,
          column
        );
        let numberOfLiveNeighbours = this.LiveNeighbourCount(neighboursList);

        if (
          this.IsLiveCell(this.grid[(row, column)]) &&
          (numberOfLiveNeighbours === 3 || numberOfLiveNeighbours === 2)
        ) {
          coordinatesOfCellsToAlive.push(new RowColumn(row, column));
        }
        if (
          !this.IsLiveCell(this.grid[(row, column)]) &&
          numberOfLiveNeighbours === 3
        ) {
          coordinatesOfCellsToAlive.push(new RowColumn(row, column));
        }
      }
    }
    return coordinatesOfCellsToAlive;
  }

  Tick() {
    let listOfCoordinatesToMakeAlive = [];
    listOfCoordinatesToMakeAlive = this.CellsToMakeAliveOnTick();

    this.grid.setElements(listOfCoordinatesToMakeAlive);
    console.log("in tick");
  }

  VisualizeGridInConsole(grid) {
let stringGrid = new String;
    
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (grid.cellGrid[(i, j)].IsLiveCell === true) {
          stringGrid += "X";
        } else {
          stringGrid += "O";
        }
      }
      stringGrid += "\n";
    }
    return stringGrid;
  }

  render() {
    this.BuildWorld(10, 10);
    console.log(this.grid.cellGrid[0][0]);
    console.log(this.VisualizeGridInConsole(this.grid));


    this.grid.setElements([new RowColumn(0,0), new RowColumn(0,1), new RowColumn(0,2)]);
        console.log(this.grid.cellGrid[0][0]);

console.log(this.VisualizeGridInConsole(this.grid));
    return <div>Hello world</div>;
  }
}

export default World;
