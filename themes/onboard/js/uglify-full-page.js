function setDimensions(){var a=$(window).height();$(".tronsSlider").css("height",a-50),$(".carousel-inner").css("height",a-50),$(".tron-item").css("height",a-50)}$(function(){$('#module-link[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html, body").animate({scrollTop:a.offset().top},1e3),!1}})}),$(window).scroll(function(){$(document).scrollTop()>50?$("nav").addClass("shrink"):$("nav").removeClass("shrink")}),$(function(){$("#main-content > .row").niceScroll()}),setDimensions(),$(window).resize(function(){setDimensions()});