import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Backdrop, Button, Fade, Modal,
} from '@material-ui/core';
import FoodFormContainer from './modal-content';

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: theme.shadows[1],
    padding: theme.spacing(3),
    borderRadius: 30,
  },
  wrapper: {
    padding: 20,
  },

}));
const ModalForm = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.wrapper}>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        Add
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        BackdropComponent={Backdrop}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <FoodFormContainer />
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalForm;
