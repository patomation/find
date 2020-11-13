// Deep nested search
export const find = <InputObject extends Record<string, unknown>, ReturnType extends any>(
  searchKey: string,
  inputObject: InputObject
): ReturnType | null => {
  for (var key in inputObject) {
    if (key === searchKey) {
      // If key matches return object and stop search
      return inputObject[key as keyof InputObject] as unknown as ReturnType
    } else {
      // Go deeper
      if (typeof inputObject[key] === 'object') {
        var result = find<Record<string, unknown>, ReturnType>(
          searchKey,
          inputObject[key] as unknown as Record<string, unknown>
        )
        if (result !== null) return result
      }
    }
  }
  // If nothing was fount return null
  return null
}
