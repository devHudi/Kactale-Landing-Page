$(document).ready(function() {
  var carousel = {
    curNum: 1,
    data: [
      ["http://placehold.it/1000x1000?text=sample_image1", "HOVER TEXT", "Lorem ipsum dolor sit amet, consectetur adipiscing elit<br>laboris nisi ut aliquip ex ea commodo consequat."],
      ["http://placehold.it/1000x1000?text=sample_image2", "HOVER TEXT", "Lorem ipsum dolor sit amet, consectetur adipiscing elit<br>laboris nisi ut aliquip ex ea commodo consequat."]
    ],

    fadeImage(num) {
      $("#intro .description").html(this.data[num - 1][2]);
      $("#intro .image-container .image").css("background-image", "url(" + this.data[num - 1][0] + ")");
      $("#intro .image-container .image .text").text(this.data[num - 1][1]);
    }
  }

  function scrollTo(id) {
    var scrollPosition = $("#" + id).offset().top - $("nav").height();

    $("html").animate({
      scrollTop:scrollPosition
    }, 600);
  }

  carousel.fadeImage(1);

  $('nav').affix({
    offset:{
      top:200
    }
  });

  $("#home .btn-contact").click(function() {
    scrollTo("contact");
  });

  $("li").click(function() {
		scrollTo($(this).attr("data-target"));
	});

  /*$("button.ddiyong").click(function() {
    $("html").animate({
      scrollTop:$(document).height()
    }, 600, "easeInQuad", function() {
      $("html").animate({
        scrollTop:0
      }, 1500, "easeOutBounce", function() {
        alert("띠용?");
      });
    });
  });*/

  $(".btn-container button").click(function() {

    $(".btn-container button").removeClass("active");
    $(this).addClass("active");

    carousel.fadeImage($(this).attr("data-num"));

    console.log($(this).attr("data-num"));


  });


});
