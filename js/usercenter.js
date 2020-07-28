$(function() {
	//获取头部
	$(".header").load("header.html");
	$(".menu").load("menu.html");
	$(".footer").load("footer.html");
	//选项卡
	layui.use('element', function() {
		var element = layui.element;
	});
	//当前时间 -----  我的订单创建的时间
	var starttime = new Date();
	$(".list_sel span").text(starttime);
	//获取数据
	//用户名
	var userAll = localStorage.getItem("user");
	userAll = JSON.parse(userAll);
	var u = userAll.username;
	$(".floor1 .bottom .bottom_rgt .top_msg .top_msg_lft ul li:eq(0) p:eq(1)").text(u);

	//先获取商品详情返回的内容
	//获取到详情页缓存的值
	//----------------- -------//获取购物车数据
	var cart = localStorage.getItem("cart");
	if (cart != null) {
		// 取出来是字符串,先转化为对象
		cart = JSON.parse(cart);
		// for循环
		var count = localStorage.getItem("count");
		for (var i = 0; i < cart.items.length; i++) {
			var productIem = cart.items[i];
			var $newDiv = $(".all_table:eq(0)").clone();
			$newDiv.find(".imgall").attr("src", productIem.img);
			// $newDiv.find(".name").text(productIem.name);
			$newDiv.find(".contentall").text(productIem.desc);
			$newDiv.find(".price").text(productIem.price);
			$newDiv.find(".shuliang").text(count);
			$newDiv.find(".zongjia").text(productIem.price * count)
			$(".collectcon").after($newDiv);
		}
		//console.log(cart.items);
	}
	//获取用户信息
	var userInfo = localStorage.getItem("userInfo");
	if (userInfo != undefined) {
		//解析成用户
		var storeUser = JSON.parse(userInfo);

		$(".top_msg_lft ul li:eq(1) input").val(storeUser.vipName); //vip姓名
		if (storeUser.userSex == '男') {
			$(":radio#sexboy").prop("checked", true);
		} else if (storeUser.userSex == '女') {
			$(":radio#sexgirl").prop("checked", true);
		} else {
			$(":radio#sexbaomi").prop("checked", true);
		}
		$(":radio[name=sex]:checked").val(storeUser.userSex);
		$(".top_msg_lft ul li:eq(3) input").val(storeUser.userBirthday);
		$(".top_msg_lft ul li:eq(4) p:eq(1) input").val(storeUser.userName);
		$(".top_msg_lft ul li:eq(5) p:eq(1) select:eq(0)").val(storeUser.userSheng);
		$(".top_msg_lft ul li:eq(5) p:eq(1) select:eq(1)").val(storeUser.userShi);
		$(".top_msg_lft ul li:eq(5) p:eq(1) select:eq(2)").val(storeUser.userQu);
		$(".top_msg_lft ul li:eq(6) p:eq(1) input").val(storeUser.userAddress);
		$(".top_msg_lft ul li:eq(7) p:eq(1) input").val(storeUser.userPhone);
	}
	// //点击修改按钮
	$(".floor1 .bottom .bottom_rgt_top .top_msg_lft #btn_change").click(function() {
		//会员名称
		var vipName = $(".top_msg_lft ul li:eq(1) input").val();
		//性别
		var userSex = $(":radio[name=sex]:checked").val();
		//生日
		var userBirthday = $(".top_msg_lft ul li:eq(3) input").val();
		//真实姓名
		var userName = $(".top_msg_lft ul li:eq(4) p:eq(1) input").val();
		//家庭地址
		var userSheng = $(".top_msg_lft ul li:eq(5) p:eq(1) select:eq(0)").val();
		var userShi = $(".top_msg_lft ul li:eq(5) p:eq(1) select:eq(1)").val();
		var userQu = $(".top_msg_lft ul li:eq(5) p:eq(1) select:eq(2)").val();
		//详细地址
		var userAddress = $(".top_msg_lft ul li:eq(6) p:eq(1) input").val();
		//手机号码
		var userPhone = $(".top_msg_lft ul li:eq(7) p:eq(1) input").val();
		//创建一个用户对象
		var user = {
			vipName: vipName,
			userSex: userSex,
			userBirthday: userBirthday,
			userName: userName,
			userAddress: userAddress,
			userPhone: userPhone,
			userSheng: userSheng,
			userShi: userShi,
			userQu: userQu
		}
		//将user对象封装转换成字符串
		var userStr = JSON.stringify(user);
		localStorage.setItem("userInfo", userStr);
		alert("修改成功");
	});


	//企业信息
	$(".floor1 .bottom .bottom_rgt_bottom p").click(function() {
		$(this).siblings().toggle();
	});
	//下拉框动画
	$(".floor1 .bottom .bottom_lft h3").click(function() {
		$(this).siblings("ul").stop().slideToggle("normal");
	});
	//点击左边下拉框颜色变红 其他兄弟元素不变
	//默认出现我的订单
	$(".floor1 .bottom .bottom_lft .bottom_item:eq(1) ul li:eq(0)").css("background-color", "#D62F26");
	$(".floor1 .bottom .bottom_lft .bottom_item:eq(1) ul li:eq(0)").find("a").css("color", "#fff");
	$(".floor1 .bottom .bottom_lft .bottom_item ul li").click(function() {
		//点击本身的变化
		$(this).css("background-color", "#D62F26");
		$(this).find("a").css("color", "#fff");
		//点击之后兄弟元素的样式
		$(this).siblings().css("background-color", "#fff");
		$(this).siblings().find("a").css("color", "#6F7170");
		//父元素的兄弟元素的子元素样式
		$(this).parents(".bottom_item").siblings().find("a").css("color", "#6F7170");
		$(this).parents(".bottom_item").siblings().find("li").css("background-color", "#fff");
	});
	//点击我的信息 
	$(".bottom .bottom_item:eq(0) ul li:eq(0)").click(function() {
		$(".bottom_rgt").css("display", "block");
		//我的收藏
		$(".myorder").css("display", "none");
		//我的订单
		$(".mycollect").css("display", "none");
	});
	//点击我的收藏
	$(".bottom .bottom_item:eq(1) ul li:eq(4)").click(function() {
		$(".bottom_rgt").css("display", "none");
		//我的收藏
		$(".myorder").css("display", "block");
		//我的订单
		$(".mycollect").css("display", "none");
	});
	//点击我的订单
	$(".bottom .bottom_item:eq(1) ul li:eq(0)").click(function() {
		$(".bottom_rgt").css("display", "none");
		//我的收藏
		$(".myorder").css("display", "none");
		//我的订单
		$(".mycollect").css("display", "block");
	});
	//获取收藏的信息
	var xinxi = localStorage.getItem("xinxi");
	var xinxi = JSON.parse(xinxi);
	// console.log(xinxi);
	if (xinxi.name == undefined) {
		$(".college").css("display", "none");
	} else {
		$(".college").css("display", "block");
	}
	$(".del").text("删除")
	$(".image").attr("src", xinxi.img);
	$(".mingzi").text(xinxi.desc);
	$(".jiaqian").text(xinxi.price);
	
	//点击删除的时候
	$(".del").click(function() {
		alert("删除成功!");
		//清楚商品信息
		$(this).parents("xinxi").remove();
		localStorage.removeItem("xinxi");
		$(".xinxi").css("display", "none");
		$(".college").css("display", "block");
	});
});
