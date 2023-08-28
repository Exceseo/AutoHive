$(function(){

    // nav manu toggle
    $(".mobile-menu-toggle").on("click", function () {
        $(".popup-box-active").fadeToggle();
      });
    
      $(".popup-box-active .nav-manu ul li a").each(function () {
        $(this).on("click", function () {
        $(this).siblings('ul').slideToggle();
        });
      });
      
      $(".popup-box-active .nav-manu ul li .parrentonee").on("click", function () {
        $("#sub-icone1").toggleClass("arrowm-down");
        });

      $(".popup-box-active .nav-manu ul li .parrenttow").on("click", function () {
        $(".sub-icone2").toggleClass("arrowm-down");
        });
      $(".popup-box-active .nav-manu ul li .parentthere").on("click", function () {
        $("#sub-icone3").toggleClass("arrowm-down");
        });
      

});

