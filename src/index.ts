export function find (key: string, inputObject?: any): any
export function find<T> (key: string, inputObject?: any): T
export function find<T, O extends { [key: string]: any }> (key: string, inputObject?: O): T

/**
 * Deep nested search
 * @param searchKey string key we are looking for
 * @param inputObject
 */
export function find <T extends any, O extends {}> (
  searchKey: string,
  inputObject: O | null | undefined
): T | null {
  for (var key in inputObject) {
    if (key === searchKey) {
      // If key matches return object and stop search
      return inputObject[key] as unknown as T
    } else {
      // Go deeper
      if (typeof inputObject[key] === 'object') {
        var result = find<T, {}>(
          searchKey,
          inputObject[key]
        )
        if (result !== null) return result
      }
    }
  }
  // If nothing was fount return null
  return null
}
