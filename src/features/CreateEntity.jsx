import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import {
  Box,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";

import Container from "@mui/material/Container";
import { useContext } from "react";
import DialogContext from "../processes/contextProvider/DialogContext";



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateEntity({
  stepsNames,
  stepsPages,
  name,
  handleSaveContext,
  getResult,
  resetDialog,
}) {
  const { openDialog, closeDialogHandler } = useContext(DialogContext);

  const handleClose = () => {
    closeDialogHandler();
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    console.log(getResult());
    console.log(stepsNames.length);
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("Вы не можете пропустить этап.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    resetDialog();
    setActiveStep(0);
  };

  const handleSave = () => {
    handleSaveContext();
    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={openDialog}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Box>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {name}
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Box sx={{ p: 2 }}>
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
              {stepsNames.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <Container maxWidth="sm">
              <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  variant="contained"
                >
                  Назад
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
             
                {activeStep !== stepsNames.length ? (
                  <Button
                    onClick={handleNext}
                    color="inherit"
                    variant="contained"
                  >
                    {activeStep === stepsNames.length - 1
                      ? "Закончить"
                      : "Далее"}
                  </Button>
                ) : (
                  <></>
                )}
              </Box>
            </Container>

            {activeStep === stepsNames.length ? (
              <React.Fragment>
                {getResult() == stepsNames.length ? (
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    Все этапы выполнены
                  </Typography>
                ) : (
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    Выполнено {getResult()} из {stepsNames.length}
                  </Typography>
                )}

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button
                    variant="contained"
                    onClick={handleSave}
                    sx={{ mr: 2 }}
                    disabled={getResult() !== stepsNames.length}
                  >
                    Сохранить
                  </Button>
                  <Button onClick={handleReset}>Сброс</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Box>{stepsPages[activeStep]}</Box>
              </React.Fragment>
            )}
          </Box>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}