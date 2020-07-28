$(function() {
	//引入头部
	$(".floor1").load("header1.html")
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
})
