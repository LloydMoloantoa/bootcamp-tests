function findItemsOver(itemList,amount){
    var arr = [];
      for(var i=0;i<itemList.length;i++)
      {
        var itemQty = itemList[i].qty;
        if(itemQty > amount)
         {
           arr.push(itemList[i]);
         }
       }
     console.log(arr);
     return arr;
     }