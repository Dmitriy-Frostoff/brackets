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
      if (strElement === element[0]) {
        result = element[1];
      }
    }
  
    bracketsConfig.forEach(getPairBracket);
  
    return result;
  }

  
  
  [...str].forEach(bracket => {
    stackTop = stack.at(-1);

    if (isFirstBracketClosing(bracket)) {
      return false;
    }
    
    if (isStrElementOpenBracket(bracket)) {
      stack.push(bracket);
    } else if(stackTop === compareClosingAndOpenBracket(bracket)) {
      stack.pop();
    }

  })
  
  if (isStackEmpty) {
    return true;
  } else {
    return false;
  }
}
