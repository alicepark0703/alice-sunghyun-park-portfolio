import { Link } from 'react-router-dom'

const BASE = '/alice-sunghyun-park-portfolio'

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────── */}
      <section className="hero">
        <p className="hero-eyebrow">Data Science · ML · Scientific Computing</p>
        <h1>
          <span className="gradient">Alice Sunghyun Park</span>
        </h1>
        <p className="hero-lead">
          I work on data-driven problems from physical systems and experiments —
          extracting meaningful structure from raw data through feature engineering,
          representation, and rigorous analysis.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={`${BASE}/resume.pdf`} target="_blank" rel="noreferrer">
            Resume ↗
          </a>
          <a className="btn btn-ghost" href="https://github.com/alicepark0703" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn btn-ghost" href="https://www.linkedin.com/in/alice-sunghyun-park/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <Link className="btn btn-ghost" to="/projects">
            Projects
          </Link>
        </div>
      </section>

      {/* ─── About ─────────────────────────────────────────── */}
      <section style={{ marginBottom: '3.5rem' }}>
        <p className="section-label">About</p>
        <p style={{ marginBottom: '1rem' }}>
          CS student at Cornell University, College of Engineering (Class of 2028), focused on{' '}
          <strong>data science and machine learning</strong> with a background in engineering and
          experimental research. My work lives at the intersection of{' '}
          <strong>data, physics, and computation</strong> — where the goal isn't just applying models,
          but understanding what the data actually represents.
        </p>
        <p>I approach every problem by asking:</p>
        <ul style={{ margin: '0.75rem 0 1rem' }}>
          <li>How is a dataset generated?</li>
          <li>What structure does it truly contain?</li>
          <li>What is a model actually learning from it?</li>
        </ul>
      </section>

      {/* ─── Focus ─────────────────────────────────────────── */}
      <section style={{ marginBottom: '3.5rem' }}>
        <p className="section-label">Focus</p>
        <ul>
          <li>Feature extraction and analysis from non-standard data — audio, simulations, experimental measurements</li>
          <li>End-to-end pipelines: raw data → features → modeling → evaluation</li>
          <li>Interpreting model behavior, not just optimizing performance</li>
          <li>Visualization as a reasoning tool</li>
        </ul>
      </section>

      {/* ─── Tools ─────────────────────────────────────────── */}
      <section style={{ marginBottom: '3.5rem' }}>
        <p className="section-label">Tools</p>
        <div className="skills-grid">
          <div className="skill-item">
            <p className="skill-label">Languages</p>
            <p>Python, C++, SQL, Java, JavaScript, OCaml, MATLAB</p>
          </div>
          <div className="skill-item">
            <p className="skill-label">ML / Data</p>
            <p>NumPy, Pandas, scikit-learn, PyTorch, DuckDB, LangChain, RAG</p>
          </div>
          <div className="skill-item">
            <p className="skill-label">Signal Processing</p>
            <p>Audio features (MFCC, spectral, RMS, chroma), scientific post-processing</p>
          </div>
          <div className="skill-item">
            <p className="skill-label">Visualization</p>
            <p>Matplotlib, Seaborn</p>
          </div>
          <div className="skill-item">
            <p className="skill-label">Workflow</p>
            <p>Jupyter, Git / GitHub, VS Code, FFmpeg</p>
          </div>
        </div>
      </section>

      {/* ─── Featured Project ───────────────────────────────── */}
      <section style={{ marginBottom: '3.5rem' }}>
        <p className="section-label">Featured Project</p>

        <div className="project-images" style={{ marginBottom: '1.25rem' }}>
          <img src={`${BASE}/assets/benefits-home.png`} alt="Benefits Navigator homepage" />
          <img src={`${BASE}/assets/benefits-aiagent.png`} alt="Benefits Navigator AI agent" />
        </div>

        <div className="project-meta">
          <span className="tag">Full-Stack</span>
          <span className="tag">RAG</span>
          <span className="tag rose">Social Impact</span>
        </div>

        <h2 className="project-title">Benefits Navigator</h2>
        <p>
          A full-stack web application built in 24 hours to help users navigate SNAP, Medicaid,
          and HEAP. Matches users to eligible programs via rule-based logic, answers eligibility
          questions through a RAG pipeline, and surfaces nearby assistance offices by location.
          React frontend, Python backend, emphasis on clarity and real-world accessibility.
        </p>

        <a
          className="link-arrow"
          href="https://github.com/alicepark0703/benefits-navigator"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub →
        </a>
      </section>

      {/* ─── Research ──────────────────────────────────────── */}
      <section style={{ marginBottom: '3.5rem' }}>
        <p className="section-label">Research &amp; Contributions</p>
        <div className="research-grid">
          <div className="research-item">
            <p className="org">ASTRA Lab · Cornell University</p>
            <h3>Electrospray Plume Analysis</h3>
            <p>
              Python post-processing pipelines for electrospray simulations — transforming
              particle trajectory data into density maps, centerline shifts, and parameter-sweep
              visualizations to quantify how geometric variations affect downstream plume structure.
            </p>
          </div>
          <div className="research-item">
            <p className="org">MFFV Lab · Seoul National University</p>
            <h3>High-Speed Flow Visualization</h3>
            <p>
              Image-processing workflows converting ~2,000 fps multiphase flow recordings into
              structured datasets through feature extraction, enabling consistent measurement of
              wetting dynamics and flow behavior across experimental conditions.
            </p>
          </div>
          <div className="research-item">
            <p className="org">Computational Imaging Lab · Cornell University</p>
            <h3>Event-Based Camera Data</h3>
            <p>
              Analysis of sparse, asynchronous event-camera signals and how they can be transformed
              into structured representations for motion and depth estimation, with focus on
              preserving meaningful signal for downstream learning.
            </p>
          </div>
          <div className="research-item">
            <p className="org">Cornell Hyperloop</p>
            <h3>Linear Induction Motor Modeling</h3>
            <p>
              Computational models evaluating how design parameters influence LIM performance,
              enabling quantitative assessment of design decisions and system behavior tradeoffs.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Contact ───────────────────────────────────────── */}
      <section>
        <p className="section-label">Contact</p>
        <p>
          Looking for opportunities in <strong>data science, machine learning, and computational
          analysis</strong> — especially work involving real-world or scientific data.
        </p>
        <div className="contact-row">
          <a className="btn btn-primary" href="mailto:sp2577@cornell.edu">
            sp2577@cornell.edu
          </a>
          <a className="btn btn-ghost" href={`${BASE}/resume.pdf`} target="_blank" rel="noreferrer">
            Resume PDF ↗
          </a>
        </div>
      </section>
    </>
  )
}
