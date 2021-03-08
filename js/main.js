// senza animazione e con classe "active" 

// $(document).ready(function(){
//   var act = $(".act");

//   act.hover(function(){
//     $(this).find(".drop").toggleClass("active");      
//   });
// });  




// con animazione - senza usare classe "active" 

$(document).ready(function () {
  var act = $(".act");

  act.hover(function(){
    $(this).find('.drop').slideDown(200);
  },
  function(){
    $(this).children('.drop').slideUp(200);
  }
  );
});