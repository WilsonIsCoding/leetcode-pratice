function productExceptSelf(nums: number[]): number[] {
    const sum = nums.reduce((acc, crr) => {
        return crr !== 0 ? acc *= crr : acc
    }, 1)
    let ans: number[] = []
    let zeroNum: number = 0
    let idx = nums.indexOf(0)
    if (idx !== -1) {
        zeroNum++
        nums.indexOf(0, idx + 1) !== -1 ? zeroNum += 1 : zeroNum
    }
    if (zeroNum == 1) {
        for (let num of nums) {
            if (num == 0) {
                ans.push(sum)
            } else {
                ans.push(0)
            }
        }
    } else if (zeroNum == 0) {
        for (let num of nums) {
            ans.push(sum / num)
        }
    } else {
        for (let num of nums) {
            ans.push(0)
        }
    }
    return ans
};