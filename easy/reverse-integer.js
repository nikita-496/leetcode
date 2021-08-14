const reverse = x => {
  let output
  let inverted = x.toString().split("").reverse()
  let negative

  switch (x < 0) {
    case true : {
      negative = inverted.pop()
      if (inverted.indexOf("0") === 0)  inverted = inverted.slice(1, inverted.length)
      inverted = [negative, ...inverted] 
      output = parseInt(inverted.join("")) 
    }
    default : {
      if (inverted.indexOf("0") === 0)  inverted = inverted.slice(1, inverted.length)
      output = parseInt(inverted.join(""))
    }
  }
   return output = ((-2)**31 <= output  && output <= 2**31 - 1) ? output : 0
}