import { useState } from 'react'
import './App.css'

const OUR_TEAM = 'Λύκοι Αιγιαλείας'

const schedule = [
  { round: 1, date: '12-10-25', home: 'Λύκοι Αιγιαλείας', away: 'Αμαζόνες Κορινθίας', scoreHome: 1, scoreAway: 0 },
  { round: 1, date: '26-10-25', home: 'Ελπίδες Αγρινίου', away: 'Αμαζόνες Θεσπρωτίας', scoreHome: 3, scoreAway: 0 },
  { round: 1, date: '26-10-25', home: 'Αγ. Γεώργιος Κορίνθου', away: 'Ακράτητος Άνω Λιοσίων', scoreHome: 3, scoreAway: 0 },
  { round: 1, date: '12-10-25', home: 'Αετός Ρίου', away: 'Ομόνοια Άνω Λιοσίων', scoreHome: 0, scoreAway: 4 },

  { round: 2, date: '19-10-25', home: 'Αμαζόνες Κορινθίας', away: 'Ελπίδες Αγρινίου', scoreHome: 6, scoreAway: 0 },
  { round: 2, date: '19-10-25', home: 'Πανλευκάδιος', away: 'Λύκοι Αιγιαλείας', scoreHome: 1, scoreAway: 4 },
  { round: 2, date: '19-10-25', home: 'Ακράτητος Άνω Λιοσίων', away: 'Ομόνοια Άνω Λιοσίων', scoreHome: 0, scoreAway: 3 },
  { round: 2, date: '19-10-25', home: 'Αμαζόνες Θεσπρωτίας', away: 'Αετός Ρίου', scoreHome: 0, scoreAway: 3 },

  { round: 3, date: '2-11-25', home: 'Λύκοι Αιγιαλείας', away: 'Ελπίδες Αγρινίου', scoreHome: 5, scoreAway: 0 },
  { round: 3, date: '2-11-25', home: 'Αγ. Γεώργιος Κορίνθου', away: 'Πανλευκάδιος', scoreHome: 10, scoreAway: 3 },
  { round: 3, date: '2-11-25', home: 'Αετός Ρίου', away: 'Αμαζόνες Κορινθίας', scoreHome: 0, scoreAway: 3 },
  { round: 3, date: '2-11-25', home: 'Ακράτητος Άνω Λιοσίων', away: 'Αμαζόνες Θεσπρωτίας', scoreHome: 0, scoreAway: 3 },

  { round: 4, date: '9-11-25', home: 'Αμαζόνες Κορινθίας', away: 'Ακράτητος Άνω Λιοσίων', scoreHome: 3, scoreAway: 0 },
  { round: 4, date: '9-11-25', home: 'Πανλευκάδιος', away: 'Ομόνοια Άνω Λιοσίων', scoreHome: 0, scoreAway: 9 },
  { round: 4, date: '9-11-25', home: 'Ελπίδες Αγρινίου', away: 'Αετός Ρίου', scoreHome: 2, scoreAway: 1 },
  { round: 4, date: '9-11-25', home: 'Αγ. Γεώργιος Κορίνθου', away: 'Λύκοι Αιγιαλείας', scoreHome: 0, scoreAway: 0 },

  { round: 5, date: '23-11-25', home: 'Λύκοι Αιγιαλείας', away: 'Αετός Ρίου', scoreHome: 1, scoreAway: 0 },
  { round: 5, date: '23-11-25', home: 'Ομόνοια Άνω Λιοσίων', away: 'Αγ. Γεώργιος Κορίνθου', scoreHome: 4, scoreAway: 2 },
  { round: 5, date: '23-11-25', home: 'Ακράτητος Άνω Λιοσίων', away: 'Ελπίδες Αγρινίου', scoreHome: 0, scoreAway: 3 },
  { round: 5, date: '23-11-25', home: 'Αμαζόνες Θεσπρωτίας', away: 'Πανλευκάδιος', scoreHome: 5, scoreAway: 2 },

  { round: 6, date: '7-12-25', home: 'Πανλευκάδιος', away: 'Αμαζόνες Κορινθίας', scoreHome: 1, scoreAway: 9 },
  { round: 6, date: '7-12-25', home: 'Αγ. Γεώργιος Κορίνθου', away: 'Αμαζόνες Θεσπρωτίας', scoreHome: 3, scoreAway: 0 },
  { round: 6, date: '7-12-25', home: 'Αετός Ρίου', away: 'Ακράτητος Άνω Λιοσίων', scoreHome: 3, scoreAway: 0 },
  { round: 6, date: '7-12-25', home: 'Ομόνοια Άνω Λιοσίων', away: 'Λύκοι Αιγιαλείας', scoreHome: 3, scoreAway: 0 },

  { round: 7, date: '14-12-25', home: 'Αμαζόνες Κορινθίας', away: 'Αγ. Γεώργιος Κορίνθου', scoreHome: 1, scoreAway: 2 },
  { round: 7, date: '14-12-25', home: 'Ελπίδες Αγρινίου', away: 'Πανλευκάδιος', scoreHome: 1, scoreAway: 4 },
  { round: 7, date: '14-12-25', home: 'Ακράτητος Άνω Λιοσίων', away: 'Λύκοι Αιγιαλείας', scoreHome: 0, scoreAway: 3 },
  { round: 7, date: '14-12-25', home: 'Αμαζόνες Θεσπρωτίας', away: 'Ομόνοια Άνω Λιοσίων', scoreHome: 2, scoreAway: 6 },

  { round: 8, date: '21-12-25', home: 'Λύκοι Αιγιαλείας', away: 'Αμαζόνες Θεσπρωτίας', scoreHome: 2, scoreAway: 0 },
  { round: 8, date: '21-12-25', home: 'Αγ. Γεώργιος Κορίνθου', away: 'Ελπίδες Αγρινίου', scoreHome: 6, scoreAway: 0 },
  { round: 8, date: '21-12-25', home: 'Αετός Ρίου', away: 'Πανλευκάδιος', scoreHome: 2, scoreAway: 1 },
  { round: 8, date: '21-12-25', home: 'Ομόνοια Άνω Λιοσίων', away: 'Αμαζόνες Κορινθίας', scoreHome: 5, scoreAway: 0 },

  { round: 9, date: '11-1-26', home: 'Πανλευκάδιος', away: 'Ακράτητος Άνω Λιοσίων', scoreHome: 3, scoreAway: 0 },
  { round: 9, date: '11-1-26', home: 'Ελπίδες Αγρινίου', away: 'Ομόνοια Άνω Λιοσίων', scoreHome: 0, scoreAway: 7 },
  { round: 9, date: '11-1-26', home: 'Αετός Ρίου', away: 'Αγ. Γεώργιος Κορίνθου', scoreHome: 0, scoreAway: 1 },
  { round: 9, date: '11-1-26', home: 'Αμαζόνες Θεσπρωτίας', away: 'Αμαζόνες Κορινθίας', scoreHome: 1, scoreAway: 3 },

  { round: 10, date: '18-1-26', home: 'Αμαζόνες Κορινθίας', away: 'Λύκοι Αιγιαλείας', scoreHome: 1, scoreAway: 1 },
  { round: 10, date: '18-1-26', home: 'Αμαζόνες Θεσπρωτίας', away: 'Ελπίδες Αγρινίου', scoreHome: 4, scoreAway: 0 },
  { round: 10, date: '18-1-26', home: 'Ακράτητος Άνω Λιοσίων', away: 'Αγ. Γεώργιος Κορίνθου', scoreHome: 0, scoreAway: 3 },
  { round: 10, date: '18-1-26', home: 'Ομόνοια Άνω Λιοσίων', away: 'Αετός Ρίου', scoreHome: 4, scoreAway: 0 },

  { round: 11, date: '1-2-26', home: 'Ελπίδες Αγρινίου', away: 'Αμαζόνες Κορινθίας', scoreHome: 1, scoreAway: 3 },
  { round: 11, date: '1-2-26', home: 'Λύκοι Αιγιαλείας', away: 'Πανλευκάδιος', scoreHome: 4, scoreAway: 1 },
  { round: 11, date: '1-2-26', home: 'Ομόνοια Άνω Λιοσίων', away: 'Ακράτητος Άνω Λιοσίων', scoreHome: 3, scoreAway: 0 },
  { round: 11, date: '1-2-26', home: 'Αετός Ρίου', away: 'Αμαζόνες Θεσπρωτίας', scoreHome: 1, scoreAway: 1 },

  { round: 12, date: '15-2-26', home: 'Ελπίδες Αγρινίου', away: 'Λύκοι Αιγιαλείας', scoreHome: 0, scoreAway: 2 },
  { round: 12, date: '15-2-26', home: 'Πανλευκάδιος', away: 'Αγ. Γεώργιος Κορίνθου', scoreHome: 2, scoreAway: 2 },
  { round: 12, date: '15-2-26', home: 'Αμαζόνες Κορινθίας', away: 'Αετός Ρίου', scoreHome: 4, scoreAway: 0 },
  { round: 12, date: '15-2-26', home: 'Αμαζόνες Θεσπρωτίας', away: 'Ακράτητος Άνω Λιοσίων', scoreHome: 3, scoreAway: 0 },

  { round: 13, date: '22-2-26', home: 'Ακράτητος Άνω Λιοσίων', away: 'Αμαζόνες Κορινθίας', scoreHome: 0, scoreAway: 3 },
  { round: 13, date: '1-3-26', home: 'Ομόνοια Άνω Λιοσίων', away: 'Πανλευκάδιος', scoreHome: 8, scoreAway: 1 },
  { round: 13, date: '8-3-26', home: 'Αετός Ρίου', away: 'Ελπίδες Αγρινίου', scoreHome: 2, scoreAway: 0 },
  { round: 13, date: '22-2-26', home: 'Λύκοι Αιγιαλείας', away: 'Αγ. Γεώργιος Κορίνθου', scoreHome: 0, scoreAway: 0 },

  { round: 14, date: '15-3-26', home: 'Αετός Ρίου', away: 'Λύκοι Αιγιαλείας' },
  { round: 14, date: '15-3-26', home: 'Αγ. Γεώργιος Κορίνθου', away: 'Ομόνοια Άνω Λιοσίων' },
  { round: 14, date: '15-3-26', home: 'Ελπίδες Αγρινίου', away: 'Ακράτητος Άνω Λιοσίων' },
  { round: 14, date: '15-3-26', home: 'Πανλευκάδιος', away: 'Αμαζόνες Θεσπρωτίας' },

  { round: 15, date: '29-3-26', home: 'Αμαζόνες Κορινθίας', away: 'Πανλευκάδιος' },
  { round: 15, date: '29-3-26', home: 'Αμαζόνες Θεσπρωτίας', away: 'Αγ. Γεώργιος Κορίνθου' },
  { round: 15, date: '29-3-26', home: 'Ακράτητος Άνω Λιοσίων', away: 'Αετός Ρίου' },
  { round: 15, date: '29-3-26', home: 'Λύκοι Αιγιαλείας', away: 'Ομόνοια Άνω Λιοσίων' },

  { round: 16, date: '5-4-26', home: 'Αγ. Γεώργιος Κορίνθου', away: 'Αμαζόνες Κορινθίας' },
  { round: 16, date: '5-4-26', home: 'Πανλευκάδιος', away: 'Ελπίδες Αγρινίου' },
  { round: 16, date: '5-4-26', home: 'Λύκοι Αιγιαλείας', away: 'Ακράτητος Άνω Λιοσίων' },
  { round: 16, date: '5-4-26', home: 'Ομόνοια Άνω Λιοσίων', away: 'Αμαζόνες Θεσπρωτίας' },

  { round: 17, date: '26-4-26', home: 'Αμαζόνες Θεσπρωτίας', away: 'Λύκοι Αιγιαλείας' },
  { round: 17, date: '26-4-26', home: 'Ελπίδες Αγρινίου', away: 'Αγ. Γεώργιος Κορίνθου' },
  { round: 17, date: '26-4-26', home: 'Πανλευκάδιος', away: 'Αετός Ρίου' },
  { round: 17, date: '26-4-26', home: 'Αμαζόνες Κορινθίας', away: 'Ομόνοια Άνω Λιοσίων' },

  { round: 18, date: '3-5-26', home: 'Ακράτητος Άνω Λιοσίων', away: 'Πανλευκάδιος' },
  { round: 18, date: '3-5-26', home: 'Ομόνοια Άνω Λιοσίων', away: 'Ελπίδες Αγρινίου' },
  { round: 18, date: '3-5-26', home: 'Αγ. Γεώργιος Κορίνθου', away: 'Αετός Ρίου' },
  { round: 18, date: '3-5-26', home: 'Αμαζόνες Κορινθίας', away: 'Αμαζόνες Θεσπρωτίας' },
]

