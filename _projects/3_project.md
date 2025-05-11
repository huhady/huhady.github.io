---
layout: page
title: Hydroclimate modeling using AI/ML
description: Started in 2023
img: assets/img/AIML_icon.png
importance: 1
related_publications: abdelhady2024machine, abdelhady2025deep
---

This project applies advanced machine learning techniques to reconstruct and forecast hydroclimatic variables—specifically wave height and ice cover—in the Great Lakes. Due to the limited availability of long-term observational data, particularly before the satellite era, understanding the historical impact of climate variability on lake dynamics has been challenging. To overcome this, a suite of deep learning models—including Multi-Layer Perceptrons (MLP), Convolutional Neural Networks (CNN), and Recurrent Neural Networks (RNN)—was developed using historical meteorological inputs such as wind speed and air temperature {% cite abdelhady2024machine abdelhady2025deep %}. These models demonstrated performance on par with, and in some cases superior to, physics-based models. The resulting framework enabled the reconstruction of wave height and ice cover time series back to 1950, providing a critical foundation for assessing past climate impacts and informing future projections.

<img src="/assets/img/Ice_Model_Arch.png" alt="My photo" style="width: 100%; display: block; margin: 0 auto 20px auto;" class="rounded mx-auto d-block">

<div class="caption text-center">
  Ice cover model architecture.
</div>


<img src="/assets/img/Wave_model_arch.png" alt="My photo" style="width: 70%; display: block; margin: 0 auto 20px auto;" class="rounded mx-auto d-block">

<div class="caption text-center">
  Wave model architecture.
</div>
