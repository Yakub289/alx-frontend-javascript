export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter and Setter for Code
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('TypeError: Code must be a string');
    }
    this._code = value;
  }

  // Getter and Setter for Name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    this._name = value;
  }

  // Non-Static Method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
