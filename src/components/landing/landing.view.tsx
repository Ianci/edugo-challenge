import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ModalContainer from '../modal/index';
import { colors } from '../../constants/colors';

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 1100,
    width: 1000,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3, 3),
    borderRadius: 20,
    margin: '100px auto',
  },
  table: {
    padding: theme.spacing(1),
    background: colors.white,
    boxShadow: theme.shadows[5],
    color: colors.background,
  },
  row: {
    color: colors.red,
  },
  cell: {
    color: colors.darkBlue,
    fontSize: '1rem',
  },
  cellContent: {
    color: colors.legiblyGrey,
  },
}));

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return {
    name, calories, fat, carbs, protein,
  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const ActionIcons = () => (
  <>
    <DeleteIcon color="secondary" />
    <EditIcon color="secondary" />
  </>
);

const LandingView = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <ModalContainer />
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className={classes.row}>
              <TableCell className={classes.cell}>Food nutrition table (100g serving)</TableCell>
              <TableCell align="right" className={classes.cell}>Calories</TableCell>
              <TableCell align="right" className={classes.cell}>Fat&nbsp;(g)</TableCell>
              <TableCell align="right" className={classes.cell}>Carbs&nbsp;(g)</TableCell>
              <TableCell align="right" className={classes.cell}>Protein&nbsp;(g)</TableCell>
              <TableCell align="right" className={classes.cell}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" className={classes.cellContent}>
                  {row.name}
                </TableCell>
                <TableCell align="right" className={classes.cellContent}>{row.calories}</TableCell>
                <TableCell align="right" className={classes.cellContent}>{row.fat}</TableCell>
                <TableCell align="right" className={classes.cellContent}>{row.carbs}</TableCell>
                <TableCell align="right" className={classes.cellContent}>{row.protein}</TableCell>
                <TableCell align="right" className={classes.cellContent}>{ActionIcons()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LandingView;
