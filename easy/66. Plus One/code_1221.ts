function plusOne(digits: number[]): number[] {
    let digitsLen: number = digits.length;
    digits[digitsLen - 1] += 1;
    while (digits[digitsLen - 1] >= 10) {
        digits[digitsLen - 1] = 0
        digitsLen -= 1
        if (digits[digitsLen - 1] == undefined) {
            digits.unshift(1)
        } else {
            digits[digitsLen - 1] += 1
        }
    }
    return digits
};