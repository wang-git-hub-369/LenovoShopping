$(function(){
	$(".footer").load("footer.html");
	
	var userAll = localStorage.getItem("user");
	userAll = JSON.parse(userAll);
	var u = userAll.username;
	$(".floor1 .right li:eq(1) span").text(u);
	var zongjiage=localStorage.getItem("zongjiage");
	$(".floor2 .right li:eq(0) span").text(zongjiage);
	
	$(".floor7 .center span:eq(0)").text(zongjiage);
	
	$(".floor7 .right").click(function() {
		alert("支付成功");
		window.location.replace("usercenter.html");
	});
	// //客户信息
	var addressInfo = localStorage.getItem("addressInfo");
	var userInfo = JSON.parse(addressInfo);
	
	console.log(userInfo);
	$(".floor2 .center li:eq(2) span:eq(0)").text(userInfo.shouhuoren);
	$(".floor2 .center li:eq(2) span:eq(1)").text(userInfo.lixifangshi);
	$(".floor2 .center li:eq(2) span:eq(2)").text(userInfo.shouhuodizhi);
	
	
	$(".tupian li>img").click(function(){	
		$(this).parents(".tupian").children("li").siblings().children("img").removeClass("acquiesce");
		$(this).addClass("acquiesce")
	})
	$(".floor5 .tupian>li").hover(function(){
		$(this).children(".show").stop().show()
	},function(){
		$(this).children(".show").stop().hide()
	})
})