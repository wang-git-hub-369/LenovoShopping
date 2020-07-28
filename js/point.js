$(function(){
	$(".header").load("header.html");
	$(".menu").load("menu.html");
	// 启动轮播
	var mySwiper=new Swiper('.slider',{
		loop:true,//循环模式选择
		 autoplay:true,
		pagination: {
		      el: '.swiper-pagination',
			  clickable :true,
		    },
		navigation:{
			nextEl:'.swiper-button-next',
			prevEl:'.swiper-button-prev',
		}
	});
	$(".floor5").load("footer.html")
	$(window).scroll(function(){
		if($(document).scrollTop()>250){
			$(".floor7 .tiaozhuan").stop().fadeIn(1000)
		}else{
			$(".floor7 .tiaozhuan").stop().fadeOut(1000)
		}
	});
});