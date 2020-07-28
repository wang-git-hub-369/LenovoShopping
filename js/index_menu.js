window.onload = function(){
	var category = [
		{id: 1, name: 'Lenovo电脑', fid: 0},
		{id: 2, name: 'ThinkPad电脑', fid: 0},
		{id: 3, name: '手机/通信', fid: 0},
		{id: 4, name: '智能产品', fid: 0},
		{id: 5, name: '平板电脑', fid: 0},
		{id: 6, name: '配件/办公', fid: 0},
		{id: 7, name: '增值服务', fid: 0},
	
		{id:11, name: "游戏本 >", value:"拯救者700",word:"拯救者700", fid:1},
		{id:12, name: "轻薄本 >",value:"小新14",word:"拯救者700", fid:1},
		{id:13, name: "便携本 >",value:"拯救者700",word:"拯救者700", fid:1},
		{id:14, name: "常规本 >" ,value:"拯救者700",word:"拯救者700", fid:1},
		{id:15, name: "分体台式机 >" ,value:"拯救者700",word:"拯救者700", fid:1},
		{id:16, name: "游戏台式机 >" ,value:"拯救者700",word:"拯救者700", fid:1},
		{id:17, name: "一体台式机 >",value:"拯救者700",word:"拯救者700", fid:1},
		{id:18, name: "子系列 >",value:"拯救者700",word:"拯救者700", fid:1},
		{id:19, name: "特色服务 >",value:"拯救者700",word:"拯救者700", fid:1},
		
		{id:20, name: "ThinkPid >",value:"拯救者7000P",word:"拯救者700", fid:2},
		{id:21, name: "ThinkBook >",value:"Y9000",word:"拯救者700", fid:2},
		{id:22, name: "ThinkCen >",value:"拯救者700",word:"行车记录仪", fid:2},
		{id:23, name: "thinkplus >",value:"拯救者700",word:"行车记录仪", fid:2},
		{id:24, name: "Think配件 >" ,value:"拯救者700",word:"行车记录仪", fid:2},
		{id:25, name: "特色服务 >",value:"拯救者700",word:"行车记录仪", fid:2},
		
		{id:26, name: "Lenovo >",value:"拯救者700",word:"运动耳机", fid:3},
		{id:27, name: "Motorola >",value:"拯救者700",word:"运动耳机", fid:3},
		{id:28, name: "充值中心 >",value:"拯救者700",word:"运动耳机", fid:3},
		{id:29, name: "170/171 >",value:"拯救者700",word:"运动耳机", fid:3},
		
		{id:31, name: "家具 >",value:"拯救者700A",word:"电竞显示器", fid:4},
		{id:32, name: "安防 >",value:"拯救者700W",word:"电竞显示器", fid:4},
		{id:33, name: "健康 >",value:"拯救者700WSSWW",word:"电竞显示器", fid:4},
		{id:34, name: "出行 >",value:"拯救者700PPP",word:"电竞显示器", fid:4},
		{id:35, name: "智玩 >",value:"拯救者700SDDFSS",word:"电竞显示器", fid:4},
		
		{id:36, name: "智能平板 >",value:"SSD固态硬盘",word:"电源适配器", fid:5},
		{id:37, name: "YOGA平板",value:"app固态硬盘",word:"电源适配器", fid:5},
		{id:38, name: "常规平板 >",value:"apsadsp固态硬盘",word:"电源适配器", fid:5},
		{id:39, name: "二合一平板 >",value:"assdsdpp固态硬盘",word:"电源适配器", fid:5},
		
		{id:42, name: "电脑配件 >",value:"防窥镜",word:"口红电源", fid:6},
		{id:43, name: "存储设备 >",value:"U盘",word:"口红电源", fid:6},
		{id:44, name: "K歌直播 >",value:"直播/娱乐宝",word:"口红电源", fid:6},
		{id:45, name: "显示生态 >",value:"显示器",word:"口红电源", fid:6},
		{id:46, name: "娱乐生活 >",value:"耳麦耳机",word:"口红电源", fid:6},
		{id:47, name: "游戏装备 >",value:"游戏鼠标",word:"口红电源", fid:6},
		{id:48, name: "打印机 >",value:"单击打印机",word:"口红电源", fid:6},
		
		{id:49, name: "caer+ >",value:"延期保修",word:"外置光驱", fid:7},
		{id:50, name: "系统服务 >",value:"重装系统",word:"外置光驱", fid:7},
		{id:51, name: "清洁保养 >",value:"拆机处理",word:"外置光驱", fid:7},
		{id:52, name: "诊断维修 >",value:"电脑拆修服务",word:"外置光驱", fid:7},
		{id:53, name: "数据恢复 >",value:"远程数据恢复",word:"外置光驱", fid:7},
		{id:54, name: "硬件升级 >",value:"内存",word:"外置光驱", fid:7},
	];
	
	var ul = document.querySelector('.main');
	// 找出所有一级分类
	var mainCategory = category.filter(function(item) {
		return item.fid === 0;
	});
	for(var i = 0; i < mainCategory.length; i++) {
		li = document.createElement('li');
		li.className = 'main-content' + i;
		a = document.createElement('a');
		a.innerText = mainCategory[i].name;
		li.appendChild(a);
		ul.appendChild(li);
	
	// 动态创建二级ul
	subUl = document.createElement('ul');
	subUl.className = 'content-nav';
	// 找出二级分类
	subCategory = category.filter(function(item) {
		return item.fid === mainCategory[i].id;
	});
	for(var j = 0; j < subCategory.length; j++) {
		subLi = document.createElement('li');
		a = document.createElement('a');
		span = document.createElement('span');
		value = document.createElement('p');
		word = document.createElement("span");
		word.innerText = subCategory[j].word;
		value.innerText = subCategory[j].value;
		span.innerText = subCategory[j].name;
		span.appendChild(word);
		span.appendChild(value);
		a.appendChild(span);
		
		subLi.appendChild(a);
		subUl.appendChild(subLi);
	}
		li.appendChild(subUl);
	}
	var aclick = document.querySelectorAll(".content-nav a");
	for(var i = 0; i < aclick.length; i++) {
		aclick[i].onclick = function() {
			this.href = "productDetail.html";
		};
	}
};