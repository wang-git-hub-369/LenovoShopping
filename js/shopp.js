$(function() {
	$(".floor1 ul>li:eq(1)").hover(function() {
		$(this).children("dd").stop().slideDown()
	}, function() {
		$(this).children("dd").stop().slideUp()
	})
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: true,
		loop: true, // 循环模式选项
		slidesPerView: 4,
		width: 1200,
		grabCursor: true,
	})
	$(".floor5").load("footer1.html");
	//用户名
	var userAll = localStorage.getItem("user");
	userAll = JSON.parse(userAll);
	var u = userAll.username;
	$(".floor1  li:eq(1) .neirong span").text(u);
	//----------------- -------//获取购物车数据
	var cart = localStorage.getItem("cart");
	if (cart != null) {
		$(".floor3 .cart_main .shopping ").hide();
		$(".floor3 .jiesuan").show();
		// 取出来是字符串,先转化为对象
		cart = JSON.parse(cart);
		// for循环
		for (var i = 0; i < cart.items.length; i++) {
			var productIem = cart.items[i];
			var $newTr = $(".tab-two tr.two").clone();
			$newTr.find(".imgall").attr("src", productIem.img);
			$newTr.find(".name").text(productIem.name);
			$newTr.find(".contentall").text(productIem.desc);
			$newTr.find(".price").text(productIem.price);
			$newTr.find(".shuliang").val(productIem.amount)
			$newTr.find(".zongjia").text(productIem.price * productIem.amount)
			$(".tab .three").before($newTr);
		};
		$(cart.items).each(function(index, item) {
			if (index == 0) {
				console.log("ddd")
				// 获取到详情页缓存的值
				var cartAll = localStorage.getItem("cart");
				cartAll = JSON.parse(cartAll);
				var productIemall = cartAll.items[0];
				// 获取到数量
				var shuliang = productIemall.amount;
				//获取到单价
				var danjia = productIemall.price;
				console.log(danjia);
				// 全选
				$(".floor3 .container .three :checkbox").click(function() {
					var checkedbefore = $(".floor3 .container .two :checkbox").prop("checked");
					if (checkedbefore == true) {
						$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text("0");
						$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text("0");
					} else {
						var count = $(".floor3 .bc_table .tab tr:eq(1) .addcount  input").val();
						var zongjia = count * danjia;
						$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text(zongjia);
						$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text(zongjia);
					}
					// 定义一个值,判断点击时是否为选中状态
					var checked = $(this).prop("checked");
					// 让其余的复选框也为选中状态
					$(".floor3 .container .one td:first-child :checkbox").prop("checked", checked);
					$(".floor3 .container .two td:first-child :checkbox").prop("checked", checked);
				})
				//选中的时候出现价格
				$(".floor3 .container .two :checkbox").click(function() {
					var checked = $(".floor3 .container .two :checkbox").prop("checked");
					if (checked != true) {
						$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text("0");
						$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text("0");
					} else {
						var count = $(".floor3 .bc_table .tab tr:eq(1) .addcount  input").val();
						var jiageone = count * danjia;
						$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text(jiageone);
						$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text(jiageone);
					}
				});
				// //假设点击不成功,加号加1，减号减一
				var isClick = true;
				// 给第一个商品添加点击事件
				$(".tab tr:eq(1) .addcount .reduceAll").click(function() {
					var count= $(".tab tr:eq(1) .addcount input").val();
					var count=parseFloat(count);
					if (isClick) {
						if (count > 1) {
							count = count - 1;
						} else {
							count = count;
						}
						$(".floor3 .bc_table .tab tr:eq(1) .addcount  input").val(count);
						//获取到总金额
						var moneyAlls = count * danjia;
						$(".floor3 .bc_table .tab tr:eq(1) .zongjia").text(moneyAlls);
						$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text(moneyAlls);
						$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text(moneyAlls);
						var checked = $(".floor3 .container .two :checkbox").prop("checked");
						if (checked) {
							$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text(moneyAlls);
							$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text(moneyAlls);
						} else {
							$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text("0");
							$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text("0");
						}
					}
				});
				// 点击+加1
				$(".tab tr:eq(1) .addcount .addls").click(function() {
					var count= $(".tab tr:eq(1) .addcount input").val();
					var count=parseFloat(count);
					if (isClick) {
						if (count < 999) {
							count = count + 1;
						}
						$(".floor3 .bc_table .tab tr:eq(1) .addcount  input").val(count);
						//获取到总金额
						var moneyAlls = count * danjia;
						//缓存的总金额
						localStorage.setItem("moneyAlls", moneyAlls);
						$(".floor3 .bc_table .tab tr:eq(1) .zongjia").text(moneyAlls);
						$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text(moneyAlls);
						$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text(moneyAlls);
						var checked = $(".floor3 .container .two :checkbox").prop("checked");
						if (checked) {
							$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text(moneyAlls);
							$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text(moneyAlls);
						} else {
							$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text("0");
							$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text("0");
						}
					}
				});
				//选中框的时候 价格显示为总和
				$(".floor3 .one td:eq(0) input").click(function() {
					var checked = $(this).prop("checked");
					if (checked) {
						$(".floor3 .two td input").prop("checked", true);
						
						var count=$(".floor3 .bc_table .tab tr:eq(1) .addcount  input").val();
						var jiage=count*danjia;
						$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text(jiage); //商品总价
						$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text(jiage); //合计金额
					} else {
						$(".floor3 .two td input").prop("checked", false);
						$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text("0"); //商品总价
						$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text("0"); //合计金额
					}
				});
				//点击去结算
				$(".floor3 .cart_main .jiesuan").click(function() {
					var checked = $(".tab tr .ipt").prop("checked");
					var zongjiage=$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text();
					localStorage.setItem("zongjiage",zongjiage);
					console.log(zongjiage);
					if (checked) {
						window.location.replace("submitorder.html");
					} else {
						layui.use('layer', function() {
							// 弹出框插件
							var layer = layui.layer;
							layer.open({
								content: '没有选中商品'
							});
						});
					}
				});
			} else {
				//获取到详情页缓存的值
				var cartAll = localStorage.getItem("cart");
				cartAll = JSON.parse(cartAll);
				var productIemall = cartAll.items[0];
				// 获取到数量
				var shuliang = productIemall.amount;
				//获取到单价
				var danjia = productIemall.price;
				console.log(danjia);
				var allproduct = cartAll.items[1];
				var danjiaone = allproduct.price;
				console.log(danjiaone);
				//全选
				$(".floor3 .container .three :checkbox").click(function() {
					var checkedbefore = $(".floor3 .container .two :checkbox").prop("checked");
					if (checkedbefore != true) {
						$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text("0");
						$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text("0");
					} else {
						var count = $(".floor3 .bc_table .tab tr:eq(1) .addcount  input").val();
						var countone = $(".floor3 .bc_table .tab tr:eq(2) .addcount  input").val();
						var jiageone = count * danjia;
						var jiagetwo = countone * danjiaone;
						var zongjia = jiageone + jiagetwo;
						localStorage.setItem("count", count);
						localStorage.setItem("countone", countone);
						$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text(zongjia);
						$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text(zongjia);
						// 定义一个值,判断点击时是否为选中状态
						var checked = $(this).prop("checked");
						// 让其余的复选框也为选中状态
						$(".floor3 .container .one td:first-child :checkbox").prop("checked", checked);
						$(".floor3 .container .two td:first-child :checkbox").prop("checked", checked);
					}
				});

				//选中的时候出现价格
				$(".floor3 .container tr:eq(2) :checkbox").click(function() {
					//console.log("dddd");
					var checked = $(".floor3 .container tr:eq(2) :checkbox").prop("checked");
					if (checked != true) {
						$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text("0");
						$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text("0");
					} else {
						//var MoneyAlls = count * productMoney
						var countone = $(".floor3 .bc_table .tab tr:eq(2) .addcount  input").val();
						console.log(countone);
						var jiagetwo = countone * danjiaone;
						$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text(jiagetwo);
						$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text(jiagetwo);
					}
					console.log(checked);
				});
				var isClickall = true;
				//给第二个商品添加点击事件
				$(".tab tr:eq(2) .addcount .reduceAll").click(function() {
					var countalls = $(".tab tr:eq(2) .addcount input").val();
					var countalls = parseFloat(countalls);
					if (isClickall) {
						if (countalls > 1) {
							countalls = countalls - 1;
						} else {
							countalls = countalls;
						}
						$(".floor3 .bc_table .tab tr:eq(2) .addcount  input").val(countalls);
						//获取到总金额
						var moneyAlls = countalls * danjiaone;
						$(".floor3 .bc_table .tab tr:eq(2) .zongjia").text(moneyAlls);
						$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text(moneyAlls);
						$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text(moneyAlls);
						var checked = $(".tab tr:eq(2) .addcount :checkbox").prop("checked");
						if (!checked) {
							$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text(moneyAlls);
							$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text(moneyAlls);
						} else {
							$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text("0");
							$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text("0");
						}
					}
				});
				//点击+加1
				$(".tab tr:eq(2) .addcount .addls").click(function() {
					var countalls = $(".tab tr:eq(2) .addcount input").val();
					var countalls = parseFloat(countalls);
					if (isClickall) {
						if (countalls < 999) {
							countalls = countalls + 1;
						}
						//localStorage.setItem("count",countalls);
						//console.log(countalls);
						$(".floor3 .bc_table .tab tr:eq(2) .addcount  input").val(countalls);
						//获取到总金额
						var moneyAlls = countalls * danjiaone;
						//console.log(moneyAlls);
						//缓存的总金额
						localStorage.setItem("moneyAlls", moneyAlls);
						// var co=parseFloat(moneyAlls);
						///console.log(co)
						$(".floor3 .bc_table .tab tr:eq(2) .zongjia").text(moneyAlls);
						$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text(moneyAlls);
						$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text(moneyAlls);
						var checked = $(".tab tr:eq(2) .addcount :checkbox").prop("checked");
						if (!checked) {
							$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text(moneyAlls);
							$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text(moneyAlls);
						} else {
							$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text("0");
							$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text("0");
						}
					}
				});
				//选中框的时候 价格显示为总和
				$(".floor3 .one td:eq(0) input").click(function() {
					var checked = $(this).prop("checked");
					if (checked) {
						$(".floor3 .two td input").prop("checked", true);
						
						var count=$(".floor3 .bc_table .tab tr:eq(1) .addcount  input").val();
						var countone=$(".floor3 .bc_table .tab tr:eq(2) .addcount  input").val();
						var jiage=count*danjia;
						var jiageone=countone*danjiaone;
						var zongjia=jiage+jiageone				
						$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text(zongjia); //商品总价
						$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text(zongjia); //合计金额
					} else {
						$(".floor3 .two td input").prop("checked", false);
						$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text("0"); //商品总价
						$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text("0"); //合计金额
					}
				});
				
				//点击去结算
				$(".floor3 .cart_main .jiesuan").click(function() {
					var checked = $(".tab tr:eq(2) .ipt").prop("checked");
					if (checked) {
						window.location.replace("submitorder.html");
					} else {
						layui.use('layer', function() {
							// 弹出框插件
							var layer = layui.layer;
							layer.open({
								content: '没有选中商品'
							});
						});
					}
				});
			}
		})
	} else {
		$(".floor3 .cart_main .shopping ").show();
		$(".floor3 .jiesuan").hide();
		$(".floor3 .three").hide();
	}
	// 没选中时 价格显示为0
	$(".floor3 .tab .three td:eq(5) ul li:eq(0) span").text("0"); //商品总价
	$(".floor3 .tab .three td:eq(5) ul li:eq(2) span").text("0"); //合计金额
	// 删除行
	$(".delte").click(function() {
		var panduan = $(this).parent("tr").children().eq(0).children("input").prop("checked");
		if (panduan) {
			var isDel = layui.use('layer', function() {
				var layer = layui.layer;
				layer.msg('删除成功');
			});
			// -----------------------------------------------------------------
			$(this).parents("tr").remove();
			localStorage.removeItem("cart");
		} else {
			var isDel = layui.use('layer', function() {
				var layer = layui.layer;
				layer.msg('请选中删除的商品!');
			});
		}
	});
});
