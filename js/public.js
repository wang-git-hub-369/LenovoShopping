$(function() {
	//点击箭头回到最顶端
	$(".fix ul li:eq(6)").click(function() {
		$("html,body").animate({
			"scrollTop": "0"
		}, "fast");
	});
	//menu菜单栏
	var $menu = $(".menu");
	$(window).scroll(function() {
		var $height = $(window).scrollTop(); //定义一个参数是滚动条距离top的高度为0
		if ($height > 50) {
			$menu.css("position", "fixed");
			$menu.find(".menu-rgt").hide();
		} else {
			$menu.css("position", "relative");
			$menu.find(".menu-rgt").show();
		}
	});
	//右侧绝对定位
	var $fix = $(".fix");
	$(window).scroll(function() {
		var $height = $(window).scrollTop(); //定义一个参数是滚动条距离top的高度为0
		if ($height > 180) {
			$fix.css("display", "block");
		} else {
			$fix.css("display", "none");
		}
	});
	$(".fix ul li").hover(function() {
		$(this).find(".fix_img").css("display", "none");
		$(this).find(".fix_img2").css("display", "block");
	}, function() {
		$(this).find(".fix_img").css("display", "block");
		$(this).find(".fix_img2").css("display", "none");
	});
});
