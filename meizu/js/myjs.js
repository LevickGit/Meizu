
$(function(){
	$('#ipt').focus(function(){
		$('.li1').css('border','1px solid rgba(0,0,0,.7)');
	})
	$('#ipt').blur(function(){
		$('.li1').css('border','1px solid rgba(0,0,0,.15)');
	})
	$('#a1').mouseover(function(){
		$('#a1').css({'border-bottom':'2px solid #666'});
		$('#a2').css('border','none');
		$('#a3').css('border','none');
		$('#div1').css('display','block');
		$('#div2').css('display','none');
		$('#div3').css('display','none');
	})
	$('#a2').mouseover(function(){
		$('#a2').css({'border-bottom':'2px solid #666'});
		$('#a1').css('border','none');
		$('#a3').css('border','none');
		$('#div2').css('display','block');
		$('#div1').css('display','none');
		$('#div3').css('display','none');
	})
	$('#a3').mouseover(function(){
		$('#a3').css({'border-bottom':'2px solid #666'});
		$('#a1').css('border','none');
		$('#a2').css('border','none');
		$('#div3').css('display','block');
		$('#div1').css('display','none');
		$('#div2').css('display','none');
	})
		$('#top_link').click(function(){
		var time=null;
		clearInterval(time);
		time=setInterval(function(){
			var toTop=document.body.scrollTop||document.documentElement.scrollTop;//火狐用body获取，谷歌IE用documentElement（html）获取。
			speed=toTop/20;
			if(toTop<=0){
				clearInterval(time);	
			}
			document.body.scrollTop-=speed;
			document.documentElement.scrollTop-=speed;
		},20)
	})
})

