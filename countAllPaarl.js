function countAllPaarl(regNum){
    var list = regNum.split(',');
      var newlist = [];
      for (var i = 0; i < list.length; i++)
      {
        var nlist = list[i];
        
        if(nlist.includes('J')){
          newlist.push(nlist.trim());
        }
      }
     return newlist.unshift();
    }
    