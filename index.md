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
      I work on data-driven problems from physical systems and experiments, with an emphasis on extracting meaningful structure from raw data through feature engineering, representation, and analysis.

    <div class="button-row">
      <a class="btn btn-primary" href="{{ '/resume.pdf' | relative_url }}" target="_blank">Resume</a>
      <a class="btn btn-secondary" href="https://github.com/alicepark0703" target="_blank">GitHub</a>
      <a class="btn btn-secondary" href="https://www.linkedin.com/in/alice-sunghyun-park/" target="_blank">LinkedIn</a>
      <a class="btn btn-secondary" href="{{ '/projects.html' | relative_url }}">Projects</a>
    </div>
  </div>
</div>

## About

I am a Computer Science student in the College of Engineering at Cornell University (Class of 2028), with a focus on **data science and machine learning** and a background in engineering and experimental research. Much of my work lies at the intersection of **data, physics, and computation**, where the emphasis is not just on applying models, but on understanding what the data actually represents.

I tend to approach problems by asking:

- how a dataset is generated
- what structure it truly contains
- and what a model is actually learning from it

### What I focus on
- Feature extraction, exploration, and analysis—particularly from non-standard data such as audio, simulations, and experimental measurements
- Building end-to-end pipelines from raw data → features → modeling → evaluation
- Interpreting model behavior, not just optimizing performance
- Using visualization as a tool for understanding and reasoning about data

### Tools
- **Programming:** Python, C/C++,SQL, Java, OCaml, MATLAB  
- **Data Science / ML:** NumPy, Pandas, DuckDB, scikit-learn, PyTorch, feature engineering, model evaluation  
- **Visualization:** Matplotlib, Seaborn  
- **Data & Signal Processing:** audio feature extraction (MFCC, spectral features, RMS, chroma), scientific post-processing pipelines  
- **Workflow:** Jupyter notebooks, Git/GitHub, VS Code  
- **Other:** FFmpeg (audio conversion), working with structured + unstructured datasets

## Featured Project

<div class="project-card">
  <div class="image-row">
    <img src="{{ '/assets/confusion-matrix.png' | relative_url }}" alt="Confusion Matrix">
    <img src="{{ '/assets/data-analysis.png' | relative_url }}" alt="Data Analysis">
  </div>
  <div class="project-body">
    <p class="project-type">Machine Learning Project</p>
    <h3>Cello Composer Classification</h3>
    <p>
      Built an end-to-end pipeline to classify short cello clips by composer (Bach, Beethoven, Schumann)
      using engineered audio features and a neural network classifier.
    </p>
    <p>
      Beyond model training, the focus was on understanding feature behavior—analyzing distributions,
      correlations, and how class overlap directly manifests in confusion patterns.
    </p>
    <p>
      <a href="https://github.com/alicepark0703/cello-repertoire-classifier" target="_blank">GitHub ↗</a>
    </p>
  </div>
</div>

## Research and Contributions

### ASTRA Lab, Cornell University
Developed Python-based post-processing pipelines for electrospray plume simulations, transforming particle trajectory data into density maps, centerline shifts, and comparative visualizations across parameter sweeps. Enabled quantitative analysis of plume behavior and clearer interpretation of how geometric variations influence downstream structure.

### MFFV Lab, Seoul National University
Built analysis workflows for high-speed flow visualization data, converting complex experimental recordings into structured datasets through image-processing-based feature extraction. Enabled consistent measurement of flow dynamics and more reliable interpretation across experimental conditions.

### Computational Imaging Lab, Cornell University
Analyzed event-based camera data by studying how sparse, asynchronous signals can be transformed into structured representations for downstream tasks such as motion and depth estimation. Focused on representation strategies that preserve meaningful signal while remaining suitable for analysis and learning.

### Cornell Hyperloop
Worked on modeling and analysis of a linear induction motor system by developing computational models to evaluate how design parameters influence performance, enabling quantitative assessment of design decisions and their impact on system behavior.

## Contact

I’m currently looking for opportunities in **data science, machine learning, and computational analysis**, especially where the work involves real-world or scientific data.

- Email: [sp2577@cornell.edu](mailto:sp2577@cornell.edu)
- Resume: [PDF]({{ '/resume.pdf' | relative_url }})