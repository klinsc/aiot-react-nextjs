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

export function Door({ handleLogin, handleSignup, door }) {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();

  const setNotification = async () => {
    if (Notification?.permission === "granted") {
      new Notification(`The notification was already set!`, {});
    } else if (Notification && Notification.permission !== "denied") {
      Notification.requestPermission((status) => {
        if (status === "granted") {
          new Notification(`The notification is set!`, {});
        } else {
          enqueueSnackbar(`Set notification error`, {
            variant: "error",
          });
        }
      });
    } else {
      enqueueSnackbar(`Set notification error`, {
        variant: "error",
      });
    }
  };

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
                await setNotification();
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
