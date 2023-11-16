function isPalindrome(s: string): boolean {
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
    let halfDigit: number = Math.floor(s.length / 2)
    return s.substring(0, halfDigit) == s.substring(s.length - halfDigit).split("").reverse().join('')
};