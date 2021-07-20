function countAllFromTown(regNum,town){
    var list = regNum.split(',');
      var newlist = [];
      for (var i = 0; i < list.length; i++)
      {
        var nlist = list[i];
        
        if(nlist.includes(town)){
          newlist.push(nlist.trim());
        }
      }
     return newlist.unshift();
     // console.log(newlist.unshift());
    }