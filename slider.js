function slider()
 {
  $(".slider #1").show("fade",500);
  $(".slider #1").delay(5500).hide("slide",{direction:'left'},500);

  var sc = $(".slider img").size();
  var count = 2;
   
  setInterval(function(){
   $(".slider #"+count).show("slide",{direction:'right'},500);
   $(".slider #"+count).delay(5500).hide("slide",{direction:'left'},500);

   if(count == sc){
    count=1;
   }
   else
   {
    count=count +1;
   }
  },6500);
 }