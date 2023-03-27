import MainLayout from "../layout/Layout";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LeaveTrackingCard from "./leave-tracker-card";
import { Link } from "react-router-dom";
import { mockData } from "../../mock";

function LeaveTrackerContent() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* <h1>Leave Tracker</h1> */}

        {mockData.map((item) => {
          return (
            <Grid item xs={12} md={3}>
              <Link
                to="/leave-form"
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                <LeaveTrackingCard
                  title={item.title}
                  available={item.available}
                  booked={item.booked}
                />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default function LeaveTracker() {
  return (
    <MainLayout title={"Leave Tracker"} children={LeaveTrackerContent()} />
  );
}
