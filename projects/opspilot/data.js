// Every request, person, timestamp and metric in this file is fictional.
export const DEMO_NOW = '2026-09-23T17:00:00Z';
export const disclosure = 'Portfolio implementation created independently using synthetic/sample data and original code. It demonstrates approaches informed by professional experience without reproducing proprietary employer systems, data or confidential workflows.';
export const engineers = [
  {id:'aarav', name:'Aarav Shah', skills:['iOS'], queues:['Mobile'], components:['Session service','Navigation shell'], baseline:20},
  {id:'maya', name:'Maya Patel', skills:['Android'], queues:['Mobile'], components:['Sync worker','Navigation shell'], baseline:25},
  {id:'noah', name:'Noah Williams', skills:['API'], queues:['Payments & API'], components:['Checkout service','API gateway'], baseline:45},
  {id:'priya', name:'Priya Rao', skills:['Web'], queues:['Web & Reporting'], components:['Report pipeline','Booking service'], baseline:20},
  {id:'ethan', name:'Ethan Lee', skills:['API','Web'], queues:['Platform'], components:['Query service','Message scheduler','Sync worker'], baseline:30}
];
export const rules = {
  Authentication:{queue:'Platform',component:'Session service',tests:['Compare an existing session with a fresh sign-in.','Validate reset-token expiry and single use.','Check session invalidation after a password change.']},
  Payments:{queue:'Payments & API',component:'Checkout service',tests:['Compare an upgrade with a fresh installation.','Validate multiple synthetic payment methods.','Check retry behavior and duplicate-charge protection.','Compare the previous sample release.']},
  Booking:{queue:'Web & Reporting',component:'Booking service',tests:['Reproduce across two time zones.','Check concurrent reservation changes.','Verify confirmation and cancellation events.']},
  Notifications:{queue:'Platform',component:'Message scheduler',tests:['Compare scheduled time with delivery time.','Test background and foreground delivery.','Check timezone changes and duplicate reminders.']},
  Performance:{queue:'Platform',component:'Query service',tests:['Compare cold and warm loads.','Measure with a large synthetic dataset.','Repeat on a constrained network.']},
  Reporting:{queue:'Web & Reporting',component:'Report pipeline',tests:['Compare the UI totals with an exported sample.','Check empty data and date boundaries.','Verify timezone and filter consistency.']},
  'Mobile UI':{queue:'Mobile',component:'Navigation shell',tests:['Repeat navigation twenty times.','Check large text and screen rotation.','Restore the app after backgrounding.']},
  'API Integration':{queue:'Payments & API',component:'API gateway',tests:['Repeat with delayed responses.','Validate retry backoff and idempotency.','Check timeout and error response handling.']},
  'Data Sync':{queue:'Platform',component:'Sync worker',tests:['Disconnect, edit a sample record and reconnect.','Check conflict handling and duplicate records.','Verify stale data is replaced after a refresh.']}
};
export const priorities=['High','Medium','Low'];
export const queues=['Mobile','Payments & API','Web & Reporting','Platform'];
export const workStatuses=['Ready','In Progress','Blocked','Validation','Resolved'];
export const supportStatuses=['New','Needs Review','Awaiting Information','Assigned','In Progress','Waiting','In Validation','Ready for customer confirmation'];
// id, title, platform, category, impact, age in hours, starting state, details.
const rows=[
 ['101','Checkout fails after application update','Android','Payments','Checkout unavailable for a sample customer group',3,'New','After upgrading sample version 2.4, the checkout spinner ends with an error. Browsing and basket updates still work. No payment confirmation appears.'],
 ['102','Password reset succeeds but login fails','iOS','Authentication','Returning sample users cannot sign in',5,'Needs Review','The reset screen reports success. Signing in with the new password returns to the login screen without a useful message.'],
 ['103','Appointment reminder arrives late','API','Notifications','Reminders arrive after the sample appointment',8,'New','A reminder scheduled thirty minutes before an appointment arrives ten minutes after it. The appointment time is correct.'],
 ['104','Dashboard takes too long to load','Web','Performance','Large sample accounts experience slow loading',27,'In Progress','The overview remains blank for several seconds when the reporting range includes many sample records. Smaller ranges load normally.'],
 ['105','Data does not refresh after reconnect','Android','Data Sync','Offline edits are not visible after reconnect',29,'Waiting','An offline edit remains in the local view after reconnection. A second sample device shows an older value.'],
 ['106','API request intermittently times out','API','API Integration','Some sample requests must be retried',15,'Needs Review','The sample availability endpoint intermittently exceeds its timeout. Retrying usually succeeds, with no clear error classification.'],
 ['107','Screen freezes after repeated navigation','iOS','Mobile UI','Sample navigation session becomes unusable',12,'New','After repeatedly opening and closing the detail screen, taps stop responding until the sample app is restarted.'],
 ['108','Export total differs from report total','Web','Reporting','Synthetic totals differ between two views',31,'In Validation','A weekly export includes a different record count from the on-screen summary when a date filter is applied.'],
 ['109','Booking appears on the wrong day','Web','Booking','Sample reservations display an unexpected date',34,'Assigned','A reservation created near midnight appears on the following day in another timezone. The confirmation retains the original date.'],
 ['110','Payment retry creates duplicate pending entries','API','Payments','Two pending entries appear for one sample checkout',7,'Needs Review','Retrying a timed-out sample payment creates two pending entries. Neither is confirmed; the user cannot tell which attempt to continue.'],
 ['111','Notification preference is not retained','Android','Notifications','Sample preferences revert after restart',36,'Ready for customer confirmation','Turning off a reminder appears to save, but the toggle returns to its prior value after reopening the sample app.'],
 ['112','Report labels overlap at large text sizes','Web','Reporting','Sample chart labels become difficult to read',20,'New','At a large browser text size, the category labels overlap the value column in the compact report view.'],
 ['113','Sync repeats an already uploaded record','API','Data Sync','Duplicate sample records require review',40,'Awaiting Information','An intermittent reconnect produces duplicate sample records. The original report does not identify the reconnect sequence.'],
 ['114','Login screen loses keyboard focus','Android','Mobile UI','Keyboard users must repeat navigation',46,'Ready for customer confirmation','After validation fails, keyboard focus moves away from the password field without an announcement.'],
 ['115','Booking cancellation confirmation is missing','iOS','Booking','Sample user cannot confirm cancellation outcome',48,'Assigned','The booking disappears from the active list, but the cancellation receipt never appears in the activity view.'],
 ['116','Password change leaves an old session active','Web','Authentication','Sample session may remain active after credential change',10,'New','After a password change, a previously opened sample browser session still displays account data. Expected session behavior needs review.']
];
export const tickets=rows.map(([id,title,platform,category,impact,age,status,description])=>({id:'SUP-'+id,title,platform,category,impact,created:new Date(Date.parse(DEMO_NOW)-age*3600000).toISOString(),status,description}));
