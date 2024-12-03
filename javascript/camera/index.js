// function stream() {
//     let video = document.querySelector("video");
//     let option = { video: true };
//     window.navigator.mediaDevices
//         .getUserMedia(option)
//         .then((res) => {
//             video.srcObject = res;
//         });
// }


function startWebcam() {
            let video = document.getElementById("webcam");
            let constraints = { video: true };

            navigator.mediaDevices.getDisplayMedia(constraints)
                .then((stream) => {
                    video.srcObject = stream;
                })
                .catch((error) => {
                    console.error("Error accessing media devices.", error);
                });
        }

        function share() {
            // Implement screen sharing logic here
            console.log("Screenshare button clicked");
        }
 