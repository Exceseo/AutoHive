$(function(){

    // nav manu toggle
    $(".mobile-menu-toggle").on("click", function () {
      $(".popup-box-active").toggleClass("open").fadein();
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



        // hero section button 
      $(".hero-btn").on("click", function () {
        $(".hero-btn").removeClass("activebtn");
        $(".hero-btn").removeClass("actived");
        $(this).toggleClass("activebtn");
       });

       

     // Way choose us slick slider
     $('.wc-main-slick').slick({
      arrows: false,
      dots: true,
      
     });
  

        

});
