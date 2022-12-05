import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

export function Door({ handleLogin, handleSignup,setKey, video }) {
  const [door, setDoor] = useState("...");
  const theme = useTheme();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  // const handleSignup = async () => {
  //   const mood = window.prompt("What is your name?");
  //   video.loadPixels();
  //   const image64 = video.canvas.toDataURL();

  //   const response = await axios.post("http://localhost:5000/register", {
  //     image64: image64,
  //     username,
  //   });

  //   setKey((key) => key + 1);

  //   // if (response.status === 200) {
  //   //   const tracks = document.querySelector("video").srcObject.getTracks();
  //   //   tracks.forEach(function (track) {
  //   //     track.stop();
  //   //   });
  //   // }
  // };

  useEffect(() => {
    const effectWrapper = async () => {
      const response = await axios.get(
        "http://localhost:5000/status?table=door"
      );

      setDoor(response.data.status);
    };

    const interval = setInterval(() => {
      effectWrapper();
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      <Grid container spacing={1}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" color="initial">
            Door
          </Typography>
          <Typography variant="h3" color={theme.palette.error.main}>
            {door === "OPEN" ? (
              <LockOpenIcon
                sx={{
                  width: 50,
                  height: 50,
                  color: theme.palette.success.main,
                }}
              />
            ) : (
              <LockIcon
                sx={{
                  width: 50,
                  height: 50,
                  color: theme.palette.error.main,
                }}
              />
            )}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            textAlign: "end",
          }}
        >
          <Button
            variant="text"
            color="inherit"
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </Button>
          <Button
            variant="text"
            color="primary"
            onClick={async () => {
              const password = window.prompt("Enter password to sign up");

              if (password === "1234") {
                await handleSignup();
                return;
              } else if (password === null || password === undefined) {
                return;
              } else {
                enqueueSnackbar("Wrong password", { variant: "error" });
              }
            }}
          >
            Signup
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
