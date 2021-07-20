function totalPhoneBill(str){
    var list = str.split(',');
     var cost = 0;
     for (var i = 0; i < list.length; i++)
     {
        //list[i].trim();
       if(list[i].trim() == 'call')
       {
         cost = cost + 2.75;
       }
       else 
       {
         cost = cost + 0.65;
       }
     }
    
     return 'R' + cost.toFixed(2);
   }