import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
import { Door } from "../components/Door";
import { useRouter } from "next/router";
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});
import { useSnackbar } from "notistack";

export default function Login() {
  const [beaconStatus, setBeaconStatus] = React.useState("...");
  let video;
  let canvas;
  const theme = useTheme();
  const router = useRouter();
  const [key, setKey] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const [videoo, setVideoo] = useState(null);

  const handleSignup = async () => {
    const username = window.prompt("What is your name?");
    video.loadPixels();
    const image64 = video.canvas.toDataURL();

    const response = await axios.post("http://localhost:5000/register", {
      image64: image64,
      username,
    });

    setKey((key) => key + 1);

    if (response.status === 200) {
      const tracks = document.querySelector("video").srcObject.getTracks();
      tracks.forEach(function (track) {
        track.stop();
      });
    }
  };

  const handleLogin = async () => {
    video.loadPixels();
    const image64 = video.canvas.toDataURL();
    const response = await axios.post("http://localhost:5000/verify", {
      image64: image64,
    });
    if (response.data.status === 200) {
      if (response.data.identity) {
        enqueueSnackbar(`Welcome ${response.data.identity}`, {
          variant: "success",
        });
      }
    } else if (response.data.status === 403) {
      enqueueSnackbar(`Access denied, you are not at home!`, {
        variant: "error",
      });
    } else {
      enqueueSnackbar(`We don't know you!`, {
        variant: "error",
      });
    }
    // refresh the page
    setKey((key) => key + 1);
  };

  useEffect(() => {
    const effectWrapper = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/status?table=beacon"
        );
        setBeaconStatus(response.data.status);
        setKey((key) => key + 1);
      } catch (error) {
        console.error(error);
        setBeaconStatus("error");
      }
    };

    effectWrapper();
  }, []);

  return (
    <>
      <Door
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        setKey={setKey}
        video={video}
      />
      <Container maxWidth="lg">
        <Grid
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

          <Grid item sx={{ textAlign: "center" }} id="p5Canvas" key={key}>
            {key > 0 && (
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
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
