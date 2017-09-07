var chef = angular.module('chef', []);

chef.constant('restaurantList', [
{
	title:"漳州凯立大酒楼",
	brief:"漳州市凯立餐饮有限公司成立于2004年，其前身是久誉盛名的漳州台湾饭店，地处芗城区水仙大街繁华地段，交通十分便利，设有包厢12间，大厅可供500人同时就餐，在同行业中有较高的知名度，深受漳州广大消费者的好评。",
	address:"芗城区水仙大街亨立大厦",
	buildings:"酒店",
	transport:"16路、2路、31路、新丹环线2路",
	tel:"0596-2680089",
	recomment:"闽菜",
	type:"酒店酒楼",
	cuisine:"闽菜",
	environment:"宴请、朋友聚餐",
	consumption:"150元",
	businessTime:"9:00-23:30",
	content:"<p>漳州市凯立餐饮有限公司成立于2004年，其前身是久誉盛名的漳州台湾饭店，地处芗城区水仙大街繁华地段，交通十分便利，设有包厢12间，大厅可供500人同时就餐，在同行业中有较高的知名度，深受漳州广大消费者的好评。本公司在2005年荣获福建十佳酒家福建餐饮名店的称号。其主要特点有： 一、树立宾客至上，服务第一的企业宗旨 公司成立伊始就把宾客至上、服务第一作为企业宗旨，从硬件投入方面，从装修开始就按等级酒家标准，合理安排布局，大胆采用先进设备，努力为顾客提供优雅舒适的就餐环境。同时充分利用地理优势，紧紧抓住漳州餐饮消费的特点，找准企业经营战略，坚持走大众化的发展战略，始终做到提供的菜色、香、味俱全，提供的服务文明规范周到，成为漳州广大消费乔迁、婚庆、寿喜，商务宴席的上选酒家之一 二、科学管理、规范服务 公司制定了完善可行的各项规章制度。各类人员按章行事，各司其责。厨房严把进货关卫生关，从业人员持证上岗，积极响应国家的号召和行业协会的倡议，带头执行有关食品卫生、食品安全、动物保护等规章制度；前厅服务人员待客礼貌、服务周到、着装整齐、仪表优雅、用语文明。多年来企业运作规范有序，赏罚分明，使得全体员工团结一心，以店为家，劳资和谐，安全生产无事故。凯立大酒楼拥有一支强有力厨师队伍，是酒楼长期做好菜品的根本保障。 三、注意品牌，不断创新 在经过多年积累，逐渐形成自已经营特色，拥有众多消费群体的基础上，公司总经理林铭煌注意品牌战略，2004年果断进行公司注册，为做大做强企业奠定了基础，并广泛宣传，让利消费者，很快就树立了自已的品牌。为满足消费者不断变化的消费要求，公司还经常组织烹饪专业人员走出漳州参观学习，参加省内外的烹调大赛，都有所收获。开阔眼界，取长补短，经过改良，大胆创新，形成自已独特的菜肴。目前已拥众多特色菜品，吸引不少消费者。</p>",
	park:true,
	box:true,
	card:true,
	takeaway:true,
	supper:true,
	wifi:true
},
{
	title:"福建国惠大酒店五里亭店",
	brief:"福州国惠大酒楼（五里亭店）是福建国惠企业旗下第五家分店。酒楼位于福州市晋安区五马路199号（五里亭立交桥旁），酒楼规模宏大、装修气派，整体富有独具创意的风格。",
	address:"福州市晋安区五马路199号（五里亭立交桥旁）",
	buildings:"酒店",
	transport:"80路、9路、115路、166路、16路、305路、88路等",
	tel:"0591-87631888",
	recomment:"明炉东星斑、燕麦烩辽参",
	type:"酒店酒楼",
	cuisine:"闽菜，粤菜，川菜",
	environment:"宴请、朋友聚餐",
	consumption:"160元",
	businessTime:"9:00-23:00",
	content:"<p>福州国惠大酒楼（五里亭店）是福建国惠企业旗下第五家分店。酒楼位于福州市晋安区五马路199号（五里亭立交桥旁），酒楼规模宏大、装修气派，整体富有独具创意的风格。 酒楼一楼拥有可同时容纳1000人用餐的宴会大厅，并且可分成3个小宴会厅，分别为龙凤厅、吉祥厅、如意厅。宴会大厅可根据客人的需求灵活调整，根据桌数不同设计摆放出不同的格局。同时大厅配备音响、电视、投影仪及全新的高科技LED大屏幕，炫丽的灯光可以打照出各种各样的宴会气氛。同时，国惠大酒楼共有包厢70个，其包厢装修精致典雅，有电视，沙发，休闲区等，设备齐全。酒楼菜肴多种多样，主要以闽菜、粤菜为主，沪菜、川菜、温州菜为辅菜肴烹饪精致口味独特。我们有经验丰富的团队为您提供热情完善的服务，让您有宾至如归的感觉。是大型宴会、公司聚餐、商务宴请、同学聚会等等，同时也是您享受美食的最佳去处！</p>",
	park:true,
	box:true,
	card:true,
	takeaway:true,
	supper:false,
	wifi:false
},
{
	title:"长乐航城新清清酒店",
	brief:"长乐清清酒店集团由张善清先生一手创立。",
	address:"长乐市航城街道泮野村爱心路291号",
	buildings:"酒店",
	transport:"1路、7路",
	tel:"18805027116",
	recomment:"闽菜",
	type:"酒店酒楼",
	cuisine:"闽菜",
	environment:"宴请、朋友聚餐",
	consumption:"100元",
	businessTime:"24小时营业",
	content:"<p>长乐清清酒店集团由张善清先生一手创立。1978年年近不惑的张善清利用改革开放伊始的大好时机，投身商海。经过三十多年以信为本、以味为先、以客为尊的经营理念发展，清清品牌从小到大，从单一到连锁，现辖有新清清酒店、清清昆仑店、清清锦东店、清清家时尚餐厅四家门店。营业面积达二万平方米，经营菜点涵盖闽菜、粤菜、时尚餐饮等多个饮食领域。其经营的虾油羊脚、银锅羊头烩、锅仔鸦片鱼头、京葱爆吊螺、客家生吹鸭、松鼠桂鱼等以乡土为根基，极具地方风味，深受广大食客喜爱。</p>",
	park:true,
	box:true,
	card:true,
	takeaway:true,
	supper:false,
	wifi:true
},
{
	title:"莆田市荔城友德大酒店",
	brief:"荔城友德大酒店位于莆田市商业主干道延寿中路中段，毗邻莆田体育中心、莆仙大剧院、正荣商业中心、莆田学院、莆田新汽车站、地里位置优越、交通便利。",
	address:"延寿路中段1299号荔城友德大酒店1层",
	buildings:"酒店",
	transport:"8路公交车",
	tel:"0594-2371111",
	recomment:"海鲜，精品菜肴",
	type:"酒店酒楼",
	cuisine:"闽菜",
	environment:"宴请、朋友聚餐",
	consumption:"150元",
	businessTime:"24小时营业",
	content:"<p>荔城友德大酒店位于莆田市商业主干道延寿中路中段，毗邻莆田体育中心、莆仙大剧院、正荣商业中心、莆田学院、莆田新汽车站、地里位置优越、交通便利。酒店外观宏伟大气，整体设计奢华典雅；大堂宽阔明亮，装点以美轮美奂的水晶灯饰、现代艺术气息浓郁的吊顶。拥有167间风格迥异的客房，客房布置舒适整齐、设有多款房型，客房内均配备了wifi和高速上网接口、42寸液晶电视机、国内国际长途电话、迷你吧、小冰箱、24小时热水、独立卫浴等设施，让您尽享宾至如归的感觉。酒店附设装修精美、风味各异的中、西餐厅及豪华包厢；还设有水疗中心、健身房、棋牌室、茶艺室、台球室、会议厅，配以商务中心的专业服务，定使会务、洽谈圆满举行。酒店将致力为所下榻的宾客营造独具品位的个性空间。以优质的客房、丰富的娱乐休闲设施、热情的服务，诚挚欢迎四方宾朋莅临下榻！</p>",
	park:true,
	box:true,
	card:true,
	takeaway:true,
	supper:true,
	wifi:true
},
{
	title:"泉州鲤城大酒店",
	brief:"泉州鲤城大酒店远太集团（福建）有限公司与泉州市鲤城区人民政府合作经营的，集餐饮、住宿、娱乐、旅游、购物、商务、会务为一体的涉外酒店。酒店位于历史文化名城泉州市区中心南俊路中段，建筑面积为21330平方米，占地面积",
	address:"泉州市鲤城区南俊巷中段",
	buildings:"承天寺、开元寺、状元街、小吃一条街",
	transport:"536.25.682.808路",
	tel:"0595-22279888",
	recomment:"闽菜",
	type:"酒店酒楼",
	cuisine:"闽菜",
	environment:"商务洽谈，多人聚餐，大型酒宴",
	consumption:"250元",
	businessTime:"24小时营业",
	content:"<p>泉州鲤城大酒店远太集团（福建）有限公司与泉州市鲤城区人民政府合作经营的，集餐饮、住宿、娱乐、旅游、购物、商务、会务为一体的涉外酒店。酒店位于历史文化名城泉州市区中心南俊路中段，建筑面积为21330平方米，占地面积11220平方米（17亩）。南邻泉州市工人文化宫、鲤城区政府；东邻千年古刹承天寺；西邻中山寺、开元寺；北靠东街“状元街”；交通便捷；后渚港客运码头5公里。酒店拥有多种类型的豪华套间、商务套间、标准房、普通房。酒店设施精良配套完善，可举办上千人的酒会、宴会。各种规格的会议室（厅）数十间，可同时接纳数十到上千人会议。风格典雅的西餐厅提供广式早茶、闽粤菜肴和正式西餐。豪华宴会厅、贵宾厅、多功能厅、KTV 可以举办不同形式的宴会。酒店娱乐设施一应俱全，美容中心、医疗室、桑拿中心、KTV、咖啡厅、 游艺厅、购物中心、商务中心等。让客人无需出店，便可享无微不至的服务！ 鲤城大酒店以“一条龙的服务、二星级收费、三星级硬件、四星级管理、五星级目标”之经营管理特色而享誉侨乡泉州，酒店将继续秉承“宾客至上，以严治店”之经营理念，服务天下宾客。</p>",
	park:true,
	box:true,
	card:false,
	takeaway:true,
	supper:false,
	wifi:false
},
{
	title:"三明宾馆",
	brief:"1978年由国务院侨办批复同意在三明市梅列区建设三明宾馆，以安置印尼等归、难侨的就业问题，并于1983年建成投入使用。",
	address:"梅列区牡丹新村11幢三明宾馆",
	buildings:"酒店",
	transport:"k103路",
	tel:"0598-8963333",
	recomment:"闽菜",
	type:"酒店酒楼",
	cuisine:"闽菜",
	environment:"宴请、朋友聚餐",
	consumption:"150元",
	businessTime:"24小时营业",
	content:"<p>1978年由国务院侨办批复同意在三明市梅列区建设三明宾馆，以安置印尼等归、难侨的就业问题，并于1983年建成投入使用。随着市场化进程的需要，2002年三明宾馆成功改制。天元集团按照“三星级”标准，对三明宾馆进行了装修改造。2003年三明宾馆被国家旅游局授予三星级旅游饭店。2009年，三明宾馆拆迁该建，在原址新建五星级旅游饭店，三明宾馆（天元国际大酒店）位于市中心最繁华的列东街与东新二路交汇处，为三明商贸、经济、政治、文化的枢纽地带，如同棋盘正中央的星位，辐射周边。酒店集客房、餐饮、宴会、商务、会展、娱乐、旅游、休闲为一体，是以五星级为起点的最具规模、高端、高雅、豪华大酒店。酒店，地上26层，地下2层，拥有280多间（套）豪华舒适、风格各异的客房，中、西餐厅豪华气派、佳肴荟萃，可同时容纳1400人同时就餐，商务中心、名品购物、会议中心、咖啡厅、夜总会、KTV、健身、桑拿、足浴等功能设施配套完善，酒店严格按照国际五星级酒店标准运作管理，是政商名流商务、宴会、休闲、购物之首选场所。</p>",
	park:true,
	box:true,
	card:true,
	takeaway:true,
	supper:true,
	wifi:true
},
{
	title:"晋江市荣誉国际酒店",
	brief:"晋江荣誉国际酒店地处中国鞋都晋江市区，位于晋江市交通主动脉梅岭世纪大道与双龙路交汇处，毗邻泉州清蒙工业区，距晋江机场仅5分钟车程。",
	address:"晋江市梅岭世纪大道双沟移动通信大厦",
	buildings:"酒店",
	transport:"k902路",
	tel:"0595-68555555",
	recomment:"闽菜",
	type:"酒店酒楼",
	cuisine:"闽菜",
	environment:"宴请、朋友聚餐",
	consumption:"200元",
	businessTime:"24小时营业",
	content:"<p>晋江荣誉国际酒店地处中国鞋都——晋江市区，位于晋江市交通主动脉梅岭世纪大道与双龙路交汇处，毗邻泉州清蒙工业区，距晋江机场仅5分钟车程。酒店是晋江市地标性建筑物，俯瞰晋江乃至泉州全景。拥有高档豪华、温馨舒适的各类客房，酒店配备大、中、小等规格齐全、配套完善的会议场所及多功厅、接见厅、贵宾厅，先进的多媒体系统和声像设备可满足各种规模、各种形式会议之需要。酒店还配有KTV、保健桑拿、SPA水疗、恒温游泳池、网球场、健身房、棋牌室、乒乓球室、美容厅等康体娱乐设施，是商务、会议、旅游等八方宾客理想的下榻酒店。</p>",
	park:true,
	box:true,
	card:true,
	takeaway:true,
	supper:false,
	wifi:true
},
{
	title:"石狮五洲大酒店",
	brief:"石狮五洲大酒店是一家集客房、餐饮、娱乐、购物等为一体的综合性四星级旅游饭店。酒店拥有贵宾厅、豪华宴会厅、多功能厅等风格迴异的各式餐厅。中餐厅拥有一流的闽、粤菜名师提供独具风味的美食佳肴。浪漫典雅的西餐厅、怡静优雅的茶艺馆及休闲吧、更有装修豪华的KTV，让您尽情领略浪漫都市之超凡魅力。",
	address:"福建省石狮市振兴路2号",
	buildings:"狮城国际广场",
	transport:"802路",
	tel:"0595-88566666",
	recomment:"闽、粤菜、西餐、茶艺",
	type:"酒店酒楼",
	cuisine:"闽菜、粤菜",
	environment:"商务洽谈、大型宴请、好友小聚、多人聚餐",
	consumption:"-",
	businessTime:"24小时营业",
	content:"<p>石狮五洲大酒店是一家集客房、餐饮、娱乐、购物等为一体的综合性四星级旅游饭店。酒店建筑面积约为18000平方米，装璜高贵典雅，气派非凡。主楼和附楼相互辉映，酒店拥有标准房、商务套房及独具特色的空中别墅 等各式客房，房间内均有配置宽带上网，酒店拥有贵宾厅、豪华宴会厅、多功能厅等风格迴异的各式餐厅让您尽享天下美食。中餐厅拥有一流的闽、粤菜名师提供独具风味的美食佳肴。浪漫典雅的西餐厅、怡静优雅的茶艺馆及休闲吧、更有装修豪华的KTV，让您尽情领略浪漫都市之超凡魅力。酒店附楼设有桑拿及休闲花园，并配备多种健身器材，让商务休闲融为一体。酒店员工素质优良、秉承“殷 勤周到五洲人”的管理理念，服务每一位宾客。</p>",
	park:true,
	box:true,
	card:false,
	takeaway:true,
	supper:true,
	wifi:true
},
{
	title:"厦门牡丹大酒楼",
	brief:"厦门牡丹大酒楼有限公司体育路店位于厦门市思明区体育路88号第七层交通便利。",
	address:"厦门市思明区体育路88号",
	buildings:"酒店",
	transport:"31，36，85，103，体育中心站",
	tel:"0592-5042999",
	recomment:"闽菜",
	type:"酒店酒楼",
	cuisine:"闽菜",
	environment:"宴请、朋友聚餐",
	consumption:"78元",
	businessTime:"9:00-23:00",
	content:"<p>厦门牡丹大酒楼有限公司体育路店位于厦门市思明区体育路88号第七层交通便利。厦门牡丹大酒楼有限公司体育路店本着“客户第一，诚信至上”的原则，乔迁后全新开张的牡丹大酒楼体育路店营业面积近4000平方米，拥有VIP包厢37间，大小宴会厅5个，格局方正，适合不同的宴会所需，其中最大宴会厅可同时容纳550人用餐，敞亮通透，并配有专业的舞台灯光设备，为宴会接待打造良好基础。从挑高近8米、大气辉煌的1楼大堂乘坐专属电梯直达7楼，印有新店名的金色画卷在眼前徐徐展开，恭迎客来。</p>",
	park:true,
	box:true,
	card:true,
	takeaway:true,
	supper:false,
	wifi:false
},
{
	title:"聚春园大酒店",
	brief:"聚春园始创于1865年，坐落在福州的东街口，是福建省现存年代最悠久的历史名店，驰名中外的佛跳墙就源于聚春园。1996年，聚春园被国家商贸授予中华老字号。",
	address:"福州鼓楼东街2号",
	buildings:"福州东方百货",
	transport:"2路 102路动物园专线 117路 118路 11路 5路",
	tel:"0591-87502328",
	recomment:"佛跳墙",
	type:"酒店酒楼",
	cuisine:"闽菜",
	environment:"商务、宴请、聚会",
	consumption:"100元",
	businessTime:"8:00-22:00",
	content:"<p>聚春园作为福建闽菜的主要发祥地，是清同治、光绪年间福州唯一的大型菜馆；创始人郑春发（福建福清人，1856年—1930年）在闽菜传统烹饪技术基础上，吸收京广苏杭等南北菜肴的精华，形成自己的独特风格，成为福州菜式的开山鼻祖；历史上的聚春园是达官显贵、商贾名流会聚之所，聚春园的楹联“聚多冠盖、春满壶觞”就是当年经营盛况的写照。</p>" +
"<p>聚春园菜馆原为两层砖木结构，解放后曾多次修葺店堂，改革开放期间的1984年、1990年进行了两期改造。1994年，聚春园改扩建为集餐饮、住宿、商务、娱乐、购物为一体的三星级旅游涉外酒店，楼高11层，占地2400平方米，面积16300平方米，客房130间（套），餐位1300个。以烹制闽菜状元“佛跳墙”享誉中外的聚春宴中餐厅设于酒店三楼，经营闽粤菜系诸多珍馔佳肴；二楼聚香苑自助餐厅供应精美中西美食；底层聚雅台西餐酒吧，提供西餐大菜、特色饮品，美味佳肴荟萃，令人颊齿留香。此外，酒店还配有各型会议厅以提供全功能的服务。</p>" +
"<p>聚春园大酒店开业以来，秉承“守百年基业、创一流业绩、树星级品牌、聚春色满园”的质量方针，成功引进ISO9000 国际质量管理体系，以弘扬闽菜文化产品“金鼎奖”；2002年第12届全国厨师节，“佛跳墙席”被认定为“中华名宴”；1997年，太极芋泥被评为“中华名小吃”；酒店的著名菜点有鸡汤氽海蚌、糟香螺片、龙身凤尾虾、灵芝恋玉蝉等；聚春园作为闽菜名厨的摇篮，造就一批闽厨高手，如中国烹饪大师强木根、强曲曲，中国烹饪名师、福建闽菜大师罗世伟，福建闽菜名师李焱、杨伟华等；酒店历年荣获省优秀企业、省级青年文明号五连冠、全国模范职工小家、全国用户满意先进单位、全国优质服务示范月先进单位、全国创建文明工作先进单位等称号。</p>",
	park:true,
	box:true,
	card:false,
	takeaway:true,
	supper:false,
	wifi:false
}
]);

