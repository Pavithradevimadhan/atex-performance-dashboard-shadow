
// import React from "react";
// import { Typography, Container } from "@mui/material";

// const KPI: React.FC = () => {
//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         KPI Dashboard
//       </Typography>
//       <Typography>
//         This is the KPI page. Add charts and metrics here.
//       </Typography>
//     </Container>
//   );
// };

// export default KPI;



// src/Pages/KPI.tsx
import React from "react";
import LineChart from "../Components/LineChart";

const KPI: React.FC = () => {
  
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sept","Oct","Nov","Dec"];
  const throughput = [140, 10, 135, 160, 180, 120, 190,400,360,401,200];

  
  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>KPI Dashboard</h2>

      {/* Single line chart */}
      <LineChart
        labels={labels}
        data={throughput}
        title="Monthly Throughput"
        color="#10b981" 
      />

      {/* Example: second chart for error rate */}
      {/* <LineChart
        labels={labels}
        data={[5, 4, 6, 3, 2, 4, 3]}
        title="Error Rate (%)"
        color="#ef4444"
      /> */}
    </div>
  );
};

export default KPI;
