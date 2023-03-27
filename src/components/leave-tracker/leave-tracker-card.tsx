import Box from "@mui/material/Box";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

interface Props {
  title: string;
  available: number;
  booked: number;
}

export default function LeaveTrackingCard({ title, available, booked }: Props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Grid container>
          <Grid item>
            <Typography color="text.secondary" minWidth={80}>
              Available
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="text.secondary">: {available}</Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item minWidth={80}>
            <Typography color="text.secondary">Booked</Typography>
          </Grid>
          <Grid item>
            <Typography color="text.secondary">: {booked}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
