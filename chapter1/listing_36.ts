interface NodeList {
	onclick: (event: MouseEvent) => any;
}

var nodeList = document.getElementsByTagName('div');
nodeList.onclick = (event: MouseEvent) => alert('Clicked');