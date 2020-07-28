$(function() {
	$(".header").load("header1.html");
	//储存
	$(".one input.btn_reg").click(function() {
		// 点击注册按钮，添加到user
		var userInfo = {
			username: $(".one input.number").val(),
			password: $(".one input#password").val(),
		};
		
		// 存储到localStorage里面，并且转化为字符串
		localStorage.setItem("user", JSON.stringify(userInfo));
		// //页面跳转
		//alert('注册成功');
		//window.location.replace("login.html");
	});
	
	
	// 给注册下面的a链接添加点击样式
	$(".floor2 .container .zhuce .menu a").click(function() {
		// 点击当前的文字,变红,另一个显示黑色
		$(this).css("color", "red").siblings().css("color", "black")
		// 获取到索引
		var idx = $(this).index();
		// 如果索引等于0
		if (idx == 0) {
			// 第一个显示,第二个隐藏
			$(".one").show();
			$(".two").hide();
		} else {
			$(".one").hide();
			$(".two").show();
		}
	})

	var usernamedom = document.querySelector("#usernameall");
	var passworddom = document.querySelector("#password");
	var passworddom1 = document.querySelector("#password1")
	console.log(passworddom);
	$(" .floor2 .zhuce .one .bot .btn_reg").click(function() {
		console.log("ddd")
		
		// 获取到密码框的值
		var password = passworddom.value;
		var password1 = passworddom1.value;
		var username = usernamedom.value;
		if (username == 0 || password == 0) {
			alert('请输入用户名以及密码');
		} else {
			// 用户名的正则,1开头,第二个是3-9,最后0-9结尾的十一位手机号
			var rage = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
			var text = rage.test(username);
			if (text == false) {
				alert("请输入正确的手机号")
				usernamedom.focus();
				// 变为空
				var nullAll = ""
				usernamedom.value = nullAll
			} else {
				var rag2 = /^\w{8,20}$/
				var reset = rag2.test(password)
				console.log(reset);
				var rag3 = /[a-z]/
				console.log(rag3.test(password));
				var rag4 = /[A-Z]/
				console.log(rag4.test(password));
				if (reset == false) {
					passworddom.focus();
					alert("请重新输入,密码由8-20位组成，包括大写，小写，数字组成")
					var nullAll = ""
					passworddom.value = nullAll;
					passworddom1.value = nullAll;
				} else {
					//判断两次输入密码是否一致
					if ($("#password").val() == $("#password1").val()) {
						 alert('注册成功');
						 window.location.replace("login.html");
					} else {
						alert("两次输入的密码不一致");
					}
				}
			}
		}
	})
});
