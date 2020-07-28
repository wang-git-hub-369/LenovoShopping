$(function () {

    var Magnifier = function (ele, obj) {

        this.ele = ele;//原始图片盒子
        this.eleWidth = this.ele.offsetWidth;//原始图片盒子宽度
        this.eleHeight = this.ele.offsetHeight;//原始图片盒子高度
        this.url = '';//放大图片url
        this.maskLayerWidth =180;//遮罩宽度
        this.maskLayerHeight =180;//遮罩高度
        this.backgroundScaleX = this.eleWidth / this.maskLayerWidth;//放大后图片与原始图片的放大比例(X)
        this.backgroundScaleY = this.eleHeight / this.maskLayerHeight;//放大后图片与原始图片的放大比例(Y)
        this.scaleX = obj.scale ? obj.scale[0] || obj.scale[1] : this.backgroundScaleX;//放大图片盒子与遮罩的放大比例(X)
        this.scaleY = obj.scale ? obj.scale[1] || obj.scale[0] : this.backgroundScaleY;//放大图片盒子与遮罩的放大比例(Y)

        this.init();
    };

    Magnifier.prototype = {

        constructor: Magnifier,
        init: function () {
            this.ele.style.backgroundSize = '100% 100%';//设置原始图片大小为100%
        },
        createRelativeBox: function () {
            //遮罩
            this.maskLayer = document.createElement('div');
            this.maskLayer.style.cssText = 'position: absolute;border: 1px solid #ccc;background: rgba(255, 255, 255, .7);cursor: move;' +
                'width:' + this.maskLayerWidth + 'px;height:' + this.maskLayerHeight + 'px;'
            this.ele.appendChild(this.maskLayer);
            //放大图片盒子
            this.asideBox = document.createElement('div');
            this.asideBox.style.cssText = 'position:absolute;left:105%;top:50%;border:2px solid #ccc;z-index:200;transform:translateY(-50%);' +
                'width:' + this.maskLayerWidth * this.scaleX + 'px;height:' + this.maskLayerHeight * this.scaleY + 'px;' +
                'background-image:url(' + this.url + ');background-repeat:no-repeat;background-size:' + this.backgroundScaleX * 100 + '% ' + this.backgroundScaleY * 100 + '%';
            this.ele.appendChild(this.asideBox);
        },
        calcPosition: function (e) {
            var left = e.pageX - this.ele.offsetLeft - this.maskLayerWidth / 2,
                top = e.pageY - this.ele.offsetTop - this.maskLayerHeight / 2;
            if (left < 0) {
                left = 0;
            } else if (left > this.eleWidth - this.maskLayerWidth) {
                left = this.eleWidth - this.maskLayerWidth;
            };
            if (top < 0) {
                top = 0;
            } else if (top > this.eleHeight - this.maskLayerHeight) {
                top = this.eleHeight - this.maskLayerHeight;
            };
            this.maskLayer.style.left = left + 'px';
            this.maskLayer.style.top = top + 'px';
            this.asideBox.style.backgroundPosition = left * -this.scaleX + 'px ' + top * -this.scaleY + 'px';
        }
    };
    window.Magnifier = Magnifier;
}());

