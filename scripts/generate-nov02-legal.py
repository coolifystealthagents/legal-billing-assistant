#!/usr/bin/env python3
from pathlib import Path
import json
ROOT=Path(__file__).resolve().parents[1]; DATE='2026-11-02'; DISPLAY='November 2, 2026'
blogs=[
 ('legalbillingassistant-time-entry-review-01-2026-11-02','Review a time-entry batch without changing billable time','time-entry review','the supervising attorney','the time entries, matter record, billing guidelines, and approved review checklist','the entry lacks a source, the narrative is unclear, or the request asks for a legal billing judgment'),
 ('legalbillingassistant-prebill-review-02-2026-11-02','Prepare a prebill review packet without approving edits','prebill review','the supervising attorney','the draft prebill, time entries, expense record, and client guidelines','a write-down, write-off, or rate change is requested without approval'),
 ('legalbillingassistant-ebilling-submission-03-2026-11-02','Track an e-billing submission without hiding rejections','e-billing submissions','the billing manager','the invoice, client portal record, rejection message, and resubmission deadline','the rejection changes a fee, the portal requires a legal certification, or the deadline would be missed'),
 ('legalbillingassistant-matter-record-04-2026-11-02','Keep a matter record current without changing engagement terms','matter records','the billing manager','the engagement letter, matter record, and approved update request','the update changes scope, rates, client instructions, or a legal obligation'),
 ('legalbillingassistant-invoice-followup-05-2026-11-02','Keep invoice follow-up promises visible across the billing cycle','invoice follow-up','the billing manager','the invoice, client contact record, promised channel, and next action','the client disputes a charge, requests a write-off, or raises a legal or hardship issue'),
 ('legalbillingassistant-billing-guideline-06-2026-11-02','Map a client billing guideline to a review checkpoint','billing guideline mapping','the billing manager','the client guideline, matter record, and approved billing rule','the guideline conflicts with another instruction or requires a legal interpretation'),
 ('legalbillingassistant-write-down-writeoff-07-2026-11-02','Prepare a write-down packet for attorney review','write-down and write-off decisions','the supervising attorney','the time entry, billing history, client agreement, and reason for adjustment','the assistant is asked to decide the adjustment, waive a fee, or alter a record without approval'),
 ('legalbillingassistant-trust-account-08-2026-11-02','Reconcile a trust-account request without moving funds','trust-account requests','the supervising attorney or finance owner','the trust ledger, client authorization, matter record, and approved request','the request asks for a disbursement decision, a legal interpretation, or a change to client funds'),
 ('legalbillingassistant-rate-change-09-2026-11-02','Track a rate-change request through approval','rate changes','the supervising attorney','the engagement terms, rate notice, client approval, and effective date','the rate change lacks client approval or would apply retroactively'),
 ('legalbillingassistant-credit-note-10-2026-11-02','Prepare a credit-note request without posting it','credit notes','the billing manager','the invoice, credit reason, approval record, and accounting period','the credit changes a client balance or requires a write-off decision'),
 ('legalbillingassistant-client-budget-11-2026-11-02','Compare a matter budget with billed and unbilled work','client budgets','the billing manager','the approved budget, time entries, expenses, and phase record','the budget comparison requires a legal strategy decision or a client commitment'),
 ('legalbillingassistant-collections-12-2026-11-02','Triage a collections request without making a demand','collections intake','the supervising attorney or finance owner','the invoice, payment history, client agreement, and approved escalation rule','the request would make a legal demand, admit a position, or disclose privileged information'),
]
research=[
 ('legalbillingassistant-research-time-entry-completeness-01-2026-11-02','How complete is the evidence in a time-entry review record?','time-entry evidence completeness','the supervising attorney','time-entry review','A reviewed entry can appear complete while the narrative, source, and approval trail remain weak.'),
 ('legalbillingassistant-research-prebill-aging-02-2026-11-02','How old do prebill exceptions become before attorney review?','prebill exception aging','the supervising attorney','prebill exception','Age is a warning signal; the client deadline, adjustment type, and billing cycle determine urgency.'),
 ('legalbillingassistant-research-ebilling-rejection-03-2026-11-02','What signal quality should an e-billing rejection review expect?','e-billing rejection signal','the billing manager','e-billing rejection','A rejection code is not evidence that the underlying entry, guideline, or resubmission was reviewed.'),
 ('legalbillingassistant-research-writeoff-handoff-04-2026-11-02','Where does delay enter a write-off approval handoff?','write-off handoff','the supervising attorney','write-off request','A request can look ready while the reason, approval authority, and accounting period remain unclear.'),
 ('legalbillingassistant-research-trust-ledger-coverage-05-2026-11-02','What coverage risk remains in trust-ledger reconciliation?','trust-ledger coverage','the finance owner','trust-ledger request','A reconciled balance does not prove that client authorization and the matter record agree.'),
]
sources=[
 {'label':'American Bar Association, Professional Responsibility','url':'https://www.americanbar.org/groups/professional_responsibility/'},
 {'label':'U.S. Government Accountability Office','url':'https://www.gao.gov/'},
 {'label':'NIST Cybersecurity Framework','url':'https://www.nist.gov/cyberframework'},
 {'label':'Federal Trade Commission','url':'https://www.ftc.gov/'},
 {'label':'Internal Revenue Service','url':'https://www.irs.gov/'},
 {'label':'U.S. Department of Labor','url':'https://www.dol.gov/'},
]
def blog(slug,title,focus,owner,src,stop):
 sections=[
  {'heading':f'The control this {focus} needs','paragraphs':[
   f"A {focus} case without a named owner can move through the pipeline while nobody can say what was checked, who decided, or what remains unresolved. The {owner} keeps credit, pricing, legal, and borrower-commitment decisions. The assistant may organize the file, compare approved records, and route exceptions.",
   f"The approved input is {src}. Keep evidence in the loan file rather than a parallel spreadsheet, and record the source date and next action. Do not copy unnecessary personal or financial detail into chat.",
   "A useful status vocabulary is received, waiting for evidence, ready for owner review, cleared, exception, and closed. Each open item needs one owner and a next-check time."]},
  {'heading':f'What the {focus} record must show','paragraphs':[
   "The record connects the borrower request, the source document, the reviewer, the decision owner, the changed field, and the completion evidence. Missing and conflicting values remain visible; they are not smoothed into a clean summary.",
   "A sent message, uploaded file, or checked box proves activity, not an underwriting or closing outcome. When a rule is unclear, the assistant preserves the question instead of writing a confident answer.",
   "The minimum trail is dated, reproducible, and short enough for the next processor to use during a busy pipeline."]},
  {'heading':"Where the VA's work stops",'paragraphs':[
   f"The assistant may collect, index, compare, and prepare questions. The {owner} decides eligibility, pricing, legal terms, and any borrower commitment. The stop condition is: {stop}.",
   "When the condition appears, route the exception with the exact missing item and owner. Do not use a shared login or broaden access to clear a queue.",
   "A prepared packet is a reviewed question, not an approval."]},
  {'heading':f'The daily {focus} routine','paragraphs':[
   "Start with the oldest item and the nearest closing or rate-lock deadline. Open the source, confirm the loan and version, record the last verified fact, and leave a named next action.",
   "At handoff, state what moved, what is waiting, who owns the next check, and which evidence is missing. Keep an exception list rather than relying on an average.",
   "When a document or condition changes, record the revision before anyone relies on the old value."]},
  {'heading':'Exceptions that should stop the case','paragraphs':[
   "Stop on missing identity, conflicting documents, an expired lock, a changed fee, a privacy question, a legal or regulatory allegation, or a request outside the assigned scope.",
   "The exception note should say what was requested, what the source shows, why the normal rule cannot resolve it, and which owner must decide."]},
  {'heading':'How to verify and close','paragraphs':[
   "Close only when the loan system, disclosure, or borrower-visible action shows the approved result. A phone call can start the check, but the dated record is the evidence.",
   f"A close note says what was checked, who approved it, what changed, and what would reopen the case. The {owner} should be able to reconstruct it later without asking the original processor."]},
  {'heading':f'The monthly {focus} review','paragraphs':[
   "Sample normal, exception, and reopened files. Test the source, decision, execution, and confirmation against the same written rule. Use de-identified examples for coaching.",
   "End with one process change, one owner, and one check date. Fix the template before adding more monitoring, and keep the fields the next reviewer actually needs."]},
 ]
 return {'slug':slug,'title':title,'description':f'A legal billing teams guide for law firm partners, administrators, and billing leaders, focused on {focus} and bounded by honest evidence.','category':'Loan Operations','publishedAt':DATE,'readTime':'12 min read','thumbnail':f'/thumbnails/november-02/{slug}.webp','sections':sections,
  'faq':[{'q':f'What should the team check first on {focus}?','a':f'Confirm the loan, source document, version, owner, and next action before any borrower-facing commitment. The {owner} decides exceptions.'},{'q':f'Which decisions stay with the {owner}?','a':'Credit, pricing, legal terms, disclosures, and borrower commitments stay with the accountable owner. The assistant prepares and routes evidence.'},{'q':'How should quality be reviewed?','a':'Sample normal, exception, and reopened files against the same checklist and record one process change with an owner and check date.'}],
  'internalService':'/services','internalSibling':'/blog','source':sources[0]}
def research_item(slug,title,focus,owner,unit,example):
 heads=['Question and scope','Population and unit of analysis','Definitions and measures','Evidence standard','Sampling and collection','Analysis and reporting','Limits and sources of error','Review cadence']
 paras=[
  f"This protocol asks how {focus} can be described from the loan record, using one defined population and one observation window. The {owner} owns the decision.",
  f"The unit is one {unit}, from opening event through recorded close. Keep linked revisions separate and record the source date and owner.",
  f"Define the opening event, closing event, pause rule, and missing-evidence rule before collecting {focus} data. Report the eligible count, exclusions, sample, exceptions, and unresolved items.",
  f"Record the source, observation time, field supported, reviewer, and decision owner. Keep restricted borrower data in the approved system. Example: {example}",
  f"Sample routine, exception, and reopened files. Preserve the original observation when a definition changes and label the new rule for later cases.",
  "Report observation separately from interpretation. Show the oldest open item and missing fields, not only the completion rate. Name the next decision and its owner.",
  "The cited public sources frame mortgage recordkeeping, privacy, fair-lending, and internal-control practice; they do not provide a local result or legal advice for a specific loan.",
  "Review the result on a fixed date and end with one process change, one owner, and one check date. A repeated defect should change the template before it changes coaching.",
 ]
 return {'slug':slug,'title':title,'summary':f'A repeatable measurement protocol for {focus} in legal billing teams, with definitions, sampling, limits, and reporting.','cluster':'Loan Operations','publishedAt':DATE,'finding':paras[0],'thumbnail':f'/thumbnails/november-02/{slug}.webp','sections':[{'heading':h,'paragraphs':[p]} for h,p in zip(heads,paras)],'sources':sources}
