import Image from 'next/image';

const projects = [
  {
    number: '03',
    name: 'Terminus',
    label: 'Local AI / Systems',
    description: 'A privacy-first Windows diagnostic agent that pairs a local Gemma model with a bounded ReAct loop, typed read-only tools, and risk-labelled command cards.',
    metric: '12-step bounded reasoning',
    strengths: ['Privacy-first local inference', 'Schema-validated tools', 'Read-only safety boundary'],
    tags: ['Python', 'llama.cpp', 'BM25', 'ReAct'],
    github: 'https://github.com/FinEredium1/Windows_SLM_Agent',
    live: null,
    visual: 'terminal',
  },
  {
    number: '04',
    name: 'TickerPilot',
    label: 'ML / Quant Research',
    description: 'A research-grade, long-only stock ranking pipeline built around point-in-time universe selection, walk-forward validation, transaction costs, and fail-closed data checks.',
    metric: 'Bias-aware by design',
    strengths: ['Point-in-time universe', 'Walk-forward evaluation', 'Net-of-cost backtests'],
    tags: ['Python', 'SEC data', 'Backtesting', 'ML'],
    github: 'https://github.com/FinEredium1/TickerPilot-AI-Stock-Selection-Model',
    live: null,
    visual: 'chart',
  },
  {
    number: '01',
    name: 'SafeLight',
    label: 'Security / Full Stack',
    description: 'An encrypted messaging product with per-message X25519 key exchange, AES-256-GCM sealed envelopes, a password-derived key vault, and safety-number verification.',
    metric: '10 tamper & replay tests',
    strengths: ['Zero-dependency crypto', 'Per-message key exchange', 'Replay rejection'],
    tags: ['React', 'Node.js', 'PostgreSQL', 'Web Crypto'],
    github: 'https://github.com/FinEredium1/SafeLight',
    live: 'https://safelighted.web.app/',
    visual: 'lock',
  },
  {
    number: '02',
    name: 'OmniDetect',
    label: 'Applied Machine Learning',
    description: 'A multimodal AI-content detector spanning text, image, and audio. I built the leakage-safe TF-IDF and LinearSVC text pipeline for the five-person team.',
    metric: '96.93% text accuracy',
    strengths: ['Leakage-safe splits', '450K+ unseen samples', 'Three data modalities'],
    tags: ['scikit-learn', 'PyTorch', 'librosa', 'TF-IDF'],
    github: 'https://github.com/FinEredium1/OmniDetect',
    live: null,
    visual: 'scan',
  },
].sort((a, b) => a.number.localeCompare(b.number));

const roles = [
  {
    date: 'May 2026 - Aug 2026',
    company: 'Cisco Systems',
    role: 'Software Engineering Intern',
    location: 'San Jose, CA',
    detail: 'Built and shipped a local AI agent for network diagnostics in air-gapped environments, adopted by 200+ Cisco engineers. Combined structured diagnostic tools, command retrieval, and a fine-tuned Gemma model.',
  },
  {
    date: 'Jan 2026 - Present',
    company: 'Georgia Tech VIP',
    role: 'Undergraduate Researcher',
    location: 'Atlanta, GA',
    detail: 'Researching economic forecasting with TinyTimeMixer and benchmarking time-series models across 120+ FRED-MD macroeconomic series.',
  },
  {
    date: 'May 2025 - Aug 2025',
    company: 'SAIC',
    role: 'Software Engineering Intern',
    location: 'Colorado Springs, CO',
    detail: 'Modernized C++ backend communications to TCP/IP and added 50+ Google Test cases, raising coverage from 15% to 35% on critical defense software.',
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === 'terminal') {
    return <div className="project-visual visual-terminal" aria-hidden="true"><div className="terminal-bar"><i /><i /><i /><span>terminus — local</span></div><div className="terminal-body"><p><b>›</b> why did widget.exe crash?</p><p><em>TOOL</em> query_event_log</p><p><em>READ</em> correlating event 1000...</p><p className="terminal-answer">Grounded answer ready <span>✓</span></p></div></div>;
  }
  if (type === 'chart') {
    return <div className="project-visual visual-chart" aria-hidden="true"><div className="chart-label">WALK-FORWARD / NET OF COST</div><div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="chart-line"><span /><span /><span /><span /><span /><span /></div><div className="chart-axis"><span>2016</span><span>2021</span><span>2026</span></div></div>;
  }
  if (type === 'lock') {
    return <div className="project-visual visual-lock" aria-hidden="true"><div className="crypto-ring ring-one" /><div className="crypto-ring ring-two" /><div className="lock-core"><span>256</span><small>BIT KEY</small></div><div className="cipher cipher-a">X25519</div><div className="cipher cipher-b">AES-GCM</div><div className="cipher cipher-c">HKDF</div></div>;
  }
  return <div className="project-visual visual-scan" aria-hidden="true"><div className="scan-orb"><span>AI</span><i /></div><div className="scan-lines">{Array.from({ length: 13 }).map((_, index) => <i key={index} style={{ height: `${18 + ((index * 13) % 52)}px` }} />)}</div><div className="scan-score"><b>96.93</b><span>TEXT ACCURACY</span></div></div>;
}