window.addEventListener('load', function () {

    (function () {

        var smallImgUl = document.querySelector('ul.small-img-ul'),
            phoneDispaly = document.querySelector('a.phone-display');
        
        var i = 0, flag = true;

        var imgArr = {
            'big': [
            	'img/productdetail/detailbig.jpg',
            	'img/productdetail/detail_big02.jpg',
            	'img/productdetail/detail_big03.jpg',
            	'img/productdetail/detail_big04.jpg',
            	'img/productdetail/detail_big05.jpg',
            	'img/productdetail/detail_big06.jpg'
            ],
            'small': [
            	'img/productdetail/detail_lit01.jpg',
            	'img/productdetail/detail_lit02.jpg',
            	'img/productdetail/detail_lit03.jpg',
            	'img/productdetail/detail_lit04.jpg',
            	'img/productdetail/detail_lit05.jpg',
            	'img/productdetail/detail_lit06.jpg'
            ]
        };

        //插入小图片
        var arr = [];
        imgArr['small'].forEach(function (ele) {
            arr.push('<li class=\'img\' style=\'background-image:url(' + ele + ')\'></li>')
        });
        smallImgUl.innerHTML = arr.join('');


        var imgList = smallImgUl.children,
            smallImgWidth = imgList[0].offsetWidth;

        smallImgUl.style.width = imgList.length * smallImgWidth + 'px';

        //获取索引
        function getIndex(item) {
            return Array.prototype.indexOf.call(imgList, item);
        };

        //初始化展示的大图和小图以及相关样式
        initImg();
        function initImg() {
            Array.prototype.forEach.call(imgList, function (ele, index) {
                ele.className = 'img';
            });
            imgList[i].className += ' active';
            phoneDispaly.style.backgroundImage = 'url(' + imgArr['big'][i] + ')';
        };

        //鼠标移入事件
        smallImgUl.addEventListener('mouseover', function (e) {
            i = getIndex(e.target);
            initImg();
        });
     
        var magnifier = new Magnifier(phoneDispaly, {
            maskLayerWidth: 180,
            maskLayerHeight: 240,
            scale: [2]
        });

        function moveEffect(e) {
            if (flag) {
                magnifier.url = imgArr['big'][i];
                magnifier.createRelativeBox();
                flag = false;
            };
            magnifier.calcPosition(e);
        };

        phoneDispaly.addEventListener('mouseenter', function () {
            this.addEventListener('mousemove', moveEffect, false);
            this.addEventListener('mouseleave', function () {
                this.removeEventListener('mousemove', moveEffect);
                this.innerHTML = '';
                flag = true;
            }, false);
        }, false);

        
        //左右按钮点击
        var btnLeft = document.querySelector('.btn-left'),
            btnRight = document.querySelector('.btn-right');

        var overNum = (parseFloat(window.getComputedStyle(smallImgUl, null)['width']) - parseFloat(window.getComputedStyle(smallImgUl.parentNode, null)['width'])) / smallImgWidth;

        var record = 0;
        btnLeft.addEventListener('click', function () {
            record--;
            if (record < 0) {
                record = 0;
                return;
            };
            smallImgUl.style.left = parseFloat(window.getComputedStyle(smallImgUl, null)['left']) + smallImgWidth + 'px';
        }, false);

        btnRight.addEventListener('click', function () {
            record++;
            if (record > overNum) {
                record = overNum;
                return;
            };
            smallImgUl.style.left = parseFloat(window.getComputedStyle(smallImgUl, null)['left']) - smallImgWidth + 'px';
        }, false);

    })();
	//点击配置等详情
	 var $items=$(".detail .rgt .peizhi");
	$items.on("click","div",function(){
	 	$(this).css({
	 		"border-color":" #E1140A",
	 		"color":" #E1140A",
	 	});
	 	$(this).siblings().css({
	 		"border-color":" #DADADA",
	 		"color":" #272727"
		});

	 });
	//选择分期
	var $fenqi=$(".detail .rgt .fenqi");
	//var $huabeis=$(".detail .rgt .huabei>div");
	$fenqi.hover(function(){//鼠标滑过
		$(this).children("div").css("display","block");
	},function(){//鼠标离开
		$(this).children("div").css("display","none");
	});
	//点击分期的div
	$fenqi.on("click","div",function(){
		var k=$(this).text();
		var $xuan=$(this).parent().children(".xuanze");
		$xuan.text(k);	
		$xuan.css("overflow","hidden");
		$(this).parent().children("div").css("display","none");
	});
	//添加或减少数量
	var $addbtn=$(".detail .count .add");
	var $reducebtn=$(".detail .count .reduce");
	var $tet=$(".detail .count .txt");
	var num=parseFloat($tet.val());
	$addbtn.click(function(){
		if(num<5){
			num+=1;
			$tet.val(num);
		}else{
			num==5;
			layer.msg('您最多只能购买5件');
		}	
	});
	$reducebtn.click(function(){
		if(num<=1){
			//donothing
		}else{
			num-=1;
			$tet.val(num);
		}	
	});
	//鼠标滑过联想智选app
	var $app=$(".detail .rgt .app a");
	$app.hover(function(){
		// console.log($app.parent().next().children());
		$app.parent().next().children().css("display","block");
	},function(){
		$app.parent().next().children().css("display","none");
	});
	// 点击商品详情等按钮
	var $jieshao=$(".jieshao .info").children();
	$jieshao.click(function(){
		$(this).css("color","#E1140A");
		$(this).siblings().css("color","#333");
	});
	
});
