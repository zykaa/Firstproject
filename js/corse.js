$(".tcdPageCode").createPage({
	pageCount: 200,
	current: 3, //当前页数；
	backFn: function(page) {
		console.log(page); //获取请求第几页的数据
		load(2);

	}
});


function filtrate_tab(filtrate) {
	$(filtrate).bind("click", function() {
		$(this).addClass("filterate_hover").siblings().removeClass("filterate_hover");

	});
}

function filtrate_tab2(filtrate, erm) {
	$(filtrate).bind("click", function() {
		$(this).addClass("header_hover").siblings().removeClass("header_hover");
		$(erm).addClass("em_hover").siblings().removeClass("header_hover");
	});
}
curriculum();

function curriculum() {
	$(".curriculum").bind("click", function() {
		location.href = "course_video.html";
	});
}
filtrate_tab("#filtrate_center span");
filtrate_tab2("#filt_prent span", ".arrows em");
tabPosition();
function tabPosition() {
	var t_index = GetQueryString('t');
	var a_index=GetQueryString('a');
	console.log(a_index);
	console.log(t_index);
	if(t_index !== null) {
		$('#filtrate_menu span').eq(t_index).addClass('header_hover');
		$("#filtrate_center span").eq(a_index).addClass("filterate_hover");

	} else {
	$('#filtrate_menu span').eq(0).addClass('header_hover');
	$('#filtrate_center span').eq(0).addClass('filterate_hover');
	}

}




$("#filtrate_menu span").bind("click", function() {
	var $index = $(this).index();
	$(this).addClass("header_hover").siblings().removeClass("header_hover");
	$("#filtrate_center p").eq($index).removeClass("dn").siblings().addClass("dn");
	console.log($index);
});