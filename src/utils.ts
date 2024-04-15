//https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
export const choice = (arr: any[]) => {
  //returns a random element from the array
  if (arr.length < 1) throw new Error("UTIL ERROR: choice() given empty list")
  return arr[Math.floor(Math.random() * arr.length)]
}