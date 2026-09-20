export type Disposition = 'proposed'|'applied'|'dismissed'|'stale'|'clear'|'exception';
export type Clause = {id:string;topic:string;source:string;text:string;rev:number};
export type Finding = {id:string;clauseId:string;rule:string;severity:'High'|'Medium';rationale:string;preferred:string;fallback:string;draft:string;anchor:number;status:Disposition;reason:string};
export type Revision = {id:string;clauseId:string;findingId:string;before:string;after:string;status:'pending'|'accepted'|'rejected'};
export type Comment = {id:string;clauseId:string;version:number;text:string;resolved?:boolean;replyTo?:string};
export type Snapshot = {clauses:Clause[];findings:Finding[];revisions:Revision[]};
export type State = Snapshot & {schema:1;version:number;comments:Comment[];activity:{id:string;at:string;label:string}[];history:Snapshot[]};
const rows = [
 ['liability','Liability','Supplier’s aggregate liability under this Order shall not exceed fees paid during the three months preceding the claim.','Supplier’s aggregate liability under this Order shall not exceed fees paid or payable during the twelve months preceding the claim.','Supplier’s aggregate liability under this Order shall not exceed fees paid or payable during the six months preceding the claim.','High','The proposed three-month cap is below the twelve-month playbook position. Confirm its relationship to Amendment No. 1 before agreeing to an order-specific override.'],
 ['indemnity','Indemnification','Customer shall defend and indemnify Supplier against all claims arising from Customer’s use of the Services.','Customer shall indemnify Supplier only against third-party claims arising from Customer’s material breach of the acceptable use restrictions, subject to prompt notice and control of the defense.','Customer shall indemnify Supplier only against third-party claims arising from Customer’s willful misconduct.','High','The obligation covers all claims without a third-party limitation or defense procedure. Narrow the trigger and include procedural protection.'],
 ['payment','Payment','Customer shall pay each invoice within fifteen days of receipt.','Customer shall pay undisputed invoices within thirty days of receipt.','Customer shall pay undisputed invoices within twenty days of receipt.','Medium','The customer playbook requires thirty days and protects disputed amounts. The payment amendment is limited to OF-2025; do not assume it governs this renewal.'],
 ['termination','Termination','Customer may not terminate this Order for any reason during the subscription term.','Either party may terminate this Order for a material breach that remains uncured thirty days after written notice.','Customer may terminate this Order for Supplier’s material breach that remains uncured thirty days after written notice.','High','An absolute restriction could prevent termination for supplier breach. Include a notice-and-cure right.'],
 ['confidentiality','Confidentiality','Supplier’s confidentiality obligations expire one year after termination of this Order.','Confidentiality obligations survive for three years after termination, and for trade secrets for as long as they qualify as trade secrets.','Confidentiality obligations survive for two years after termination, and for trade secrets for as long as they qualify as trade secrets.','Medium','A one-year survival period falls below the playbook position and gives no continuing protection to trade secrets.']
] as const;
export const documents = [
 {id:'DOC-MSA',title:'Master services agreement',date:'12 Jan 2025',status:'Executed',excerpt:'The parties agree that each Order is governed by this Agreement. Amendments must identify the provisions they modify.'},
 {id:'DOC-A1',title:'Amendment No. 1',date:'01 Jun 2025',status:'Executed',excerpt:'Section 12.1 of the Agreement is replaced: aggregate liability is capped at fees paid or payable in the preceding twelve months. Other provisions remain unchanged.'},
 {id:'DOC-A2',title:'Amendment No. 2',date:'01 Mar 2026',status:'Executed',excerpt:'Solely for Order OF-2025, payment is due forty-five days after receipt of an undisputed invoice. This amendment does not modify any other Order.'},
 {id:'DOC-REN',title:'Renewal order form',date:'07 Sep 2026',status:'Proposed',excerpt:'Order OF-2026 renews the Harbor Cloud subscription for Northstar Analytics. The clauses below are proposed for customer review.'}
];
export function initial():State {return {schema:1,version:1,clauses:rows.map(([id,topic,source])=>({id,topic,source,text:source,rev:1})),findings:rows.map(([id,, ,preferred,fallback,severity,rationale],i)=>({id:'ISS-'+(i+1),clauseId:id,rule:'PB-1.2 / R-'+(i+1),severity,rationale,preferred,fallback,draft:preferred,anchor:1,status:'proposed',reason:''})),revisions:[],comments:[],activity:[],history:[]};}
const clone=<T,>(s:T):T=>structuredClone(s);
const uid=()=>globalThis.crypto.randomUUID();
function event(s:State,label:string){s.activity.unshift({id:uid(),at:new Date().toISOString(),label});return s;}
function snapshot(s:State){s.history.push(clone({clauses:s.clauses,findings:s.findings,revisions:s.revisions}));s.history=s.history.slice(-20);}
export type Command = {type:'draft';id:string;text:string}|{type:'apply';id:string}|{type:'dismiss';id:string;reason:string}|{type:'resolve';id:string;decision:'accepted'|'rejected'}|{type:'comment';clauseId:string;text:string;replyTo?:string}|{type:'undo'}|{type:'review';omit?:string}|{type:'exception';id:string;reason:string;owner:string}|{type:'incoming';clauseId:string}|{type:'resolve-comment';id:string}|{type:'download'};
export function transition(state:State,cmd:Command):State {
 const s=clone(state);
 if(cmd.type==='exception'){const f=s.findings.find(f=>f.id===cmd.id);if(!f||f.status!=='proposed'||!cmd.reason.trim()||!cmd.owner.trim())return state;f.status='exception';f.reason=`Approved by ${cmd.owner.trim()} at working v${s.version}: ${cmd.reason.trim()}`;return event(s,'Exception recorded for '+f.id+': '+f.reason);}
 if(cmd.type==='resolve-comment'){const c=s.comments.find(c=>c.id===cmd.id);if(!c)return state;c.resolved=!c.resolved;return event(s,'Comment '+(c.resolved?'resolved':'reopened'));}
 if(cmd.type==='incoming'){const c=s.clauses.find(c=>c.id===cmd.clauseId),f=s.findings.find(f=>f.clauseId===cmd.clauseId);if(!c||!f||s.revisions.some(r=>r.clauseId===c.id&&r.status==='pending'))return state;snapshot(s);const after=c.text+' This provision is subject to mutual written agreement.';s.revisions.push({id:uid(),clauseId:c.id,findingId:f.id,before:c.text,after,status:'pending'});c.text=after;c.rev++;s.version++;f.status='stale';return event(s,'Imported simulated incoming revision: '+c.topic);}
 if(cmd.type==='draft'){const f=s.findings.find(f=>f.id===cmd.id);if(!f||f.status!=='proposed')return state;f.draft=cmd.text;return s;}
 if(cmd.type==='apply'){
  const f=s.findings.find(f=>f.id===cmd.id);if(!f||f.status!=='proposed'||!f.draft.trim())return state;
  const c=s.clauses.find(c=>c.id===f.clauseId);if(!c)return state;
  if(c.rev!==f.anchor){f.status='stale';return event(s,'Apply blocked: stale source range');}
  if(s.revisions.some(r=>r.clauseId===c.id&&r.status==='pending'))return state;
  snapshot(s);s.revisions.push({id:uid(),clauseId:c.id,findingId:f.id,before:c.text,after:f.draft.trim(),status:'pending'});c.text=f.draft.trim();c.rev++;s.version++;f.status='applied';
  return event(s,'Applied simulated tracked change: '+c.topic);
 }
 if(cmd.type==='dismiss'){const f=s.findings.find(f=>f.id===cmd.id);if(!f||f.status!=='proposed'||!cmd.reason.trim())return state;f.status='dismissed';f.reason=cmd.reason.trim();return event(s,'Dismissed '+f.id+': '+f.reason);}
 if(cmd.type==='resolve'){
  const r=s.revisions.find(r=>r.id===cmd.id);if(!r||r.status!=='pending')return state;
  snapshot(s);const c=s.clauses.find(c=>c.id===r.clauseId)!;if(cmd.decision==='rejected')c.text=r.before;c.rev++;r.status=cmd.decision;s.version++;
  s.findings.filter(f=>f.clauseId===c.id).forEach(f=>{f.status='stale'});return event(s,'Revision '+cmd.decision+': '+c.topic);
 }
 if(cmd.type==='comment'){if(!cmd.text.trim()||!s.clauses.some(c=>c.id===cmd.clauseId)||(cmd.replyTo&&!s.comments.some(c=>c.id===cmd.replyTo&&c.clauseId===cmd.clauseId)))return state;s.comments.push({id:uid(),clauseId:cmd.clauseId,version:s.version,text:cmd.text.trim(),...(cmd.replyTo?{replyTo:cmd.replyTo}:{})});return event(s,'Comment added to '+cmd.clauseId);}
 if(cmd.type==='undo'){const prev=s.history.pop();if(!prev)return state;const max=s.version;s.clauses=prev.clauses;s.findings=prev.findings;s.revisions=prev.revisions;s.version=max+1;return event(s,'Undid last document edit');}
 if(cmd.type==='review'){
  for(const f of s.findings){if(cmd.omit===f.clauseId)continue;const c=s.clauses.find(c=>c.id===f.clauseId)!;
   if(s.revisions.some(r=>r.clauseId===c.id&&r.status==='pending'))continue;
   f.anchor=c.rev;if(c.text===c.source){if(f.status!=='dismissed'&&f.status!=='exception'){f.status='proposed';f.draft=f.preferred;}}
   else if(c.text===f.preferred||c.text===f.fallback){f.status='clear';}else{f.status='stale';}
  }return event(s,'Completed simulated review against PB-1.2');
 }
 return event(s,'Downloaded JSON review summary (not DOCX)');
}
export async function reviewAdapter(fail=false):Promise<void>{await new Promise(r=>setTimeout(r,650));if(fail)throw new Error('Simulated review failure. Your document is unchanged; retry when ready.');}
// Browser cache is untrusted. Validate known schema and relations before using it.
export function restore(raw:string|null):State|null{
 if(!raw)return null;
 try{const x=JSON.parse(raw) as State;const seed=initial();const text=(v:unknown)=>typeof v==='string';
 if(x.schema!==1||!Number.isSafeInteger(x.version)||x.version<1||!Array.isArray(x.clauses)||x.clauses.length!==5||!Array.isArray(x.findings)||x.findings.length!==5||!Array.isArray(x.revisions)||!Array.isArray(x.comments)||!Array.isArray(x.activity))return null;
 if(!seed.clauses.every(sc=>x.clauses.filter(c=>c.id===sc.id).length===1)||!seed.findings.every(sf=>x.findings.filter(f=>f.id===sf.id).length===1))return null;
 if(!x.clauses.every(c=>{const sc=seed.clauses.find(v=>v.id===c.id)!;return c.source===sc.source&&c.topic===sc.topic&&text(c.text)&&Number.isSafeInteger(c.rev)&&c.rev>=1}))return null;
 if(!x.findings.every(f=>{const sf=seed.findings.find(v=>v.id===f.id)!;return f.clauseId===sf.clauseId&&f.rule===sf.rule&&f.preferred===sf.preferred&&f.fallback===sf.fallback&&f.rationale===sf.rationale&&f.severity===sf.severity&&text(f.draft)&&text(f.reason)&&Number.isSafeInteger(f.anchor)&&['proposed','applied','dismissed','stale','clear','exception'].includes(f.status)}))return null;
 if(!x.revisions.every(r=>text(r.id)&&x.clauses.some(c=>c.id===r.clauseId)&&x.findings.some(f=>f.id===r.findingId&&f.clauseId===r.clauseId)&&text(r.before)&&text(r.after)&&['pending','accepted','rejected'].includes(r.status)))return null;
 if(!x.comments.every(c=>text(c.id)&&text(c.text)&&(c.resolved===undefined||typeof c.resolved==='boolean')&&(c.replyTo===undefined||text(c.replyTo))&&Number.isSafeInteger(c.version)&&x.clauses.some(cl=>cl.id===c.clauseId)))return null;
 if(!x.activity.every(a=>text(a.id)&&text(a.at)&&text(a.label)))return null;
 return {...x,history:[]};}catch{return null;}
}