export default function Home() {
  return (
    <main id="top">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Fardin Ahmed, home"><span>FA</span><strong>Fardin Ahmed</strong></a>
        <div className="nav-links">
          <a className="nav-section-link" href="#work">Work</a>
          <a className="nav-section-link" href="#experience">Experience</a>
          <a className="nav-section-link" href="#publication">Publication</a>
          <a className="nav-section-link" href="#about">About</a>
          <div className="nav-socials" aria-label="Social profiles">
            <a href="https://www.linkedin.com/in/fardin-ahmed-8582b9322" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="https://github.com/FinEredium1" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <a className="nav-cta" href="/Fardin-Ahmed-Resume.pdf?v=9.5" target="_blank" rel="noreferrer">Resume ↗</a>
        </div>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> Georgia Tech · Class of 2027</div>
          <h1 id="hero-title">Software &amp;<br />AI Engineer</h1>
          <p className="hero-lede">Computer Science student at Georgia Tech with Agentic AI, network automation, C++ backend, and full-stack engineering experience at Cisco and SAIC.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View projects <span aria-hidden="true">↘</span></a>
            <a className="button button-secondary" href="mailto:fahmed71@gatech.edu">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <aside className="portrait-wrap" aria-label="Portrait of Fardin Ahmed">
          <div className="portrait-frame"><Image src="/fardin-ahmed.png" alt="Fardin Ahmed in a navy suit" width={1284} height={2778} priority /></div>
          <div className="availability-card"><span className="status-dot" /><div><strong>Based in Atlanta</strong><small>Open to 2027 new grad roles</small></div></div>
        </aside>
      </section>

      <section className="recognition-strip" aria-label="Current and previous organizations">
        <span>Internships at</span><strong>CISCO</strong><i /><strong>SAIC</strong><i /><span>Research at</span><strong>GEORGIA TECH</strong>
      </section>

      <section className="section-shell work-section" id="work">
        <div className="section-heading">
          <div><span className="section-index">02 / SELECTED WORK</span><h2>Selected projects.</h2></div>
          <p>Encrypted messaging, AI-content detection, local agents, and stock-ranking research.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-topline"><span>{project.number}</span><span>{project.label}</span><span>2026</span></div>
              <ProjectVisual type={project.visual} />
              <div className="project-copy">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-metric"><span>↳</span>{project.metric}</div>
                <div className="project-strengths">
                  <span>Strengths</span>
                  <ul>{project.strengths.map((strength) => <li key={strength}>{strength}</li>)}</ul>
                </div>
                <div className="project-footer">
                  <ul aria-label={`${project.name} technologies`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  <div className="project-links">
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live ↗</a>}
                    <a href={project.github} target="_blank" rel="noreferrer">Code ↗</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <a className="all-work-link" href="https://github.com/FinEredium1?tab=repositories" target="_blank" rel="noreferrer"><span>View every repository</span><b>↗</b></a>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-shell">
          <div className="section-heading light-heading">
            <div><span className="section-index">03 / EXPERIENCE</span><h2>Where I&apos;ve worked.</h2></div>
            <p>Software engineering at Cisco and SAIC. Machine learning research at Georgia Tech.</p>
          </div>
          <div className="timeline">
            {roles.map((role, index) => (
              <article className="role-row" key={role.company}>
                <span className="role-number">0{index + 1}</span>
                <div className="role-company"><h3>{role.company}</h3><span>{role.location}</span></div>
                <div className="role-detail"><h4>{role.role}</h4><p>{role.detail}</p></div>
                <time>{role.date}</time>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="publication-section" id="publication">
        <div className="section-shell publication-shell">
          <div className="section-heading">
            <div><span className="section-index">04 / PUBLICATION</span><h2>Published research.</h2></div>
            <p>Work on replayable environments for evaluating and training forecasting agents over time.</p>
          </div>
          <article className="publication-card">
            <div className="publication-meta"><span>arXiv preprint · cs.AI</span><time dateTime="2026-09-24">September 2026</time></div>
            <h3>Forecast-Dojo: Replayable Environments for Benchmarking and Training LLM Forecasting Agents</h3>
            <p className="publication-authors">Liqin Ye, Haorui Wang, <strong>Fardin Ahmed</strong>, Rongzhi Zhang, Yuan He, Ziyuan Lin, Yanbin Yin, Jing Peng, Michael Galarnyk, Sudheer Chava, and Chao Zhang</p>
            <p className="publication-summary">A replayable environment that pairs 1,568 resolved prediction-market events with 18.8 million dated news articles, enabling controlled evaluation and training of LLM forecasting agents.</p>
            <div className="publication-footer">
              <span>arXiv:2609.28876v1</span>
              <a href="https://arxiv.org/html/2609.28876v1" target="_blank" rel="noreferrer">Read publication <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell about-section" id="about">
        <div className="about-intro">
          <span className="section-index">05 / HOW I WORK</span>
          <p className="about-statement">My work spans local AI agents, C++ systems, and web applications.</p>
        </div>
        <div className="about-grid">
          <div className="about-card focus-card"><span>Current focus</span><h3>Local models<br />and AI agents.</h3><p>Exploring how small models can help diagnose real systems with clear limits on the tools they can use.</p></div>
          <div className="stack-card"><span>Working set</span><div className="stack-list">{['Python', 'C / C++', 'JavaScript', 'Go', 'React', 'Node.js', 'PyTorch', 'PostgreSQL', 'Linux', 'AWS'].map((skill, index) => <b key={skill}><i>{String(index + 1).padStart(2, '0')}</i>{skill}</b>)}</div></div>
          <div className="education-card"><span>Education</span><strong>Georgia Institute<br />of Technology</strong><p>B.S. Computer Science<br />Expected May 2027</p><small>Atlanta, Georgia</small></div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
        <span className="section-index">06 / CONTACT</span>
        <h2>Let&apos;s talk.</h2>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:fahmed71@gatech.edu">fahmed71@gatech.edu <span>↗</span></a>
          <a className="button dark-button" href="https://www.linkedin.com/in/fardin-ahmed-8582b9322" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
        </div>
      </section>

      <footer>
        <div className="wordmark footer-wordmark"><span>FA</span><strong>Fardin Ahmed</strong></div>
        <p>Software engineering · AI systems · Machine learning</p>
        <div><a href="https://github.com/FinEredium1" target="_blank" rel="noreferrer">GitHub</a><a href="#publication">Publication</a><a href="/Fardin-Ahmed-Resume.pdf?v=9.5" target="_blank" rel="noreferrer">Resume</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
