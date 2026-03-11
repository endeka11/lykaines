import './App.css'

const fixtures = [
  { date: '22 Μαρ', opponent: 'Athena FC', venue: 'Εντός — Wolf Arena' },
  { date: '30 Μαρ', opponent: 'Sparta Women', venue: 'Εκτός — Leonidas Park' },
  { date: '6 Απρ', opponent: 'Thessalia 04', venue: 'Εντός — Wolf Arena' },
]

const squad = [
  { name: 'Ελένα Μάρκου',    role: 'Αρχηγός · Κεντρική Αμυντική', number: 4 },
  { name: 'Δάνα Κώστα',      role: 'Δημιουργός · Κεντρική Μέση', number: 8 },
  { name: 'Ίρις Βλάχου',     role: 'Επιθετική · Κέντρο Επίθεσης', number: 9 },
  { name: 'Νεφέλη Αρβανίτη', role: 'Τερματοφύλακας', number: 1 },
]

function App() {
  return (
    <div className="page">
      {/* NAV */}
      <nav className="nav">
        <span className="nav-brand">ΛΥΚΑΙΝΕΣ</span>
        <ul className="nav-links">
          <li><a href="#fixtures">Αγώνες</a></li>
          <li><a href="#identity">Σύλλογος</a></li>
          <li><a href="#squad">Ομάδα</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Γυναικεία Ποδοσφαιρική Ομάδα</p>
          <h1>ΛΥΚΑΙΝΕΣ</h1>
          <p className="tagline">Αδέσμευτο ποδόσφαιρο, μία αγέλη, ένας σκοπός.</p>
          <div className="hero-actions">
            <a href="#fixtures" className="btn-primary">Επόμενοι Αγώνες</a>
            <a href="#squad" className="btn-ghost">Η Ομάδα μας</a>
          </div>
        </div>
      </header>

      <main>
        {/* FIXTURES */}
        <section id="fixtures" className="panel">
          <div className="section-label"><h2>Επερχόμενοι Αγώνες</h2></div>
          <div className="fixture-grid">
            {fixtures.map((match) => (
              <article key={`${match.date}-${match.opponent}`} className="fixture-card">
                <p className="date">{match.date}</p>
                <h3>εναντίον {match.opponent}</h3>
                <p>{match.venue}</p>
              </article>
            ))}
          </div>
        </section>

        {/* IDENTITY */}
        <section id="identity" className="panel split">
          <div className="identity-text">
            <div className="section-label"><h2>Ταυτότητα Συλλόγου</h2></div>
            <p>
              Οι ΛΥΚΑΙΝΕΣ οικοδομήθηκαν πάνω στην ένταση, την πειθαρχία και τη συλλογική δύναμη.
              Εκπροσωπούμε τις γυναίκες στον αθλητισμό με περηφάνια και παλεύουμε για κάθε μπάλα,
              κάθε τρέξιμο και κάθε στιγμή στο γήπεδο.
            </p>
          </div>
          <aside className="crest">
            <p>Ιδρ. 2018</p>
            <p className="big">ΛΥΚ</p>
            <p>City Pack</p>
          </aside>
        </section>

        {/* SQUAD */}
        <section id="squad" className="panel">
          <div className="section-label"><h2>Βασική Ομάδα</h2></div>
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

      <footer className="footer">
        <span>ΛΥΚΑΙΝΕΣ</span> · Γυναικεία Ποδοσφαιρική Ομάδα · Ιδρ. 2018
      </footer>
    </div>
  )
}

export default App
