// Mine
class HashTableMine {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    if (this.data[this._hash(key)]) {
      this.data[this._hash(key)].push([key, value]);
    } else {
      this.data[this._hash(key)] = [[key, value]];
    }
    return console.log(this.data[this._hash(key)]);
  }

  get(key) {
    const result = this.data[this._hash(key)].find(
      (item) => item[0] === key
    )[1];
    console.log(result);
    return result;
  }

  keys() {
    const getAllFirstValueOfArray = (array) =>
      array.reduce((acc, item) => (item ? [...acc, item[0]] : acc), []);

    const result = this.data.reduce(
      (acc, sum) => (sum ? [...acc, getAllFirstValueOfArray(sum)] : acc),
      []
    );

    return result;
  }
}

const myHashTableMine = new HashTableMine(2);
myHashTable.set("grapes", 10000);
alert(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
alert(myHashTable.get("apples"));
myHashTable.set("bear", 9);
alert(myHashTable.get("bear"));
alert(myHashTable.keys());



// ZTM
class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    console.log(this.data.length);
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
myHashTable.keys();
