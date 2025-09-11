import './App.css'

function App() {
  return (
    <main className="site">
      <header className="header">
        <div className="brand">
          <div className="logo-circle">K</div>
          <div className="brand-text">
            <h1 className="brand-name">KHV Digital</h1>
            <p className="brand-tag">Thoughtful apps for pilots</p>
          </div>
        </div>
      </header>

      <section className="card hero">
        <h2 className="hero-title">We build Comms: Pilot Training</h2>
        <p className="hero-subtitle">
          A simple, realistic way for student pilots to master ATC radio calls.
        </p>
        <a
          className="cta"
          href="https://apps.apple.com/us/app/comms-pilot-training/id6749831538"
          target="_blank"
          rel="noreferrer noopener"
        >
          View on the App Store
        </a>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Realistic scenarios</h3>
          <p>Taxi, flight following, pattern work, and more.</p>
        </div>
        <div className="feature">
          <h3>Confidence first</h3>
          <p>Practice the exact moments that make new pilots nervous.</p>
        </div>
        <div className="feature">
          <h3>Built for students</h3>
          <p>From first solo through private pilot checkride prep.</p>
        </div>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} KHV Digital ·{' '}
          <a
            href="https://apps.apple.com/us/app/comms-pilot-training/id6749831538"
            target="_blank"
            rel="noreferrer noopener"
          >
            Comms on the App Store
          </a>
        </p>
      </footer>
    </main>
  )
}

export default App
