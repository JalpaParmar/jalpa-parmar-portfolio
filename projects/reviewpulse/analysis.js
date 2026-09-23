export const themes=['Payments','Login / Authentication','Performance','Booking','Notifications','User Experience','Search','Reliability'];
export const months=['2026-06','2026-07','2026-08','2026-09'];
export const versions=['5.0','5.1','5.2','5.3'];
export function filterReviews(rows,f={}){return rows.filter(r=>(!f.month||r.date.startsWith(f.month))&&(!f.platform||r.platform===f.platform)&&(!f.version||r.app_version===f.version)&&(!f.rating||r.star_rating===Number(f.rating))&&(!f.theme||r.primary_theme===f.theme)&&(!f.sentiment||r.sentiment===f.sentiment)&&(!f.search||`${r.review_id} ${r.review_text}`.toLowerCase().includes(f.search.trim().toLowerCase())));}
export function summarize(rows){return {total:rows.length,average:rows.length?rows.reduce((s,r)=>s+r.star_rating,0)/rows.length:null,negative:rows.filter(r=>r.sentiment==='Negative').length,features:rows.filter(r=>r.review_type==='Feature Request').length,positive:rows.filter(r=>r.sentiment==='Positive').length};}
export function groups(rows,field,values){return values.map(label=>({label,...summarize(rows.filter(r=>String(r[field])===String(label)))}));}
export function monthly(rows){return months.map(label=>({label,...summarize(rows.filter(r=>r.date.startsWith(label)))}));}
export const opportunities=[
 {name:'Checkout reliability',theme:'Payments',impact:5,relevance:5,confidence:0.5,effort:3,action:'Investigate',note:'Core transaction journey; validate payment failures and retry behavior before proposing a fix.'},
 {name:'Authentication friction',theme:'Login / Authentication',impact:5,relevance:5,confidence:0.5,effort:3,action:'Root-cause analysis',note:'Access affects both platforms; inspect recovery and session paths.'},
 {name:'Notification controls',theme:'Notifications',impact:3,relevance:3,confidence:0.5,effort:2,action:'Discovery',note:'Separate preference requests from late or duplicate reminders.'},
 {name:'Search clarity',theme:'Search',impact:3,relevance:4,confidence:0.5,effort:2,action:'User research',note:'Observe filter use and empty-result recovery before defining a solution.'},
 {name:'App responsiveness',theme:'Performance',impact:4,relevance:4,confidence:0.5,effort:3,action:'Measure and investigate',note:'Check devices, network conditions and task-level timing.'},
 {name:'Booking changes',theme:'Booking',impact:4,relevance:4,confidence:0.5,effort:3,action:'Validate journey',note:'Confirm where rescheduling or confirmation loses context.'},
 {name:'Accessible navigation',theme:'User Experience',impact:4,relevance:4,confidence:0.5,effort:2,action:'Usability review',note:'Low volume would not remove the need to investigate barriers to access.'}
];
// Frequency is the share of all reviews that are non-positive and in this theme.
// Other factors are explicit synthetic planning assumptions, not measured outcomes.
export function prioritize(rows){return opportunities.map(o=>{const frequency=rows.filter(r=>r.primary_theme===o.theme&&r.sentiment!=='Positive').length;const share=rows.length?frequency/rows.length:0;return {...o,frequency,share,score:share*100*o.impact*o.relevance*o.confidence/o.effort};}).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name));}
export function insights(rows){
 const pay=rows.filter(r=>r.primary_theme==='Payments'),p52=pay.filter(r=>r.app_version==='5.2'),auth=rows.filter(r=>r.primary_theme==='Login / Authentication'),notify=rows.filter(r=>r.primary_theme==='Notifications'),search=rows.filter(r=>r.primary_theme==='Search'),perf=rows.filter(r=>r.primary_theme==='Performance');
 const neg=r=>r.filter(x=>x.sentiment==='Negative').length;
 return [
 {theme:'Payments',title:'Check the checkout signal',evidence:`${p52.length?`${neg(p52)} of ${p52.length} payment reviews tagged 5.2 are negative in this selection.`:'No payment reviews tagged 5.2 in this selection.'} ${pay.length>p52.length?`Other versions: ${neg(pay)-neg(p52)} negative out of ${pay.length-p52.length}.`:'No other versions selected for comparison.'}`,why:'Payment problems can block a core task. Review counts do not measure the failure rate among all customers.',next:'I would compare release changes, support incidents and checkout telemetry before concluding that the version caused a problem.'},
 {theme:'Login / Authentication',title:'Look across both platforms',evidence:`Negative login reviews: ${neg(auth.filter(r=>r.platform==='iOS'))} iOS and ${neg(auth.filter(r=>r.platform==='Android'))} Android in this selection.`,why:'Account access is an entry point to the product. A platform label alone does not identify the root cause.',next:'I would trace recovery and session flows, then compare reproduction steps with authentication telemetry.'},
 {theme:'Notifications',title:'Separate preference from failure',evidence:`${notify.filter(r=>r.review_type==='Feature Request').length} notification feature requests and ${neg(notify)} negative notification reviews in this selection.`,why:'Requests for control and reports of missed reminders describe different needs.',next:'I would investigate delivery failures separately and keep preference controls in discovery until the need is clearer.'},
 {theme:'Search',title:'Make finding things easier',evidence:`${search.filter(r=>r.review_type==='Usability Feedback').length} usability comments and ${neg(search)} negative search reviews in this selection.`,why:'Search friction may prevent discovery, but reviews cannot show where a whole population drops out.',next:'I would observe filter use and empty-result recovery, alongside search-to-detail and booking funnel data.'},
 {theme:'Performance',title:'Validate the conditions behind slowness',evidence:`${neg(perf)} of ${perf.length} performance reviews are negative in this selection.`,why:'Devices and network conditions could change the experience. A general rating is not a timing measurement.',next:'I would segment task timings by device and connection before choosing a performance solution.'}
 ].filter(x=>rows.some(r=>r.primary_theme===x.theme));
}
