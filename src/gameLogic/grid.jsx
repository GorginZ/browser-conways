import Cell from "./cell";

class Grid {

  constructor(){
    this.cellGrid = this.buildGrid();
  }

  buildGrid(rows, columns){
    const cellGrid = [];
    for (let i = 0; i < rows; i++) {
      cellGrid.push(new []());
      for (let j = 0; j < columns; j++) {
        cellGrid[i].push(
          new Cell()
        );
      }
    }
    return cellGrid;
  }

  setElements(listOfrowColumnElements)
  {
       listOfrowColumnElements.ForEach((rowColumn) => {
      this.cellGrid[rowColumn.row][rowColumn.column] = Cell.IsAlive = true;
   
    });
  }
}
export default Grid;

// export const CellState = Object.freeze({
//   Dead = 0,
//   Alive = 1
// });