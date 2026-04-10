---
layout: default
title: Projects
---

<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">

# Projects

## Cello Composer Classification

<div class="image-row">
<img src="{{ '/assets/confusion-matrix.png' | relative_url }}" alt="Confusion Matrix">
<img src="{{ '/assets/data-analysis.png' | relative_url }}" alt="Data Analysis">
</div>

**Focus:** audio machine learning, feature engineering, classification, evaluation

Designed and implemented an end-to-end supervised learning pipeline to classify short cello audio clips by composer, emphasizing feature interpretability, data leakage control, and model behavior analysis rather than just accuracy

### What I did
- **Data pipeline & preprocessing**
    - Converted raw recordings into standardized mono .wav files (22,050 Hz) and segmented into fixed-length clips
    - Applied filtering to remove low-signal segments, improving dataset quality and signal consistency
- **Feature engineering**
    - Extracted structured audio features using librosa, including:
        - Temporal: tempo, zero-crossing rate, RMS energy
        - Spectral: centroid, bandwidth, rolloff, contrast
        - Harmonic: chroma, tonnetz
        - MFCCs (mean + variance)
- **Modeling & validation**
    - Trained an MLP classifier on engineered features
    - Used group-based splitting (by source recording) to prevent data leakage across clips from the same piece
    - Evaluated performance using confusion matrices and class-level metrics
- **Exploratory data analysis**
    - Analyzed feature distributions and correlations to understand separability between composers
    - Investigated which features contributed most to distinguishing stylistic differences
- **Error analysis**
    - Examined misclassifications to identify class overlap and ambiguous musical structure
    - Observed that confusion often occurred between composers with similar harmonic or tonal patterns, highlighting limits of feature-based approaches

### Why it matters
This project demonstrates a full ML workflow with emphasis on reasoning, not just implementation:

- Translating raw data → structured features
- Designing evaluation to reflect real-world generalization
- Interpreting model behavior instead of treating it as a black box

It reflects how data science is used in practice: understanding the data and the model, not just training it.

### Link
[GitHub repository](https://github.com/alicepark0703/cello-repertoire-classifier)

---

## Electrospray Plume Analysis at ASTRA Lab
<div class="image-row">
<img src="{{ '/assets/astra-plume-analysis.png' | relative_url }}" alt="Electrospray plume analysis" style="width: 340px; max-width: 100%; height: auto; display: block; margin: 1rem auto;">
</div>

**Focus:** scientific data processing, simulation analysis, visualization

Developed Python post-processing workflows for large-scale particle simulation outputs to study how emitter offset affects downstream plume structure.

### What I did
- **Simulation data processing**
    - Parsed VTP trajectory outputs from a C++ N-body solver into structured arrays using VTK
    - Extracted particle-level data (position, species, time evolution) across simulation frames
- **Feature construction for physical analysis**
    - Transformed Cartesian coordinates into angular space (θₓ, θᵧ) to analyze plume divergence
    - Computed spatial distributions and derived metrics including:
        - 2D particle density histograms
        - Plume center location (centroid shift)
        - Covariance-based ellipse fitting and eccentricity
- **Parameter sweep analysis**
    - Aggregated results across emitter offset sweeps (0–80 μm)
    - Compared plume structure across particle species (neutrals, monomers, dimers, etc.)
    - Quantified how geometric perturbations propagate into downstream beam deformation
- **Visualization & tooling**
    - Built reusable plotting utilities for density maps, contour overlays, and comparative plots
    - Generated publication-quality figures to support ongoing research and manuscript development

### Why it matters
This project demonstrates the ability to work with simulation-generated data at scale and extract physically meaningful insights:

- Bridging physics-based models and data-driven analysis
- Designing metrics that reflect underlying system behavior
- Building reusable tools for scientific workflows

It reflects real-world data science in research settings, where the challenge is not just modeling—but defining the right quantities to measure.

---

## High-Speed Flow Visualization at SNU
<div class="image-row">
<img src="{{ '/assets/mffv-flow-visualization.jpg' | relative_url }}" alt="Flow visualization" style="width: 340px; max-width: 100%; height: auto; display: block; margin: 1rem auto;">
</div>

**Focus:** experimental data processing, visualization, quantitative analysis

Developed image-processing pipelines to convert high-speed (≈2,000 fps) multiphase flow recordings into quantitative measurements, enabling analysis of wetting dynamics and flow behavior in granular media.

### What I did
- **Raw data → structured signals**
    - Processed high-speed video frames to extract physically meaningful quantities from noisy visual data
    - Designed pipelines to convert pixel-level information into time-resolved measurements
- **Image processing & feature extraction**
    - Applied background subtraction and denoising to isolate relevant flow structures
    - Used edge detection and contour tracking to identify wetting fronts and phase boundaries
    - Extracted metrics such as:
        - Wetting front position over time
        - Propagation velocity
        - Saturation and spatial distribution patterns
- **Temporal analysis**
    - Tracked evolution of flow features across thousands of frames
    - Applied temporal filtering to reduce noise and ensure stable measurement trends
- **Reproducibility & pipeline design**
    - Built modular scripts (Python/MATLAB/C++) to ensure consistent processing across experimental conditions
    - Enabled cross-condition comparison by standardizing preprocessing and feature extraction

### Why it matters
This project demonstrates a core data science skill that’s often overlooked:

<div class="callout">
    turning <strong>unstructured, noisy data → reliable, quantitative signals
</div>

It reflects real-world ML/DS challenges:

- Working with imperfect data (noise, variability)
- Designing preprocessing pipelines that materially affect results
- Ensuring extracted features are meaningful, not just computable
---

## Event-Based Imaging and Depth Encoding at Computational Imaging Lab @ Cornell
<div class="image-row">
<img src="{{'/assets/event-camera-project.png' | relative_url }}" alt="Event camera project" style="width: 340px; max-width: 100%; height: auto; display: block; margin: 1rem auto;">
</div>

**Focus:** computational imaging, sparse data representation, event-based vision, ML preprocessing

Analyzed event-camera sensing pipelines and depth-encoding approaches, focusing on how asynchronous, sparse visual data can be transformed into representations suitable for downstream learning and inference.

### What I did
- **Understanding event-based sensing**
    - Worked with event camera data streams (DVS-style), where pixels emit asynchronous brightness changes instead of frames
    - Compared event-based sensing with conventional frame-based imaging in terms of temporal resolution, dynamic range, and motion robustness
- **Data representation & transformation**
    - Explored methods for converting event streams into structured inputs, including:
        - Temporal binning into event frames
        - Accumulated event histograms
        - Time-surface representations
        - Evaluated how representation choices affect information retention and suitability for downstream ML models
- **Data generation & dataset construction**
    - Generated structured datasets from raw event streams by defining consistent preprocessing and representation pipelines
    - Designed transformations to convert sparse, asynchronous signals into model-ready inputs
    - Considered how preprocessing decisions impact dataset quality, label alignment, and generalization
- **Depth encoding concepts**
    - Investigated how optical encoding (e.g., PSF-based methods) can embed depth information into event signals
    - Analyzed how encoded signals can be decoded or learned by downstream models
- **System tradeoffs**
    - Analyzed tradeoffs between:
        - Temporal resolution vs. noise accumulation
        - Sparsity vs. information completeness
        - Physically encoded signals vs. learned representations

### Why it matters
This project highlights an understanding of data representation as an in-depth problem in ML systems:

- Working with non-standard, sparse data modalities
- Designing transformations that preserve meaningful signal
- Reasoning about how upstream sensing impacts downstream learning