bl=[blog(*b) for b in blogs]; rs=[research_item(*r) for r in research]
(ROOT/'lib/november02-blog.ts').write_text("import type { BlogPost } from './types';\n\nexport const november02BlogPosts: readonly BlogPost[] = "+json.dumps(bl,indent=2,ensure_ascii=False)+";\n")
(ROOT/'lib/november02-research.ts').write_text("import type { ResearchPost } from './types';\n\nexport const november02ResearchPosts: readonly ResearchPost[] = "+json.dumps(rs,indent=2,ensure_ascii=False)+";\n")
p=ROOT/'lib/content.ts'; t=p.read_text()
if 'november02BlogPosts' not in t:
 t=t.replace("import { november01BlogPosts } from './november01-blog';","import { november01BlogPosts } from './november01-blog';\nimport { november02BlogPosts } from './november02-blog';")
 t=t.replace("import { november01ResearchPosts } from './november01-research';","import { november01ResearchPosts } from './november01-research';\nimport { november02ResearchPosts } from './november02-research';")
 t=t.replace('  ...november01BlogPosts,','  ...november02BlogPosts,\n  ...november01BlogPosts,')
 t=t.replace('  ...november01ResearchPosts,','  ...november02ResearchPosts,\n  ...november01ResearchPosts,')
 p.write_text(t)
print('generated',len(bl)+len(rs))
