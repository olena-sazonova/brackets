module.exports = function check(str, bracketsConfig) {
    let openBracket = '';
    let closeBracket = '';
    let similarBracket = '';
    let similarOccurence = [];
    for (i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i][0] !== bracketsConfig[i][1]) {
        openBracket = openBracket + bracketsConfig[i][0];
        closeBracket = closeBracket + bracketsConfig[i][1]; 
      } else {
        similarBracket = similarBracket + bracketsConfig[i][0];
        similarOccurence.push(0);
      }
    }
   
    let stack = [];
    for (i = 0; i < str.length; i++) {
  
      let bracket = stack[stack.length - 1];
  
      if (openBracket.indexOf(str[i]) >= 0) {
        stack.push(str[i]);
      } 
      else if (closeBracket.indexOf(str[i]) >= 0) {
        if (stack.length === 0) {
         return false;
        }  
        if (openBracket.indexOf(bracket) !== closeBracket.indexOf(str[i])) {
        return false;
      } 
        stack.pop();
      } 
      else if (similarBracket.indexOf(str[i]) >= 0) {
        if (similarOccurence[similarBracket.indexOf(str[i])] === 0) {
          similarOccurence[similarBracket.indexOf(str[i])] += 1;
          stack.push(str[i]);
        } 
        else {
          if (bracket !== str[i]) {
            return false;
          }
          else {
            stack.pop();
            similarOccurence[similarBracket.indexOf(str[i])] -= 1;
          }
        }
  
      } 
      else {
       return false;
      }
    }
    return stack.length === 0;
}
