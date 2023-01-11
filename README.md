# simple-picture-picture

Personal project

Live: (https://yahyaabbakar92.github.io/simple-picture-picture/)

Date started: 11 January 2023

Date completed: 11 January 2023

## Objectives

To make button display a video/media in picture in picture mode

## Screenshot

![Alt text](Screenshot%202023-01-11%20at%2018.54.23.png)
![Alt text](Screenshot%202023-01-11%20at%2018.55.31.png)

## Things I learned

- Picture In Picture isn't supported in all browsers, so theres a need to modify the code to make it so
- navigator which is a property of the window object that contains information about the browser
- mediaDevices is a property of the navigator object that gives access to the hardware devices (e.g. webcam, screen-recorder, microphone )
- getDisplay media is a method of the mediaDevices object that returns a promise and if resolved, will prompt the user to select a window or tab and capture it on the display
- srcObject is a property of a mediaElement that points to the source of that element
- onloadedmetadata is the event that is fired once the meta data of a media element (such as duration, dimension, etc) is loaded
- requestPictureInPicture is a method of the video element that returns a promise and when resolved allows the video to enter picture-in-picture mode
- pictureInPictureEnabled is a property of the document that returns a boolean value whether the document or browser has the picture-in-picture functionality enabled
- disablePictureInPicture is an attribute of the video element that won't suggest the picture-in-picture mode on it's video and doesn't make it possible
- exitPictureInPicture is a method of the document that returns a promise and when resolved, returns the video back to its original state if it was in picture-in-picture mode
- enterPictureInPicture is an event that is triggered once picture-in-picture is active
- leavePictureInPicture is an event that is triggered once picture-in-picture is inactive

## Thought process

I wasn't able to implement my own version and struggled quite a bit

## Need to refactor
