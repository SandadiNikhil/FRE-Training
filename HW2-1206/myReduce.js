Array.prototype.myReduce = function (fn, initacc) {
   
    const length = this.length;
  
    let acc;
    let index;
  
    if (initacc === undefined) {
      acc = this[0];
      index = 1;
    } else {
      acc = initacc;
      index = 0;
    }
  
    for (let i = index; i < length; i++) {
      if (i in this) {
        acc = fn(acc, this[i], i, this);
      }
    }
  
    return acc;
  };

 //example
  const arr = [1, 3, 5, 7];
  const sum = arr.myReduce((acc, val) => acc + val, 0);
  console.log(sum); // 16
  