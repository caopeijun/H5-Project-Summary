//禁止用F5键   
document.onkeydown = function() {
	if (event.keyCode == 116) {
		event.keyCode = 0;
		event.cancelBubble = true;
		return false;
	}
};
//禁止右键弹出菜单   
document.oncontextmenu = function() {
	return false;
}
