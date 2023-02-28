module.exports = function check(str, bracketsConfig) {
  // your solution
  const stack = [];

  let stackTop;
  
  const isStackEmpty = (stack) => {
    if (stack.length === 0) {
      return true;
    }
  }

  const isStrElementOpenBracket = (strElement) => {
    let result;
    const hasOpenBracket = (element) => {
      if (strElement === element[0]) {
        result = true;
      }
    }
  
    bracketsConfig.forEach(hasOpenBracket);
  
    return result;
  }

  const isFirstBracketClosing = (strElement) => {
    let result;

    const hasClosingBracket = (element) => {
      if (strElement === element[1]) {
        result = true;
      }
    }
    bracketsConfig.forEach(hasClosingBracket);

    if (result === true && isStackEmpty(stack) === true) {
      return true;
    }
  }

  const compareClosingAndOpenBracket = (strElement) => {
    let result;

    const getPairBracket = (element) => {
      if (strElement === element[1]) {
        result = element[0];
      }
    }
    
    bracketsConfig.forEach(getPairBracket);
    return result;
  }

  
  
  [...str].forEach((bracket, index, array) => {
    // console.log(`********stack on startEach = ${stack} index = ${index} of ${array.length-1}`);
    // console.log(`start bracket = ${bracket} index = ${index} of ${array.length-1}`);
    stackTop = stack.at(-1);

    if (bracket !== '|') {
      if (isFirstBracketClosing(bracket)) {
        stack.push(bracket);
      }
    }
    
    if (stackTop) {
      if (stackTop === compareClosingAndOpenBracket(bracket)) {
        // console.log(`compareClosingAndOpenBracket = ${compareClosingAndOpenBracket(bracket)} index = ${index} of ${array.length-1}`);
        stack.pop();
        // console.log(`after del compareClosingAndOpenBracket stack = ${stack} index = ${index} of ${array.length-1}`);
        return;
      }
    }

    if (isStrElementOpenBracket(bracket)) {
      // console.log(`isStrElementOpenBracket bracket = ${bracket} index = ${index} of ${array.length-1}`);
      stack.push(bracket);
      // console.log(`stack = ${stack}`);
    } 
  })
  
  if (isStackEmpty(stack)) {
    // console.log(`isStackEmpty = ${isStackEmpty(stack)}`);
    // console.log(`isStackEmpty stack = ${stack}`);
    return true;
  } else {
    return false;
  }
}
