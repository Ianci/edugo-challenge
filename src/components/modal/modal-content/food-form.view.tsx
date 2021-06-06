import {
  Button, Input, InputLabel,
} from '@material-ui/core';
import {
  Formik, Form, ErrorMessage, Field,
} from 'formik';
import { makeStyles, Theme } from '@material-ui/core/styles';
import * as Yup from 'yup';

const useStyles = makeStyles((theme: Theme) => ({
  errorMessage: {
    color: 'red',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 20,
  },
  formContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    margin: '0 auto',
  },
  field: {
    marginBottom: theme.spacing(1.5),
  },
  button: {
    margin: theme.spacing(1),
  },
}));
const FoodFormView = () => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        name: '', calories: 0, carbs: 0, fat: 0, protein: 0,
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Required')
          .max(25),

        calories: Yup.number()
          .required('Required')
          .max(9999),

        carbs: Yup.number()
          .required('Required')
          .max(9999),

        fat: Yup.number()
          .required('Required')
          .max(9999),

        protein: Yup.number()
          .required('Required'),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ isValid, dirty, isSubmitting }) => (
        <div className={classes.container}>
          <Form className={classes.formContent}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Field as={Input} type="text" name="name" className={classes.field} label="Food name" variant="outlined" color="secondary" autoComplete="off" />
            <ErrorMessage name="name" component="small" className={classes.errorMessage} />

            <InputLabel htmlFor="calories">Calories</InputLabel>
            <Field as={Input} type="number" id="calories" name="calories" className={classes.field} label="Calories" variant="outlined" color="secondary" autoComplete="off" />
            <ErrorMessage name="calories" component="small" className={classes.errorMessage} />

            <InputLabel htmlFor="calories">Carbs</InputLabel>
            <Field as={Input} type="number" name="carbs" className={classes.field} label="Carbs" variant="outlined" color="secondary" autoComplete="off" />
            <ErrorMessage name="carbs" component="small" className={classes.errorMessage} />

            <InputLabel htmlFor="calories">Fat</InputLabel>
            <Field as={Input} type="number" name="fat" className={classes.field} label="Fat" variant="outlined" color="secondary" autoComplete="off" />
            <ErrorMessage name="fat" component="small" className={classes.errorMessage} />

            <InputLabel htmlFor="calories">Protein</InputLabel>
            <Field as={Input} type="number" name="protein" label="Protein" variant="outlined" color="secondary" autoComplete="off" />
            <ErrorMessage name="protein" component="small" className={classes.errorMessage} />

            <Button type="submit" variant="contained" color="primary" disabled={!(isValid && dirty) || isSubmitting} className={classes.button}>Add</Button>
          </Form>

        </div>
      )}
    </Formik>
  );
};

export default FoodFormView;
