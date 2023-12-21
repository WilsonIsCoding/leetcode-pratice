function isAnagram(
  s: string,
  t: string,
  hash1 = 1,
  hash2 = 1,
  MOD = Math.pow(2, 31) - 1
): boolean {
  const prime = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ];
  for (let i = 0; i < Math.max(s.length, t.length); i++) {
    let c1 = s.charCodeAt(i) - 97;
    let c2 = t.charCodeAt(i) - 97;
    hash1 = (hash1 * prime[c1]) % MOD;
    hash2 = (hash2 * prime[c2]) % MOD;
  }
  return hash1 === hash2;
}
