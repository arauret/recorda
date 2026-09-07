'use client';
import { useEffect, useRef, useState } from 'react';

type Question = { chapter: string; text: string };

const questions: Question[] = [
  { chapter: 'Infància', text: 'Com era la casa on vas créixer? Qui hi vivia amb tu?' },
  { chapter: 'Infància', text: 'Què fèieu els caps de setmana quan eres petit/a?' },
  { chapter: 'Joventut', text: 'Com eres quan tenies vint anys? Què t’agradava fer?' },
  { chapter: 'Amor', text: 'Com vas conèixer la persona que vas estimar?' },
  { chapter: 'Família', text: 'Quin moment de la vostra família no voldries que oblidéssim mai?' },
  { chapter: 'Vida', text: 'Quina decisió de la teva vida t’ha canviat més?' },
  { chapter: 'Vida', text: 'Quin dia de la teva vida tornaries a viure?' },
  { chapter: 'Llegat', text: 'Què voldries que els teus nets sabessin de tu?' },
];

type SpeechRecognitionLike = { lang:string; continuous:boolean; interimResults:boolean; start:()=>void; stop:()=>void; onresult?: (e:any)=>void; onend?:()=>void };
type WindowSpeech = Window & typeof globalThis & { SpeechRecognition?: new()=>SpeechRecognitionLike; webkitSpeechRecognition?: new()=>SpeechRecognitionLike };

export default function Interview(){
  const [i,setI]=useState(0); const [answers,setAnswers]=useState<string[]>([]); const [mode,setMode]=useState<'text'|'voice'>('text'); const [recording,setRecording]=useState(false); const [saved,setSaved]=useState(true); const [done,setDone]=useState(false);
  const recognition=useRef<SpeechRecognitionLike|null>(null);
  useEffect(()=>{try{const x=localStorage.getItem('vida-compartida-answers');if(x)setAnswers(JSON.parse(x));}catch{}},[]);
  const answer=answers[i]||'';
  const setAnswer=(v:string)=>{const next=[...answers];next[i]=v;setAnswers(next);setSaved(false)};
  const save=()=>{localStorage.setItem('vida-compartida-answers',JSON.stringify(answers));setSaved(true)};
  const next=()=>{save();if(i<questions.length-1){setI(i+1);setSaved(true)}else setDone(true)};
  const startVoice=()=>{const W=window as WindowSpeech; const C=W.SpeechRecognition||W.webkitSpeechRecognition;if(!C){alert('El teu navegador no permet transcripció de veu directa. Prova Chrome o Safari.');return}const r=new C();r.lang='ca-ES';r.continuous=true;r.interimResults=true;r.onresult=(e)=>{let t='';for(let n=0;n<e.results.length;n++)t+=e.results[n][0].transcript+' ';setAnswer(t.trim())};r.onend=()=>setRecording(false);recognition.current=r;r.start();setRecording(true)};
  const stopVoice=()=>{recognition.current?.stop();setRecording(false)};
  return <div className="app"><div><div className="eyebrow">La història de la teva família</div><h2>Comencem per una història petita.</h2><p>Pot respondre escrivint o parlant. No cal fer-ho tot avui. La conversa es guarda a mesura que avanceu.</p></div><div className="profile"><div className="topline"><strong>{done?'Primera part completada':`${questions[i].chapter} · Pregunta ${i+1} de ${questions.length}`}</strong><span>{saved?'Desat ✓':'Canvis pendents'}</span></div><div className="progress"><span style={{width:`${done?100:((i+1)/questions.length)*100}%`}}/></div>{done?<><div className="question">Ja tenim una primera part de la seva història.</div><p className="muted">Això és només el principi. Les seves respostes quedaran preparades per convertir-les en històries, afegir-hi fotografies i conservar també la seva veu.</p></>:<><div className="question">{questions[i].text}</div><div className="mode"><button className={mode==='text'?'active':''} onClick={()=>setMode('text')}>Escriure</button><button className={mode==='voice'?'active':''} onClick={()=>setMode('voice')}>🎙 Parlar</button></div>{mode==='text'?<textarea className="answer" value={answer} onChange={e=>setAnswer(e.target.value)} placeholder="Escriu aquí el record..."/>:<div className={`voice ${recording?'recording':''}`}><button className="mic" onClick={recording?stopVoice:startVoice}>{recording?'■':'●'}</button><span>{recording?'T’estic escoltant… parla amb calma':'Prem per començar a parlar'}</span></div>}<div className="actions"><button className="btn primary" onClick={next}>Guardar i continuar →</button><button className="btn secondary" onClick={()=>i<questions.length-1&&setI(i+1)}>Ara no</button></div></>}</div></div>
}
