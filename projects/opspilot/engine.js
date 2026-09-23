import {tickets,engineers,rules,priorities,queues,workStatuses,DEMO_NOW} from './data.js';
export const syncMap={Ready:'Assigned','In Progress':'In Progress',Blocked:'Waiting',Validation:'In Validation',Resolved:'Ready for customer confirmation'};
export function analyze(t){
 const rule=rules[t.category];
 const high=['Payments','Authentication'].includes(t.category);
 return {...rule,priority:high?'High':t.category==='Reporting'?'Low':'Medium',
 summary:`${t.platform}: ${t.title}. Reported impact: ${t.impact.toLowerCase()}. Reproduce and validate the affected component before deciding on a fix.`,
 confidence:high?87:t.category==='Data Sync'?68:79,
 duplicate:t.id==='SUP-110'?'Related category: SUP-101. Compare symptoms; this is not a confirmed duplicate.':'No related-request cue configured for this fixture. This does not establish uniqueness.',
 next:t.status==='Awaiting Information'?'Request a redacted reproduction sequence.':'Reproduce with synthetic data, then review priority and ownership.'};
}
export function workload(state,e){const open=state.work.filter(w=>w.owner===e.id&&w.status!=='Resolved').length;return {open,load:e.baseline+open*15};}
export function recommend(state,t,queue){
 return engineers.map(e=>{const w=workload(state,e),skill=e.skills.includes(t.platform),component=e.components.includes(analyze(t).component),team=e.queues.includes(queue);return {...e,...w,score:(team?50:0)+(skill?30:0)+(component?20:0)-w.load/5,reasons:[team?`${queue} queue expertise`:'Cross-queue coverage',skill?`${t.platform} expertise`:'Adjacent platform skills',component?'Relevant component expertise':'Component handoff needed',`${w.load}% modeled workload${w.load>=85?' — capacity review needed':''}`]};}).sort((a,b)=>b.score-a.score||a.id.localeCompare(b.id));
}
export function initialState(){
 const state={tickets:structuredClone(tickets),work:[],reviews:{},audit:[]};
 const seeds=[['104','In Progress','ethan'],['105','Blocked','maya'],['108','Validation','priya'],['109','Ready','priya'],['111','Resolved','ethan'],['114','Resolved','maya'],['115','Ready','aarav']];
 for(const [id,status,owner] of seeds){const t=state.tickets.find(t=>t.id==='SUP-'+id),a=analyze(t);state.work.push({id:'ENG-'+id,source:t.id,summary:a.summary,priority:a.priority,queue:a.queue,component:a.component,owner,status,created:t.created,resolvedAt:status==='Resolved'?(id==='114'?'2026-09-22T14:00:00Z':DEMO_NOW):null});}
 state.audit=[{time:DEMO_NOW,message:'Synthetic scenario loaded. Existing work represents fictional human-approved handoffs.'}];return state;
}
export function record(state,message){state.audit.unshift({time:DEMO_NOW,message});}
export function review(state,id,draft,decision){
 const t=state.tickets.find(t=>t.id===id); if(!t)throw Error('Support request not found.');
 if(state.work.some(w=>w.source===id))throw Error('This request already has approved engineering work.');
 if(!['approve','return'].includes(decision))throw Error('Choose a valid review decision.');
 const summary=draft.summary.trim(); if(!summary)throw Error('Add a summary before saving the review.');
 if(!priorities.includes(draft.priority)||!queues.includes(draft.queue)||!engineers.some(e=>e.id===draft.owner))throw Error('Select a valid priority, queue and engineer.');
 if(decision==='return'&&!draft.note.trim())throw Error('Explain what information is needed.');
 const a=analyze(t),routingChanged=draft.queue!==a.queue||draft.owner!==recommend(state,t,a.queue)[0].id;
 state.reviews[id]={priorityChanged:draft.priority!==a.priority,routingChanged,summaryEdited:summary!==a.summary,accepted:draft.priority===a.priority&&!routingChanged&&summary===a.summary&&decision==='approve',decision,note:draft.note.trim()};
 t.priority=draft.priority;t.queue=draft.queue;
 if(decision==='approve'){state.work.push({id:'ENG-'+id.slice(4),source:id,summary,priority:draft.priority,queue:draft.queue,owner:draft.owner,component:a.component,status:'Ready',created:DEMO_NOW,resolvedAt:null});t.status='Assigned';}
 else t.status='Awaiting Information';
 record(state,`${id}: human ${decision==='approve'?'approved '+draft.priority+' priority and assignment to '+engineers.find(e=>e.id===draft.owner).name:'returned for more information'}.`);
 return state;
}
export function changeStatus(state,id,status){const w=state.work.find(w=>w.id===id);if(!w||!workStatuses.includes(status))throw Error('Invalid engineering status.');if(w.status===status)return;w.status=status;w.resolvedAt=status==='Resolved'?DEMO_NOW:null;const t=state.tickets.find(t=>t.id===w.source);t.status=syncMap[status];record(state,`${w.id}: human changed status to ${status}. Status Sync Simulation → ${t.id}: ${t.status}.`);}
export function metrics(state){const open=state.work.filter(w=>w.status!=='Resolved'),rs=Object.values(state.reviews);return {new:state.tickets.filter(t=>t.status==='New').length,review:state.tickets.filter(t=>['New','Needs Review'].includes(t.status)).length,high:state.tickets.filter(t=>(t.priority||analyze(t).priority)==='High'&&t.status!=='Ready for customer confirmation').length,assigned:state.tickets.filter(t=>t.status==='Assigned').length,progress:open.filter(w=>w.status==='In Progress').length,waiting:state.tickets.filter(t=>['Waiting','Awaiting Information'].includes(t.status)).length,resolved:state.work.filter(w=>w.resolvedAt?.startsWith(DEMO_NOW.slice(0,10))).length,blocked:open.filter(w=>w.status==='Blocked').length,reviewed:rs.length,accepted:rs.filter(r=>r.accepted).length,priorityChanged:rs.filter(r=>r.priorityChanged).length,routingChanged:rs.filter(r=>r.routingChanged).length,summaryEdited:rs.filter(r=>r.summaryEdited).length,returned:rs.filter(r=>r.decision==='return').length};}
export function filterTickets(state,f){return state.tickets.filter(t=>(!f.search||`${t.id} ${t.title} ${t.description}`.toLowerCase().includes(f.search.toLowerCase()))&&(!f.platform||t.platform===f.platform)&&(!f.priority||(t.priority||analyze(t).priority)===f.priority)&&(!f.status||t.status===f.status)&&(!f.category||t.category===f.category));}
