//Deep nested search
const find = (searchKey, object) => {
  for (var key in object) {
    if(key === searchKey) {
      //If key matches return objec and stop search
      return object[key]
    } else {
      //Go deeper
      if(typeof object[key] === 'object') {
        var result = find(searchKey, object[key])
        if(result) return result
      }
    }

  }
  //If nothing was fount return null
  return null
}

module.exports = find
