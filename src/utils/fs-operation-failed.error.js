export default class FsOperationFailedError extends Error {
  constructor(message = 'FS operation failed') {
    super(message);
    this.name = this.constructor.name;
  }
}