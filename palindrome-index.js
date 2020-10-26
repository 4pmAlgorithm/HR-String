function palindromeIndex (s) {

    for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      const stringA = s.slice(0, i).concat(s.slice(i + 1));
      const stringB = s
        .slice(0, s.length - 1 - i)
        .concat(s.slice(s.length - i));
      if (checkPal(stringA)) return i;
      if (checkPal(stringB)) return s.length - 1 - i;
      return -1;
    }
    }
    return -1;
    
    
    function checkPal (string) {
    if(string.slice(0, Math.floor(string.length / 2)) ===
    string
      .slice(Math.ceil(string.length / 2))
      .split('')
      .reverse()
      .join('')) return true
    }
    
    
}
    



//solution
// const checkPal = string => 
// string.slice(0, Math.floor(string.length / 2)) ===
// string
//   .slice(Math.ceil(string.length / 2))
//   .split('')
//   .reverse()
//   .join('');

//     for (let i = 0; i < s.length / 2; i++) {
//         if (s[i] !== s[s.length - 1 - i]) {
//         const stringA = s.slice(0, i).concat(s.slice(i + 1));
//         const stringB = s
//             .slice(0, s.length - 1 - i)
//             .concat(s.slice(s.length - i));
//             if (checkPal(stringA)) return i;
//             if (checkPal(stringB)) return s.length - 1 - i;
//             return -1;
//         }
//     }

// return -1;


//1. basecase: middle character. if the str.length is less than 1, return true.
//2. define first character
//3. define the last character
//4. compare the first and the last
//5. if it's true, return true then write recursive line
//6. if it's false, return false

const isPalindrome = (originalStr) => {
    let str = originalStr.toUpperCase();
    
    if(str.length <= 1){
      return true
    }
    
    let first = str.slice(0, 1)
    let last = str.slice(-1)
    console.log('first', first)
    console.log('last', last)
    
    if(first === last){
      return isPalindrome(str.slice(1,-1))
    }else{
      return false
    }
  }
  