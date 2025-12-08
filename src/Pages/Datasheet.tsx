
// import React from "react";
// import { Typography, Container } from "@mui/material";

// const Datasheet: React.FC = () => {
//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Datasheet
//       </Typography>
//       <Typography>
//         This is the Datasheet page. Display data tables here.
//       </Typography>
//     </Container>
//   );
// };

// export default Datasheet;




// src/Pages/Datasheet.tsx
import React from "react";
import BarChart from "../Components/BarChart";

const Datasheet: React.FC = () => {
  const labels = ["Product A", "Product B", "Product C", "Product D"];
  const values = [120, 90, 150, 80];

  // Adjust this if your top app bar height is different (e.g., 64px)
  const chartHeight = "calc(100vh - 140px)"; // viewport height minus header & padding

  return (
    <div style={{ padding: "16px" }}>
      <h2 style={{ margin: 0, marginBottom: "12px" }}>Datasheet Overview</h2>

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",      // optional: keep the chart from getting too wide on huge screens
          margin: "0 auto",        // center the chart
          background: "#fff",      // optional
          borderRadius: 8,         // optional
          padding: "12px",         // optional
          boxSizing: "border-box",
        }}
      >
        <BarChart
          labels={labels}
          data={values}
          title="Sales Data"
          color="#10b981"
          height={chartHeight}
        />
      </div>
    </div>
  );
};

export default Datasheet;
