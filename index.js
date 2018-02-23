function theBeatlesPlay(mus,ins){
  var tmpArr=[];
  for(let i=0;i<mus.length;i++){
    tmpArr.push(mus[i]+" "+ins[i])
  }
  return tmpArr
}