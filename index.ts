import arrayDiff from "./arrayDiff"

// standard usage
const initialHumans = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" }]
const finalHumans = [{ id: 2, name: "Blob" }, { id: 3, name: "Charlie" }, { id: 4, name: "David" }]
console.log('diffHumans', arrayDiff(initialHumans, finalHumans, { comparator: (a, b) => a.id === b.id }))

// simple array
const initialFruits = [ 'Apple', 'Blueberry']
const finalFruits = [ 'Blueberry', 'Cherry']
console.log('diffFruits', arrayDiff(initialFruits, finalFruits, { comparator: (a, b) => a === b }))

// exclude modified
const initialCities = [{ id: 1, name: "Atlanta" }, { id: 2, name: "Boston" }, { id: 3, name: "Chicago" }]
const finalCities = [{ id: 2, name: "Boston" }, { id: 3, name: "Chicargo" }, { id: 4, name: "Denver" }]
console.log('diffCities', arrayDiff(initialCities, finalCities, { comparator: (a, b) => a.id === b.id, includeModified: false}))