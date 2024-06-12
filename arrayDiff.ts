// Note: uses JSON to serialize and deserialize objects, so it's not suitable for functions, undefined, or other non-serializable values
export default function arrayDiff<T>(
  initial: T[], 
  final: T[], 
  { 
    comparator = (a, b) => a.id === b.id,
  }: 
  { 
    comparator: (a: T, b: T) => boolean 
  }
) {
  const added = final.filter(a => !initial.some(b => comparator(a, b)))
  const removed = initial.filter(b => !final.some(a => comparator(a, b)))
  const modified = initial.reduce((acc, a, aIndex) => {
    const b = final.find(b => comparator(a, b))
    if (!b) return acc
    const bIndex = final.indexOf(b)
    const reordered = bIndex !== aIndex
    const updated = JSON.stringify(a) !== JSON.stringify(b)
    acc.push({ 
      initial: a,
      final: b,
      initialIndex: aIndex,
      finalIndex: bIndex,
      reordered, 
      updated 
    })
    return acc
  }, [])

  return { 
    added, 
    removed, 
    modified,
  }
}