$(function() {
	
	$(".header").load("header.html");
	$(".menu").load("menu.html");
	$(".footer").load("footer.html");
	
	$(".item .item-btn div").hover(function() {
		$(this).css("background-color", "#D0021B");
		$(this).children().css("color", "#fff");
		$(this).css("cursor", "pointer")
	}, function() {
		$(this).css("background-color", "#DDDDDD");
		$(this).children().css("color", "#D0021B");
	});
	//点击span跳转到其他页面
	$(".item .item-btn span").click(function() {
		$(window).attr("location", "productDetail.html");
	});
});
