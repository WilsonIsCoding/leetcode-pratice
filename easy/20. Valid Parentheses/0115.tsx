function isValid(s: string): boolean {
    let stack: string[] = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ')' || s[i] == ']' || s[i] == '}') {
            if (s[i] == ')' && stack[stack.length - 1] == '(') {
                stack.pop()
            } else if (s[i] == ']' && stack[stack.length - 1] == '[') {
                stack.pop()
            } else if (s[i] == '}' && stack[stack.length - 1] == '{') {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(s[i])
        }
    }
    return stack.length == 0
};