import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Modal from "react-modal";
import { useMovementForm } from "../../hooks";
import { useMovementsStore, useUiStore } from "../hooks";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { isNumber } from "../../helpers";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const formValidations = {
  amount: [ (value) => isNumber.test(value) ,'Amount must be a number.' ],
  description: [ (value) => value.length < 100 ,'' ], 
}


Modal.setAppElement('#root');

export const MovementModal = () => {
  
  const {
    activeMovement,
    startSavingMovement,
    categories,
    types,
    startDeletingMovement,
  } = useMovementsStore();

  const { closeModal, isModalOpen } = useUiStore();

  const {
    description,
    amount,
    category_id,
    creation_date,
    account_movement_type_id,
    onInputChange,
    onHandleDateChange,
    formState,
    amountValid,
    formSubmitted,
    setFormSubmitted,
  } = useMovementForm( activeMovement, formValidations );

  const onSubmitNewMovement = (e) => {
    e.preventDefault();
    startSavingMovement( formState );
    setFormSubmitted( true );
    closeModal();
  }

  const onCloseModal = () => {
    closeModal();
    setFormSubmitted(false);
  }

  const onClickDelete = async() => {
    await startDeletingMovement();
    closeModal();
  }

  return (
    <Modal
      isOpen={ isModalOpen }
      onRequestClose={ onCloseModal }
      style={ customStyles }
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={ 200 }
      
    >
      <Box sx={{
        minHeight: '100%',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center'
      }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >

        <Grid item marginX={3}>
          <Box textAlign="center" mb={6}>
            <Typography variant='h4' component="h1">New Movement</Typography>
            <Typography variant='body1' component="span">Please enter your details</Typography>
          </Box>

          <form onSubmit={onSubmitNewMovement}>

            <TextField
              required
              fullWidth
              size='small'
              variant='outlined'
              label='Description'
              value={description || ''}
              name="description"
              onChange={onInputChange}
              sx={{mb: 3}}
              inputProps={{ maxLength: 50 }}
              />

            <FormControl fullWidth required size="small" sx={{mb: 3}}>
              <InputLabel id="movement-type-label">Type</InputLabel>
              <Select
                labelId="movement-type-label"
                id="movement-type"
                value={account_movement_type_id || ''}
                name="account_movement_type_id"
                label="Type"
                onChange={onInputChange}
              >
                {
                  types.map( type => 
                    (<MenuItem 
                      id={ type.account_movement_type_id }
                      key={ type.account_movement_type_id }
                      value={ type.account_movement_type_id }
                      >
                        { type.account_movement_name }
                      </MenuItem>) )
                }
              </Select>
            </FormControl>


            <FormControl fullWidth required size="small" sx={{mb: 3}}>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                defaultValue="3"
                id="category"
                value={category_id || ''}
                name="category_id"
                label="Category"
                onChange={onInputChange}
              >
                {
                  categories.map( category => 
                    (<MenuItem 
                      id={ category.category_id }
                      key={ category.category_id }
                      value={ category.category_id }
                      >
                        { category.name }
                      </MenuItem>) )
                }
              </Select>
            </FormControl>

            <TextField
              required
              fullWidth
              size='small'
              variant='outlined'
              label='Amount'
              value={amount || ''}
              name="amount"
              error={!!amountValid && formSubmitted}
              helperText={formSubmitted ? amountValid : ''}
              onChange={onInputChange}
              sx={{mb: 3}}
              inputProps={{ maxLength: 50 }}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack sx={{ mb: 3 }}>
                <DesktopDatePicker
                  required
                  label="Date"
                  inputFormat="DD/MM/YYYY"
                  value={creation_date}
                  onChange={onHandleDateChange}
                  renderInput={(params) => <TextField {...params} required size="small" />}
                  />
                </Stack>
            </LocalizationProvider>

            <Box textAlign="center" display="flex" flexDirection="column">

                <Button
                  type="submit"
                  sx={{ bgcolor:'primary.main', color:'primary.contrastText', mb:1,
                    ':hover':{
                        bgcolor:'primary.light'
                    }
                  }}>
                    Save
                </Button>

                <Button
                  onClick={onClickDelete}
                  sx={{ 
                    display:( activeMovement?.account_movement_id ? '' : 'none' ),
                    bgcolor:'secondary.main', color:'secondary.contrastText', mb:1,
                    ':hover':{
                        bgcolor:'secondary.light'
                    }
                  }}>
                    Delete
                </Button>
            </Box>            

          </form>

        </Grid>

        </Grid>
        </Box>
      
    </Modal>
  )
}
