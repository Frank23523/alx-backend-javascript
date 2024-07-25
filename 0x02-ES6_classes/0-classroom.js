/**
 * Represents a class room.
 */
export default class ClassRoom {
  /**
   * Creates a new @see {@link ClassRoom}.
   * @param {Number} maxStudentsSize - The maximum number of
   * students in the class.
   */
  constructor(maxStudentsSize) {
    /* eslint-disable-next-line no-underscore-dangle */
    this._maxStudentsSize = maxStudentsSize;
  }
}