const rounds = [...new Set(schedule.map(m => m.round))]

const squad = [
  { name: 'Ελένα Μάρκου',    role: 'Αρχηγός · Κεντρική Αμυντική', number: 4 },
  { name: 'Δάνα Κώστα',      role: 'Δημιουργός · Κεντρική Μέση', number: 8 },
  { name: 'Ίρις Βλάχου',     role: 'Επιθετική · Κέντρο Επίθεσης', number: 9 },
  { name: 'Νεφέλη Αρβανίτη', role: 'Τερματοφύλακας', number: 1 },
]

function isOurs(match) {
  return match.home === OUR_TEAM || match.away === OUR_TEAM
}

function getResult(match) {
  if (match.scoreHome === undefined) return null
  const ours = match.home === OUR_TEAM
  const ourScore = ours ? match.scoreHome : match.scoreAway
  const theirScore = ours ? match.scoreAway : match.scoreHome
  if (ourScore > theirScore) return 'win'
  if (ourScore < theirScore) return 'loss'
  return 'draw'
}

function ScheduleModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <p className="modal-eyebrow">Γ΄ Εθνική Γυναικών — 3ος Όμιλος</p>
            <h2 className="modal-title">Πρόγραμμα Αγώνων</h2>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Κλείσιμο">✕</button>
        </div>

        <div className="modal-legend">
          <span className="leg win">Νίκη</span>
          <span className="leg draw">Ισοπαλία</span>
          <span className="leg loss">Ήττα</span>
          <span className="leg upcoming">Επερχόμενος</span>
        </div>

        <div className="modal-body">
          {rounds.map(r => {
            const games = schedule.filter(m => m.round === r)
            return (
              <div key={r} className="round-block">
                <p className="round-label">Αγωνιστική {r}</p>
                {games.map((m, i) => {
                  const played = m.scoreHome !== undefined
                  const ours = isOurs(m)
                  const result = getResult(m)
                  return (
                    <div
                      key={i}
                      className={`match-row ${ours ? 'ours' : ''} ${result ? result : 'upcoming'}`}
                    >
                      <span className="match-date">{m.date}</span>
                      <span className={`match-team ${m.home === OUR_TEAM ? 'our-name' : ''}`}>{m.home}</span>
                      <span className="match-score">
                        {played ? `${m.scoreHome} – ${m.scoreAway}` : 'vs'}
                      </span>
                      <span className={`match-team away ${m.away === OUR_TEAM ? 'our-name' : ''}`}>{m.away}</span>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [showSchedule, setShowSchedule] = useState(false)

  return (
    <div className="page">
      {showSchedule && <ScheduleModal onClose={() => setShowSchedule(false)} />}

      {/* NAV */}
      <nav className="nav">
        <span className="nav-brand">ΛΥΚΑΙΝΕΣ</span>
        <ul className="nav-links">
          <li>
            <button className="nav-btn" onClick={() => setShowSchedule(true)}>
              Πρόγραμμα Αγώνων
            </button>
          </li>
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
            <button className="btn-primary" onClick={() => setShowSchedule(true)}>
              Πρόγραμμα Αγώνων
            </button>
            <a href="#squad" className="btn-ghost">Η Ομάδα μας</a>
          </div>
        </div>
      </header>

      <main>
        {/* FIXTURES */}
        <section id="fixtures" className="panel">
          <div className="section-label"><h2>Επερχόμενοι Αγώνες</h2></div>
          <div className="fixture-grid">
            {[
              { date: '15 Μαρ', opponent: 'Αετός Ρίου', venue: 'Εκτός' },
              { date: '29 Μαρ', opponent: 'Ομόνοια Άνω Λιοσίων', venue: 'Εντός' },
              { date: '5 Απρ', opponent: 'Ακράτητος Άνω Λιοσίων', venue: 'Εντός' },
            ].map((match) => (
              <article key={match.date} className="fixture-card">
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
