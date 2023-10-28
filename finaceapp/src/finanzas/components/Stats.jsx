import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from 'react-chartjs-2'
import { Grid, Typography } from '@mui/material';
import { analysisData, lastMonthMovements, randomColors } from '../helpers';
import { useMovementsStore } from '../hooks';

ChartJS.register( ArcElement, Tooltip, Legend );

export const Stats = ({ period }) => {
  const { movements, categories } = useMovementsStore();

  let filteredMovements = lastMonthMovements(movements, period);

  const data = analysisData(filteredMovements);
  const backgroundColor = randomColors(data);
  const chartData = {
    labels: data.map( data => categories.find( category => Object.keys(data) == category.category_id ).name ),
    datasets: [{
      label: 'My First Dataset',
      data: data.map( data => Object.values( data ) ),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  };

  return (
    <Grid 
      container 
      justifyContent="center"
      >
        <Grid item lg={8} xl={6}>
          {
            filteredMovements.length > 0 
            ? <Doughnut data={chartData} options={{}}/>
            : <Typography mt={3} textAlign="center" variant="h5">There are no movements in this period</Typography>
          }
        </Grid>
    </Grid>
  )
}
