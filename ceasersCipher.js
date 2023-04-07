function rot13(str) {
  const alph =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
    const alph13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    let result = []
    for ( let i = 0; i < str.length; i++){
      for ( let q = 0; q < alph.length; q++){
        if (str[i] === alph[q]){
          result.push(alph13[q]);
        }
      }
    }
    return result.join("")
}
rot13("SERR PBQR PNZC");
