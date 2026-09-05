function fmtPace(s){const m=Math.floor(s/60),ss=Math.round(s%60);return `${m}:${String(ss).padStart(2,"0")}`}
function fmtDur(s){const h=Math.floor(s/3600),m=Math.floor(s%3600/60),ss=s%60;return h?`${h}:${String(m).padStart(2,"0")}:${String(ss).padStart(2,"0")}`:`${m}:${String(ss).padStart(2,"0")}`}
function fmtDate(iso,opt){return new Date(iso+"T06:00:00").toLocaleDateString("en-GB",opt||{day:"numeric",month:"short"})}

const STATS=(()=>{
  const km=RUNS.reduce((s,r)=>s+r.km,0);
  const sec=RUNS.reduce((s,r)=>s+r.moving,0);
  const elev=RUNS.reduce((s,r)=>s+r.elev,0);
  const longest=RUNS.reduce((a,r)=>r.km>a.km?r:a,RUNS[0]);
  const fastest=RUNS.filter(r=>r.km>=5).reduce((a,r)=>r.paceSec<a.paceSec?r:a,RUNS[0]);
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

// 53x7 calendar grid ending on the most recent Sunday
function calendarCells(){
  const byDate=new Map(RUNS.map(r=>[r.date,r]));
  const end=new Date();
  end.setDate(end.getDate()+(6-((end.getDay()+6)%7)));
  const cells=[];
  for(let i=370;i>=0;i--){const d=new Date(end);d.setDate(d.getDate()-i);const iso=d.toISOString().slice(0,10);cells.push({iso,run:byDate.get(iso)||null,dow:(d.getDay()+6)%7})}
  return cells;
}
