function alternatingCharacters(s) {
    
    for(let i = 0; i < s.length; i++){
        let count = 0;

        if(s[i] === s[i+1]){
            console.log(":::", s[i], s[i+1])
            count++
            console.log("slice", s.slice(i+1,i+2))
            s.slice(i+1,i+2)
            console.log("s", s)
            }
        return count
        //console.log(count)
    }

}


