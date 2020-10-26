// input: ("Always-Look-on-the-Bright-Side-of-Life", 5)
// output: Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj




//10/23/2020 7pm-11pm , 10/24 10:30 - 11:50am
function caesarCipher(s, k) {

    if(k===0){
        return s
    }

    let dict = {}
    let upDict = {}

    let abc = "abcdefghijklmnopqrstuvwxyz".split("")
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

     if(k > abc.length){
      k =  k % 26
        }
    
    //console.log("::::::;", abc.length)
    //console.log("::splice::", 
    //abc.push()

    abc.forEach((eachLet, idx) => {
        if(idx+k >= abc.length){
            dict[eachLet] = abc[-26+idx+k]
        }else  dict[eachLet] = abc[idx+k]
    })

    upper.forEach((each, i) => {
        if(i+k >= upper.length){
            upDict[each] = upper[-26+i+k]
        }else  upDict[each] = upper[i+k]
    })


    abc.splice(0, k).forEach(ele =>
        abc.push(ele))

    upper.splice(0, k).forEach(ele =>
        upper.push(ele))

    //console.log(dict)
   // console.log(upDict)

    let arr = [...s]
    let result = []
    arr.forEach((ele) => {
        if(abc.includes(ele)){
        result.push(dict[ele])
        }else if(upper.includes(ele)){
            result.push(upDict[ele])
        }else{
            result.push(ele)
        }
    
    })
    let whole = [...result]
    return whole.join("")
}

///**************************************************************/
///********************     recursion ***************************/
///**************************************************************/
// function caesarCipher(s, k) {
//     let charset = "abcdefghijklmnopqrstuvwxyz";
//     let rot = k % charset.length;
//     let charsetRot = charset.slice(rot) + charset.slice(0, rot);
//     charset += charset.toUpperCase();
//     charsetRot += charsetRot.toUpperCase();
//     const m = new Map([...charset].map((v, i, a) => [charset[i], charsetRot[i]]));
//     return [...s].map(v => m.get(v) || v).join("");
// }





///**************************************************************/
///********************    for loop   ***************************/
///**************************************************************/
// function caesarCipher(s, k) {
//     let res = []
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     let upC = alphabet.toUpperCase() 
//     let alphabetArr = alphabet.split('')
    
//     console.log(upC)
//     console.log(":::m", alphabetArr)
//     console.log(alphabet.length)
//     console.log(k % alphabet.length)

//     if (k > alphabet.length) {
//         k = k % alphabet.length
//     }

//     alphabetArr.push(alphabetArr.splice(0, k).join(""))/////

//     console.log(alphabetArr)

//     let rAlphabet = alphabetArr.join("")
//     let rU = rAlphabet.toUpperCase("")

//     console.log("mA", rAlphabet)
//     console.log(rU)

//     for (let i = 0; i < s.length; i++) {

//         console.log(":::::", rAlphabet[alphabet.indexOf(s[i])])
//         console.log(s[i])

//         if (rAlphabet[alphabet.indexOf(s[i])] !== undefined) {

//             res.push(rAlphabet[alphabet.indexOf(s[i])])
//         } else if (rU[upC.indexOf(s[i])] !== undefined) {
//             res.push(rU[upC.indexOf(s[i])])
//         } else {
//             res.push(s[i])
//         }
//     }

//     return res.join("")

// }


console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5))
//Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj