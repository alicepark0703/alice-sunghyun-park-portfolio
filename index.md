---
layout: default
title: Home
---

<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">

<div class="hero">
  <div class="hero-card">
    <p class="eyebrow">Data Science · Machine Learning · Scientific Computing</p>
    <h1><span class="gradient">Alice Park</span></h1>
    <p class="lead">
      I work on data-driven problems that come from physical systems, signals, and experiments.
      I’m especially interested in how raw data becomes something interpretable through feature extraction,
      modeling, and careful analysis.
    </p>

    <div class="button-row">
      <a class="btn btn-primary" href="{{ '/resume.pdf' | relative_url }}" target="_blank">Resume</a>
      <a class="btn btn-secondary" href="https://github.com/alicepark0703" target="_blank">GitHub</a>
      <a class="btn btn-secondary" href="https://www.linkedin.com/in/alice-sunghyun-park/" target="_blank">LinkedIn</a>
      <a class="btn btn-secondary" href="{{ '/projects.html' | relative_url }}">Projects</a>
    </div>
  </div>
</div>

## About

I am a Cornell student currently focusing on **data science and machine learning**, with a background that started in engineering and experimental research. A lot of my work sits at the intersection of **data, physics, and computation**, where the goal is less about applying models blindly and more about understanding what the data is actually saying.

I tend to think in terms of:
- how a dataset is generated
- what structure it actually contains
- and what a model is really learning from it

### What I focus on
- Feature extraction, exploration, and analysis (especially from non-standard data like audio or simulations)
- Building end-to-end pipelines from raw data → features → model → evaluation
- Understanding model behavior, not just performance
- Visualization as a way to comprehend and reason about data

### Tools
- **Programming:** Python, C/C++, Java, OCaml, MATLAB  
- **Data Science / ML:** NumPy, pandas, scikit-learn, PyTorch, feature engineering, model evaluation  
- **Visualization:** matplotlib, seaborn  
- **Data & Signal Processing:** audio feature extraction (MFCC, spectral features, RMS, chroma), scientific post-processing pipelines  
- **Workflow:** Jupyter notebooks, Git/GitHub, VS Code  
- **Other:** FFmpeg (audio conversion), working with structured + unstructured datasets

## Featured Project

<div class="project-card">
  <img src="{{ '/assets/cello-confusion-matrix.png' | relative_url }}" alt="Cello composer classification confusion matrix">
  <div class="project-body">
    <p class="project-type">Machine Learning Project</p>
    <h3>Cello Composer Classification</h3>
    <p>
      I built an end-to-end pipeline to classify short cello clips by composer (Bach, Beethoven, Schumann)
      using extracted audio features and a neural network model.
    </p>
    <p>
      More than just training a model, this project focused on understanding feature behavior:
      looking at distributions, correlations, and how overlap between classes leads directly to
      patterns in the confusion matrix.
    </p>
    <p>
      <a href="https://github.com/alicepark0703/cello-repertoire-classifier" target="_blank">GitHub ↗</a>
    </p>
  </div>
</div>

## Research and Contributions

### Cornell ASTRA Lab
Worked on post-processing for electrospray plume simulations by developing Python-based analysis pipelines to process particle trajectory data into density maps, centerline shifts, and comparative visualizations across parameter sweeps, enabling clearer interpretation of plume behavior and quantitative comparison of simulation conditions.

### Seoul National University — MFFV Lab
Worked with high-speed flow visualization data by developing analysis workflows to extract quantitative information from complex experimental recordings and organize it into structured datasets, enabling consistent measurement and interpretation of flow behavior.

### Computational Imaging / Event-Based Vision
Explored event-based camera data by studying how sparse, asynchronous signals can be represented for downstream tasks such as motion and depth estimation, focusing on feature representation strategies that make the data usable for analysis and learning.

### Cornell Hyperloop
Worked on modeling and analysis of a linear induction motor system by developing computational models to evaluate how design parameters influence performance, enabling quantitative assessment of design decisions and their impact on system behavior.

## Contact

I’m currently looking for opportunities in **data science, machine learning, and computational analysis**, especially where the work involves real-world or scientific data.

- Email: [sp2577@cornell.edu](mailto:sp2577@cornell.edu)
- Resume: [PDF]({{ '/resume.pdf' | relative_url }})