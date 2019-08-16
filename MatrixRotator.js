const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor(matrix) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate(direction) {
    // do work here

    // must be a valid Direction, see Direction.js
    if (direction === Direction.CW) {
      let arr1 = [];
      let arr2 = [];
      let arr3 = [];
      let arr4 = [];
      let arr5 = [];
      let arr6 = [];
      this.matrix.forEach(e => {
        arr1.push(e[0]);
        arr2.push(e[1]);
        arr3.push(e[2]);
        arr4.push(e[3]);
        arr5.push(e[4]);
      });

      arr1.join("");
      arr1.reverse();
      arr2.join("");
      arr2.reverse();
      arr3.join("");
      arr3.reverse();
      arr4.join("");
      arr4.reverse();
      arr5.join("");
      arr5.reverse();

      arr6.push(arr1, arr2, arr3, arr4, arr5);
      this.matrix = arr6;
      return this.matrix;
    }
    if (direction === Direction.CCW) {
      let arr1 = [];
      let arr2 = [];
      let arr3 = [];
      let arr4 = [];
      let arr5 = [];
      let arr6 = [];
      this.matrix.forEach(e => {
        arr1.push(e[4]);
        arr2.push(e[3]);
        arr3.push(e[2]);
        arr4.push(e[1]);
        arr5.push(e[0]);
      });
      arr6.push(arr1, arr2, arr3, arr4, arr5);
      this.matrix = arr6;
      return this.matrix;
    }
  }
};
