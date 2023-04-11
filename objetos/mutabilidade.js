const typeCheck = (type) => {
    const typeString = Reflect.apply(Object.prototype.toString, type, [])
    return typeString.slice(
        typeString.indexOf(' ') + 1,
        typeString.indexOf(']')
      ).toLowerCase()
}

const cloneArray = (element) => {
    if (typeCheck(element) !== 'array') return element
    return element.map(deepClone)
} 

const cloneObject = (element) => {
    if (typeCheck(element) !== 'object') return element
    return Object.fromEntries(
      Object.keys(element).map((key) => [key, deepClone(element[key])])
    )
}

const deepClone = (element) => {
    switch (typeCheck(element)) {
      case 'array':
        return freeze(cloneArray(element))
      case 'object':
        return freeze(cloneObject(element))
      default:
        return element
    }
}

