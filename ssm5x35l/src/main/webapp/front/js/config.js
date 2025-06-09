
var projectName = '宠物医院管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '宠物信息',
	url: './pages/chongwuxinxi/list.html'
}, 
{
	name: '医生信息',
	url: './pages/yishengxinxi/list.html'
}, 

{
	name: '宠物论坛',
	url: './pages/forum/list.html'
}, 
{
	name: '网站公告',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/ssm5x35l/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除","领养"],"menu":"宠物信息","menuJump":"列表","tableName":"chongwuxinxi"}],"menu":"宠物信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"领养","menuJump":"列表","tableName":"lingyang"}],"menu":"领养管理"},{"child":[{"buttons":["新增","查看","修改","删除","挂号"],"menu":"医生信息","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"挂号预约","menuJump":"列表","tableName":"guahaoyuyue"}],"menu":"挂号预约管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核","发布信息","提交结果"],"menu":"寄养","menuJump":"列表","tableName":"jiyang"}],"menu":"寄养管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"寄养结果","menuJump":"列表","tableName":"jiyangjieguo"}],"menu":"寄养结果管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"宠物论坛","tableName":"forum"}],"menu":"宠物论坛"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"网站公告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","领养"],"menu":"宠物信息列表","menuJump":"列表","tableName":"chongwuxinxi"}],"menu":"宠物信息模块"},{"child":[{"buttons":["查看","挂号"],"menu":"医生信息列表","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"宠物信息","menuJump":"列表","tableName":"chongwuxinxi"}],"menu":"宠物信息管理"},{"child":[{"buttons":["查看"],"menu":"领养","menuJump":"列表","tableName":"lingyang"}],"menu":"领养管理"},{"child":[{"buttons":["查看","删除"],"menu":"挂号预约","menuJump":"列表","tableName":"guahaoyuyue"}],"menu":"挂号预约管理"},{"child":[{"buttons":["新增","查看"],"menu":"寄养","menuJump":"列表","tableName":"jiyang"}],"menu":"寄养管理"},{"child":[{"buttons":["查看"],"menu":"寄养结果","menuJump":"列表","tableName":"jiyangjieguo"}],"menu":"寄养结果管理"}],"frontMenu":[{"child":[{"buttons":["查看","领养"],"menu":"宠物信息列表","menuJump":"列表","tableName":"chongwuxinxi"}],"menu":"宠物信息模块"},{"child":[{"buttons":["查看","挂号"],"menu":"医生信息列表","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
