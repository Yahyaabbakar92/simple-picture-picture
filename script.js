const video = document.getElementById('video');
const pipButton = document.getElementById('pipButton');

// Prompt to select media stream, pass to video element, then play
async function promptMediaScreen() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		console.log(mediaStream);
		video.srcObject = mediaStream;
		video.onloadedmetadata = () => {
			video.play();
		};
	} catch (error) {
		// Catch Error Here
		console.log('Whoops error here:', error);
	}
}

pipButton.addEventListener('click', async () => {
	// Disable Button
	button.disabled = true;
	// Start Picture in Picture
	await videoElement.requestPictureInPicture();
	// Reset Button
	button.disabled = false;
});

// On Load
promptMediaScreen();
