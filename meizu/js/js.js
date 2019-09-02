function getStyle(obj,atr){
	if(obj.currentStyle){
		return (obj.currentStyle[atr]);
	}else{
		return (getComputedStyle(obj)[atr]);
	}
}
