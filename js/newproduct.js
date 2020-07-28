$(function() {
	//页面加载，公共样式，头部、尾部
	$(".header").load("header.html");
	$(".menu").load("menu.html");
	$(".footer").load("footer.html");
	//轮播图
	var mySwiper = new Swiper('.banner', {
		loop: true, // 循环模式选项
		autoplay: true,
		// effect: "coverflow",
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
	//当鼠标滑过轮播图示，前进，后退按钮显示
	$(".banner").hover(function() {
		$(this).find(".swiper-button-prev").css("display", "block");
		$(this).find(".swiper-button-next").css("display", "block");
	}, function() {
		$(this).find(".swiper-button-prev").css("display", "none");
		$(this).find(".swiper-button-next").css("display", "none");
	});
	// 鼠标进入选件或主机
	var $choose = $(".floor1 .content ul>li");
	$choose.mouseenter(function() {
		$(this).find(".arrowhead").css("display", "block");
	}).mouseleave(function() {
		$(this).find(".arrowhead").css("display", "none");
	});
	//当鼠标点击选件或主机时
	$(".floor1 .content .liebiao ul li").click(function() {
		//找到li的索引
		var idenx = $(this).index();
	
		// $(".floor1 .content ul li .arrowhead").css("display", "block");
		$(".floor1 .content .liebiao ul li").siblings().css({
			"border-bottom-width": "0px",
			"border-bottom-style": "solid",
			"border-bottom-color": " #B1B9C2"
		}).stop();
		$(this).css({
			"border-bottom-width": "5px",
			"border-bottom-style": "solid",
			"border-bottom-color": " #B1B9C2"
		}).stop();

		$(".floor1 .content ul>li").removeClass("pictrueshow");
		$(".floor1 .content .contenter .box").removeClass("pictrueshow");
		$(this).addClass("pictrueshow");
		$(".floor1 .content .contenter .box").eq(idenx).addClass("pictrueshow");
	});

	//当鼠标进入新款时
	/* $(".floor1 .content .contenter .box .computer .com_tab ul li ").hover(function() {
		console.log("zzzz");
	}, function() {
		console.log("aaaa");
	}); */
	// 鼠标进入后，元素里显示的动画效果
	$(".floor1 .content .commer .com_conent").mouseenter(function() {
		$(this).find("a img").animate({
			marginLeft: "-50px"
		});
		$(this).find(".com_conent_com p").animate({
			fontSize: "16px"
		});
		$(this).find(".com_conent_com b").animate({
			fontSize: "22px"
		});
	});
	//当鼠标滑过图片时
	$(".floor1 .content .commer .com_conent").mouseleave(function() {
		$(this).find("a img").animate({
			marginLeft: "-100px"
		});
		$(this).find(".com_conent_com p").animate({
			fontSize: "14px"
		});
		$(this).find(".com_conent_com b").animate({
			fontSize: "20px"
		});

	});
});
