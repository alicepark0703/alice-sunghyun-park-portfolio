---
layout: default
title: Projects
---

<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">

# Projects

## Cello Composer Classification

![Cello ML confusion matrix]({{ '/assets/cello-confusion-matrix.png' | relative_url }})

**Focus:** audio machine learning, feature engineering, classification, evaluation

Built an end-to-end machine learning pipeline to classify short cello audio clips by composer using extracted music features and an MLP classifier.

### What I did
- Converted source recordings into usable audio clips
- Extracted features including tempo, MFCCs, spectral centroid, RMS, and related descriptors
- Trained and evaluated a classifier on the resulting feature matrix
- Analyzed feature distributions, correlations, and misclassification behavior

### Why it matters
This project was not only about model accuracy, but also about understanding how features behave, where class overlap appears, and why the result and analysis look the way it does.

### Link
[GitHub repository](https://github.com/alicepark0703/cello-repertoire-classifier)

---

## Electrospray Plume Analysis

<img src="{{ '/assets/astra-plume-analysis.png' | relative_url }}" alt="Electrospray plume analysis" style="width: 420px; max-width: 100%; height: auto; display: block; margin: 1rem auto;">

**Focus:** scientific data processing, simulation analysis, visualization

Developed Python post-processing workflows for large-scale particle simulation outputs to study how emitter offset affects downstream plume structure.

### What I did
- Parsed simulation outputs from trajectory data
- Generated density maps and contour overlays
- Quantified plume center shifts and eccentricity
- Compared behavior across parameter sweeps

---

## High-Speed Flow Visualization at SNU

<img src="{{ '/assets/mffv-flow-visualization.jpg' | relative_url }}" alt="Flow visualization" style="width: 420px; max-width: 100%; height: auto; display: block; margin: 1rem auto;">

**Focus:** experimental data processing, visualization, quantitative analysis

Processed high-speed flow visualization data in a multiphase flow research setting, transforming raw visual recordings into structured measurements and interpretable analysis.

---

## Event-Based Imaging and Depth Encoding

<img src="{{'event-camera-project.png' | relative_url }}" alt="Event camera project" style="width: 420px; max-width: 100%; height: auto; display: block; margin: 1rem auto;">

**Focus:** computational imaging, sparse data representation, ML-oriented analysis

Explored event-camera-based sensing and representation problems, especially how asynchronous visual signals can be transformed into forms useful for analysis and downstream learning.