---
layout: page
title: The Great Lakes shoreline changes model (GLSM)
description: Started in 2021
img: assets/img/GLSM_formula.png
importance: 2
category: work
related_publications: abdelhady2023reduced, abdelhady2023modeling
---


This project introduces a novel modeling framework designed to capture shoreline change in regions experiencing large water level fluctuations, such as the Great Lakes. Central to the work is the concept of water level disequilibrium, which describes the geomorphic response of shorelines to nonlinear water leve change. Building on this concept, the Great Lakes Shoreline Model (GLSM) was developed to simulate and predict shoreline evolution under large water level change conditions similar to the one experienced by the Great Lakes {% cite abdelhady2023reduced %}. The GLSM integrates waves and water level parameters to provide accurate, site-specific forecasts of shoreline change, with successful applications demonstrated along the Lake Michigan coast {% cite abdelhady2023modeling %}.


<img src="/assets/img/WL_GLVSAtlantic.png" alt="My photo" style="width: 70%; display: block; margin: 0 auto 20px auto;" class="rounded mx-auto d-block">
<div class="caption text-center">
  Difference between water levels in the Atlantic Ocean and Lake Michigan on different time scales. (a) is monthly water level fluctuations, while (b) is hourly water levels. Data extracted from <strong><a href="https://tidesandcurrents.noaa.gov/waterlevels" target="_blank" rel="noopener">NOAA Gages</a></strong> 9087044 and 8518750 for Lake Michigan and the Atlantic Ocean respectively.
</div>

The model was model was compared to the ShoreFor which is used for modeling ocean shoreline. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Reach3_Hind.svg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Reach3_Hind_long.svg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Model application results for West Park Beach. On the left, the period 2009–2017 is used for model calibration, and the period 2018–2019 is used for model validation and assessment. Panel (a) shows the results of the GLSM and the passive flooding, while panel (b) shows the results of the ShoreFor model. On the right Comparison between calibrated GLSM, Shorefor, and Passive Flooding Models for the longer time series from 1980 to 2020.
</div>