function isAnagram(str1, str2) {
  let s1 = str1.replace(/\s/g, '').toLowerCase();
  let s2 = str2.replace(/\s/g, '').toLowerCase();

  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');

  return s1 === s2;
}
