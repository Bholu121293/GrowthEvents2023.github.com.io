// Open the sidebar when the list icon is clicked
document.querySelector('.sidebar-open-icon').addEventListener('click', function () {
	document.querySelector('.sidebar').classList.add('sidebar-open');
	document.querySelector('.sidebar-overlay').classList.add('active');
});

// Close the sidebar when the close icon is clicked
document.querySelector('.sidebar-close-icon, .sidebar-overlay').addEventListener('click', function () {
	document.querySelector('.sidebar').classList.remove('sidebar-open');
	document.querySelector('.sidebar-overlay').classList.remove('active');
});


const header = document.getElementById('main-header');
const headerOffset = header.offsetTop;
function stickyHeader() {
	if (window.pageYOffset > headerOffset) {
		header.classList.add('sticky');
	} else {
		header.classList.remove('sticky');
	}
}
window.onscroll = stickyHeader;
