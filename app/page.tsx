'use client';

import Interview from '@/components/Interview';

const chapters = [
  ['01 — INFÀNCIA', 'On vivies quan eres petit?', 'Com era casa teva? Qui hi vivia? On jugaves?'],
  ['02 — JOVENTUT', 'Com era la teva vida quan eres jove?', 'Amics, estudis, primers treballs i aquelles primeres decisions.'],
  ['03 — AMOR', 'Com us vau conèixer?', 'Què vas pensar la primera vegada que el/la vas veure?'],
  ['04 — FAMÍLIA', 'Quins moments de família recordes més?', 'Tradiciones, fills, vacances i aquells dies que encara expliqueu.'],
  ['05 — VIDA', 'Quines decisions han canviat la teva vida?', 'Feina, viatges, moments difícils, orgull i aprenentatges.'],
  ['06 — LLEGAT', 'Què voldries que recordéssim de tu?', 'Una manera de pensar, una frase, una recepta o una història.'],
];

export default function Home() {
  return (
    <main className="shell">
      <nav className="nav">
        <div className="brand">Vida Compartida</div>
        <small>Històries familiars, contades per qui les va viure.</small>
      </nav>

      <section className="hero">
        <div>
          <div className="eyebrow">Una conversa que queda</div>
          <h1>La teva història.<br />La seva veu.<br />Per sempre.</h1>
          <p>
            Hi ha coses que només pot explicar ell. Records que només existeixen en la seva veu.
            Vida Compartida t’ajuda a fer-li les preguntes, guardar les seves històries i convertir-les
            en un record que tota la família podrà conservar.
          </p>
          <div className="actions">
            <button className="btn primary" onClick={() => document.querySelector('#entrevista')?.scrollIntoView({ behavior: 'smooth' })}>
              Començar gratis →
            </button>
            <button className="btn secondary" onClick={() => document.querySelector('#com')?.scrollIntoView({ behavior: 'smooth' })}>
              Com funciona
            </button>
          </div>
        </div>
        <div className="portrait" aria-hidden="true"><div className="sun"/><div className="figure"/><div className="head"/><div className="hair"/></div>
      </section>

      <section className="section" id="com">
        <div className="eyebrow">No és un qüestionari</div>
        <h2>Una vida, pregunta a pregunta.</h2>
        <p>
          Les millors històries no apareixen quan preguntem “explica’m la teva vida”. Apareixen quan
          recordem una casa, una persona, una olor, un estiu o aquell dia que ho va canviar tot.
        </p>
        <div className="steps">
          <article><span>01</span><h3>Pregunta</h3><p>Preguntes pensades per obrir records i fer aparèixer històries.</p></article>
          <article><span>02</span><h3>Parla</h3><p>Pot respondre parlant o escrivint. La seva veu es conserva.</p></article>
          <article><span>03</span><h3>Guarda</h3><p>Cada resposta es converteix en una peça de la seva història.</p></article>
          <article><span>04</span><h3>Descobreix</h3><p>Amb el temps, totes les petites històries formen una vida sencera.</p></article>
        </div>
      </section>

      <section className="section">
        <div className="eyebrow">La història de tota una vida</div>
        <h2>Comencem pel principi.</h2>
        <p>Una primera versió guiada per sis capítols. No cal fer-ho tot avui.</p>
        <div className="cards">
          {chapters.map(([n, t, d]) => (
            <article className="card" key={n}>
              <div className="num">{n}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="entrevista"><Interview /></section>

      <footer className="foot">
        <span>Vida Compartida — una vida mereix ser contada.</span>
        <span>Privat · Simple · Familiar</span>
      </footer>
    </main>
  );
}
