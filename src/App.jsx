import './App.css'

const fixtures = [
  { date: 'March 22', opponent: 'Athena FC', venue: 'Home — Wolf Arena' },
  { date: 'March 30', opponent: 'Sparta Women', venue: 'Away — Leonidas Park' },
  { date: 'April 6', opponent: 'Thessalia 04', venue: 'Home — Wolf Arena' },
]

const squad = [
  { name: 'Elena Markou',    role: 'Captain · CB', number: 4 },
  { name: 'Dana Kosta',      role: 'Playmaker · CM', number: 8 },
  { name: 'Iris Vlahou',     role: 'Striker · ST', number: 9 },
  { name: 'Nefeli Arvaniti', role: 'Goalkeeper · GK', number: 1 },
]

function App() {
  return (
    <div className="page">
      {/* NAV */}
      <nav className="nav">
        <span className="nav-brand">ΛΥΚΑΙΝΕΣ</span>
        <ul className="nav-links">
          <li><a href="#fixtures">Fixtures</a></li>
          <li><a href="#identity">Club</a></li>
          <li><a href="#squad">Squad</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Women&apos;s Football Club</p>
          <h1>ΛΥΚΑΙΝΕΣ</h1>
          <p className="tagline">Fearless football, one pack, one purpose.</p>
          <div className="hero-actions">
            <a href="#fixtures" className="btn-primary">See Fixtures</a>
            <a href="#squad" className="btn-ghost">Our Squad</a>
          </div>
        </div>
      </header>

      <main>
        {/* FIXTURES */}
        <section id="fixtures" className="panel">
          <div className="section-label"><h2>Upcoming Matches</h2></div>
          <div className="fixture-grid">
            {fixtures.map((match) => (
              <article key={`${match.date}-${match.opponent}`} className="fixture-card">
                <p className="date">{match.date}</p>
                <h3>vs {match.opponent}</h3>
                <p>{match.venue}</p>
              </article>
            ))}
          </div>
        </section>

        {/* IDENTITY */}
        <section id="identity" className="panel split">
          <div className="identity-text">
            <div className="section-label"><h2>Club Identity</h2></div>
            <p>
              ΛΥΚΑΙΝΕΣ is built on intensity, discipline, and collective strength.
              We represent women in sport with pride and fight for every ball,
              every run, and every moment on the pitch.
            </p>
          </div>
          <aside className="crest">
            <p>Est. 2018</p>
            <p className="big">ΛΥΚ</p>
            <p>City Pack</p>
          </aside>
        </section>

        {/* SQUAD */}
        <section id="squad" className="panel">
          <div className="section-label"><h2>Core Squad</h2></div>
          <div className="squad-grid">
            {squad.map((player) => (
              <article key={player.name} className="player-card">
                <p className="number">#{player.number}</p>
                <h3>{player.name}</h3>
                <p>{player.role}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
