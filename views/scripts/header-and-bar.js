function handleLeftBar() {
	if (document.getElementById('left-bar').style.display === 'none') {
		document.getElementById('left-bar').style.display='initial';
		document.getElementById('open-left-bar').style.display='none';
		document.getElementById('content').classList.remove("mdl-cell--12-col-desktop");
		document.getElementById('content').classList.add("mdl-cell--10-col-desktop");
	} else {
		document.getElementById('left-bar').style.display='none';
		document.getElementById('open-left-bar').style.display='initial';
		document.getElementById('content').classList.remove("mdl-cell--10-col-desktop");
		document.getElementById('content').classList.add("mdl-cell--12-col-desktop");
	}
}