$(function() {
	//引入头部
	$(".floor1").load("header1.html")
	// 点击手机号登录改变
	$(".floor2 .container .three>a").click(function() {
		// 获取索引
		var idx = $(this).index()
		console.log(idx)
		if (idx == 0) {
			$(".content_two").show();
			$(".content_one").hide();
			$(".none").show();
			$(".show").hide();
		} else {
			$(".content_two").hide();
			$(".content_one").show();
			$(".none").hide();
			$(".show").show();
		}
	})
	// 右上角改变事件
	$(".right .picture").click(function() {
		$(".right").stop().slideToggle()
	})
})
