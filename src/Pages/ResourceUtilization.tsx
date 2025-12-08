
import React from "react";
import { Typography, Container } from "@mui/material";

const ResourceUtilization: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Resource Utilization
      </Typography>
      <Typography>
        This is the Resource Utilization page. Show resource usage charts here.
      </Typography>
    </Container>
  );
};

export default ResourceUtilization;
