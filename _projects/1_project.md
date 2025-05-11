---
layout: page
title: Shoreline changes quantifcation using satellite images
description: Purdue University
img: assets/img/ShorelineDetectionFramework.png
importance: 1
category: work
related_publications: abdelhady2022simple, abdelhady2025shoreline
---

This project focuses on developing an end-to-end, fully automated framework for detecting and analyzing shoreline change from multispectal satellite imageries. By leveraging image processing techniques, the approach eliminates the need for manually drawn transects, enabling a scalable and objective method for quantifying shoreline change. The framework has been applied to multiple beaches along Lake Michigan to assess the impacts of recent, record-breaking water level rises. In addition to quantifying shoreline retreat, the project investigates the spatial variability in erosion patterns and explores potential causative factors such as geomorphology, exposure, and wave energy dynamics {% cite abdelhady2022simple %}.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/ShorelineDetectionFramework.png" title="Shoreline changes framework" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption text-center">
    Shoreline detection and quantification simplified framework.
</div>


The model was used to quantify shoreline recession at eleven beaches around Lake Michigan during a record-setting water level increase between 2013 and 2020. Shoreline changes during this period ranged from 20 m to 62 m, corresponding to 52–95 % of the initial beach widths. Average estimated shoreline erosion across all beaches varied from 1 % to 75 % of the observed changes, with the remainder attributed to inundation {% cite abdelhady2025shoreline %}. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/SitesWithSatellite.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ShorelineChangesCircles.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, shoreline changes detected form the satellite images between 2013 and 2020. On the right is shoreline recessions, as well as the relative amounts attributable to passive flooding and shoreline erosion.
</div>


