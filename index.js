import EE from 'EventEmitter'

export default class EventEmitter extends EE {
  static DefaultEmitter = new EventEmitter();
  
  _typeID = 0;

  makeType(type) {
    return `${type ? type : ''}$${this._typeID++}`;
  }
}

const DefaultEmitter = EventEmitter.DefaultEmitter;
export {DefaultEmitter};