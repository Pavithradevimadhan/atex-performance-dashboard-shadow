
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Home from "./Pages/Home";
import KPI from "./Pages/KPI";
import TestThroughputPage from "./Pages/TestThroughputPage";
import AnomalyDetection from "./Pages/AnomalyDetection";
import CapacityPlanning from "./Pages/CapacityPlanning";
import Datasheet from "./Pages/Datasheet";
import PredictiveMaintenance from "./Pages/PredictiveMaintenance";
import PreventiveMaintenance from "./Pages/PreventiveMaintenance";
import ResourceUtilization from "./Pages/ResourceUtilization";
import StatisticalProcessControl from "./Pages/StatisticalProcessControl";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/kpi" element={<KPI />} />
        <Route path="/test-throughput" element={<TestThroughputPage />} />
        <Route path="/anomaly-detection" element={<AnomalyDetection />} />
        <Route path="/capacity-planning" element={<CapacityPlanning />} />
        <Route path="/datasheet" element={<Datasheet />} />
        <Route path="/preventive-maintenance" element={<PreventiveMaintenance />} />
        <Route path="/predictive-maintenance" element={<PredictiveMaintenance />} />
        <Route path="/resource-utilization" element={<ResourceUtilization />} />
        <Route path="/statistical-process-control" element={<StatisticalProcessControl />} />
      </Routes>
    </Router>
  );
};

export default App;
