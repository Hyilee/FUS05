$(document).ready(function() {
  var box1 = $(".box1");
  var btn = $(".btn");

  btn.on("click", function() {
    box1.toggleClass("box-act");
    //if(box1.hasClass('box-act')){box1.removeClass('box-act');}else{box1.addClass('box-act');}
  });
});
