export default class HashTable {
  constructor() {
    this.array = [];
  }

  hash(key) {
    return key.charAt(0).toLowerCase().charCodeAt(0)-97;
  }

  set(key, value) {
    const index = this.hash(key);
    if (this.array[index] === undefined) {
      this.array[index] = []
    }
    this.array[index].push([key, value]);
  }

  get(key, remove = false) {
    const element = this.hash(key);
    const bucket = this.array[element];
    if (bucket != undefined) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          if(remove) {
            let v = bucket.splice(i, 1); 
            return ("We removed " + v[0]);
          }
          return bucket[i][1];
        }
      }
    }
    return null;
  }

  remove(key) {
    return this.get(key, true);
  }
    
}
    