chef.constant('chefList', [
{
	name:"吴志强",
	brief:"吴志强，1966年7月出生，中式烹调高级技师，高级营养师；中国烹饪大师、2012荣获中国烹饪大师金爵奖、中式烹调国家一级评委、国家级裁判员；中国名厨专业委员会委员、中华金厨奖获得者；福建闽菜大师、福建省技术技能鉴定专家委员会委员、福建省高级考评员、【福建省五一劳动奖章】获得者、被评为“泉州第五批优秀人才”。",
	briefContent:"吴志强，1966年7月出生，中式烹调高级技师，高级营养师；中国烹饪大师、2012荣获中国烹饪大师金爵奖、中式烹调国家一级评委、国家级裁判员；中国名厨专业委员会委员、中华金厨奖获得者；福建闽菜大师、福建省技术技能鉴定专家委员会委员、福建省高级考评员、【福建省五一劳动奖章】获得者、被评为“泉州第五批优秀人才”； 先后获得全国优秀厨师、中国百强奥运超厨，多次参加并获得地市、省级、国家级烹饪比赛金奖，在第六届全国烹饪技能竞赛总决赛获纯金一座，受评为【全国最佳厨师】；多次参加省级、国家级烹饪大赛评委。 现任： 福建泉州营养师协会副会长； 石狮耀强名厨俱乐部理事长； 五洲佳豪厨政总监； 五洲佳豪酒楼（石狮万佳店）总经理。",
	experience:"1987年入行 1991—1993 厦门欢乐园酒楼任锅台 1993—1996 南安石井金宝城大酒店任厨师长 1996—1998 厦门和平饭店任厨师长 1998—2004 石狮市耀中大酒店（三星）任行政总厨及餐饮部经理 2004—至今 石狮市五洲大酒店（四星 ）任行政总厨、厨政管理。",
	content:"<p>从事厨师行业24年以来，吴志强同志在烹饪道路上披荆斩棘、不断进取、勇攀高峰。2000年在耀中大酒店工作时，由于工作表现突出，受酒店嘉奖并派送香港富临饭店学习“阿一鲍鱼”制作。在港期间，受世界御厨住香港大使、国际艺术烹饪大师、世界鲍鱼大王杨贯一大师的亲自授导。2003年先后进京学习及参加“全国厨师长培训班”，学习期间受到高炳义、候玉瑞等数位厨界顶级大师的亲自授课,收益颇丰。2004年在五洲大酒店工作以来，曾多次接受酒店外派学习和交流，遍及长沙锦湖、武汉艳阳天、广东顺峰、青岛紫晶等酒店，多次受中国烹饪协会副会长、CCTV-2全国电视擂台赛总裁判长高炳义大师的好评，2006年并被吸纳为“高门”入室弟子。2011年获福建省五一劳动奖章。</p>" +
"<p>刻苦钻研与学习，成就了吴志强同志精湛的厨艺。2003年，他参加福建省“福煤杯”旅游烹饪大赛荣获优秀奖。其中热菜“田园浓汤翅”荣获金牌菜；2004年，参加第六届中国(泉州)海峡两岸美食节暨美食烹饪大赛荣获金牌奖， 其中热菜作品“燕沏云山高丽茶”荣获单道热菜第三名。作品展台--《锦绣石狮金辉宴》，荣获“最佳金奖名宴”； 2005年6月 参加福建（厦门）“李锦记”杯创新菜大赛荣获金牌奖。2005年10月 参加第十五届厨师节暨首届全国创新菜大赛荣获热菜银牌；凉菜铜牌及冷拼“飞天迎五环”最佳创意奖。2006年4月 参加ccTV-2“满汉全席”全国电视烹饪擂台赛荣金牌奖。其中，热菜“连璧双娇诉衷肠”荣获金牌菜。2006年6月 参加福建省第三届“绿进杯”烹饪大赛 ，荣获金牌奖。其中热菜“双龙共汲无米粥”荣获本次大赛单道热菜第一名，并获得‘福建名菜’的光荣称号。2006年9月 参加第二届中国国际食用菌烹饪技术大赛，获得热菜金奖，同时在首都人民大会堂接受授牌,受到原商业部副部长、世界中国烹饪联合会会长张世尧先生的亲切接见。2007年4月 参加在北京举办的第四届东方美食国际大奖赛暨U39奥运超厨总决赛荣获“中国百强奥运超厨”称号，并接受“超厨先生”金像一尊及金牌一枚本次创作的金牌菜“双龙共汲无米粥”被吸纳为2008年中国奥运食谱推荐菜肴。2008年９月参加“第六届全国烹饪技能竞赛（安徽赛区）”获单项热菜第四名的金牌奖和团体银奖。</p>" +
"<p>一分耕耘，一分收获。2005年8月吴志强同志被中国烹饪协会名厨专业委员会授以“名厨新星”，同时被吸纳为中国名厨新星俱乐部金牌会员。10月被评为“全国优秀厨师”。 2006年元月，被石狮市总工会授予“十佳科技创新标兵”称号。2006年10月获 “中华金厨奖”。 2009年10月被授予“中国烹饪大师”荣誉称号。</p>" +
"<p>吴志强同志不仅注重专业领域上的探索研究，同时热衷于行业的交流活动。2007年受聘“全国餐饮业中式烹调职业技能考核鉴定”联络员。2008年受聘“中国烹饪协会中式菜肴研发中心研发员”。2008年5月参加“世界中国烹饪联合会第五期国际评委培训”并获得证书。2009年9月 参加“全国餐饮业评委资格培训班”培训，获国家级评委证书。2008年11月至今先后受聘担任“2008年闽东首届‘光彩杯’名菜名点名小吃烹饪大赛”、 “中-加-美 国际烹饪技术交流大赛”、 “迎世博.海峡两岸国际烹饪艺术大赛”、 “第三届奥食卡食神争霸大赛（华南地区）”评委。并被授予“国际食神”、 “至尊评委”等称号。2009年10月率五洲佳豪集团九位选手组队参加第四届福建省烹饪技能竞赛，一举拿下九枚金牌赢得大满贯，获得大赛最佳组织奖。2010年3月再次组队参加第三届全国饭店业职业技能竞赛福建赛区竞赛，取得4金4银4铜佳绩，并获得大赛最佳组织奖。</p>" +
"<p>作为石狮市五洲大酒店行政总厨、厨政管理的吴志强，还积极配合酒店领导与行业协会工作，酒店顺利完成全国绿色餐饮企业工程的全面考核，完成酒店从创立“福建餐饮名店”到晋升成为“中华餐饮名店”，从荣获“全国绿色餐饮企业”到取得“全国特级酒家”的光荣称号，为酒店成为全国餐饮行业中闪烁的一颗明星争得光彩。</p>",
	honor:[]
},
{
	name:"陈智灵",
	brief:"一九六四年出生于福建省厦门市，现任福建省厦门国际会议中心酒店&厦门国际会展酒店行政总厨，一九八三年毕业于福建省技工烹饪学校，同年九月被分配在厦门宾馆工作。",
	briefContent:"一九六四年出生于福建省厦门市，现任福建省厦门国际会议中心酒店&厦门国际会展酒店行政总厨，一九八三年毕业于福建省技工烹饪学校，同年九月被分配在厦门宾馆工作。并拜中国闽菜泰斗童辉星为师.在烹饪专业技术上取得了很大进步，现为中国烹饪协会会员，中国烹饪协会名厨委员会福建工作区主任，世界中餐名厨交流协会理事，福建省烹饪协会常务理事，厦门餐饮同业公会常务理事、餐饮业国家一级评委，国家职业技能竞赛裁判员，国家职业技能高级考评员，国际食品设计专家。国家高级技师，中国烹饪大师，闽菜大师，荣获“中华金厨奖”，中国名厨“新锐奖”，中国烹饪协会名厨委员会突出贡献奖，荣获全国首届创新大赛创新大奖，中、日、韩烹饪国际大赛特金奖，马来西亚国际饮食交流会荣获金奖，李锦记厨艺创新大赛获金奖，被中国烹协授予中国优秀厨师称号，参加庆祝香港回归十周年《全国名厨荟萃为公益》慈善千人宴的闽菜制作，二零零六年被福建省经贸部授予福建省“十佳厨师”，二零零九年十月被福建省总工会授予“福建省技术能手”称号。获厦门大学“旅游管理专业”大专学位，参加中国烹饪协会举办的中餐行政总厨资格认证，一九八八年跟随师傅童辉星参加过中国第二届烹饪大奖赛（助手），一九八九年福建省旅游协外宾馆烹饪大赛获团体金奖，一九九零年代表厦门宾馆参加福建省机关事务管理局举办的烹饪大赛，参于第三届、第四届全国烹饪大赛展台制作荣获厦门代表队团体金牌，二零零一年参加广州国际美食节， 和厦门每年“98”贸冾会美食节， 并取得了较好的成绩。二零零三年率闽西宾馆代表队参加“龙岩元宵灯展美食节”获团体赛特金奖； 本人从厨三十二年先后在不同的大型饭店、宾馆担任过厨师长、行政总厨等职位。一九八六年被宾馆派往厦门第一家中外合资的“富豪海鲜酒家”与香港师傅合作执掌闽菜。一九九零年又被厦门宾馆指派到北京崐崘饭店“鼓浪餐厅”任厨师长，一九九三年在厦门鼓浪屿观海园度假村任餐饮部副经理兼行政总厨，一九九六被鹭江大厦聘任为餐饮部经理兼厨师长. 二零零零年在泉州刺桐饭店任厨师长，二零零二年九月在龙岩闽西宾馆餐饮部任行政总厨，二零一零年十一月任厦门国际会议中心酒店&厦门国际会展酒店行政总厨至今。 经过三十多年来实际工作中的磨练，积累了较为扎实的实践经验，曾经多次参于接待过党和国家领导人、外国元首和省、部级的重大接待任务，特别在厦门宾馆和省内重要接待宾馆参于接待过，如邓小平、胡锦涛、温家宝、胡耀邦、邓颖超、迟浩田、西哈鲁克亲王、阿基诺总统等等。在具体工作操作中，能根据不同对象的需要，达到满足不同层次人物的口味和要求.能深入研究，大胆创新，在继承闽菜传统技艺的基础上，融合了厦门菜清、鲜、淡、脆、微辣的特点，博采各菜系之精华，创造性地逐渐形成了自己富有闽南特色的烹饪风格。在菜肴制作过程中，强调原料的鲜、活、新，注重色、香、味、意、形、养，以味为核心，重视绿色食品应用。亦能根据不同档次的团体独立筹划组织各种大型宴会、乃至大型自助餐、冷餐酒会及鸡尾酒会等。精通闽菜旁通粤菜、川菜、鲁菜、烧烤、点心等制作对闽菜的创新和发展都能精心研究和探索，多次代表市和单位到国内、外参加烹饪比赛和技术交流，深受社会各界的好评，还先后参与《泉州美食》、《吃喝玩乐大搜索》、《食在厦门》的制作和编撰工作。以上是个人的简单介绍，本人的宗旨是<技术是我的一切，学无止境>.希望能得到充分发挥技能的平台，为社会和企业创造更多的成绩和财富。",
	experience:"现任福建省厦门国际会议中心酒店、厦门国际会展酒店行政总厨。",
	content:"<p>2005年“李锦记”杯厨创新大赛中获得金牌</p>" +
"<p>2005年获得十五届中国厨师节全国优秀厨师光荣称号</p>" +
"<p>2007年被授予中国烹饪协会名厨专业委员会2007年度突出贡献奖</p>" +
"<p>2007年被评为“福建省2006年度十佳厨师”</p>",
	honor:[]
},
{
	name:"胡满荣",
	brief:"胡满荣，1969年4月15日出生。中式烹调高级技师、中国烹饪大师。",
	briefContent:"胡满荣，1969年4月15日出生。中式烹调高级技师、中国烹饪大师。",
	experience:"1989年-1991年在石狮中旅华侨大酒店从事烹饪工作。 1993年在石狮绿岛海鲜酒楼担任主厨职务，97年担任厨师长职务。 2000年—至今担任荣誉酒店连锁机构董事总厨：石狮荣誉大酒店（四星）、晋江荣誉大酒店（四星）、晋江市荣誉国际大酒店、泉州钻石荣誉海鲜酒楼、泉州市荣誉国宴楼、福州荣誉大酒楼（正大店、梅峰店、元洪店）、平潭龙凤山庄荣誉酒店（四星）、平潭麒麟荣誉国际酒店（五星）、龙岩荣誉国宴楼、厦门荣誉国际酒店（五星）、厦门荣誉海鲜酒楼、永春荣誉国际酒店（四星）、浙江慈溪荣誉国宴楼、江西抚州荣誉国际酒店（五星）、北京荣誉海鲜酒楼。 2005年成为中国名厨专业委员会委员·中国烹饪协会会员。 2005年成为法国美食高级会员。 2005年被福建烹饪协会推荐为副会长、泉州行业烹饪协会推荐为协会副会长。 2009年任全国首届江鲜烹饪技能大赛组委会评委 2010年2月任香港餐饮管理学院“餐饮管理实战专家” 2012年9月参加“世界中国烹饪联合会第六期国际评委培训班”课程并毕业。 2015年7月担任2015巴黎国际杯“中国美食国际文化节”工作委员宴会副部长",
	content:"<p>1、熟悉中西餐烹饪技术。</p>" +
"<p>2、经常代表中国烹饪美食到外国表演，弘扬中国美食文化。中国美食走进联合国、印度、巴基斯坦、法国等中欧八国。是中国烹饪美食申遗的传播者。</p>" +
"<p>3、为烹饪行业培养上千人厨师队伍。</p>" +
"<p>4、2004年在中国烹饪协会培训，获得鲍燕翅高级技术证书。05年参加中国首届创新烹饪大赛，获得本次大赛最高奖项“创新成就大奖”，并誉为“最佳厨师”称号，直接晋级“技师”。06年获得中国劳动和社会保障部颁发的“高级技师”和 “闽菜大师”称号。2006年9月参加“满汉全席擂台赛”，荣夺擂主，10月，获得“福建闽菜大师”荣誉称号‘荣获得“中国烹饪名师”“中国鲍鱼大师”荣誉称号。2015年9月荣获中国烹饪协会中华金爵奖。</p>" +
"<p>2007年获得“2007年度中华金厨奖技术创新奖”。</p>" +
"<p>2007年被评为“2006中国餐饮业年度十大人物”之一。</p>" +
"<p>2008年获得首届全国逐宁一品原生态鹅烹饪创新大赛金奖。</p>" +
"<p>2009年荣获首届“国际中餐青年厨师”金奖。</p>",
	honor:[]
},
{
	name:"黄志成",
	brief:"1977年8月出生 ，中国烹饪名师，中式烹调高级技师，福 建闽菜大师，2013年“福建省技术能手”获得者，现任莆田市烹饪协会副会长，莆田市友德餐饮集团厨政管理，华天金叶大酒店行政总监。",
	briefContent:"1977年8月出生 ，中国烹饪名师，中式烹调高级技师，福 建闽菜大师，2013年“福建省技术能手”获得者，现任莆田市烹饪协会副会长，莆田市友德餐饮集团厨政管理，华天金叶大酒店行政总监。",
	experience:"1994年入行，1997—2000年莆田友德大酒店锅台，2000—2003年莆田友德海鲜楼任厨师长，2003—2006年莆田腾飞大酒店任厨师长，2006年至今，莆田市友德餐饮集团厨政管理，华天金叶大酒店行政总监。",
	content:"<p>从事厨师行业19年以来，黄志成在烹饪技术方面，尽心尽力，勇于创新，在创新的同时，突出莆田的特色——南日鲍，把特色与烹饪结合起来，更好的展现了莆田名菜——“南日鲍鱼番鸭捞米粉“。</p>" +
"<p>新奇的想法与创新的意识，促使了他对厨师行业的热情与喜爱，增强了自己的精湛厨艺。2009年11月，热爱从厨事业的他第一次参加了第四届福建省烹饪技能竟赛中荣获了‘’热菜组银奖‘’，幷与同年授任为莆田市烹饪协会副会长。2010年3月，参加第三届全国饭店业职业技能赛｛福州赛区｝中荣获金奖；2010年5月在参加首届国际华人厨艺明星争霸赛中获得‘’世界华人烹饪大赛金奖‘’，同时获得厨艺创新大赛‘’十佳金牌菜‘’，幷授予‘’金牌总厨‘’荣誉称号。</p>" +
"<p>功夫不负有心人，一份耕耘，一份收获，2011年8月，在福建首届大金湖晏清杯，淡水鱼烹饪邀请赛中，获得金奖，其中制作的“鸿运当关”菜被誉为福建名菜；11月经福建省烹饪协会评定任命他为“福建名菜名师”；2012年6月参加了第五届“绿进杯”烹饪技能竞赛热爱项目中成绩优异，幷荣获金奖，其中“金汤竹荪炖辽参”被授予为福建名菜；与此同时，经福建省烹饪协会认定幷授予他为“福建名菜大师”荣誉的光荣称号。2013年1月经中国烹饪协会认定，授誉他为“中国烹饪名师”；同年3月经福建人力资源和社会保障厅评定授予“福建省技术能手”光荣称号。</p>" +
"<p>作为一个有创新意识的行政总监、厨政管理、厨师长、能够把自己的创新与餐饮企业有机结合起来，他用自己的创新为餐饮行业增添了一副诱人的画卷。</p>",
	honor:[]
},
{
	name:"熊书胜",
	brief:"熊书胜，国家高级技师、中国烹饪大师，国家一级评委。",
	briefContent:"熊书胜，国家高级技师、中国烹饪大师，国家一级评委。自步入烹饪行业以来，就立足“中国食用菌之都”古田，先后研制出食用菌菜肴300多种以上，编写出版三本食用菌菜谱二万多字。近年来，先后多次参加全国国际食用菌烹饪大赛，荣获团体与个人八枚金牌，奖牌榜位居同行业首位。 多年来，先后被省经贸委授予“福建十佳”厨师；劳动与社会保障厅授予“技术能手”；中国食用菌协会授予“珍菌王子”；中国烹饪协会授予“全国优秀厨师”；荣获“中华金厨奖”和餐饮业最高奖项“卓越贡献奖”；省委组织部与省总工会授予“全国优秀高技能人才奖”和“五一劳动奖”； 成立了“烹饪大师工作室”与“劳模工作室”，今年4月，省人力资源与社会保障厅又将本人推荐申报国务院特殊津贴。",
	experience:"无",
	content:"无",
	honor:[]
},
{
	name:"马明东",
	brief:"马明东，中共党员，中式烹饪高级技师，国家职业技能鉴定高级考评员、国家一级评委。",
	briefContent:"马明东，中共党员，中式烹饪高级技师，国家职业技能鉴定高级考评员、国家一级评委。1989年起至今从事烹饪、管理工作。 擅长热菜烹调、食品雕刻，曾先后在南京军区烹饪大赛、福建省“福煤杯”烹饪大赛和“海峡两岸美食节”烹饪大赛获第一名；第五届全国烹饪大赛银奖；第五届中国烹饪世界大赛金奖，第六届全国烹饪大赛获团体、个人两枚金奖；并在第六届全国烹饪大赛总决赛中获得食雕全国第一名，被中烹协授予“全国最佳厨师”、“中国烹饪大师”、“中华金厨奖”称号；先后荣获厦门市劳动局“技术能手”、福建省旅游局“旅游行业最佳厨师”、 福建省劳动和社会保障厅“福建省技术能手”、国家劳动和社会保障部“全国技术能手”荣誉称号，并被厦门市政府评为“优秀技术能手”、“突出贡献技师、高级技师”，享受厦门市高技能人才政府津贴，军队军需烹饪专业士兵职业技能鉴定专家委员会成员；多次在军队、国家、省市级大赛中任评委。",
	experience:"无",
	content:"无",
	honor:[]
},
{
	name:"李清",
	brief:"李清同志1991年7月在福建省外贸中心酒店担任厨师，现任厦门海上花园酒店行政总厨，同时兼任厦门华美达长升大酒店、南京军区厦门金沙湾宾馆、厦门君隆戴斯大酒店行政总厨。",
	briefContent:"李清同志1991年7月在福建省外贸中心酒店担任厨师，现任厦门海上花园酒店行政总厨，同时兼任厦门华美达长升大酒店、南京军区厦门金沙湾宾馆、厦门君隆戴斯大酒店行政总厨。该同志从业以来，始终扎根一线，爱岗敬业，先后获得厦门市第十届职工技术竞赛“技术能手”、厦门市第四届“能工巧匠”第一名、福建省技术能手、第六届全国烹饪技能竞赛热菜项目个人金奖、中式烹调师职业技能高级技师等十几项荣誉称号，多次担任全国和福建省烹饪大赛评委，被厦门市政府评为“有突出贡献高级技师”并享受政府津贴，福建省人社厅授予其“中式烹饪李清大师技能工作室”，并入选“数字福建”高端人才建设库名录。出色完成了江泽民、李岚清、王岐山、迟浩田等党和国家领导人的用餐保障，以及2014年7月习近平主席视察福建部队和2015年5月出席南京公祭日的用餐保障，展示了精湛厨艺。。",
	experience:"1989--2002：福建外贸中心酒店 2002—至今：厦门海上花园酒店、厦门华美达长升酒店任行政总厨。",
	content:"<p>2005年 厦门市第十届职工技术比赛评为“技术能手”。</p>" +
"<p>2006年 厦门市第四届优秀发明革新评选活动，能工巧匠一等奖。</p>" +
"<p>2008年 第六届全国烹饪技能竞赛个人“金奖”南京军区二队，团体银奖。</p>" +
"<p>2009年 荣获厦门市有突出贡献技师并享受市政府津贴；“中国烹饪名师”称号；通过国家职业技能鉴定考评员；通过职业资格中式烹调高级技师考核；获得“福建技术能手”称号。</p>" +
"<p>2010年获“中国烹饪大师”称号。</p>",
	honor:[]
},
{
	name:"林瑞斌",
	brief:"林瑞斌，男，1969年出生，大专学历，中国烹饪大师，餐饮业国家一级评委，餐饮业国家职业技能竞赛裁判员，国家职业技能鉴定专家委员会烹饪专业委员会专家，中华金厨奖获得者，宁德市光彩之星，福建省技术能手，福建省优秀高技能人才，宁德市优秀青年人才，全国优秀厨师，福建省十佳厨师，中国名厨专业委员会委员，高级烹饪技师，经济师。",
	briefContent:"林瑞斌，男，1969年出生，大专学历，中国烹饪大师，餐饮业国家一级评委，餐饮业国家职业技能竞赛裁判员，国家职业技能鉴定专家委员会烹饪专业委员会专家，中华金厨奖获得者，宁德市光彩之星，福建省技术能手，福建省优秀高技能人才，宁德市优秀青年人才，全国优秀厨师，福建省十佳厨师，中国名厨专业委员会委员，高级烹饪技师，经济师，现任柘荣县金都大酒楼总经理，福建省商业联合会理事，福建省烹饪协会常务理事，福建省工商联执委，柘荣县政协常委，柘荣县个体私营企业协会副会长，柘荣县工商联副主席，柘荣县餐饮行业商会会长。",
	experience:"自1986年参加工作以来，林瑞斌同志就一直从事餐饮行业，先后在柘荣县武装部招待所、柘荣县交安宾馆、柘荣县长城宾馆、柘荣县大自然美食城、柘荣县邮电公寓、柘荣县金都大酒楼等多家宾馆、饭店担任厨师长、行政总厨、经理等职务，在经营和管理中始终贯穿着精益求精、热情服务的理念，因此他赢得了广大客户的好评，也给企业带来了良好的经济效益。",
	content:"<p>从事餐饮工作以来，林瑞斌同志努力钻研烹调技艺及餐饮管理知识，多次被省、市烹饪技术职称考评委员会及烹饪技术大赛组委会聘为评委，多次在市烹饪技术培训班以及下岗职工再教育培训班授课，在他培训和教学过程中，注重对学员的思想品德、职业道德和烹饪专业技术等方面的教育，为振兴闽菜以及闽东烹饪技术的发展作出了积极的贡献。</p>" +
"<p>林瑞斌同志对烹饪技艺孜孜不倦，苦练不已。不断推陈出新，他烹制的“三菇酿猪蹄”、“太子甲鱼裙”、“梅花土鲍”、“百花酿竹荪”、“菊花石鳞腿”、“珍珠海发菜”“蒜香牛柳卷”、“琵琶大虾”、“金瓜菊花鞭”、 “麒麟东星斑”、 “功夫一品锅”、 “八宝太子鸡”等菜肴，“泥鳅面”、“八宝乌饭”、“牛肉丸”等风味小吃，食品雕刻“丹凤迎宾”等，曾在省、市烹饪比赛中获奖。</p>" +
"<p>天道酬勤，凭着出色的烹饪技艺，1997年被福建省劳动厅授予“烹饪技师”、福建省烹饪协会授予“闽菜优秀烹调师”，2000年被省贸易厅聘请为餐饮业评等定级检评员，福建省烹饪技术职称考评委员会评委，2003年被评为“闽菜名师”， 2005年被评为“全国优秀厨师”，宁德市人事局授予“经济师”， 2006年被福建省烹饪协会授予“闽菜大师”，福建省经济贸易委员会授予“福建省十佳厨师”，福建省商业联合会授予“福建省最佳商业信用联盟企业家”， 2007年中国烹饪协会授予“中华金厨奖”，福建省文明办、福建省工商局、福建省个私协授予“福建省百家文明诚信个体工商户”、“福建省文明诚信个体工商户示范户”，宁德市人民政府授予“光彩之星”，2008年福建省劳动和社会保障厅授予“高级技师”。2009年中国烹饪协会授予“餐饮业国家二级评委”。</p>",
	honor:[]
},
{
	name:"王建富",
	brief:"王建富，1964年7月6日出生。",
	briefContent:"王建富，1964年7月6日出生。",
	experience:"现为福州钦榕大酒楼（群升店）出品总监，中国烹饪大师，福建闽菜大师，中式烹调高级技师，福建省职业技能鉴定烹饪专业专家委员会专家，福建省闽菜技艺研究会副会长，国家职业技能鉴定烹饪专业高级考评员，高级公共营养师。",
	content:"<p>1990获福建省首届青工大奖赛第一名、华东地区烹饪教学创新荣获金奖、中国首届全国青工大奖赛银牌，并获福建省新长征突击手称号。</p>" +
"<p>1995年获福建省烹饪最佳技术能手奖。</p>" +
"<p>第四届全国烹饪技术大奖赛“团体赛”“大众席赛”金牌获奖者。</p>" +
"<p>2005年 福建省贸易厅授予“福建省十佳厨师”。</p>" +
"<p>2005年 中国烹饪协会授予“中华金厨奖最佳技术创新奖”。</p>",
	honor:[]
},
{
	name:"杨伟华",
	brief:"杨伟华，男，汉族，中共党员，现任福州聚春园饭店有限公司餐饮技术总监兼行政总厨。",
	briefContent:"杨伟华，男，汉族，中共党员，现任福州聚春园饭店有限公司餐饮技术总监兼行政总厨，先后获得中式烹调高级技师、国家职业技能鉴定考评员、中国烹饪大师、福建省非物质文化遗产保护项目“聚春园佛跳墙制作技艺”第八代传承人、“2011中国名厨福建状元“、福州市高技能人才、福州市第二届首席高级技师、第一批优秀人才“百人计划”福建省技能大师、福建省技术能手、福州市劳动模范、福州市十佳技师、全国内贸技能之星等荣誉称号。 从事烹饪专业20多年来，以传承闽菜发展为己任，发扬和创新传统闽菜，如：刺参罗汉佛、刺参软蟳粥、胭脂鲍鱼饭等创新闽菜，在国内外大赛中取得优异的成绩，并将创新成果应用在实际工作中，身为国家级非物质文化遗产“聚春园佛跳墙制作技艺”第八代传承人，凭着年轻人对闽菜烹饪技艺的热爱，长期致力于闽菜状元“佛跳墙”制作技艺的传承及闽菜交流活动，为弘扬闽菜传统文化、加快闽菜发展做出了突出贡献，也为酒店创造了丰厚的经济效益。",
	experience:"无",
	content:"无",
	honor:[]
}
]);

