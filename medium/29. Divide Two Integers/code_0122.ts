function divide(dividend: number, divisor: number): number {
    if (dividend == -2147483648 && divisor == -1) return 2147483647
    let absDividend = Math.abs(dividend)
    let absDivisor = Math.abs(divisor)
    let abs = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)
    let result = divideHandler(absDividend, absDivisor)
    return abs ? -result : result
};
function divideHandler(remain: number, divisor: number) {
    if (remain < divisor) return 0
    let count = 1;
    let div = divisor;
    while (div < remain - div) {
        count += count;
        div += div
    }
    return count + divideHandler(remain - div, divisor)
}