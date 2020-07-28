$(function() {
	$(".header").load("header.html");
	$(".menu").load("menu.html");
	$(".footer").load("footer.html");
	//三楼高级选项卡
	layui.use('element', function() {
		var element = layui.element;
	});
	
	
	//三楼选项
	var $xuanBtn = $(".floor3 .item .duoxuan a");
	$xuanBtn.click(function() {
		//多选按钮
		var $yesno = $(this).parent().next();
		var $ipt = $(this).parent().prev("ul").find("input");
		$yesno.css("display", "block");
		$ipt.css("display", "block");
		//确定和取消按钮
		var $btn = $yesno.children(":first");
		$btn.click(function() {
			$yesno.css("display", "none");
		});
		// 点击取消按钮,input消失
		var $nobtn = $yesno.children(":last");
		$nobtn.click(function() {
			$yesno.css("display", "none");
			$ipt.css("display", "none");
		});
	});
	//选项
	var $sel = $(".floor3 ul li");
	$sel.on("click", "a", function() {
		$(this).css({
			"font-weight": "bold",
			"color": "#333"
		});
		$(this).parent().siblings().children().css({
			"font-weight": "normal"
		});
		$(this).parents(".item").siblings().find("li>a").css({
			"font-weight": "normal"
		});
	});

	//floor1点击后
	var $flo1btn = $(".floor1 a");
	$flo1btn.click(function() {
		//初始状态
		$(this).siblings().find("img:first").css("display", "block");
		$(this).siblings().find("img:last").css("display", "none");
		$(this).siblings().children(".txt").css({
			"font-weight": "normal",
			"color": "#272727"
		});
		$(this).siblings().css({
			"border-bottom": "none",
			"outline": "none",
		});
		//点击
		$(this).find(".imggray").css("display", "none");
		$(this).find(".imgblue").css("display", "block");
		$(this).children(".txt").css({
			"font-weight": "bold",
			"color": "#395782"
		});
		$(this).css({
			"border-bottom": "1px solid #395782",
			"outline": "none"
		});
	});
	//三楼高级选项卡
	layui.use('element', function() {
		var element = layui.element;
	});
	//按价格排序
	var array = [];
	var defaultArray = [];
	var prev;
	var after; 
	//将商品列表保存到数组当中，一个是用来排序的数组，一个是默认的数组   
	var $a = $('.floor4 .down .item').parent(".layui-show").children();
	$a.each(function(index) {
		array[index] = $(this);
		defaultArray[index] = $(this);
	});
	 //给排序按钮添加点击事件    
	$('.floor4 .up>ul>li').each(function(index) {
		$(this).click(function() { //排序按钮的点击样式            
			removeAllClass();
			//默认排序            
			if (index == 0) {
				$('.floor4 .down').empty();
				for (let i = 0; i < defaultArray.length; i++) {
					$('.floor4 .down').append(defaultArray[i])
				}
				return;
			}
			//降序排序
			else if (index == 1) {
				for (var i = 0; i < array.length; i++) {
					for (var j = i+1; j < array.length; j++) {
						prev = array[i].find('.pric').children('span').html();
						after = array[j].find('.pric').children('span').html();
						if (parseFloat(prev) < parseFloat(after)) {
							console.log(prev, after);
							var temp = array[j];
							array[j] = array[i];
							array[i] = temp;
						}
					}
				}
			} //升序排序           
			else if (index == 2) {
				for (var i = 0; i < array.length; i++) {
					for (var j =i+1; j < array.length; j++) {
						prev = parseFloat(array[i].find('.pric').children('span').html()).toFixed(2);
						after = parseFloat(array[j].find('.pric').children('span').html()).toFixed(2);
						if (parseFloat(prev) > parseFloat(after)) {
							var temp = array[i];
							array[i] = array[j];
							array[j] = temp;
						}
					}
				}
			}
			//清空原本列表，将排序的商品数组添加上去            
			$('.floor4 .down').empty();
			for (let i = 0; i < array.length; i++) {
				$('.floor4 .down').append(array[i])
			}
		});
	});
	//三楼高级选项卡
			layui.use('element', function() {
				var element = layui.element;
			});
});
//清除排序按钮的样式
function removeAllClass() {
	$('.sortBtn').removeClass('sortBtn1');
	$('.sortBtn').removeClass('sortBtn2');
	$('.sortBtn').removeClass('sortBtn3');
}
