const myUsers = [];

module.exports = class Usuario {
  constructor(n, ln) {
    this.nameU = n;
    this.lastNameU = ln;
  }

  save() {
    myUsers.push(this);
  }

  static fetchAll() {
    return myUsers;
  }
};
