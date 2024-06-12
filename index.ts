import arrayDiff from "./arrayDiff"

// standard usage
const a = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
const b = [{ id: 2, name: "Bob" }, { id: 3, name: "Charlie" }]
console.log(arrayDiff(a, b, { comparator: (a, b) => a.id === b.id }))

// simple array
const c = [ 'Alice', 'Bob']
const d = [ 'Bob', 'Charlie']
console.log(arrayDiff(c, d, { comparator: (a, b) => a === b }))
