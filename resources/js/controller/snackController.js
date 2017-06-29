var snack = angular.module('snack', []);

snack.constant("snackList", [
	{
		title:"阿国面煎粿",
		createdTime:"2016/6/12",
		readCount:574,
		content:"<p>面煎粿，也称满煎粿，是漳州地区的传统小食，长期以来深受大家的喜爱。它那油炸的外皮金黄色泛焦，中间的粿馅深沉呈棕色，里层还夹着一些食料。轻咬入口，酥脆糯香，内质绵软，厚实饱满。</p>",
		coords:"190,429,268,363,244,350,206,313,196,288,145,328,146,398,176,434",
		city:"zhangzhou"
	},
	{
		title:"芋子包",
		createdTime:"2016/6/12",
		readCount:732,
		content:"<p>芋子包是福建省龙岩市永定区特色经典风味小吃之一，选用永定特产的芋子为皮，加适量木薯粉制成包子皮包成的一种包子。内馅采用猪肉、牛肉、香菇、冬笋(或甜笋)、鱿鱼等料，并将其剁碎，放入精盐、味精下锅翻炒，滤去汤汁即成馅心。芋子包包好后，下锅用猛火蒸约15分钟，出锅摆盘，放入香油、丰鱼、猪油、葱花等调料，一盘热气腾腾、香气扑鼻的芋子包就大功告成。趁热食之口感鲜香滑软、令人垂涎。</p>",
		coords:"137,367,145,328,208,256,159,242,111,238,68,224,18,299,43,332",
		city:"longyan"
	},
// 	{
// 		title:"时来运转",
// 		createdTime:"2016/6/12",
// 		readCount:529,
// 		content:"<h4>材料：地瓜面团（地瓜粉和地瓜泥比例为1:2），其中地瓜粉和木薯粉比例又为3:1</h4>" +
// "<p>地瓜面团是用蒸好的地瓜和当地的地瓜粉以及木薯粉加工搅拌成细腻的地瓜面团待用</p>" +
// "<h4>内馅材料：</h4>" +
// "<p>后腿肉 虾仁 螃蟹肉 当地紫菜 花蛤 蚬子 白菜 葱油 葱 芹菜 青蒜</p>" +
// "<h4>调料：</h4>" +
// "<p>生抽 老抽 糖 料酒 盐巴 鸡精</p>" +
// "<h4>做法：</h4>" +
// "<p>1、新鲜的虾事先剥壳取肉，螃蟹蒸熟将肉取出，花蛤和蚬子也是煮开取肉，紫菜切小段，肉捞下切小丁，白菜切小块用盐杀水攥干，其他的芹菜蒜葱也切颗粒，另外用葱白熬好葱油待用</p>" +
// "<p>2、锅内倒入葱油适量，将肉事先放入炒出香味</p>" +
// "<p>3、加入调料品拌匀</p>" +
// "<p>4、将其他海鲜食材一一放入，每放入一样都要翻拌均匀</p>" +
// "<p>5、最后放入青菜、芹菜、青蒜和葱，再淋适量的葱油拌匀调整下口味盛出待用</p>" +
// "<p>6、将地瓜面团揉匀，取一团在手心捏开</p>" +
// "<p>7、包入适量的馅料（这个量要多些，后面吃 的时候感觉才舒服）</p>" +
// "<p>8、慢慢的往虎口上方推 ，然后捏合搓好，收口朝下</p>" +
// "<p>9、将时来运转一个个包好</p>" +
// "<p>10、放入烧开的热水锅中</p>" +
// "<p>11、大约15分钟左右就好</p>",
// 		city:"pingtan"
// 	},
	{
		title:"同利肉燕",
		createdTime:"2016/6/12",
		readCount:384,
		content:"<p>肉燕制作技艺，全国唯福州仅有，堪称技艺独特、神州一绝。福州是有福之州，“吃太平燕、享全家福”是福州特有的民情民俗。福州人逢年过节，婚丧喜庆、亲友聚别、民间家宴，“太平燕”是必备一道菜肴，也是全国所有菜肴中，唯一上菜需要鸣放鞭炮的一道吉祥菜。</p>",
		coords:"292,233,276,220,289,199,308,161,337,152,395,148,418,150,435,167,399,193,419,204,409,229,420,254,398,258,352,227",
		city:"fuzhou"
	},
	{
		title:"莆田卤面",
		createdTime:"2016/6/12",
		readCount:481,
		content:"<p>莆田的卤面算是最富盛名的小吃了。又最属江口的卤面有名了。面，是莆田自制的，在外面比较少能买到。佐料倒很多，有海蛎，蛏子，干贝，虾干，精肉，蘑菇.....卤面的工序不难，但是要做地道的却是很困难~基本上没有哪个莆田人不吃卤面的卤面，相传莆田卤面的面条起源于汉代，以前就已出现“汤饼”。“汤饼”实际是一种“片儿汤”，制作时一手托面团，一手往汤锅里撕片。</p>" +
"<p>为什么莆田卤面能钩起那么多人的食欲呢，这当然有它独到的秘密了。莆田卤面的关键在于面筋、熬高汤和配料上。一般前一天晚上开始准备。面筋当然是讲究的第一道工序，不像山西面还是拉面那样，现场把面团拉成细面，这个面条要用不同面粉按比例加工，打出来的面要韧性，下锅后不易糊掉。熬高汤也是重要的程序，挑选猪骨头里最好的骨段，熬出来的高汤要白花花的，香喷喷的，每份高汤要兑多少水都是固定的，稠了不行，稀了也不行。而后是配料上，瘦肉、香菇，虾干，干贝，牡蛎，蛏、韭菜是必备的。前面的所有工序都好了以后，就是火功了，卤面之所以是叫卤面，因为它是在文火中慢慢炖出来的，让高汤和配料的味道渗透到面条里面，这样的话，出来的面才能有味道，汤是粘稠的。卤面在讲究火候的同时，也讲究吃面的时间，一般来说，面出锅3-5分钟，就要开吃了，不然的话，面就糊了，就没有那种口感了，所以对正宗的莆田卤面来说，煮一大锅的卤面也是有很大风险的，时间过久，就要倒掉。没完呢，还有很多辅料:绿豆芽，韭菜段加少许油烫至断生投凉，蒜头切很细碎的丁小火炸酥(就是日本面馆那种金灿灿的蒜丁)。</p>" +
"<p>折叠卤面做法</p>" +
"<p>材料:肉卤300克、大白菜3片、香菇4朵、香菜2根、油面150克。</p>" +
"<p>调味料:(1)清水4杯、盐1茶匙、酱油2大匙、湿淀粉4大匙;(2)胡椒粉少许、醋4大匙。</p>" +
"<p>作法:1.大白菜洗净、切丝，香菇泡软切丝，用两大匙油先炒香菇，再放入大白菜同炒至软，</p>" +
"<p>加入调味料烧 开，改小火，并放入肉卤同煮。</p>" +
"<p>2.另外半锅水烧开，放入面条煮熟，捞入碗内。</p>" +
"<p>3.待肉卤已熟且汤汁黏稠时关火，加入调味料及洗净、切碎的香菜末。</p>" +
"<p>4.盛入碗内的面条，淋上煮好的肉卤即可食用。</p>",
		coords:"355,225,299,234,287,254,308,272,335,271,368,282,387,270,375,249",
		city:"putian"
	},
	{
		title:"沙县扁肉",
		createdTime:"2016/6/12",
		readCount:390,
		content:"<p>沙县扁肉，原称沙县扁食，又称沙县面食。据史料记载，早在唐朝，沙县城关即有扁肉问世，系沙县城乡最常见最受群众欢迎的地方名小吃，也是出外经营沙县小吃店的当家品种。沙县民间传说北宋名相李纲在沙县期间，喜食扁食，曾赋诗曰：“浑沌乾坤一包中，常存正气唱大风，七峰叠翠足娱晚，十里平流任西东”，至今传为佳话。</p>" +
"<p>沙县扁肉采用新鲜猪后腿精肉手工捶成肉糜制馅，面粉制成极薄面皮包制而成。成品皮薄如纸，馅心脆嫩，酸辣鲜香，清爽可口，二十世纪八十年代至九十年代初，沙县人大批到福州开小吃店，根据福州人习惯改叫扁肉，为群众所赞赏。1997年12月，沙县庙门扁肉店制作的“沙县庙门扁肉”被中国烹饪协会认定为“中华名小吃”。 2006年10月，被中国烹饪协会选为“北京奥运会”推荐食谱“金奖”。</p>" +
"<p>主料：面粉500g、猪后腿瘦肉500g。</p>" +
"<p>配料：食用碱、水</p>" +
"<p>调料：生抽、盐、味精、白糖、胡椒粉、麻油、米醋、香葱适量。</p>" +
"<p>制法：</p>" +
"<p>1、面粉加入食用碱，冷水和成面坯，压成薄片，切成长宽约5.5cm正方形皮坯。</p>" +
"<p>2、采用新鲜猪腿精瘦肉用木槌锤打成肉泥，加盐、碱、生抽、糖、味精、水搅拌上劲。</p>" +
"<p>3、包制时将适量肉馅拨入皮坯中，捏成金鱼状即可。</p>" +
"<p>4、扁肉下锅烫熟捞入有调味料与高汤碗中，洒葱花、胡椒粉、滴香油，即可食用。</p>",
		coords:"118,122,72,152,82,187,69,223,119,236,160,241,209,254,234,248,233,221,274,217,294,179,237,178,186,154,192,153",
		city:"sanming"
	},
	{
		title:"吴再添沙茶面",
		createdTime:"2016/6/12",
		readCount:363,
		content:"<p>沙茶面是一种具有南洋风味的厦门传统名点，由沙茶酱、油（碱）面、猪里脊肉、时令海鲜、猪骨汤、生菜等原料制作而成。小吃名师吴再添于上世纪五十年代，在东南亚沙茶制作原料和工艺基础上，结合厦门的饮食偏好加于改良，研制出风味独特的沙茶酱。以此制作的沙茶面软滑爽口，甜辣咸鲜兼备，醇香味美，深受海内外人士的喜爱。</p>",
		coords:"240,311,242,325,238,339,250,350,270,356,300,336,266,311",
		city:"xiamen"
	},
	{
		title:"和平游浆豆腐",
		createdTime:"2016/6/12",
		readCount:400,
		content:"<p>和平豆腐是闽北传统特色小吃。其选用的豆腐食材天然纯正，不用石膏，也不用卤水，而是用前一天的豆浆作为酵母发酵，采用人工游动、过滤、晾晒、油炸等方式制作，故称“游浆豆腐”，其在当地有上百年的传承历史，被列为“南平市非物质文化遗产”。当地厨师将豆腐与五花肉、鲤鱼等食材混搭，烹制成各式豆腐小吃，目前成为邵武和平古镇最受游客喜爱的旅游产品。</p>",
		coords:"284,4,243,10,218,35,182,53,111,75,124,121,221,163,291,179,286,146,321,101,349,84",
		city:"nanping"
	},
	{
		title:"再一碗福鼎肉片",
		createdTime:"2016/6/12",
		readCount:332,
		content:"<p>再一碗福鼎肉片（西阳肉缘）只采用海拔600——800米无污染高山地瓜粉、福鼎泔水喂养的本地猪后腿精肉为原材料，古法制作而成。它不含任何泡打粉，荤素搭配、营养均衡，色香味营养俱全，一道含有祝福意义的小吃。</p>",
		coords:"378,53,412,83,444,68,476,78,471,100,444,120,421,148,372,142,338,149,307,161,302,177,285,144",
		city:"ningde"
	},
	{
		title:"瑞芳鱼卷",
		createdTime:"2016/6/12",
		readCount:398,
		content:"<p>传统的崇武瑞芳鱼卷，主要以台湾海峡特产的新鲜马鲛鱼鱼肉做成的，鱼卷汤可把鱼卷切成3—4公分直接放入烧开的清水中煮10分钟左右即食。蒸鱼卷把鱼卷稍微解冻，切成段放蒸笼蒸10分钟即食。炒鱼卷把鱼卷稍微解冻切成片状入油锅翻炒，配以蒜苗，青椒或类似蔬菜使风味更清。炸鱼卷把鱼卷切成约半公分的薄片直接放入热油中炸至金黄即可食用。其口感脆滑，余香绵长，堪称一绝。</p>",
		coords:"238,249,201,283,208,313,260,309,301,331,333,317,352,292,351,278,297,273,286,256,293,237,269,220,234,222",
		city:"quanzhou"
	}
]);

snack.controller('SnackController', function ($scope,$http,$location,$rootScope,$state,snackList) {
	$scope.snackList = snackList;
});

snack.controller('SnackDetailController', function($scope,$stateParams) {
	$scope.snack = $stateParams.snack;
});