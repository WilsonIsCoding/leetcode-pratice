function hIndex(citations: number[]): number {
    let sortCitation: number[] = citations.sort((a, b) => {
        return a - b
    })
    let count: number = 1;
    // [1, 1, 3]
    // [0, 1, 3, 5, 6]
    while (count <= sortCitation.length) {
        let sliceArr: number[] = sortCitation.slice(-count);
        for (let i: number = 0; i < sliceArr.length; i++) {
            if (count > sliceArr[i]) {
                return count - 1;
            }
        }
        count++;
    }
    return citations.length
};