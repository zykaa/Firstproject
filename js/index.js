menu_tab(); /*小学、初中、高中  悬浮切换图片*/
shade();

function menu_tab() {
	$(".tab_size").mouseenter(function() {
		console.log("sdklfjkdlsf");
		$(this).addClass('dn');
		$(this).next().removeClass('dn');
	})
	$(".tab_mk").mouseleave(function() {
		console.log("liu");
		$(this).addClass('dn');
		$(this).prev().removeClass('dn');
	})
};

function shade(conter_img, data_hover, za_hover) {
	$(conter_img).mouseenter(function() {

		$(this).find(".conter_imghover").removeClass("dn");
	})
	$(conter_img).mouseleave(function() {
		$(this).find(".conter_imghover").addClass("dn");
	})
	$(data_hover).mouseenter(function() {
		$(this).find(za_hover).removeClass("dn");
	})
	$(data_hover).mouseleave(function() {
		$(this).find(za_hover).addClass("dn");
	})
}
/*小学、初中、高中 模块切换*/
function conter_menu(menu, module) {
	$(menu).bind("click", function() {
		$index = $(this).index();
		$(this).addClass("menu_hover").siblings().removeClass("menu_hover");
		$(module).eq($index).removeClass("dn").siblings().addClass("dn");
		console.log($index);
	})
};
/*个人中心和关于我们切换*/
function menuleft_tab(left, right_conter) {
	$(left).bind("click", function() {
		var $_index = $(this).index();
		$(this).addClass("pertab_hover").siblings().removeClass("pertab_hover");
		console.log($_index);
		$(right_conter).eq($_index).removeClass("dn").siblings().addClass("dn");
	});
}

