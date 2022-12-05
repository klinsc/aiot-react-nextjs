import React, { Component } from "react";

import Sketch from "react-p5";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
// const axios = require('axios');
import axios from "axios";
let video;
// export class SignupX extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       signup: true,
//     };
//   }
//   setup(p5, canvasParentRef) {
//     p5.noCanvas();
//     video = p5.createCapture(p5.VIDEO);
//     const v = document.querySelector("video");
//     let st = "position: absolute; top: 255px;";
//     v.setAttribute("style", st);
//   }

//   setup2() {
//     const button = document.getElementById("submit");
//     button.addEventListener("click", async (event) => {
//       const mood = document.getElementById("mood").value;
//       video.loadPixels();
//       console.log(video.canvas);
//       const image64 = video.canvas.toDataURL();
//       const data = { mood, image64 };
//       const options = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       };
//       console.log(image64);
//       const response = await axios.post("http://localhost:5000/register", {
//         image64: image64,
//         username: mood,
//       });
//       if (response.status == 200) {
//         const tracks = document.querySelector("video").srcObject.getTracks();
//         tracks.forEach(function (track) {
//           track.stop();
//         });
//       }
//       this.props.backhome();
//     });
//   }
//   logout() {
//     const tracks = document.querySelector("video").srcObject.getTracks();
//     tracks.forEach(function (track) {
//       track.stop();
//     });
//     this.props.backhome();
//   }

//   render() {
//     let signup = (
//       <div>
//         <div className="limiter">
//           <div className="container-login100">
//             <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
//               <span className="login100-form-title p-b-53">Sign Up With</span>
//               <div className="p-t-31 p-b-9">
//                 <span className="txt1">Username</span>
//               </div>
//               <div
//                 className="wrap-input100 validate-input"
//                 data-validate="Username is required"
//               >
//                 <input
//                   id="mood"
//                   className="input100"
//                   type="text"
//                   name="username"
//                 />
//                 <span className="focus-input100"></span>
//               </div>
//               <input />
//               <br />
//               <br />
//               <br />
//               <br />
//               <br />
//               <br />
//               <br />
//               <br />
//               <br />
//               <br />
//               <br />
//               <br />
//               <br />
//               <br />

//               {this.state.signup ? (
//                 <Sketch id="s" setup={this.setup} draw={this.draw} />
//               ) : (
//                 ""
//               )}

//               <div className="container-login100-form-btn m-t-17">
//                 <button
//                   id="submit"
//                   onClick={this.setup2.bind(this)}
//                   className="login100-form-btn"
//                 >
//                   Sign Up
//                 </button>
//               </div>
//               <div className="container-login100-form-btn m-t-17">
//                 <button
//                   onClick={this.logout.bind(this)}
//                   className="login100-form-btn"
//                 >
//                   Back!
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div id="dropDownSelect1"></div>
//       </div>
//     );
//     return <div>{signup}</div>;
//   }
// }

export function Signup() {
  return (
    <>
      <Container maxWidth="lg">
        {/* <Grid
          container
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid item sx={{ textAlign: "center" }} mt={3}>
            <Typography variant="h1" sx={{ textAlign: "center" }} gutterBottom>
              Smart Door Locker
            </Typography>
          </Grid>
          <Grid item sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              color="initial"
              sx={{ textAlign: "center" }}
            >
              Beacon status:{" "}
              {
                <span
                  style={{
                    color: theme.palette.primary.main,
                  }}
                >
                  {beaconStatus}
                </span>
              }
            </Typography>
          </Grid>

          <Grid item sx={{ textAlign: "center" }} id="p5Canvas">
            <Sketch
              setup={(p5, canvasParentRef) => {
                // use parent to render the canvas in this ref
                // (without that p5 will render the canvas outside of your component)
                video = p5.createCapture(p5.VIDEO).hide();
                canvas = p5.createCanvas(500, 375).parent(canvasParentRef);

                // get the image from the canvas
              }}
              draw={(p5) => {
                p5.image(video, 0, 0, 500, 375);
              }}
              windowResized={(p5) => {
                p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
              }}
            />
          </Grid>
        </Grid> */}
      </Container>
    </>
  );
}
