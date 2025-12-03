
import React from "react";
import { Typography, Container } from "@mui/material";

const KPI: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        KPI Dashboard
      </Typography>
      <Typography>
        This is the KPI page. Add charts and metrics here.
      </Typography>
    </Container>
  );
};

export default KPI;
