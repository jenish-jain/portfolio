// Seeded fixture data for the runs page mockups.
// Shape mirrors what a Strava fetch script would emit after deriving stats.
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}

const rnd = mulberry32(20260905);

function smoothNoise(seed){const r=mulberry32(seed);const a=[];for(let i=0;i<4;i++)a.push({amp:r(),ph:r()*Math.PI*2,f:1+Math.floor(r()*4)});return t=>a.reduce((s,h)=>s+h.amp*Math.sin(h.f*t+h.ph),0)/a.reduce((s,h)=>s+h.amp,0)}

// Build an organic GPS-looking trace, normalised into a 100x100 box.
function routePath(seed,kind){
  const r=mulberry32(seed),n1=smoothNoise(seed*7+1),n2=smoothNoise(seed*13+5);
  let pts=[];
  if(kind==="loop"){
    const N=90,base=1;
    for(let i=0;i<=N;i++){const t=i/N*Math.PI*2;const rad=base*(1+.42*n1(t*1.6)+.18*n2(t*3.1));pts.push([Math.cos(t)*rad,Math.sin(t)*rad*(.72+.3*r())])}
  }else{
    const N=52;const out=[];
    for(let i=0;i<=N;i++){const t=i/N;out.push([t*2.2,n1(t*4.5)*.55+n2(t*9)*.16])}
    const back=out.slice().reverse().map(([x,y],i)=>[x,y+.14+.1*n2(i/N*6)]);
    pts=out.concat(back);
  }
  const xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]);
  const mnx=Math.min(...xs),mxx=Math.max(...xs),mny=Math.min(...ys),mxy=Math.max(...ys);
  const w=mxx-mnx||1,h=mxy-mny||1,s=Math.min(84/w,84/h);
  const ox=(100-w*s)/2-mnx*s,oy=(100-h*s)/2-mny*s;
  const P=pts.map(([x,y])=>[+(x*s+ox).toFixed(2),+(y*s+oy).toFixed(2)]);
  let d=`M${P[0][0]} ${P[0][1]}`;
  for(let i=1;i<P.length-1;i++){const [x,y]=P[i],[nx,ny]=P[i+1];d+=`Q${x} ${y} ${((x+nx)/2).toFixed(2)} ${((y+ny)/2).toFixed(2)}`}
  d+=`L${P[P.length-1][0]} ${P[P.length-1][1]}`;
  if(kind==="loop")d+="Z";
  return d;
}

const NAMES_AM=["Morning shakeout","Sunrise easy miles","Dawn loop","Pre-work 10K","Early tempo","Cool morning trot"];
const NAMES_PM=["Evening easy","Sunset loop","After-work miles","Dusk tempo","Night intervals"];
const NAMES_LONG=["Weekend long run","Sunday long","Long slow distance","Riverfront long run","Half-marathon effort"];

function buildRuns(){
  const runs=[];
  const end=new Date("2026-09-04T06:00:00");
  for(let day=364;day>=0;day--){
    const d=new Date(end);d.setDate(d.getDate()-day);
    const dow=d.getDay();
    // ~3-4 runs a week, more likely Tue/Thu/Sat/Sun, seasonal dip in May-June heat
    const month=d.getMonth();
    const heat=(month>=3&&month<=5)?.45:1;
    const base=(dow===0||dow===6)?.72:(dow===2||dow===4)?.6:.28;
    if(rnd()>base*heat)continue;
    const long=(dow===0)&&rnd()>.35;
    const km=long?12+rnd()*9:(dow===2||dow===4)?6+rnd()*5:4.5+rnd()*4;
    const paceSec=long?330+rnd()*45:(rnd()>.75?282+rnd()*22:312+rnd()*38);
    const moving=Math.round(km*paceSec);
    const kind=long?(rnd()>.4?"outback":"loop"):(rnd()>.3?"loop":"outback");
    const hour=(dow===0||dow===6)?5+Math.floor(rnd()*2):(rnd()>.3?5:18);
    const pm=hour>=12;
    const pool=long?NAMES_LONG:pm?NAMES_PM:NAMES_AM;
    runs.push({
      id:1e10+runs.length*7717,
      date:d.toISOString().slice(0,10),
      ts:d.getTime(),
      hour,
      name:pool[Math.floor(rnd()*pool.length)],
      km:+km.toFixed(2),
      moving,
      elapsed:moving+Math.round(rnd()*180),
      paceSec:Math.round(paceSec),
      elev:Math.round(km*(2+rnd()*7)),
      hr:Math.round(long?142+rnd()*14:152+rnd()*20),
      cadence:Math.round(griddle(168,180)),
      kudos:Math.round(rnd()*24),
      long,
      path:routePath(1000+runs.length*31,kind),
      kind,
    });
  }
  return runs;
  function griddle(a,b){return a+rnd()*(b-a)}
}

const RUNS=buildRuns();

function fmtPace(s){const m=Math.floor(s/60),ss=Math.round(s%60);return `${m}:${String(ss).padStart(2,"0")}`}
function fmtDur(s){const h=Math.floor(s/3600),m=Math.floor(s%3600/60),ss=s%60;return h?`${h}:${String(m).padStart(2,"0")}:${String(ss).padStart(2,"0")}`:`${m}:${String(ss).padStart(2,"0")}`}
function fmtDate(iso,opt){return new Date(iso+"T06:00:00").toLocaleDateString("en-GB",opt||{day:"numeric",month:"short"})}

const STATS=(()=>{
  const km=RUNS.reduce((s,r)=>s+r.km,0);
  const sec=RUNS.reduce((s,r)=>s+r.moving,0);
  const elev=RUNS.reduce((s,r)=>s+r.elev,0);
  const longest=RUNS.reduce((a,r)=>r.km>a.km?r:a,RUNS[0]);
  const fastest=RUNS.filter(r=>r.km>=5).reduce((a,r)=>r.paceSec<a.paceSec?r:a,RUNS[0]);
  // longest streak of consecutive weeks with >=1 run
  const weeks=new Set(RUNS.map(r=>isoWeek(r.date)));
  return {km,sec,elev,longest,fastest,runs:RUNS.length,avgPace:Math.round(sec/km),weeks:weeks.size};
})();

function isoWeek(iso){const d=new Date(iso+"T06:00:00");const t=new Date(d.valueOf());const dn=(d.getDay()+6)%7;t.setDate(t.getDate()-dn+3);const f=new Date(t.getFullYear(),0,4);return t.getFullYear()+"-"+(1+Math.round(((t-f)/864e5-3+((f.getDay()+6)%7))/7))}

// Weekly buckets for the volume chart (last 40 weeks)
function weeklyVolume(n){
  const map=new Map();
  RUNS.forEach(r=>{const k=isoWeek(r.date);map.set(k,(map.get(k)||0)+r.km)});
  const keys=[...map.keys()];
  return keys.slice(-n).map(k=>({week:k,km:+map.get(k).toFixed(1)}));
}

// 53x7 calendar grid ending on the last run date
function calendarCells(){
  const byDate=new Map(RUNS.map(r=>[r.date,r]));
  const end=new Date("2026-09-05T06:00:00");
  end.setDate(end.getDate()+(6-((end.getDay()+6)%7)));
  const cells=[];
  for(let i=370;i>=0;i--){const d=new Date(end);d.setDate(d.getDate()-i);const iso=d.toISOString().slice(0,10);cells.push({iso,run:byDate.get(iso)||null,dow:(d.getDay()+6)%7})}
  return cells;
}
