// Add your functions here
function map(source, fun) {
    const map1 = source.map(x => fun(x));
    return map1
}


function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }