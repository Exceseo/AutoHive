$(function(){

  // Preloder
  $(window).on("load",function(){
    $(".preeloder").delay(600).fadeOut();
  });


  // back to bottom button & fixed manu
    $(".back-to-top").click(function(){
      $("html,body").animate({scrollTop: 0},900);
    });
      
    $(window).scroll(function(){
      let scroling = $(this).scrollTop();
      // console.log(scroling)

      if (scroling >= 190){
        $(".nav-section").addClass("fixed-manu");
      } else{
        $(".nav-section").removeClass("fixed-manu");
      };
      if (scroling >= 430) {
        $(".back-to-top").fadeIn(200);
      } else {
        $(".back-to-top").fadeOut();
      }
    });


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
      autoplay: true,
     });
  

        // feacured section 
        $(".filter-btn").on("click", function () {
          $(".filter-btn").removeClass("bg-red");
          $(".filter-btn").removeClass(".bg-red");
          $(this).toggleClass("bg-red");
         });
        
        var $grid = $('.featured-grid').isotope();

        $('.feature-filetr-btn').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // CounterUP
        $('.counter').counterUp({
          delay: 10,
          time: 2000,
        });


        // Feedback slider
        $(".feedback-left").slick({
          arrows: false,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1198.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            
          ]
         });

});
