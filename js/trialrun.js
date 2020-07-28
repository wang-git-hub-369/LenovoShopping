$(function() {
				$(".header").load("header.html");
				$(".menu").load("menu.html");
				$(".footer").load("footer.html");
		
				$(".floor2 .product ul li>.end").mouseenter(function(){
					console.log("sss");
					$(this).find(".name").css("display","none");
					//$(this).parent().siblings().children("name").css("display","block");
					$(this).find(".names").css({
						"display":"block",
						"color":"#000000"
					});
					//	$(this).parent().siblings().children("names").css("display","none");
				});
				$(".floor2 .product ul li>.end").mouseleave(function(){
					$(this).find(".name").css("display","block");
					$(this).find(".names").css("display","none");
					console.log("aa");
				});				
			});