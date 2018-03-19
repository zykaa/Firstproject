login();
/*登录*/
function login() {
	$("#header_login").bind("click", function() {
		console.log("sdklfjdkslj");
		var html = '<div class="login_shade">' +
			'<div class="login_conter">' +
			'<h1>登录</h1>' +
			'<ul class="login_input">' +
			'<li>' +
			'<input type="text" placeholder="请输入您的手机号" />' +
			'</li>' +
			'<li class="index_li_2">' +
			'<input type="password" placeholder="请输入您的密码"  />' +
			'<span class="forget_pwd" id="fordet_pwd">忘记密码？</span>' +
			'</li>' +
			'</ul>' +
			'<p class="errorhint">dsfds</p>' +
			'<span class="login_btn" id="login_btn">登录</span>' +
			'</div>' +
			'</div>'
        $("#login").html(html);
        /*登录成功关闭登录页面*/
        $("#login_btn").bind("click",function(){
		console.log("sdfjkds");
		$(".login_shade").addClass("dn");
	});
	/*忘记密码*/
		$("#fordet_pwd").bind("click",function(){
			var html_pwd = '<div class="fordet_pwd">' +
			'<div class="login_conter">' +
			'<h1>登录</h1>' +
			'<ul class="login_input">' +
			'<li>' +
			'<input type="text" placeholder="请输入您的手机号" />' +
			'</li>' +
			'<li >' +
			'<input type="password" placeholder="请输入验证码" />' +
			'<span class="gain">发送短信</span>' +
			'</li>' +
			'<li class="index_li_2">' +
			'<input type="password" placeholder="请输入您的密码" />' +
			'</li>' +
			'</ul>' +
			'<p class="errorhint">dsfds</p>' +
			'<span class="login_btn" id="modification_btn">确认修改</span>' +
			'</div>' +
			'</div>'
        $("#login").html(html_pwd);
        $(".login_shade").addClass("dn");
        /*登录成功关闭登录页面*/
        $("#modification_btn").bind("click",function(){
		console.log("sdfjkds");
		$(".fordet_pwd").addClass("dn");
	});
		});
	});
}

//获取地址中的信息
function GetQueryString(name) {
    /*定义正则，用于获取相应参数*/
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    /*字符串截取，获取匹配参数值*/
    var r = window.location.search.substr(1).match(reg);
    /*返回参数值*/
    if (r != null) {
        return decodeURI(r[2]);
    } else {
        return null;
    }

}


