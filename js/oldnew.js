$(function() {
	$(".header").load("header.html");
	$(".menu").load("menu.html");
	$(".footer").load("footer.html");
	//轮播图
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: true, //等同于以下设置
		loop: true, // 循环模式选项

		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},

		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	//商品链接
	$(".huishou .item").click(function() {
		$(window).attr("location", "oldnew.html");
	});
	$(".buzhou .btn button").click(function() {
		$(window).attr("location", "login.html");
	});
	$(".goods .down ul li").click(function() {
		$(window).attr("location", "productDetail.html");
	});
	//f分页
	var $pagebtn = $(".goods .down .number");
	var $goods = $(".goods .down>ul");
	$pagebtn.on("click", ".item", function() {
		var idx = $(this).index();
		$goods.eq(idx).css("display", "block");
		$goods.eq(idx).siblings("ul").css("display", "none");
	});
});
