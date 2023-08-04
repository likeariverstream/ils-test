export const swapElements = (arr: number[][]) => {
    return arr.map((subArr) => {
        return [subArr[1], subArr[0]]
    })
}
