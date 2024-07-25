/**
 * Class representing a classroom.
 */
export default class ClassRoom {
  /**
   * Create a classroom.
   * @param {number} maxStudentsSize - The maximum number of students in the classroom.
   */
  constructor(maxStudentsSize) {
    /**
     * @type {number}
     * @private
     */
    this._maxStudentsSize = maxStudentsSize;
  }
}
