function getStyle(obj,atr){
	if(obj.currentStyle){
		return (obj.currentStyle[atr]);
	}else{
		return (getComputedStyle(obj)[atr]);
	}
}
function hide(obj){
					clearInterval(obj.time);
					var opa=getStyle(obj,'opacity');
					obj.time=setInterval(function(){
						opa-=0.01;
						if(opa<0){
							opa=0;
							clearInterval(obj.time);
							obj.style.display='none';
						}
						obj.style.opacity=opa;
					},5)
				}
				function show(obj){
					
					clearInterval(obj.time);
					var opa=parseFloat(getStyle(obj,'opacity'));
					obj.time=setInterval(function(){
						opa=opa+0.01;
						if(opa>1){
							opa=1;
							clearInterval(obj.time);	
						}
						obj.style.opacity=opa;
						obj.style.display='block';
					},7)
				}