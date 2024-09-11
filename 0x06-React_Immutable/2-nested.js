export default function accessImmutableObject(object, array) {
  let currentValue = object;

  for (let i = 0; i < array.length; i++) {
    const key = array[i];
    if (!currentValue.has(key)) {
      return undefined;
    }
    currentValue = currentValue.get(key);
  }

  return currentValue;
}
