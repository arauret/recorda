import Interview from '@/components/Interview';

const cards = [
  ['01 — INFÀNCIA', 'On vivies quan eres petit?', 'Com era casa teva? Qui hi vivia? On jugaves?'],
  ['02 — AMOR', 'Com us vau conèixer?', 'Què vas pensar la primera vegada que el/la vas veure?'],
  ['03 — VIDA', 'Què recordes d’un dia normal?', 'Què menjàveu, com treballàveu, què fèieu després de sopar?'],
  ['04 — MOMENTS', 'Quin dia tornaries a viure?', 'No cal que sigui el més important. Pot ser simplement el més feliç.'],
  ['05 — FAMÍLIA', 'Què esperes que recordem de tu?', 'Una manera de pensar, una frase, una recepta, una història.'],
  ['06 — FUTUR', 'Què ens voldries ensenyar?', 'Allò que només s’aprèn després d’haver viscut molt.'],
];

export default function Home() {
  return <main className="shell">
    <nav className="nav"><div className="brand">recorda.</div><small>Perquè una vida no cap en una fotografia.</small></nav>
    <section className="hero"><div><div className="eyebrow">Una conversa que queda</div><h1>La seva vida.<br/>La seva veu.<br/>Per sempre.</h1><p>Recorda és una manera bonica i senzilla d’entrevistar l’avi o l’àvia. Pregunta a pregunta, pot escriure o simplement parlar. Nosaltres convertim les seves paraules en un record que la família podrà tornar a llegir —i escoltar—.</p><div className="actions"><button className="btn primary" onClick={() => document.querySelector('#entrevista')?.scrollIntoView({behavior:'smooth'})}>Començar l’entrevista →</button><button className="btn secondary" onClick={() => document.querySelector('#com')?.scrollIntoView({behavior:'smooth'})}>Com funciona</button></div></div>
      <div className="portrait" aria-hidden="true"><div className="sun"/><div className="figure"/><div className="head"/><div className="hair"/></div>
    </section>
    <section className="section" id="com"><div className="eyebrow">No és un qüestionari</div><h2>Les preguntes obren portes.</h2><p>Les millors històries no apareixen quan preguntem “explica’m la teva vida”, sinó quan recordem un lloc, una persona, una olor o aquell dia que ho va canviar tot.</p><div className="cards">{cards.map(([n,t,d])=><article className="card" key={n}><div className="num">{n}</div><h3>{t}</h3><p>{d}</p></article>)}</div></section>
    <section className="section" id="entrevista"><Interview/></section>
    <footer className="foot"><span>recorda. — un lloc per guardar el que no volem perdre.</span><span>Privat · Simple · Familiar</span></footer>
  </main>;
}
