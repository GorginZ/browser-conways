import Cell from "./cell";

class Grid {



  constructor(rows, columns){
    this.cellGrid = this.buildGrid(rows, columns);
  }

  buildGrid(rows, columns){
    const cellGrid = [];
    for (let i = 0; i < rows; i++) {
      cellGrid.push([]);
      for (let j = 0; j < columns; j++) {
        cellGrid[i].push(
          new Cell(i,j)
        );
      }
    }
    return cellGrid;
  }

  setElements(arrayOfRowColumnElements)
  {
       arrayOfRowColumnElements.forEach((rowColumn) => {
      this.cellGrid[rowColumn.row][rowColumn.column].IsAlive = true;
   
    });
  }

    render() {
    // this.buildGrid(50, 50);
    // console.log(this.cellGrid);
    // return <div id="grid"> {this.GridSeer()}</div>;
  }
}
export default Grid;

// export const CellState = Object.freeze({
//   Dead = 0,
//   Alive = 1
// });