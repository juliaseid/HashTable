import HashTable from '../src/hash-table.js';

describe('HashTable', () => {

  let hashTable = new HashTable();

  afterEach(() => {
    hashTable = new HashTable();
  });

  test('should instantiate a hash with an empty array', () => {
    expect(hashTable.array).toEqual([]);
  });

  test('should return a number representation of a letter', () => {
    expect(hashTable.hash("Alaric")).toEqual(0);
    expect(hashTable.hash("zygorth")).toEqual(25);
  });

  test('should correctly set a key-value pair in a hash table', () => {
    hashTable.set("John", "Lead Singer");
    expect(hashTable.array[9]).toEqual([["John", "Lead Singer"]]);
  });

  test ('should correctly get a key-value pair from a hash table', () => {
    hashTable.set("John", "Lead Singer");
    hashTable.set("Jane", "Fan");
    expect(hashTable.get("John")).toEqual("Lead Singer");
  });

  test('should return null if the bucket has no values, or if that specific value does not exist', () => {
    expect(hashTable.get("John")).toEqual(null);
  });

  test('should return false if a key-value pair does not exist', () => {
    expect(hashTable.remove("Peter")).toEqual(null);
  });

  test('should properly remove a key-value pair from the hashTable', () => {
    hashTable.set("Billy Shears", " fake Paul");
    hashTable.set("Barbra", "song subject");
    expect(hashTable.remove("Billy Shears")).toEqual(true);
  });


});