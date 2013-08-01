$(document).ready(function(){
	var article = $('.hidden article')

	article.hide();

	$('nav li').click(function(){
		$('nav li').removeClass('active');
		$(this).addClass('active');
		var num = $(this).index();
		article.hide();
		article.eq(num).show();
	});

	$('.close').on('click', function(){
		article.hide();
		$('nav li').removeClass('active');
	});
})