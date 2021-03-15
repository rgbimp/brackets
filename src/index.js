module.exports = function check(str, bracketsConfig) {
  
  const arrayBrackets = str.split('');
  const leftBrackets = bracketsConfig.map( item => item[0]);
  const rightBrackets = bracketsConfig.map( item => item[1]);
  const temp = [];

  arrayBrackets.forEach(item => { 
    if (rightBrackets.includes(item) && temp.length) {
      const index = rightBrackets.indexOf(item);
      if (leftBrackets[index] === temp[temp.length-1]) temp.pop();
    } else if 
      ( leftBrackets.includes(item) ) {
        temp.push(item);  
      }
  })
  return !temp.length;
}
