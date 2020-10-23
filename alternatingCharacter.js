function alternatingCharacters(s) {
    let count = 0;

    //for loop
    // for(let i = 0; i < s.length; i++){   
    //     if(s[i] === s[i+1]){
    //         count++
    //         }
    // }

    // let i = s.length-1
    // while(i >= 0){
    //     if(s[i] === s[i+1]){
    //         count++
    //     }
    //     i--
    // }


    //forEach
    [...s].forEach((eachLet, idx) => {

        if(eachLet === s[idx-1]){
            count++
        }
    })

    return count
}


console.log(alternatingCharacters("AABAABBBA"))