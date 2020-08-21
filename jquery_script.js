var destinations = [
 {destination : "Egypt", security:"medium" , facilities: "medium" ,attraction:"pyramids" ,meanPrice:"50$"}
,{destination : "Thailand",security:"medium" , facilities:"low" , attraction:"bankok streets" ,meanPrice:"30$"  }
,{destination : "Peru",security:"medium" , facilities:"low" , attraction:"Macchu Piccu" ,meanPrice:"20$"}
,{destination : "Italy",security:"high" , facilities:"hight" ,attraction:" theatre of Rome" ,meanPrice:"80$"}
,{destination : "Brazil",security:"very low" , facilities:"medium",attraction:"coppa cabana"  ,meanPrice:"30$"}
,{destination : "China",security:"medium" , facilities:"medium" ,attraction:"great wall" ,meanPrice:"25$"}
,{destination : "England",security:"high" , facilities:"high",attraction:"big ben"  ,meanPrice:"80$"}
,{destination :"France",security:"high" , facilities:"high",attraction:"eiffel tower"  ,meanPrice:"90$"}
,{destination : "USA",security:"medium" , facilities:"high",attraction:"white house"  ,meanPrice:"70$"}
,{destination : "India",security:"medium" , facilities:"low",attraction:"taj mahal"  ,meanPrice:"12$"}
,{destination : "Tunisia",security:"medium" , facilities:"medium" , attraction:"sun&sea"  ,meanPrice:"40$"}
];

function display(element){
  return  element.destination +" has " + element.facilities +   " facilities " + element.security + " security and  among  its most attractive attractions  is " +element.attraction+ " ,the mean price of B&B room is " + element.meanPrice+ " for pictures gallery please click on its main attraction below . "
}
$(document).ready(function() {
$('#Egypt').click(function() {

    var linkText = display(destinations[0]);
$('#display').text(linkText);
});

})


function display(element){
  return  element.destination +" has " + element.facilities +   " facilities " + element.security + " security and  among  its most attractive attractions  is " +element.attraction+ " ,the mean price of B&B room is " + element.meanPrice+ " for pictures gallery please click on its main attraction below . "
}
$(document).ready(function() {
$('#Thailand').click(function() {

    var linkText = display(destinations[1]);
$('#display').text(linkText);

});

})


$(document).ready(function() {
$('#Peru').click(function() {

    var linkText = display(destinations[2]);
$('#display').text(linkText);
});

})


$(document).ready(function() {
$('#Italy').click(function() {

    var linkText = display(destinations[3]);
$('#display').text(linkText);
});

})

$(document).ready(function() {
$('#Brazil').click(function() {

    var linkText = display(destinations[4]);
$('#display').text(linkText);
});

})

$(document).ready(function() {
$('#China').click(function() {

    var linkText = display(destinations[5]);
$('#display').text(linkText);
});

})

$(document).ready(function() {
$('#England').click(function() {

    var linkText = display(destinations[6]);
$('#display').text(linkText);
});

})

$(document).ready(function() {
$('#France').click(function() {

    var linkText = display(destinations[7]);
$('#display').text(linkText);
});

})

$(document).ready(function() {
$('#USA').click(function() {

    var linkText = display(destinations[8]);
$('#display').text(linkText);
});

})


$(document).ready(function() {
$('#India').click(function() {

    var linkText = display(destinations[9]);
$('#display').text(linkText);
});

})

$(document).ready(function() {
$('#Tunisia').click(function() {

    var linkText = display(destinations[10]);
$('#display').text(linkText);
});

})

$(document).ready(function(){
$("#but").click(function(){
        var comment=$('#com').val();
        var name=$('#user').val();
        var newdiv=$('<div></div>')
        
        newdiv.text(name+" : "+comment)
        newdiv.appendTo($('#comments'))
        
      })
})




 

  
        

    
 $(document).ready(function(){
 
   

    $(".styleimg").on("mouseover",function(){
$(".styleimg").css({"cursor":"pointer","border":"5px solid rgba(19, 176, 190, 1)"})
      
  })
 })


 $(document).ready(function(){
 
   

    $(".styleimg").on("mouseenter",function(){
     $(this).css({"cursor":"pointer","border":"3px solid green"})
      
    })
})

 $(document).ready(function(){

  
      $(".styleimg").on("mouseenter",function(){
        var imgurl=$(this).attr("src")
         $("#mainegypt").attr("src",imgurl) 
    })
 })
     