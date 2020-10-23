function superReducedString(s) {

  //**********************************************************//
  //forEach try but not solution. 
 //   let sArray = [...s]
   // let dict = {}
//     sArray.forEach((eachLet, idx, obj) => {
//        //console.log("origi", obj)
//         if(eachLet === sArray[idx+1]){
//              //console.log(obj[idx], "obj[idx]")
//              delete obj[idx] && delete obj[idx+1]
//             //  obj.splice(idx, 1)
//             //  obj.splice(idx+1, 1)
//             //console.log("o", obj)
//         }
//    })
//    // console.log("s", sArray)
//     let joinA = sArray.join("").split(",").join()
//     //.log(joinA)
//     if(joinA.length <= 0){
//         return "Empty String"
//     } return joinA 




    //**********************************************************//
    //     let sArray = [...s]
    //     let dict = {}
        
    // sArray.forEach(eachLet => {
    //     //console.log(dict)
    //     if(!dict.hasOwnProperty(eachLet)){ //if key is empty
    //         dict[eachLet] = 1 //reassign the hash map w the key val pair 
    //         //console.log(dict[eachLet])
    //     }else if(dict[eachLet] === 1){ //if the eachLet is already a key,
    //         dict[eachLet]--
    //     }else if(dict[eachLet]===0){
    //         dict[eachLet]++
    //     }else {
    //         "nothing"
    //     }
    // })

    // console.log(dict)

    // let result = ""
    // for(ele in dict){
    //     if(dict[ele] === 1){
    //         result += ele
    //     }
    // }
    // return result



  //**********************************************************//    
    var arr = s.split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 2);
            i = -1; //bc two element is gone! ohhhh
        }
    }
    if (arr.length === 0) {
        console.log('Empty String');
    } else {
    console.log(arr.join(''));
    }

    

    // //**********************************************************//
    // char[] charArr = s.toCharArray();
    // Stack st = new Stack();
    // int i = 0;
    // while (i < charArr.length) {
    //     if (!st.isEmpty()) {
    //         char ch = (char) st.peek();
    //         if (ch == charArr[i]) {
    //             st.pop();
    //             i++;
    //         } else {
    //             st.push(charArr[i]);
    //             i++;
    //         }
    //     } else {
    //         st.push(charArr[i]);
    //         i++;
    //     }
    // }
    // StringBuilder sb = new StringBuilder();
    // while (!st.isEmpty()) {
    //     char ch = (char) st.pop();
    //     if (sb.length() == 0) {
    //         sb.append(ch);
    //     } else {
    //         sb.insert(0, ch);
    //     }
    // }
    // if (sb.length() > 0) {
    //     return sb.toString();
    // } else {
    //     return "Empty String";
    // }




//**********************************************************//
// function super_reduced_string(s){
//     // Complete this function
//     var chars = s.split('');
//     for (let i = 0; i < chars.length; i++) {
//         if (chars[i] === chars[i+1]) {
//             chars.splice(i, 2);
//             return super_reduced_string(chars.join(''))
//         }
//     }
//     return s.length > 0 ? s : "Empty String";
//  }


}

console.log(superReducedString("aaabccddd"))//abd
//console.log(superReducedString("aa"))//Empty String
//console.log(superReducedString("baab"))//Empty String