// Get modal element
var modal = document.getElementById('simplemodal');
// Get open modal button
var modalBtn = document.getElementsByClassName('fa');
// Get the close button
var closeBtn = document.getElementsByClassName('closebtn')[0];
// Listen for a click
modalBtn.addEventListener('click', openModal);
// Listen for a close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', clickOutside);
// Function to open modal
function openModal() {
	modal.style.display = 'block';
}
// Function to close modal
function closeModal() {
	modal.style.display = 'none';
}
// Function to close modal if clicked outside
function closeModal() {
	modal.style.display = 'none';
}
function clickOutside(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}