chef.controller('ChefRestaurantController', function ($scope,$http,$location,$rootScope,$state,restaurantList,chefList) {
	$scope.restaurantList = restaurantList;
	$scope.chefList = chefList;
});

chef.controller('RestaurantDetailController', function($scope,$stateParams) {
	$scope.restaurant = $stateParams.restaurant;
});

chef.controller('ChefDetailController', function($scope,$stateParams) {
	$scope.chef = $stateParams.chef;
});


chef.controller('manageFamousController', function($scope, $http, $location, $rootScope, $state, httpService) {
    
    $scope.famousTypeArrays = [{
            name: '名师',
            type: 9
        },
        {
            name: '名店',
            type: 8
        },
        {
            name: '名小吃',
            type: 2
        }
    ];
    $scope.selectedFamousType = $scope.famousTypeArrays[0];
    $scope.query = {
        page: 0,
        size: 10,
        articleType: $scope.selectedFamousType.type
    };
    $scope.newsStatuses = [{
            name: '全部',
            status: -1
        },
        {
            name: '已发布',
            status: 0
        },
        {
            name: '未发布',
            status: 1
        }
    ];
    $scope.selectedStatus = $scope.newsStatuses[0];
    $scope.changePageSizeFun = function(size) {
        $scope.query.page = $scope.data.number;
        $scope.query.size = size;
        getList($scope.query);
    };

    $scope.gotoPageFun = function(x) {
        $scope.query.page = x;
        $scope.query.size = $scope.data.size;
        getList($scope.query);
    };

    function getList(queryObj) {
        httpService.getNewsList(queryObj).then(function(res) {
            console.log(res);
            $scope.data = res.data;
        }, function(err) {
            console.log(err);
        });
    };
    $scope.changeStatus = function() {
        if ($scope.selectedStatus.status == 1) {
            $scope.query.isPublic = false;
        } else if ($scope.selectedStatus.status == 0) {
            $scope.query.isPublic = true;
        }
        getList($scope.query);
    }
    $scope.changeType = function () {
    	$scope.query.articleType = $scope.selectedFamousType.type;
    	getList($scope.query);
    }
    getList($scope.query);

    $scope.goToCreate = function(argument) {
        $state.go("manage.famousCreate", { item: null });
    };
    $scope.goToEdit = function(item) {
        $state.go("manage.famousCreate", { item: item });
    };
    $scope.operate = function(item) {
        httpService.newsOperate(item.id, { is_public: !item.is_public }).then(function(res) {
            console.log(res);
            getList($scope.query);
        }, function(err) {
            console.log(err);
        })
    }
});



