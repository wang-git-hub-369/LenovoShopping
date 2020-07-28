$(function() {
	//获取数据项
	//获取数据项使用getItem
	var userAll = localStorage.getItem("user");
	userAll = JSON.parse(userAll);

	var u = userAll.username;
	var paw = userAll.password;
	//名字变成 用户名
	if (u != undefined) {
		//名字
		$(".header .container .nav .nav-right div:eq(1) span a").text(userAll.username);
		$(".header .container .nav .nav-right div:eq(0) span a").text("");
		//鼠标指到用户名时候出现的下拉菜单 
		$(".container .nav .myCenter .noName").text(u);
		$(".header .container .nav .nav-right div:eq(2)").css("display", "block");
		$(".header .container .nav .nav-right div:eq(1)").click(function() {
			window.location.replace("usercenter.html");
		});
		$(".header .container .nav .nav-right div:eq(1)").hover(function() {
			$(".header .container .nav .myCenter").css("display", "block");
		}, function() {
			$(".header .container .nav .myCenter").css("display", "none");
		});
		$(".header .container .nav .myCenter").hover(function() {
			$(this).css("display", "block");
		}, function() {
			$(this).css("display", "none");
		});
	} else {
		$(".header .container .nav .nav-right div:eq(1) span a").text("登录");
		$(".header .container .nav .nav-right div:eq(0) span a").text("注册");
		$(".header .container .nav .nav-right div:eq(2)").css("display", "none");
		$(".header .container .nav .nav-right div:eq(1)").click(function() {
			window.location.replace("login.html");
		});
		$(".header .container .nav .nav-right div:eq(0)").click(function() {
			window.location.replace("register.html");
		});
	}
	//点击退出登录按钮 恢复成u为空的状态
	$(".container .nav .myCenter .logout").click(function() {
		window.location.replace("login.html");
		$(".header .container .nav .nav-right div:eq(1) span a").text("登录");
		$(".header .container .nav .nav-right div:eq(0) span a").text("注册");
		$(".header .container .nav .nav-right div:eq(2)").css("display", "none");
		$(".header .container .nav .nav-right div:eq(1)").click(function() {
			window.location.replace("login.html");
		});
		$(".header .container .nav .nav-right div:eq(0)").click(function() {
			window.location.replace("register.html");
		});
	});
});
