function findItemsOver20(itemList){
    var arr = [];
     for(var i=0;i<itemList.length;i++)
     {
       var itemQty = itemList[i].qty;
       if(itemQty > 20)
        {
          arr.push(itemList[i]);
        }
      }
    return arr;
    }
  
 
   