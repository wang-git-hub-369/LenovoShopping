$(function() {
	//页面加载。公共样式，头部、尾部
	$(".header").load("header.html");
	$(".menu").load("menu.html");
	$(".footer").load("footer.html");

	// 当鼠标滑过联想智选APP，显示一个二维码
	$(".floor1 .main_right .app a").hover(function() {
		$(".floor1 .main_right .app img").css("display", "block");
	}, function() {
		$(".floor1 .main_right .app img").css("display", "none");
	});
	// 当鼠标滑过立即购买时，显示当前商品的信息
	$(".floor3 .container .floor3_title .txt_right ul li:first-child").hover(function() {
		$(".floor3 .container .floor3_title .xiala").css("display", "block");
	}, function() {
		$(".floor3 .container .floor3_title .xiala").css("display", "none");
	});
	//轮播图
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: true, //等同于以下设置
		loop: true, // 循环模式选项
		slidesPerView: 'auto',
		loopedSlides: 5,
		slidesPerGroup: 1,

		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},
	});

	//定时器
	var starttime = new Date("2020/6/30");
	setInterval(function() {
		var nowtime = new Date();
		var time = starttime - nowtime;
		var hour = parseInt(time / 1000 / 60 / 60 % 12);
		var minute = parseInt(time / 1000 / 60 % 60);
		var seconds = parseInt(time / 1000 % 60);
		if (hour >= 10) {
			$(".floor1 .main_right .seckill .sec_right #time span:eq(0)").text(hour);
		} else {
			$(".floor1 .main_right .seckill .sec_right #time span:eq(0)").text("0" + hour);
		}
		if (minute >= 10) {
			$(".floor1 .main_right .seckill .sec_right #time span:eq(1)").text(minute);
		} else {
			$(".floor1 .main_right .seckill .sec_right #time span:eq(1)").text("0" + minute);
		}
		if (seconds >= 10) {
			$(".floor1 .main_right .seckill .sec_right #time span:eq(2)").text(seconds);
		} else {
			$(".floor1 .main_right .seckill .sec_right #time span:eq(2)").text("0" + seconds);
		}
	}, 1000);

	//当鼠标点击颜色
	$(".main_right .choose>.choose_big").click(function() {
		$(this).css({
			"border-color": "red",
			"color": "red"
		});
		$(this).siblings().css({
			"border-color": "#ccc",
			"color": "#000"
		});
	});
	var $enter = $(".main_right .pay ul li");
	$enter.mouseenter(function() {
		var index = $(this).index();
		$(".floor1 .main_right .slipeDown").eq(index).stop(true).css("display", "block");
	});
	$enter.mouseleave(function() {
		// var index = $(this).index();
		$(".floor1 .main_right .slipeDown").stop(true).css("display", "none");
	});


	//当鼠标点击商品详情和商品评价
	var $lis = $(".floor3 .container .floor3_title .txt_right ul li");
	$lis.click(function() {
		var index = $(this).index();
		$lis.removeClass("select");
		$(this).parent().parent().parent().siblings().children().removeClass("select");
		$lis.addClass("select");
		$(this).parent().parent().parent().siblings().children().eq(index - 1).addClass("select");
		$(this).css("color", " #E1140A");
		$(this).siblings().css("color", "#000");
	});


	//当鼠标点击商品详情下的评价时
	var $assess = $(".floor3 .container .content .show:first-child>.show_top .top_right span");
	$assess.click(function() {
		var index = $(this).index();
		$assess.removeClass("right_content");
		$(this).parent().parent().siblings().children().removeClass("right_content");
		$(this).addClass("right_content");
		$(this).parent().parent().siblings().children().eq(index).addClass("right_content");

		$(this).find(".radioActive").stop(true).css("display", "block");
		$(this).siblings().find(".radioActive").stop(true).css("display", "none");
	});


	//商品数量的加JS
	var count = $(".floor1 .com_main .main_right .count .addcount input").val();
	var count = parseInt(count);
	//假设点击不成功
	var isClick = true;
	$(".floor1 .com_main .main_right .count .add").click(function() {
		if (isClick) {
			if (count < 5) {
				count = count + 1;
			}
			// count = count + 1;
			$(".floor1 .com_main .main_right .count .addcount input").val(count);
		}
	});
	$(".floor1 .com_main .main_right .count .reduce").click(function() {
		if (isClick) {
			if (count > 1) {
				count = count - 1;
			} else {
				count = count;
			}
			$(".floor1 .com_main .main_right .count .addcount input").val(count);
		}
	});
	//点击收藏  储存信息
	$(".end_right").click(function() {
		var xinxi = {
			desc: $(".floor1 .com_main .main_right div:eq(0) p").text(),
			img: "img/productdetails02/detail01big.jpg",
			price: parseFloat($(".floor1 .com_main .main_right .price_area .prices span").text()),
		}
		layer.msg("收藏成功!");
		localStorage.setItem("xinxi",JSON.stringify(xinxi));
	});
});
