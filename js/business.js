$(function() {
	$(".header").load("header.html");
	$(".menu").load("menu.html");
	$(".footer").load("footer.html");
	//鼠标进入轮播图出现按钮,厉害则隐藏
	$(".banner").hover(function() {
		$(this).find(".swiper-button-prev").css("display", "block");
		$(this).find(".swiper-button-next").css("display", "block");
	}, function() {
		$(this).find(".swiper-button-prev").css("display", "none");
		$(this).find(".swiper-button-next").css("display", "none");
	});
	//轮播图
	var mySwiper = new Swiper('.banner', {
		loop: true, // 循环模式选项
		autoplay: true,
		effect: "fade",
		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	//定时器----第一层
	var starttime = new Date("2020/6/30");
	setInterval(function() {
		var nowtime = new Date();
		var time = starttime - nowtime;
		var hour = parseInt(time / 1000 / 60 / 60 % 12);
		var minute = parseInt(time / 1000 / 60 % 60);
		var seconds = parseInt(time / 1000 % 60);
		if (hour >= 10) {
			$(".floor1 .floor1-lft div:eq(3) span:eq(0)").text(hour);
		} else {
			$(".floor1 .floor1-lft div:eq(3) span:eq(0)").text("0" + hour);
		}
		if (minute >= 10) {
			$(".floor1 .floor1-lft div:eq(3) span:eq(1)").text(minute);
		} else {
			$(".floor1 .floor1-lft div:eq(3) span:eq(1)").text("0" + minute);
		}
		if (seconds >= 10) {
			$(".floor1 .floor1-lft div:eq(3) span:eq(2)").text(seconds);
		} else {
			$(".floor1 .floor1-lft div:eq(3) span:eq(2)").text("0" + seconds);
		}
	}, 1000);
	//鼠标滑过颜色变浅
	$(".items").find(".items-bottom").find("img").hover(function() {
		$(this).css("opacity", "0.8");
	}, function() {
		$(this).css("opacity", "1");
	});
	$(".items").find(".items-nav-top").children("div").hover(function() {
		$(this).css("opacity", "0.8");
	}, function() {
		$(this).css("opacity", "1");
	});
	$(".items").find(".items-nav-bottom").children("div").hover(function() {
		$(this).css("opacity", "0.8");
	}, function() {
		$(this).css("opacity", "1");
	});
	
	//第一层的商品绿色覆盖遮罩
	var $imgpic=$(".huiyi .bottom .item").not(".itt");
	$imgpic.hover(function(){//鼠标滑过
		$(this).children("a").children().css("display","block");
		$(this).children(".intro").css("display","none");
	},function(){//鼠标离开
		$(this).children("a").children().css("display","none");
		$(this).children(".intro").css("display","block");
	});
	//点击商品，连接页面
	$(".items .items-nav-top").click(function(){
		$(window).attr("location","productDetail.html");
	});
	$(".items .items-nav-bottom").click(function(){
		$(window).attr("location","productDetail.html");
	});
	$(".item .item-nav-top").click(function(){
		$(window).attr("location","productDetail.html");
	});
	$(".item .item-nav-bottom").click(function(){
		$(window).attr("location","productDetail.html");
	});
	//回到顶部动画
	var $arrow = $(".floor11 .down a:last");
	$arrow.click(function() {
		$("html,body").animate({
			scrollTop: '0px'
		}, 800);
	});
	//二级菜单
	$(".banner .shop_banner_n .list_nav ul li .list_name").hover(function() {
		$(this).find(".list_cont").css("display", "block");
		$(this).siblings().find(".list_cont").css("display", "none");
	}, function() {
		$(this).find(".list_cont").css("display", "none");
	});
});
