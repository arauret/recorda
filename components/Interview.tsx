'use client';
import { useEffect, useRef, useState } from 'react';

const questions = [
  'On vivies quan eres petit/a? Com era casa teva?',
  'Quin és un record de la teva mare o del teu pare que no vols que oblidem?',
  'Com vas conèixer la persona que vas estimar?',
  'Quin dia de la teva vida tornaries a viure?',
  'Quina tradició familiar t’agradaria que continuéssim?',
  'Què voldries que els teus nets sabessin de tu?',
];

type SpeechRecognitionLike = { lang:string; continuous:boolean; interimResults:boolean; start:()=>void; stop:()=>void; onresult?: (e:any)=>void; onend?:()=>void };
type WindowSpeech = Window & typeof globalThis & { SpeechRecognition?: new()=>SpeechRecognitionLike; webkitSpeechRecognition?: new()=>SpeechRecognitionLike };

export default function Interview(){
  const [i,setI]=useState(0); const [answers,setAnswers]=useState<string[]>([]); const [mode,setMode]=useState<'text'|'voice'>('text'); const [recording,setRecording]=useState(false); const [saved,setSaved]=useState(true); const [done,setDone]=useState(false);
  const recognition=useRef<SpeechRecognitionLike|null>(null);
  useEffect(()=>{try{const x=localStorage.getItem('recorda-answers');if(x)setAnswers(JSON.parse(x));}catch{}},[]);
  const answer=answers[i]||'';
  const setAnswer=(v:string)=>{const next=[...answers];next[i]=v;setAnswers(next);setSaved(false)};
  const save=()=>{localStorage.setItem('recorda-answers',JSON.stringify(answers));setSaved(true)};
  const next=()=>{save();if(i<questions.length-1){setI(i+1);setSaved(true)}else setDone(true)};
  const startVoice=()=>{const W=window as WindowSpeech; const C=W.SpeechRecognition||W.webkitSpeechRecognition;if(!C){alert('El teu navegador no permet transcripció de veu directa. Prova Chrome o Safari.');return}const r=new C();r.lang='ca-ES';r.continuous=true;r.interimResults=true;r.onresult=(e)=>{let t='';for(let n=0;n<e.results.length;n++)t+=e.results[n][0].transcript+' ';setAnswer(t.trim())};r.onend=()=>setRecording(false);recognition.current=r;r.start();setRecording(true)};
  const stopVoice=()=>{recognition.current?.stop();setRecording(false)};
  return <div className="app"><div><div className="eyebrow">La teva entrevista</div><h2>Comencem per una història petita.</h2><p>Pot respondre escrivint o parlant. No cal fer-ho tot avui. La conversa es guarda a mesura que avanceu.</p></div><div className="profile"><div className="topline"><strong>{done?'Entrevista completada':`Pregunta ${i+1} de ${questions.length}`}</strong><span>{saved?'Desat ✓':'Canvis pendents'}</span></div><div className="progress"><span style={{width:`${done?100:((i+1)/questions.length)*100}%`}}/></div>{done?<><div className="question">Ja tenim una primera part de la seva història.</div><p className="muted">Cada resposta és una peça de la vostra història familiar. Aquest MVP ja deixa preparada l’experiència per afegir transcripció, IA i àudio original.</p></>:<><div className="question">{questions[i]}</div><div className="mode"><button className={mode==='text'?'active':''} onClick={()=>setMode('text')}>Escriure</button><button className={mode==='voice'?'active':''} onClick={()=>setMode('voice')}>🎙 Parlar</button></div>{mode==='text'?<textarea className="answer" value={answer} onChange={e=>setAnswer(e.target.value)} placeholder="Escriu aquí el record..."/>:<div className={`voice ${recording?'recording':''}`}><button className="mic" onClick={recording?stopVoice:startVoice}>{recording?'■':'●'}</button><span>{recording?'T’estic escoltant… parla amb calma':'Prem per començar a parlar'}</span></div>}<div className="actions"><button className="btn primary" onClick={next}>Guardar i continuar →</button><button className="btn secondary" onClick={()=>i<questions.length-1&&setI(i+1)}>Ara no</button></div></>}</div></div>
}
