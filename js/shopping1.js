$(function() {
	$(".three .content .layui-show .name").click(function() {
		// 获取索引
		var idx = $(this).index();
		if (idx == 0) {
			$(".three .content .layui-show .showalls").show();
			$(".three .content .layui-show .hidealls").hide()
		} else {
			$(".three .content .layui-show .showalls").hide();
			$(".three .content .layui-show .hidealls").show()
		}
	});
	$(".floor2 .container .dizhi .delte").click(function() {
		$(this).parents("li").remove()
	});
	//将address对象封装转换成字符串
	var addressStr = JSON.stringify(address);
	localStorage.setItem("addressInfo", addressStr);
	//点击增加地址弹出一个对话框
	$(".floor2 .address button").click(function() {
		$(".adress_alert").css("display", "block");
	});
	$(".floor2 .btn-cale").click(function() {
		$(this).parent().css("display", "none");
	});
	//获取地址信息
	var addressInfo = localStorage.getItem("addressInfo");
	if (addressInfo != undefined) {
		//解析成用户
		var userInfo = JSON.parse(addressInfo);
		$(".adress_alert form div:eq(0) input").val(userInfo.shouhuoren);
		$(".adress_alert form div:eq(1) input").val(userInfo.lixifangshi);
		$(".adress_alert form div:eq(2) input").val(userInfo.shouhuodizhi);
		// $(".adress_alert form div:eq(3) input").val(userInfo.caozuo);
	}
	//点击保存时 将输入的数据存入内容
	$(".floor2 .btn-save").click(function() {
		//收货人
		var shouhuoren = $(".adress_alert form div:eq(0) input").val();
		//联系方式
		var lixifangshi = $(".adress_alert form div:eq(1) input").val();
		//收货地址
		var shouhuodizhi = $(".adress_alert form div:eq(2) input").val();
		//操作
		// var caozuo = $(".adress_alert form div:eq(3) input").val();
		//创建一个地址对象
		var address = {
			shouhuoren: shouhuoren,
			lixifangshi: lixifangshi,
			shouhuodizhi: shouhuodizhi,
			// caozuo:caozuo,
		}
		//将address对象封装转换成字符串
		var addressStr = JSON.stringify(address);
		localStorage.setItem("addressInfo", addressStr);
		//获取信息
		var addressInfo = localStorage.getItem("addressInfo");
		var userInfo = JSON.parse(addressInfo);
		//创建一个ul
		var newLi = $(".floor2 .address ul:eq(1) li:eq(0)").clone();
		newLi.find(".shouhuoren").text(userInfo.shouhuoren);
		newLi.find(".lianxifangshi").text(userInfo.lixifangshi);
		newLi.find(".dizhi").text(userInfo.shouhuodizhi);
		// newLi.find(".caozuo").text(del);
		$(".floor2 .address ul li:eq(0)").after(newLi);
		alert("保存成功!");
		$(".adress_alert").css("display", "none");
		//下面的收获的信使是获取的当前页面新增的 信息
		//获取信息
		$(".footer_02 div:eq(0) span").text(userInfo.shouhuoren);
		$(".footer_02 div:eq(1) span").text(userInfo.lixifangshi);
		$(".footer_02 div:eq(2) span").text(userInfo.shouhuodizhi);
	});
	//判断提交订单
	$(".rightall").click(function() {
		var addressInfo = localStorage.getItem("addressInfo");
		var userInfo = JSON.parse(addressInfo);
		if (userInfo.shouhuoren == undefined) {
			layui.use('layer', function() {
				var layer = layui.layer;
				layer.msg('请输入收货人信息');
			});
		} else {
			layui.use('layer', function() {
				var layer = layui.layer;
				layer.msg('提交成功!');
			});
			window.location.replace("immediatepayment.html");
		}
	});
	// 选项卡
	layui.use('element', function() {
		var element = layui.element;
		//…
	});
	// 弹出地址栏
	$(".floor2 .container .dizhi .tanchu").click(function() {
		layui.use('layer', function() {
			var layer = layui.layer;
			layer.msg('hello');
		});
	})
	// 用户名
	var userAll = localStorage.getItem("user");
	userAll = JSON.parse(userAll);
	var u = userAll.username;
	$(".floor1 .right li:eq(1) span").text(u);
	//先获取商品详情返回的内容
	//获取到详情页缓存的值
	var cart = localStorage.getItem("cart")
	if (cart != null) {
		cart = JSON.parse(cart);
		// for循环
		var count = localStorage.getItem("count");
		console.log(count)
		var countone = localStorage.getItem("countone");
		console.log(countone);
		for (var i = 0; i < cart.items.length; i++) {
			var productIem = cart.items[i];
			var $newDiv = $(".peisong .right:eq(0)").clone();
			$newDiv.find(".tupian img").attr("src", productIem.img);
			$newDiv.find(".wenzi span:eq(0)").text(productIem.desc);
			$newDiv.find(".contentall").text(productIem.desc);
			$newDiv.find(".wenzi p:eq(0)").text(productIem.price);
			$newDiv.find(".wenzi .yidong").text(count);
			$newDiv.find(".wenzi span:eq(1)").text(productIem.name);
			$(".tab").after($newDiv);
		}
	}
	var zongjiage = localStorage.getItem("zongjiage");
	$(".floor2 .shopp .four .dingdan .bold li:eq(1) span:eq(1)").text(zongjiage);
	//优惠
	$(".floor2 .shopp .four .dingdan .bold li:eq(2) span:eq(1)").text("￥0.00");
	//运费
	$(".floor2 .shopp .four .dingdan .bold li:eq(3) span:eq(1)").text("￥0.00");
	// //实际付款
	$(".floor2 .shopp .four .dingdan .bold li:eq(4) span:eq(1)").text(zongjiage);
	$(".footer").load("footer.html");
});
