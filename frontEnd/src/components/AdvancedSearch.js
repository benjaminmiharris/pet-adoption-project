import React from "react";
import MetricSlider from "./inputs/MetricSlider";
import Box from "@mui/material/Box";

import "../style/advanced-search.css";

const AdvancedSearch = () => {
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <div className="adv-search-grp">
          <MetricSlider sliderLabel={"Age"} />
          <MetricSlider sliderLabel={"Height"} />
          <MetricSlider sliderLabel={"Weight"} />
        </div>
        <div className="adv-search-grp">
          <MetricSlider sliderLabel={"Age"} />
          <MetricSlider sliderLabel={"Height"} />
          <MetricSlider sliderLabel={"Weight"} />
        </div>
      </Box>
    </>
  );
};

export default AdvancedSearch;
