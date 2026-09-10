let audio:AudioContext|undefined;
let enabled=false;try{enabled=localStorage.getItem('cultivation-sound')==='on';}catch{}
export function soundEnabled(){return enabled;}
export function setSound(value:boolean){enabled=value;try{localStorage.setItem('cultivation-sound',value?'on':'off');}catch{}if(value){try{audio??=new AudioContext();void audio.resume().catch(()=>{});playSound('age');}catch{}}}
export function playSound(kind:'age'|'popup'|'success'|'failure'|'action'){
 if(!enabled||document.hidden)return;try{if(!audio||audio.state!=='running')return;const notes=kind==='success'?[261.6,329.6,392,523.2]:kind==='failure'?[220,174.6]:kind==='popup'?[440,587.3]:kind==='action'?[392]:[329.6,440];const ctx=audio;notes.forEach((hz,i)=>{const o=ctx.createOscillator(),g=ctx.createGain(),t=ctx.currentTime+i*.085;o.type='sine';o.frequency.value=hz;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.045,t+.015);g.gain.exponentialRampToValueAtTime(.0001,t+.35);o.connect(g);g.connect(ctx.destination);o.start(t);o.stop(t+.36);o.onended=()=>{o.disconnect();g.disconnect();};});}catch{}
}
export function unlockSound(){if(!enabled)return;try{audio??=new AudioContext();void audio.resume().catch(()=>{});}catch{}}
