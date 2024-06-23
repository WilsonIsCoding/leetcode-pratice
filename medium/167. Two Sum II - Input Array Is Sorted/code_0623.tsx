function twoSum(numbers: number[], target: number): number[] {
    let number1Index: number = 0
    let number2Index: number = 1
    while (numbers[number1Index] + numbers[number2Index] !== target) {
        if (numbers[number1Index] + numbers[number2Index] <= target) {
            number2Index++
        } else {
            number1Index++
            number2Index = number1Index + 1
        }
    }
    return [number1Index + 1, number2Index + 1]
};