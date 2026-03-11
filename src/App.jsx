import './App.css'

const fixtures = [
  { date: 'March 22', opponent: 'Athena FC', venue: 'Home - Wolf Arena' },
  { date: 'March 30', opponent: 'Sparta Women', venue: 'Away - Leonidas Park' },
  { date: 'April 6', opponent: 'Thessalia 04', venue: 'Home - Wolf Arena' },
]

const squad = [
  { name: 'Elena Markou', role: 'Captain - CB', number: 4 },
  { name: 'Dana Kosta', role: 'Playmaker - CM', number: 8 },
  { name: 'Iris Vlahou', role: 'Striker - ST', number: 9 },
  { name: 'Nefeli Arvaniti', role: 'Goalkeeper - GK', number: 1 },
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Women&apos;s Football Club</p>
        <h1>ΛΥΚΑΙΝΕΣ</h1>
        <p className="tagline">Fearless football, one pack, one purpose.</p>
        <div className="hero-actions">
          <button type="button">Buy Tickets</button>
          <a href="#fixtures">See Fixtures</a>
        </div>
      </header>

      <main>
        <section id="fixtures" className="panel">
          <h2>Upcoming Matches</h2>
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

        <section className="panel split">
          <div>
            <h2>Identity</h2>
            <p>
              ΛΥΚΑΙΝΕΣ is built on intensity, discipline, and collective strength. We represent women
              in sport with pride and fight for every ball, every run, and every moment.
            </p>
          </div>
          <aside className="crest">
            <p>Est. 2018</p>
            <p className="big">LW</p>
            <p>City Pack</p>
          </aside>
        </section>

        <section className="panel">
          <h2>Core Squad</h2>
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
