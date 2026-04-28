const BASE = '/alice-sunghyun-park-portfolio'

function Project({ title, focus, tags, images, children, github }) {
  const isSingle = images.length === 1
  return (
    <div className="project-section">
      <div className={`project-images${isSingle ? ' single' : ''}`}>
        {images.map(({ src, alt }) => (
          <img key={src} src={`${BASE}/assets/${src}`} alt={alt} />
        ))}
      </div>
      <div className="project-meta">
        {tags.map(t => (
          <span key={t.label} className={`tag${t.rose ? ' rose' : ''}`}>{t.label}</span>
        ))}
      </div>
      <h2 className="project-title">{title}</h2>
      <p className="project-focus">{focus}</p>
      {children}
      {github && (
        <a className="link-arrow" href={github} target="_blank" rel="noreferrer">
          GitHub repository →
        </a>
      )}
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <>
      <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 800, letterSpacing: '-0.04em', marginTop: '2rem', marginBottom: '0.4rem' }}>
        Projects
      </h1>
      <p style={{ color: 'var(--dim)', marginBottom: '3rem', fontSize: '0.9rem' }}>
        End-to-end work in ML, data science, and scientific computing.
      </p>

      {/* ─── Benefits Navigator ─────────────────────────────── */}
      <Project
        title="Benefits Navigator"
        focus="Full-stack development · Rule-based systems · RAG · Social impact"
        tags={[
          { label: 'Full-Stack' },
          { label: 'RAG' },
          { label: 'Rule-Based' },
          { label: 'Machine Learning', rose: true },
          { label: 'Social Impact', rose: true },
        ]}
        images={[
          { src: 'benefits-login.png', alt: 'Benefits Navigator login' },
          { src: 'benefits-aiagent.png', alt: 'Benefits Navigator AI agent' },
        ]}
        github="https://github.com/alicepark0703/benefits-navigator"
      >
        <p>
          Full-stack web app built in a 24-hour hackathon to help users navigate SNAP, Medicaid,
          and HEAP. Simplifies complex eligibility requirements into an accessible interface.
        </p>
        <ul className="detail-list">
          <li>
            <strong>Eligibility engine</strong> — Rule-based Python decision system evaluating household
            size, income, and employment status against official eligibility thresholds for deterministic,
            consistent results.
          </li>
          <li>
            <strong>Contextual Q&amp;A via RAG</strong> — Retrieval pipeline over program documentation
            combined with user context to generate grounded, policy-aligned responses.
          </li>
          <li>
            <strong>Location lookup</strong> — Geolocation-based search for nearby assistance offices,
            structured for efficient querying and frontend display.
          </li>
          <li>
            <strong>Full-stack</strong> — React frontend for form state and results visualization;
            Python backend for eligibility logic and JSON-based API responses.
          </li>
          <li>
            <strong>Design under constraints</strong> — Modular architecture (eligibility logic,
            retrieval pipeline, UI) delivered within 24 hours, prioritizing low latency and usability.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Translating policy rules into structured logic that reduces friction in accessing essential
          resources — technically functional and socially meaningful.
        </p>
      </Project>

      <hr />

      {/* ─── Cello Composer Classification ──────────────────── */}
      <Project
        title="Cello Composer Classification"
        focus="Audio ML · Feature engineering · Classification · Model evaluation"
        tags={[
          { label: 'Audio ML' },
          { label: 'Feature Engineering' },
          { label: 'Classification', rose: true },
          { label: 'Model Evaluation', rose: true },
        ]}
        images={[
          { src: 'confusion-matrix.png', alt: 'Confusion matrix' },
          { src: 'data-analysis.png', alt: 'Feature analysis' },
        ]}
        github="https://github.com/alicepark0703/cello-repertoire-classifier"
      >
        <p>
          End-to-end supervised learning pipeline classifying cello audio clips by composer.
          Emphasis on feature interpretability, leakage control, and understanding model behavior —
          not just accuracy.
        </p>
        <ul className="detail-list">
          <li>
            <strong>Data pipeline</strong> — Standardized mono WAV files (22,050 Hz), fixed-length
            segmentation, low-signal filtering to improve dataset quality.
          </li>
          <li>
            <strong>Feature engineering</strong> — Tempo, ZCR, RMS, spectral centroid/bandwidth/rolloff/contrast,
            chroma, tonnetz, and MFCCs (mean + variance) via librosa.
          </li>
          <li>
            <strong>Modeling</strong> — MLP on engineered features with group-based train/test splits
            by source recording to prevent cross-clip leakage.
          </li>
          <li>
            <strong>EDA</strong> — Feature distribution and correlation analysis to understand class
            separability and identify discriminative features.
          </li>
          <li>
            <strong>Error analysis</strong> — Misclassification review revealed confusion concentrated
            in composers with similar harmonic and tonal patterns, exposing limits of feature-based approaches.
          </li>
        </ul>
      </Project>

      <hr />

      {/* ─── ASTRA Lab ──────────────────────────────────────── */}
      <Project
        title="Electrospray Plume Analysis"
        focus="Scientific data processing · Simulation analysis · Visualization"
        tags={[
          { label: 'Scientific Computing' },
          { label: 'Simulation' },
          { label: 'Visualization', rose: true },
        ]}
        images={[
          { src: 'astra-plume-analysis.png', alt: 'Electrospray plume analysis' },
        ]}
      >
        <p style={{ marginBottom: '0.25rem', fontSize: '0.78rem', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
          ASTRA Lab · Cornell University
        </p>
        <p>
          Python post-processing workflows for large-scale particle simulation outputs to study
          how emitter offset affects downstream electrospray plume structure.
        </p>
        <ul className="detail-list">
          <li>
            <strong>Data parsing</strong> — VTP trajectory outputs from a C++ N-body solver parsed
            into structured arrays via VTK; extracted position, species, and time-evolution data.
          </li>
          <li>
            <strong>Feature construction</strong> — Cartesian → angular coordinates (θₓ, θᵧ) for
            divergence analysis; 2D density histograms, centroid shift, covariance ellipse fitting
            and eccentricity.
          </li>
          <li>
            <strong>Parameter sweep analysis</strong> — Results aggregated across 0–80 μm emitter
            offset sweeps; plume structure compared across particle species; geometric perturbation
            effects quantified in downstream beam deformation.
          </li>
          <li>
            <strong>Tooling</strong> — Reusable plotting utilities for density maps, contour overlays,
            and comparative figures. Publication-quality output for manuscript development.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          The core challenge: not just modeling, but defining the right physical quantities to measure.
        </p>
      </Project>

      <hr />

      {/* ─── SNU Flow ───────────────────────────────────────── */}
      <Project
        title="High-Speed Flow Visualization"
        focus="Experimental data processing · Image processing · Quantitative analysis"
        tags={[
          { label: 'Experimental Data' },
          { label: 'Image Processing' },
          { label: 'Quantitative Analysis', rose: true },
        ]}
        images={[
          { src: 'mffv-flow-visualization.jpg', alt: 'Flow visualization' },
        ]}
      >
        <p style={{ marginBottom: '0.25rem', fontSize: '0.78rem', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
          MFFV Lab · Seoul National University
        </p>
        <p>
          Image-processing pipelines converting ~2,000 fps multiphase flow recordings into
          quantitative measurements of wetting dynamics and flow behavior in granular media.
        </p>
        <div className="callout">
          Turning unstructured, noisy data → reliable, quantitative signals
        </div>
        <ul className="detail-list">
          <li>
            <strong>Raw → structured signals</strong> — Video frames processed to extract physically
            meaningful quantities; pixel-level information converted into time-resolved measurements.
          </li>
          <li>
            <strong>Feature extraction</strong> — Background subtraction, denoising, edge detection,
            and contour tracking to identify wetting fronts and phase boundaries. Extracted wetting
            front position, propagation velocity, and saturation patterns.
          </li>
          <li>
            <strong>Temporal analysis</strong> — Flow feature evolution tracked across thousands of
            frames with temporal filtering for stable measurement trends.
          </li>
          <li>
            <strong>Reproducibility</strong> — Modular scripts (Python/MATLAB/C++) ensuring
            consistent processing and cross-condition comparability.
          </li>
        </ul>
      </Project>

      <hr />

      {/* ─── Event Camera ───────────────────────────────────── */}
      <Project
        title="Event-Based Imaging &amp; Depth Encoding"
        focus="Computational imaging · Sparse data representation · ML preprocessing"
        tags={[
          { label: 'Computational Imaging' },
          { label: 'Sparse Data' },
          { label: 'Event Vision', rose: true },
          { label: 'ML Preprocessing', rose: true },
        ]}
        images={[
          { src: 'event-camera-project.png', alt: 'Event camera project' },
        ]}
      >
        <p style={{ marginBottom: '0.25rem', fontSize: '0.78rem', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
          Computational Imaging Lab · Cornell University
        </p>
        <p>
          Analysis of event-camera sensing pipelines, focusing on how asynchronous, sparse visual
          data can be transformed into representations suitable for downstream learning and inference.
        </p>
        <ul className="detail-list">
          <li>
            <strong>Event-based sensing</strong> — DVS-style data streams where pixels emit
            asynchronous brightness changes instead of frames; compared against conventional imaging
            in temporal resolution, dynamic range, and motion robustness.
          </li>
          <li>
            <strong>Representation methods</strong> — Temporal binning into event frames, accumulated
            event histograms, and time-surface representations; evaluated how each affects information
            retention for downstream ML.
          </li>
          <li>
            <strong>Dataset construction</strong> — Consistent preprocessing pipelines with attention
            to how decisions affect dataset quality, label alignment, and generalization.
          </li>
          <li>
            <strong>Depth encoding</strong> — PSF-based optical methods that embed depth into event
            signals; analysis of how encoded signals are decoded or learned by downstream models.
          </li>
          <li>
            <strong>System tradeoffs</strong> — Temporal resolution vs. noise accumulation; sparsity
            vs. completeness; physically encoded vs. learned representations.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Data representation as a deep, consequential design problem — upstream sensing choices
          propagate directly into what downstream models can learn.
        </p>
      </Project>
    </>
  )
}
