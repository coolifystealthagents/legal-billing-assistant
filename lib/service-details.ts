export type ServiceDetail = {
  audience: string;
  problem: string;
  inputs: string[];
  work: string[];
  outputs: string[];
  ownerDecisions: string[];
  controls: string[];
  scenarios: string[];
  faqs: { q: string; a: string }[];
  variant: 'docket' | 'prebill' | 'portal' | 'matter' | 'followup' | 'reporting';
};

export const serviceDetails: Record<string, ServiceDetail> = {
  'time-entry-review-support': {
    audience: 'Law firms with recurring time-entry queues, documented narrative standards, and a billing owner who reviews exceptions before prebill.',
    problem: 'Incomplete fields, late entries, unclear narratives, and scattered correction requests make review slower. Support can organize that preparation without deciding whether legal work is billable.',
    inputs: ['Approved time-entry report', 'Firm and client narrative rules', 'Matter and timekeeper reference data', 'Named reviewer and exception path'],
    work: ['Check required fields and approved formatting rules', 'Flag missing or unclear source information', 'Group exceptions by matter, timekeeper, or review owner', 'Record corrections requested and returned'],
    outputs: ['Review-ready time-entry queue', 'Exception register with source references', 'Open-question list for the billing owner', 'Completion and handoff status'],
    ownerDecisions: ['Narrative substance and legal characterization', 'Billability and professional judgment', 'Rate, adjustment, and write-down approval', 'Client communication and final invoice approval'],
    controls: ['Read-only or minimum necessary access', 'Written checks with no inferred legal meaning', 'Retained source reference for each exception', 'Sample review by the accountable billing owner'],
    scenarios: ['A month-end queue with missing narratives', 'Repeated timekeeper formatting corrections', 'Matter-specific rules that need a visible checklist'],
    faqs: [{ q: 'Can an assistant rewrite legal narratives?', a: 'Only within an approved administrative rule and review process. Legal meaning, privilege, billability, and final narrative approval stay with qualified firm personnel.' }, { q: 'What is a safe first assignment?', a: 'Begin with required-field checks and an exception queue for one practice group or billing cycle.' }], variant: 'docket',
  },
  'prebill-preparation': {
    audience: 'Billing teams that prepare recurring prebills for attorneys or authorized managers and need clean packets, visible changes, and controlled handoffs.',
    problem: 'Reviewers lose time when source records, requested edits, and unresolved exceptions arrive through separate channels without version control.',
    inputs: ['Current prebill source export', 'Matter billing instructions', 'Approved rate and timekeeper tables', 'Reviewer assignments and due dates'],
    work: ['Assemble the approved review packet', 'Check matter identifiers and required fields', 'Log requested edits without overwriting history', 'Route unresolved issues to the assigned owner'],
    outputs: ['Versioned prebill packet', 'Edit and exception log', 'Reviewer-ready matter grouping', 'Open-item summary with ownership'],
    ownerDecisions: ['Narrative and fee judgment', 'Rate or adjustment approval', 'Write-down and write-off decisions', 'Final bill and client approval'],
    controls: ['Version labels and retained change trail', 'No unapproved rate or amount changes', 'Matter-level source reconciliation', 'Final owner acceptance before submission'],
    scenarios: ['High-volume monthly prebill preparation', 'Several reviewers working from inconsistent versions', 'Matter packets with recurring guideline exceptions'],
    faqs: [{ q: 'Does the assistant approve prebills?', a: 'No. The assistant prepares and records. Authorized firm personnel review and approve every financial or professional decision.' }, { q: 'How should edits be tracked?', a: 'Use a retained version and edit log that identifies the request, source, status, and approving owner.' }], variant: 'prebill',
  },
  'e-billing-support': {
    audience: 'Firms that submit invoices through client portals and need consistent file preparation, status evidence, and rejection routing.',
    problem: 'Portal requirements, submission states, and rejection messages can become disconnected from the billing record, making ownership and next action difficult to reconstruct.',
    inputs: ['Approved invoice and submission file', 'Client portal instructions', 'Authorized credentials and access path', 'Rejection and escalation rules'],
    work: ['Prepare approved upload files and required fields', 'Record portal submission evidence and timestamps', 'Capture rejection language without reinterpretation', 'Route guideline or amount questions to the right owner'],
    outputs: ['Submission evidence record', 'Portal status queue', 'Rejection log with exact source message', 'Assigned next action and due date'],
    ownerDecisions: ['Invoice approval and amount changes', 'Guideline interpretation and waiver requests', 'Client dispute response', 'Credential, privacy, and security policy'],
    controls: ['Minimum access and approved credential handling', 'Exact capture of portal responses', 'No resubmission after material change without approval', 'Periodic status reconciliation to the billing system'],
    scenarios: ['Invoices awaiting portal submission', 'Rejected files that need structured triage', 'Portal status that does not match internal records'],
    faqs: [{ q: 'Can support staff resolve a rejection?', a: 'They can correct a documented administrative issue under an approved rule. Any judgment, amount change, or client exception goes to the authorized owner.' }, { q: 'What evidence should be retained?', a: 'Keep the approved source file, portal response, timestamp, status, and next owner.' }], variant: 'portal',
  },
  'matter-record-upkeep': {
    audience: 'Firms that need approved billing fields, client guidelines, and matter-specific requirements kept current and easy to inspect.',
    problem: 'Conflicting instructions and stale matter data create preventable corrections when the team cannot see which approved source controls the billing workflow.',
    inputs: ['Authorized matter record', 'Current client billing guidelines', 'Approved rate and timekeeper information', 'Documented change request'],
    work: ['Maintain approved administrative fields', 'Index current billing instructions', 'Record the source and effective date of changes', 'Flag conflicts rather than choosing between instructions'],
    outputs: ['Current matter billing record', 'Guideline index and change history', 'Conflict queue for accountable review', 'Completion evidence for approved updates'],
    ownerDecisions: ['Matter opening and legal classification', 'Client requirement interpretation', 'Rate and fee arrangement approval', 'Privilege, access, and retention decisions'],
    controls: ['Authoritative-source register', 'Change approval before update', 'Conflict and supersession flags', 'Periodic matter-record sampling'],
    scenarios: ['New matters that need billing setup', 'Guidelines received through several channels', 'Rate or timekeeper changes with different effective dates'],
    faqs: [{ q: 'Can an assistant decide which guideline controls?', a: 'No. The assistant can surface conflicting records and dates. The designated legal or billing owner resolves the conflict.' }, { q: 'How does upkeep stay auditable?', a: 'Record the source, requestor, effective date, changed field, and approving owner.' }], variant: 'matter',
  },
  'invoice-follow-up': {
    audience: 'Billing and finance teams with approved invoice communications that need consistent status records and clear escalation of disputes or commitments.',
    problem: 'Follow-up becomes risky when messages, promises, disputes, and payment status live in private inboxes without an agreed communication boundary.',
    inputs: ['Approved invoice follow-up queue', 'Authorized message templates', 'Client contact and channel rules', 'Dispute and commitment escalation path'],
    work: ['Prepare approved routine follow-up messages', 'Record responses and stated next actions', 'Update status from authoritative evidence', 'Escalate disputes, promises, or sensitive issues'],
    outputs: ['Current follow-up ledger', 'Response and next-action record', 'Dispute or commitment escalation', 'Queue aging view for the owner'],
    ownerDecisions: ['Settlement, dispute, or legal response', 'Payment terms and client commitments', 'Sensitive account communication', 'Write-off and collection decisions'],
    controls: ['Approved templates and recipient rules', 'No commitments outside written authority', 'Response evidence linked to status', 'Owner review of disputes and aged items'],
    scenarios: ['Routine invoice status requests', 'Responses that need a finance owner', 'Aged items with unclear next action'],
    faqs: [{ q: 'Can an assistant negotiate payment?', a: 'No. Negotiation, settlement, legal response, and financial commitments stay with authorized firm personnel.' }, { q: 'What makes a follow-up queue useful?', a: 'Each item should show the last approved contact, response evidence, current status, next action, owner, and due date.' }], variant: 'followup',
  },
  'billing-reporting-support': {
    audience: 'Billing leaders who need consistent operational views built from approved records without unsupported interpretation or invented precision.',
    problem: 'Leadership summaries become unreliable when definitions, source dates, exceptions, and missing records are not visible beside the reported status.',
    inputs: ['Approved billing-system exports', 'Metric and status definitions', 'Reporting period and scope', 'Known exclusions and data limitations'],
    work: ['Compile approved status fields', 'Reconcile records to named sources', 'Prepare exception and missing-data views', 'Document recurring workflow patterns for owner review'],
    outputs: ['Source-linked status summary', 'Exception and missing-data report', 'Definition and period note', 'Leadership-ready operating brief'],
    ownerDecisions: ['Metric interpretation and performance judgment', 'Financial forecasts and commitments', 'Personnel or client decisions', 'Materiality and disclosure choices'],
    controls: ['Documented definitions and denominators', 'Source and period labels', 'Visible missing or conflicting data', 'Owner signoff before distribution'],
    scenarios: ['Month-end billing status briefing', 'Unbilled-time exception review', 'Recurring rejection or rework pattern summary'],
    faqs: [{ q: 'Does support staff interpret performance?', a: 'No. Support can prepare a transparent operating view. Leaders interpret results and make decisions.' }, { q: 'How do reports avoid false precision?', a: 'Show definitions, source periods, exclusions, missing records, and limitations with the figures.' }], variant: 'reporting',
  },
};