chef.controller('createFamousController', ['$scope', '$http', '$location', '$rootScope', '$state', 'httpService', '$stateParams', '$window', 'FileUploader','commonProperty', function($scope, $http, $location, $rootScope, $state, httpService, $stateParams, $window, FileUploader,commonProperty) {
    $(function() {
        $('#edit').froalaEditor({
            language: 'zh_cn',
            heightMin: 700,
            width: '1000',
            imageUploadURL: 'http://www.fjcy.net/api/upload/7?access_token=' + $window.sessionStorage["access_token"]

        });

    });
    $scope.famousTypeArrays = [{
            name: '名师',
            type: 9
        },
        {
            name: '名店',
            type: 8
        },
        {
            name: '名小吃',
            type: 2
        }
    ];
    var imageUploader = $scope.imageUploader = new FileUploader({
        url: commonProperty.serverHost + "upload/7?access_token=" + $window.sessionStorage["access_token"],
        queueLimit: 1, //文件个数
    });

    imageUploader.onAfterAddingFile = function(fileItem) {
        imageUploader.uploadAll();
    };

    imageUploader.onSuccessItem = function(fileItem, response, status, headers) {
        imageUploader.clearQueue();
        console.log(response);
        $scope.bannerurl = response.link;

    };

    imageUploader.onErrorItem = function(fileItem, response, status, headers) {};
    imageUploader.onCompleteAll = function() {};
    var selectedItem = $stateParams.item;
    $scope.save = function(argument) {
        console.log($('#edit').froalaEditor('html.get', true));
        var newsObj = {
            "article_type": $scope.selectedFamousType.type,
            "content": $('#edit').froalaEditor('html.get', true),
            "description": $scope.brief,
            "introduction": "",
            "thumbnails": $scope.bannerurl,
            "title": $scope.newsTitle
        };
        if (selectedItem) {
            httpService.newsUpdate(selectedItem.id, newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.famous');
            }, function(err) {
                console.log(err);
            })
        } else {
            httpService.newsCreate(newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.famous');
            }, function(err) {
                console.log(err);
            })
        }

    };
    $scope.cancel = function(argument) {
        $state.go('manage.famous');
    }


    $('#edit').on('froalaEditor.initialized', function(e, editor) {

        // Do something here.

        if (selectedItem) {
            $scope.brief = selectedItem.description;
            $scope.newsTitle = selectedItem.title;
            $scope.bannerurl = selectedItem.thumbnails;
            for (var i = 0; i < $scope.famousTypeArrays.length; i++) {
            	if ($scope.famousTypeArrays[i].type == selectedItem.article_type) {
            		$scope.selectedFamousType = $scope.famousTypeArrays[i];
            	}
            }
            
            $('#edit').froalaEditor('html.set', selectedItem.content);

        }else{
        	$scope.selectedFamousType = $scope.famousTypeArrays[0];
        };
    });



}]);