import type { ResearchPost } from './types';
export const november16ResearchPosts: ResearchPost[] = [
  {
    "slug": "how-often-do-billing-narratives-omit-the-business-purpose",
    "title": "How often do billing narratives omit the business purpose?",
    "summary": "A narrative audit that tests whether a billed entry explains why the work was necessary, not just what activity occurred.",
    "cluster": "Narrative quality",
    "finding": "A large share of billing disputes starts with an entry that names an activity but never explains why the work was needed at that point in the matter.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This protocol asks how often a billed time narrative omits the business purpose of the task. The unit is a billed time line, and the measure is whether a reader can identify why the task was necessary and how it advanced the matter. The study covers narratives on invoices issued during the period, not the quality of the legal work. It does not evaluate whether the time spent was reasonable.",
          "Scope the study to matters with at least one narrative entry above the firm's minimum billing threshold. Include invoices that were paid, adjusted, and still open so the denominator reflects the full workload. Exclude fixed-fee lines and cost-only lines, and record the number excluded. State the billing system, the narrative standard, and the owner of the analysis."
        ]
      },
      {
        "heading": "Defining the event",
        "paragraphs": [
          "Define a purpose gap as a narrative that describes an activity but not the reason it was needed at that stage. Reviewed documents is an activity, while reviewed the production to identify documents responsive to the court order states a purpose. A short entry can still have a purpose, and a long entry can still lack one. Write two examples and one boundary case before coding.",
          "Distinguish a purpose gap from a vague verb and from a missing narrative. A vague verb may still be clear in context, while a missing narrative is a blank field with a separate code. Keep the categories separate because the repair differs. Code the primary issue and note any secondary issue."
        ]
      },
      {
        "heading": "Population and denominator",
        "paragraphs": [
          "The population is every narrative time line on an included invoice. Report the number of invoices, the number of lines, the number excluded, and the number in the final sample. Count lines rather than invoices, because one invoice can contain entries from several timekeepers. If a line was revised after the invoice, use the version that the client received.",
          "Report the purpose gap rate by line and by billed value. A small number of high-value lines can carry most of the client exposure, so the value measure matters. Keep both measures in the report. The value measure should use the billed amount, not a notional rate."
        ]
      },
      {
        "heading": "Evidence sources",
        "paragraphs": [
          "Use the invoice narrative, the contemporaneous time note, the task code, and the client guideline as the primary evidence. Compare the narrative with the note and record the date each was observed. If the note is missing, mark the line as incomplete rather than inferring the purpose from the matter name. The evidence log should let a second reviewer repeat the match.",
          "Rank the sources so reviewers know what to trust first. A contemporaneous note is stronger than a later summary, and the client guideline is stronger than an internal assumption about what the client wants. Record the evidence type for each line so the analysis can separate a documentation gap from a genuine purpose gap. A task code without a note is the weakest source for a purpose question."
        ]
      },
      {
        "heading": "Sampling",
        "paragraphs": [
          "Sample across timekeepers, task types, and clients so one matter does not define the result. Include entries that were paid without a question, because payment is not proof that the narrative was clear. Draw the sample before reading the narratives so the selection is not biased toward the disputed lines. If the population is small, review every line and extend the period.",
          "Stratify the sample by entry length and by whether the client guideline requires a purpose statement. A short entry may pass more often because it is easier to read, while a long entry may hide the purpose in detail. Report the gap rate for each stratum rather than pooling them. The reader should be able to see where the standard breaks down."
        ]
      },
      {
        "heading": "Coding the record",
        "paragraphs": [
          "Use a short code list that points to a specific repair. Code each line as clear purpose, activity only, generic wording, missing narrative, or unknown. Add a note for the task type and the stage of the matter. Keep the code list short enough that two reviewers can apply it consistently.",
          "Have a second reviewer code a sample and compare the results. Resolve disagreements by returning to the narrative and the source note, not by majority vote. Report the agreement rate and revise any code that is applied inconsistently. If the reviewers cannot agree on what counts as a purpose, stop and fix the definition before continuing."
        ]
      },
      {
        "heading": "Measuring the variable",
        "paragraphs": [
          "Measure the purpose gap rate by line, by billed value, and by task type. Report the median and the range for the narrative length so a few long entries are visible. Measure the share of lines that pass a blind reader test, where a reviewer who does not know the matter tries to state the purpose. Keep the raw counts with the analysis file.",
          "Do not convert the gap to a dollar figure without an approved fee and collection data. The study measures narrative quality, not profitability. If the firm wants a revenue view, run it as a separate analysis with the finance owner. A precise dollar figure built on an incomplete narrative set is less useful than a clear line count."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the overall gap rate, the rate by task type, and the number of lines behind each figure. Show the share of billed value affected and the most common wording pattern. Compare only groups with similar client requirements and matter types. Include the lines that were clear so the report shows the full distribution.",
          "Give the reader one table that answers the main question and put the coding detail in an appendix. Write the finding in plain language before presenting the technical definition. Include the cases that contradict the pattern rather than hiding them in an average. A report that cannot be acted on is just another record of the past."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "A missing note is not proof that no purpose existed, and a later summary is not proof that the purpose was clear at the time. Report the completeness of the evidence before drawing a conclusion. Small samples, changing client guidelines, and reviewer disagreement can all limit interpretation. A short entry may be perfectly clear to a reader who knows the matter.",
          "Avoid comparing groups that differ in client sophistication or matter complexity. A client that reviews every line may receive fuller narratives than one that does not. Describe the context beside the rate and avoid ranking individual timekeepers. The purpose is to improve the record, not to judge professional worth."
        ]
      },
      {
        "heading": "Privacy and retention",
        "paragraphs": [
          "Store the narratives, source notes, and client guidelines in a controlled folder with access limited to the study team. Remove client names, matter details, and privileged content from the analysis file when they are not needed. If an example is shared, use a role label and redact the client and the specific matter. Keep privileged material in a separate restricted location.",
          "Do not circulate a client-level or timekeeper-level list about narrative quality outside the management context. Aggregate the results before sharing them more broadly, and check that a small group cannot be re-identified. The same rule applies to screenshots of the billing system and to quoted entries. Privacy is part of the method, not an afterthought added at the end."
        ]
      },
      {
        "heading": "Applying the result",
        "paragraphs": [
          "Choose one change that matches the most common gap. If activity-only entries dominate, add a purpose prompt to the time-entry form with a short example. If long entries hide the purpose, add a review question at the prebill. If the guideline is unclear, ask the client for a sample of an acceptable narrative.",
          "A lower gap rate is not the only useful outcome. Faster client approval and fewer questions can improve the process even when the rate stays similar. Report the direct result and the service result separately. Stop the change if it produces longer narratives without a clearer purpose."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the audit each quarter and after any change to the time-entry form, the client guideline, or the billing system. Keep the definitions and the unit stable so periods can be compared. Report the lines that were excluded or still open beside the main rate. Review the coding guide after the first repetition and keep the changes visible.",
          "Review the result with the billing manager and the attorney who supervises the timekeepers, not only with the preparer. Ask which fix is easiest to sustain and which gap causes the most client questions. Set one change and a follow-up date, then check whether the change held. The next audit should test the repair, not just repeat the same count."
        ]
      }
    ],
    "sources": [
      {
        "label": "American Bar Association Model Rules of Professional Conduct",
        "url": "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/"
      },
      {
        "label": "Legal Electronic Data Exchange Standard",
        "url": "https://ledes.org/"
      },
      {
        "label": "U.S. Government Accountability Office Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Internal Revenue Service recordkeeping guidance",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "Federal Trade Commission data security guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security"
      }
    ],
    "publishedAt": "2026-11-16",
    "thumbnail": "/thumbnails/november-16/how-often-do-billing-narratives-omit-the-business-purpose.webp"
  },
  {
    "slug": "what-share-of-trust-replenishment-requests-arrive-after-the-retainer-runs-out",
    "title": "What share of trust replenishment requests arrive after the retainer runs out?",
    "summary": "A timing study that measures how often a client is asked to replenish trust only after the balance has already fallen below the work in progress.",
    "cluster": "Trust accounting",
    "finding": "Late replenishment requests usually reflect a missing early-warning trigger rather than a client unwilling to pay, and the delay shifts risk onto the firm.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This protocol asks what share of trust replenishment requests are sent after the retainer balance has already been exhausted. The unit is a replenishment event, and the measure is whether the request date precedes or follows the date the available trust balance reached zero. The study covers retainer-based matters that were active during the period. It does not evaluate whether the retainer amount was appropriate at the start.",
          "Scope the study to matters with a written retainer agreement and a trust ledger that records both deposits and withdrawals. Include matters that received one request, several requests, and no request at all so the denominator reflects the full portfolio. Exclude matters with no trust activity and record the number excluded. State the trust system, the billing system, and the owner of the analysis."
        ]
      },
      {
        "heading": "Defining the event",
        "paragraphs": [
          "Define a replenishment request as a written communication that asks the client to deposit additional funds into trust. The request date is the date it was sent, not the date it was drafted or discussed. Define exhaustion as the point when the available trust balance for the matter reaches zero after applying approved transfers. A request sent on the same day as exhaustion counts as late for this study.",
          "Distinguish a scheduled replenishment from a reactive one. A scheduled request follows the retainer agreement, such as a monthly top-up, while a reactive request follows a balance alert or a refused transfer. Code the two separately because the process fix differs. A matter can have both types over its life, so code each event on its own."
        ]
      },
      {
        "heading": "Population and denominator",
        "paragraphs": [
          "The population is every replenishment event on an included matter during the period. Report the number of matters, the number of events, the number excluded, and the number in the final sample. If a matter received several requests, count each one separately or state the rule used. Keep the unit stable across periods so the timing rate is comparable.",
          "Report the share of requests sent before exhaustion, on the day of exhaustion, and after exhaustion. Also report the median number of days between exhaustion and the request. A single late request on a large matter can matter more than several on small matters, so report the trust amount beside the count. Report the trust balance at each request so the timing can be read beside the amount."
        ]
      },
      {
        "heading": "Evidence sources",
        "paragraphs": [
          "Use the trust ledger, the retainer agreement, the client communication, and the billing system as the primary evidence. Compare the request date with the balance history and record the date each source was observed. If the ledger is incomplete, mark the event as unverified rather than estimating the balance. The evidence log should let a second reviewer repeat the timeline.",
          "Rank the sources so reviewers know what to trust first. A contemporaneous trust ledger is stronger than a later reconciliation, and a sent message is stronger than a note that a call occurred. A retainer agreement is stronger than an internal assumption about the client's obligation. Record the evidence type for each event."
        ]
      },
      {
        "heading": "Sampling",
        "paragraphs": [
          "Sample across clients, matter sizes, and relationship ages so one large client does not define the result. Include matters with a single retainer and matters with recurring replenishments. Draw the sample before reading the outcome so the selection is not biased toward the late cases. If the population is small, review every event and extend the period.",
          "Stratify the sample by whether the matter had a documented balance alert or a scheduled review. A matter with a working alert should produce earlier requests than one without. Report the timing rate for each stratum rather than pooling them. The reader should be able to see whether the trigger or the client behavior explains the delay."
        ]
      },
      {
        "heading": "Coding the record",
        "paragraphs": [
          "Use a short code list that points to a specific repair. Code each event as before exhaustion, same day, after exhaustion, or unknown, and record the trigger such as a scheduled review, a balance alert, a refused transfer, or a client request. Add the number of days late and the trust balance at the request date. Keep the code list short enough that two reviewers can apply it consistently.",
          "Have a second reviewer code a sample and compare the results. Resolve disagreements by returning to the ledger and the sent message, not by majority vote. Report the agreement rate and revise any code that is applied inconsistently. If the reviewers cannot agree on the exhaustion date, stop and fix the definition before continuing."
        ]
      },
      {
        "heading": "Measuring the variable",
        "paragraphs": [
          "Measure the share of late requests by event and by trust value. Report the median and the range for the days late so a few extreme cases are visible. Measure the time from the last approved transfer to the request, because that interval shows how quickly the balance was consumed. Keep the raw entries with the analysis file.",
          "Do not convert the late days to a cost figure without an approved labor rate and a clear statement that it is an internal estimate. The study measures timing, not the cost of carrying the work. If the firm wants a cost view, run it separately with the finance owner. A precise number built on assumed rates is less useful than a clear distribution."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the overall late rate, the median days late, and the number of events behind each figure. Show the results by trigger type and by matter size. Compare only groups with similar retainer terms and billing cycles. Include the events that arrived early so the report shows the full distribution.",
          "Give the reader one table that answers the main question and put the coding detail in an appendix. Write the finding in plain language before presenting the technical definition. Include the cases that contradict the pattern rather than hiding them in an average. A report that cannot be acted on is just another record of the past."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "A late request is not proof that the firm failed to notice the balance, and an early request is not proof that the process is healthy. Report the completeness of the ledger before drawing a conclusion. Small samples, manual transfers, and changing retainer terms can all limit interpretation. A client who pays slowly may receive a request earlier by design.",
          "Avoid comparing matters that differ in write-off policy or trust activity. A matter with many small costs will consume trust differently from one with a single large fee. Describe the context beside the rate and avoid ranking individual billers. The purpose is to improve the trigger, not to judge professional worth."
        ]
      },
      {
        "heading": "Privacy and retention",
        "paragraphs": [
          "Store the trust ledgers, retainer agreements, and client messages in a controlled folder with access limited to the study team. Remove client names, balances, and matter details from the analysis file when they are not needed. If an example is shared, use a role label and redact the client and the amount. Keep the unredacted ledger in a separate restricted location.",
          "Do not circulate a client-level list about late replenishment outside the management context. Aggregate the results before sharing them more broadly, and check that a small group cannot be re-identified. The same rule applies to screenshots of the trust system and to quoted messages. Privacy is part of the method, not an afterthought added at the end."
        ]
      },
      {
        "heading": "Applying the result",
        "paragraphs": [
          "Choose one change that matches the most common trigger. If the alert is missing, add a threshold notification at a set percentage of the retainer. If the review is manual, put a balance check on the weekly billing calendar. If the request is late because the invoice is late, fix the prebill timeline first.",
          "A lower late rate is not the only useful outcome. Fewer refused transfers and a smoother client conversation can improve the relationship even when the rate stays similar. Report the direct result and the service result separately. Stop the change if it produces more alerts than the team can act on."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the study each quarter and after any change to the retainer terms, the trust system, or the billing calendar. Keep the definitions and the unit stable so periods can be compared. Report the events that were excluded or still open beside the main rate. Review the coding guide after the first repetition and keep the changes visible.",
          "Review the result with the billing manager and the bookkeeper, not only with the preparer. Ask which fix is easiest to sustain and which delay creates the most client friction. Set one change and a follow-up date, then check whether the change held. The next study should test the repair, not just repeat the same count."
        ]
      }
    ],
    "sources": [
      {
        "label": "American Bar Association Model Rules of Professional Conduct",
        "url": "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/"
      },
      {
        "label": "U.S. Government Accountability Office Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Internal Revenue Service recordkeeping guidance",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep"
      },
      {
        "label": "Federal Trade Commission data security guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      }
    ],
    "publishedAt": "2026-11-16",
    "thumbnail": "/thumbnails/november-16/what-share-of-trust-replenishment-requests-arrive-after-the-retainer-runs-out.webp"
  },
  {
    "slug": "how-much-close-time-do-unresolved-timekeeper-edits-consume",
    "title": "How much close time do unresolved timekeeper edits consume?",
    "summary": "A time study that measures the review minutes spent waiting for, reconciling, and rechecking late timekeeper edits during the monthly close.",
    "cluster": "Close cycle",
    "finding": "Late edits rarely consume time when they are entered, but they consume review time repeatedly as the prebill, the totals, and the client summary are rebuilt around them.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This protocol asks how much close time is lost to unresolved timekeeper edits. The unit is a review minute attached to an edit, and the measure is the active time spent waiting, reconciling, and rechecking after the edit arrives. The study covers the close cycle from the time-entry cutoff to the released invoice. It does not evaluate whether the edit itself was justified.",
          "Scope the study to closes with at least one edit received after the cutoff. Include edits that were accepted, rejected, and still open so the denominator reflects the full workload. Exclude closes with no late edits and record the number excluded. State the billing system, the close calendar, and the person who owns the time log."
        ]
      },
      {
        "heading": "Defining the event",
        "paragraphs": [
          "Define a late edit as a change to time, narrative, rate, or matter allocation submitted after the published cutoff for the close. A correction made before the cutoff is part of normal work. A change requested by the client after the invoice is released belongs to the next cycle and a separate study. Write two examples and one boundary case before coding.",
          "Distinguish an edit from a new entry. A new entry adds time that was not previously recorded, while an edit changes an existing record. The two have different causes and different fixes, so code them separately. A late entry may indicate a capture problem, while a late edit may indicate a review or approval problem."
        ]
      },
      {
        "heading": "Population and denominator",
        "paragraphs": [
          "The population is every late edit received during an included close. Report the number of closes, the number of edits, the number excluded, and the number in the final sample. If one edit required several review passes, count the active minutes from each pass but keep the edit as one unit. State how rework was handled in the coding guide.",
          "Report the minutes per edit and the share of close minutes spent on late edits. A high share can reflect one complex edit, so report the number of edits behind the share. Keep the raw time entries with the analysis file. The denominator should include the edits that were resolved quickly, not only the difficult ones."
        ]
      },
      {
        "heading": "Evidence sources",
        "paragraphs": [
          "Use the billing system audit trail, the close calendar, the reviewer's time log, and the prebill versions as the primary evidence. Compare the edit timestamp with the cutoff and record the date each source was observed. If the time log is missing, mark the edit as incomplete rather than estimating from memory. The evidence log should let a second reviewer repeat the timeline.",
          "Rank the sources so reviewers know what to trust first. A system audit trail is stronger than a later summary, and a contemporaneous time log is stronger than a recollection. A prebill version history is stronger than an assumption about what changed. Record the evidence type for each edit so the analysis can separate a documentation gap from a real delay."
        ]
      },
      {
        "heading": "Sampling",
        "paragraphs": [
          "Sample across close cycles, matter types, and timekeepers so one difficult close does not define the result. Include edits that were resolved on the same day, because the quick cases are part of the baseline. Draw the sample before reading the outcome so the selection is not biased toward the disruptive edits. If the population is small, review every edit and extend the period.",
          "Stratify the sample by whether the edit was requested by the timekeeper, the reviewer, or the client. Each source has a different approval path and a different delay pattern. Report the minutes per edit for each stratum rather than pooling them. The reader should be able to see where the close time actually goes."
        ]
      },
      {
        "heading": "Coding the record",
        "paragraphs": [
          "Use a short code list that points to a specific repair. Code each edit as narrative, time value, rate, matter allocation, or other, and record the stage where it was found. Add the number of review passes and the person who requested the change. Code the outcome as accepted, rejected, or open so the time can be interpreted.",
          "Have a second reviewer code a sample and compare the results. Resolve disagreements by returning to the audit trail and the prebill versions, not by majority vote. Report the agreement rate and revise any code that is applied inconsistently. If the reviewers cannot agree on what counts as an edit, stop and fix the definition before continuing."
        ]
      },
      {
        "heading": "Measuring the variable",
        "paragraphs": [
          "Measure active review minutes with a short log completed at the moment of the work. Separate the time spent waiting, searching, reconciling, and communicating so the largest component is visible. Report the median and the range rather than a single average, because one difficult edit can dominate a mean. Keep the raw entries with the analysis file.",
          "Do not convert the minutes to a dollar figure without an approved labor rate and a clear statement that it is an internal estimate. The study measures effort, not price. If the firm wants a cost view, run it separately with the finance owner. A precise number built on rounded guesses is less useful than a range with a clear source."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the overall minutes per edit, the share of close minutes affected, and the number of closes behind each figure. Show the median and range for each edit type and the most common stage where the edit was found. Compare only closes with similar volumes and review steps. Include the quick edits so the report shows the full distribution.",
          "Give the reader one table that answers the main question and put the coding detail in an appendix. Write the finding in plain language before presenting the technical definition. Include the cases that contradict the pattern rather than hiding them in an average. A report that cannot be acted on is just another record of the past."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "Self-reported time can be rounded, and a missing log is not proof that no delay occurred. Report the completeness of the time evidence before drawing a conclusion. Small samples, changing close calendars, and reviewer disagreement can all limit interpretation. An edit that was resolved quickly may still have interrupted a review that had to restart.",
          "Avoid comparing closes that differ in volume or client requirements. A close with many small matters will produce a different pattern from one with a single large submission. Describe the context beside the minutes and avoid ranking individual reviewers. The purpose is to improve the cutoff and the queue, not to judge professional worth."
        ]
      },
      {
        "heading": "Privacy and retention",
        "paragraphs": [
          "Store the audit trails, close calendars, and time logs in a controlled folder with access limited to the study team. Remove timekeeper names, client details, and specific amounts from the analysis file when they are not needed. If an example is shared, use a role label and redact the client and the matter. Keep the unredacted evidence separate from the working analysis.",
          "Do not circulate a person-level or client-level list about late edits outside the management context. Aggregate the results before sharing them more broadly, and check that a small group cannot be re-identified. The same rule applies to screenshots of the billing system and to quoted messages. Privacy is part of the method, not an afterthought added at the end."
        ]
      },
      {
        "heading": "Applying the result",
        "paragraphs": [
          "Choose one change that matches the most common edit. If narrative edits dominate, improve the entry guidance and the first review. If time-value edits dominate, add a daily time check before the cutoff. If rate edits dominate, fix the matter setup. Test one change on one close before applying it broadly.",
          "A lower minutes-per-edit figure is not the only useful outcome. A calmer close and fewer rechecks can improve the team even when the minutes stay similar. Report the direct result and the service result separately. Stop the change if it pushes the edit into a private channel where it cannot be reviewed."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the study each close cycle and after any change to the cutoff, the billing system, or the review steps. Keep the definitions and the unit stable so periods can be compared. Report the edits that were excluded or still open beside the main measure. Review the coding guide after the first repetition and keep the changes visible.",
          "Review the result with the billing manager and the timekeepers, not only with the reviewer. Ask which fix is easiest to sustain and which edit creates the most rework. Set one change and a follow-up date, then check whether the change held. The next study should test the repair, not just repeat the same count."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Government Accountability Office Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Legal Electronic Data Exchange Standard",
        "url": "https://ledes.org/"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "United States Department of Labor work hours guidance",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "Internal Revenue Service recordkeeping guidance",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep"
      },
      {
        "label": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "publishedAt": "2026-11-16",
    "thumbnail": "/thumbnails/november-16/how-much-close-time-do-unresolved-timekeeper-edits-consume.webp"
  },
  {
    "slug": "how-consistently-are-write-down-approval-limits-applied-across-billing-managers",
    "title": "How consistently are write-down approval limits applied across billing managers?",
    "summary": "A control study that compares the written authority, the applied approval level, and the recorded reason for adjustments of the same size.",
    "cluster": "Write-offs",
    "finding": "Inconsistent approval is less often a missing policy than a policy that is interpreted differently by each manager, which makes the same adjustment routine in one book and an exception in another.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This protocol asks how consistently write-down approval limits are applied across billing managers. The unit is an approved adjustment, and the measure is whether the approver's authority, the recorded reason, and the supporting evidence match the written policy for that amount. The study covers adjustments on invoices issued during the period. It does not evaluate whether the adjustment was commercially wise.",
          "Scope the study to billing managers who approved at least one adjustment during the period and to adjustments above the firm's documentation threshold. Include adjustments that were later reversed or corrected so the denominator reflects real decisions. Exclude adjustments below the threshold and record the number excluded. State the policy version, the approval system, and the owner of the analysis."
        ]
      },
      {
        "heading": "Defining the event",
        "paragraphs": [
          "Define an adjustment as any reduction to a billed amount, including a write-down, a write-off, a courtesy credit, and an error correction. The approval limit is the maximum amount a named role may approve without escalation. The applied approver is the person whose name appears on the approval record. A verbal approval that was never recorded counts as undocumented for this study.",
          "Distinguish a split adjustment from a single adjustment. Splitting a large reduction into smaller entries to stay inside a limit is a control failure, not a series of routine decisions. Code the split separately and record the total amount. A legitimate partial credit on separate invoices should not be coded as a split when the client requested it that way."
        ]
      },
      {
        "heading": "Population and denominator",
        "paragraphs": [
          "The population is every adjustment above the documentation threshold on an included invoice. Report the number of managers, the number of adjustments, the number excluded, and the number in the final sample. If one invoice received several adjustments, count each one separately or state the rule used. Keep the unit stable across periods so the consistency rate is comparable.",
          "Report the share of adjustments approved inside the limit, above the limit with an escalation, above the limit without an escalation, and with no recorded approver. Also report the median amount by manager group. A high share inside the limit can still hide a split, so report the count of split cases beside the rate. Report the share of adjustments with a completed evidence package as a separate measure."
        ]
      },
      {
        "heading": "Evidence sources",
        "paragraphs": [
          "Use the approval record, the delegation schedule, the invoice history, and the client correspondence as the primary evidence. Compare the approver and the amount with the limit in force on the approval date. Record the date each source was observed and the policy version. If the approval record is missing, mark the adjustment as undocumented rather than inferring authority from the title.",
          "Rank the sources so reviewers know what to trust first. A signed approval record is stronger than an email, and a dated delegation schedule is stronger than a current org chart. A client request is stronger than an internal assumption about why the adjustment was made. Record the evidence type for each adjustment."
        ]
      },
      {
        "heading": "Sampling",
        "paragraphs": [
          "Sample across managers, offices, and adjustment sizes so one large credit does not define the result. Include adjustments near the limit, because that is where interpretation differs most. Draw the sample before reading the outcome so the selection is not biased toward the suspicious cases. If the population is small, review every adjustment and extend the period.",
          "Stratify the sample by whether the adjustment was a courtesy credit or an error correction. A courtesy credit may follow a different approval path from a correction. Report the consistency rate for each stratum rather than pooling them. The reader should be able to see whether the policy or the practice explains the difference."
        ]
      },
      {
        "heading": "Coding the record",
        "paragraphs": [
          "Use a short code list that points to a specific repair. Code each adjustment as inside limit, escalated, not escalated, split, or undocumented, and record the reason category. Add the approver role, the amount, and the policy version. Keep the code list short enough that two reviewers can apply it consistently.",
          "Have a second reviewer code a sample and compare the results. Resolve disagreements by returning to the delegation schedule and the approval record, not by majority vote. Report the agreement rate and revise any code that is applied inconsistently. If the reviewers cannot agree on which policy version applied, stop and fix the timeline before continuing."
        ]
      },
      {
        "heading": "Measuring the variable",
        "paragraphs": [
          "Measure the consistency rate by adjustment and by manager group. Report the median and the range for the adjustment amount so a few large cases are visible. Measure the share of adjustments with a complete reason and evidence package. Keep the raw counts with the analysis file so a reviewer can check the calculation.",
          "Do not convert the adjustments to a realization figure without the approved fee and collection data. The study measures approval consistency, not profitability. If the firm wants a realization view, run it as a separate analysis with the finance owner. A precise percentage built on incomplete records is less useful than a clear exception count."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the overall consistency rate, the exception count by type, and the number of adjustments behind each figure. Show the results by manager group and by adjustment size. Compare only groups with the same policy version and approval system. Include the adjustments that followed the policy so the report shows the full distribution.",
          "Give the reader one table that answers the main question and put the coding detail in an appendix. Write the finding in plain language before presenting the technical definition. Include the cases that contradict the pattern rather than hiding them in an average. A report that cannot be acted on is just another record of the past."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "A missing approval record is not proof that no approval occurred, and a recorded approval is not proof that the authority was valid. Report the completeness of the evidence before drawing a conclusion. Small samples, mid-period policy changes, and reviewer disagreement can all limit interpretation. A manager who inherited a decision may appear inconsistent through no fault of their own.",
          "Avoid comparing managers who handle different client relationships or matter types. A manager with many long-standing clients may see more courtesy adjustments than one with new clients. Describe the context beside the rate and avoid ranking individual managers. The purpose is to clarify the policy, not to judge professional worth."
        ]
      },
      {
        "heading": "Privacy and retention",
        "paragraphs": [
          "Store the approval records, delegation schedules, and invoice histories in a controlled folder with access limited to the study team. Remove manager names, client names, and specific amounts from the analysis file when they are not needed. If an example is shared, use a role label and redact the client and the amount. Keep the unredacted evidence separate from the working analysis.",
          "Do not circulate a manager-level list about approval consistency outside the management context. Aggregate the results before sharing them more broadly, and check that a small group cannot be re-identified. The same rule applies to screenshots of the approval system and to quoted messages. Privacy is part of the method, not an afterthought added at the end."
        ]
      },
      {
        "heading": "Applying the result",
        "paragraphs": [
          "Choose one change that matches the most common exception. If the limit is unclear, rewrite it with examples at the boundary. If splits dominate, add a check for multiple adjustments on the same invoice. If the approval record is missing, make the field required before the invoice can be released. Test the change on one manager group.",
          "A higher consistency rate is not the only useful outcome. Faster approvals and clearer client conversations can improve the process even when the rate stays similar. Report the direct result and the service result separately. Stop the change if it adds a step that the team works around instead of using."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the study each quarter and after any change to the delegation schedule or the approval system. Keep the definitions and the unit stable so periods can be compared. Report the adjustments that were excluded or still open beside the main rate. Review the coding guide after the first repetition and keep the changes visible.",
          "Review the result with the billing manager and the finance owner, not only with the approvers. Ask which fix is easiest to sustain and which exception creates the most rework. Set one change and a follow-up date, then check whether the change held. The next study should test the repair, not just repeat the same count."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Government Accountability Office Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "American Bar Association Model Rules of Professional Conduct",
        "url": "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/"
      },
      {
        "label": "Internal Revenue Service recordkeeping guidance",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "Federal Trade Commission data security guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security"
      },
      {
        "label": "United States Department of Labor work hours guidance",
        "url": "https://www.dol.gov/general/topic/workhours"
      }
    ],
    "publishedAt": "2026-11-16",
    "thumbnail": "/thumbnails/november-16/how-consistently-are-write-down-approval-limits-applied-across-billing-managers.webp"
  },
  {
    "slug": "what-share-of-new-matters-lack-a-billing-guideline-record",
    "title": "What share of new matters lack a billing guideline record?",
    "summary": "An intake audit that checks whether a new matter has a current guideline source, an owner, and a review question before the first time entry.",
    "cluster": "Billing guidelines",
    "finding": "A missing guideline record at intake is usually invisible until the first invoice is rejected, which turns a simple setup step into a client dispute.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This protocol asks what share of new matters lack a client billing guideline record at intake. The unit is a newly opened matter, and the measure is whether the matter record contains a current guideline source, a named owner, and at least one review question before the first time entry. The study covers matters opened during the period. It does not evaluate the quality of the legal work.",
          "Scope the study to matters with an engagement letter and a client that has issued written billing guidelines. Include matters opened through every intake channel so the denominator reflects the full workload. Exclude matters with no written guideline and record the number excluded. State the matter system, the guideline repository, and the owner of the analysis."
        ]
      },
      {
        "heading": "Defining the event",
        "paragraphs": [
          "Define a complete guideline record as one that links the current client source, names the owner, and lists the review questions the billing team will use. A note that says guidelines apply is not complete. A record with an outdated source is incomplete for this study. Write two examples and one boundary case before coding.",
          "Distinguish a missing record from a late record. A record created after the first time entry is late even if it is complete. A late record can still be useful, but it did not prevent the intake gap. Code the two separately because the process fix differs."
        ]
      },
      {
        "heading": "Population and denominator",
        "paragraphs": [
          "The population is every new matter opened during the period that meets the inclusion rule. Report the number of matters, the number excluded, and the number in the final sample. Count matters rather than clients, because one client can open several matters with different rules. Keep the unit stable across periods so the completeness rate is comparable.",
          "Report the completeness rate by matter and by required element. A matter can have a source but no owner, or an owner but no review question. Report the element-level rate beside the overall rate. The element measure should count only the elements required at intake."
        ]
      },
      {
        "heading": "Evidence sources",
        "paragraphs": [
          "Use the matter record, the guideline repository, the engagement letter, and the intake checklist as the primary evidence. Compare the source date with the matter open date and record the date each source was observed. If the guideline is stored only in an email, mark the record as incomplete for this study. The evidence log should let a second reviewer repeat the match.",
          "Rank the sources so reviewers know what to trust first. A current repository entry is stronger than an email attachment, and a dated intake checklist is stronger than a later note. A client portal link is stronger than an internal summary of the guideline. Record the evidence type for each matter so the analysis can separate a storage problem from a process gap."
        ]
      },
      {
        "heading": "Sampling",
        "paragraphs": [
          "Sample across practice groups, offices, and intake channels so one team does not define the result. Include matters opened by a partner, by an assistant, and through a client portal. Draw the sample before reading the outcome so the selection is not biased toward the well-documented matters. If the population is small, review every matter and extend the period.",
          "Stratify the sample by whether the client had an existing guideline on file from a prior matter. A returning client may receive a faster setup because the source is already known. Report the completeness rate for each stratum rather than pooling them. The reader should be able to see whether the gap is concentrated in new clients."
        ]
      },
      {
        "heading": "Coding the record",
        "paragraphs": [
          "Use a short code list that points to a specific repair. Code each matter as complete, source missing, owner missing, questions missing, outdated, or late. Add the intake channel and the matter type. Keep the code list short enough that two reviewers can apply it consistently.",
          "Have a second reviewer code a sample and compare the results. Resolve disagreements by returning to the matter record and the repository, not by majority vote. Report the agreement rate and revise any code that is applied inconsistently. If the reviewers cannot agree on what counts as current, stop and fix the definition before continuing."
        ]
      },
      {
        "heading": "Measuring the variable",
        "paragraphs": [
          "Measure the completeness rate by matter, by element, and by intake channel. Report the median and the range for the days between matter open and record creation. Measure the share of matters that received a review question before the first time entry. Keep the raw counts with the analysis file so a reviewer can check the calculation.",
          "Do not convert the gap to a dollar figure without the invoice and adjustment data. The study measures intake completeness, not cost. If the firm wants a cost view, run it separately with the finance owner. A precise number built on incomplete matter records is less useful than a clear element-level count."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the overall completeness rate, the element-level gaps, and the number of matters behind each figure. Show the results by intake channel and by client type. Compare only groups with similar guideline requirements. Include the matters that were complete so the report shows the full distribution.",
          "Give the reader one table that answers the main question and put the coding detail in an appendix. Write the finding in plain language before presenting the technical definition. Include the cases that contradict the pattern rather than hiding them in an average. A report that cannot be acted on is just another record of the past."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "A missing record is not proof that the guideline was unavailable, and a complete record is not proof that the team read it. Report the completeness of the intake evidence before drawing a conclusion. Small samples, concurrent system changes, and reviewer disagreement can all limit interpretation. A matter opened during a system migration may have a record in a legacy location.",
          "Avoid comparing matters that differ in client sophistication or urgency. An emergency matter may be opened before the guideline is filed, with the record completed later. Describe the context beside the rate and avoid ranking individual assistants. The purpose is to improve intake, not to judge professional worth."
        ]
      },
      {
        "heading": "Privacy and retention",
        "paragraphs": [
          "Store the matter records, guidelines, and intake checklists in a controlled folder with access limited to the study team. Remove client names, matter details, and specific rates from the analysis file when they are not needed. If an example is shared, use a role label and redact the client and the matter. Keep privileged material in a separate restricted location.",
          "Do not circulate a client-level or assistant-level list about guideline completeness outside the management context. Aggregate the results before sharing them more broadly, and check that a small group cannot be re-identified. The same rule applies to screenshots of the matter system and to quoted messages. Privacy is part of the method, not an afterthought added at the end."
        ]
      },
      {
        "heading": "Applying the result",
        "paragraphs": [
          "Choose one change that matches the most common gap. If the source is missing, make the guideline link a required intake field. If the owner is missing, assign it automatically by practice group. If the questions are missing, generate them from the client's template. Test the change on one intake channel before applying it broadly.",
          "A higher completeness rate is not the only useful outcome. Faster first invoices and fewer rejections can improve the process even when the rate stays similar. Report the direct result and the service result separately. Stop the change if it becomes a field that the team fills in after the matter is open."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the audit each quarter and after any change to the intake system, the guideline repository, or the client mix. Keep the definitions and the unit stable so periods can be compared. Report the matters that were excluded or still open beside the main rate. Review the coding guide after the first repetition and keep the changes visible.",
          "Review the result with the billing manager and the intake team, not only with the preparer. Ask which fix is easiest to sustain and which gap causes the most rework. Set one change and a follow-up date, then check whether the change held. The next audit should test the repair, not just repeat the same count."
        ]
      }
    ],
    "sources": [
      {
        "label": "American Bar Association Model Rules of Professional Conduct",
        "url": "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/"
      },
      {
        "label": "Legal Electronic Data Exchange Standard",
        "url": "https://ledes.org/"
      },
      {
        "label": "U.S. Government Accountability Office Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "U.S. Census Bureau",
        "url": "https://www.census.gov/"
      }
    ],
    "publishedAt": "2026-11-16",
    "thumbnail": "/thumbnails/november-16/what-share-of-new-matters-lack-a-billing-guideline-record.webp"
  },
  {
    "slug": "how-often-do-accrual-estimates-differ-from-the-invoice-that-follows",
    "title": "How often do accrual estimates differ from the invoice that follows?",
    "summary": "A reconciliation study that compares each quarterly accrual estimate with the invoice that followed and classifies the causes of material variance.",
    "cluster": "Accruals",
    "finding": "Accrual variance is often treated as a forecasting problem, but much of it comes from unbilled time that was held, written down, or never entered before the cutoff.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This protocol asks how often a quarterly accrual estimate differs from the invoice that follows it. The unit is a matter-level accrual line, and the measure is the absolute difference between the estimate and the invoiced amount. The study covers accruals delivered to corporate clients during the period. It does not evaluate whether the client's accounting treatment was correct.",
          "Scope the study to matters with an accrual estimate and an invoice issued within the following two quarters. Include matters that were invoiced in full, in part, and not at all so the denominator reflects the full portfolio. Exclude matters with no accrual line and record the number excluded. State the accrual definition, the billing system, and the owner of the analysis."
        ]
      },
      {
        "heading": "Defining the event",
        "paragraphs": [
          "Define a material variance as a difference above a threshold agreed with the client, such as a percentage of the estimate or a fixed amount. A variance below the threshold is still recorded but grouped separately. The estimate date is the date the packet was delivered, not the date the work was prepared. A later revision creates a new estimate and a separate comparison.",
          "Distinguish a timing variance from a value variance. A timing variance occurs when the work is invoiced in a later quarter than estimated, while a value variance occurs when the invoiced amount itself differs. Keep the two categories separate because the client response differs. A timing variance may need only an explanation, while a value variance may need a process change."
        ]
      },
      {
        "heading": "Population and denominator",
        "paragraphs": [
          "The population is every matter-level accrual line in a delivered packet that meets the inclusion rule. Report the number of packets, the number of lines, the number excluded, and the number in the final sample. Count lines rather than packets, because one packet can contain many matters. Keep the unit stable across quarters so the variance rate is comparable.",
          "Report the share of lines with any variance and the share with a material variance. Also report the median absolute difference and the total signed difference so offsetting errors are visible. A high variance rate with a small total difference may be less concerning than the reverse, so report both. The signed difference shows whether the firm tends to estimate high or low across the portfolio."
        ]
      },
      {
        "heading": "Evidence sources",
        "paragraphs": [
          "Use the delivered accrual packet, the invoice, the time and cost detail, and the client's confirmation as the primary evidence. Compare the estimate line with the invoice line and record the date each was observed. If the invoice was revised, use the final version and note the revision date. The evidence log should let a second reviewer repeat the comparison.",
          "Rank the sources so reviewers know what to trust first. A delivered packet is stronger than a draft, and a final invoice is stronger than a pro forma. A client confirmation is stronger than an internal assumption about what was accepted. Record the evidence type for each line so the analysis can separate a communication gap from a calculation error."
        ]
      },
      {
        "heading": "Sampling",
        "paragraphs": [
          "Sample across clients, matter sizes, and quarters so one large matter does not define the result. Include lines that were estimated accurately, because the clean cases are part of the distribution. Draw the sample before reading the invoice so the selection is not biased toward the variances. If the population is small, review every line and extend the period.",
          "Stratify the sample by whether the matter had unbilled time held for review at the cutoff. A matter with held time may show a larger timing variance than one with a clean cutoff. Report the variance rate for each stratum rather than pooling them. The reader should be able to see whether the estimate or the cutoff explains the difference."
        ]
      },
      {
        "heading": "Coding the record",
        "paragraphs": [
          "Use a short code list that points to a specific repair. Code each variance as timing, rate change, scope change, held time, write-down, cost estimate, or unknown. Add the amount and the quarter. Keep the code list short enough that two reviewers can apply it consistently.",
          "Have a second reviewer code a sample and compare the results. Resolve disagreements by returning to the packet and the invoice, not by majority vote. Report the agreement rate and revise any code that is applied inconsistently. If the reviewers cannot agree on the primary cause, stop and fix the definitions before continuing."
        ]
      },
      {
        "heading": "Measuring the variable",
        "paragraphs": [
          "Measure the absolute variance, the signed variance, and the variance as a share of the estimate. Report the median and the range so a few large matters are visible. Measure the time between the estimate date and the invoice date, because a long gap increases the chance of a timing difference. Keep the raw entries with the analysis file.",
          "Do not convert the variance to a revenue or profitability figure without the approved fee and collection data. The study measures estimate accuracy, not financial performance. If the firm wants a revenue view, run it separately with the finance owner. A precise number built on an estimated rate is less useful than a clear variance distribution."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the overall variance rate, the material variance rate, and the median absolute difference. Show the results by cause and by client. Compare only groups with similar accrual definitions and cutoff rules. Include the lines that matched so the report shows the full distribution.",
          "Give the reader one table that answers the main question and put the coding detail in an appendix. Write the finding in plain language before presenting the technical definition. Include the cases that contradict the pattern rather than hiding them in an average. A report that cannot be acted on is just another record of the past."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "A variance is not proof that the estimate was careless, and a match is not proof that the method is sound. Report the completeness of the packet and invoice evidence before drawing a conclusion. Small samples, changing scopes, and reviewer disagreement can all limit interpretation. A single large matter can move the total even when most lines are accurate.",
          "Avoid comparing clients that use different accrual definitions or billing cycles. A client with a fiscal quarter that differs from the calendar quarter will produce a different timing pattern. Describe the context beside the rate and avoid ranking individual preparers. The purpose is to improve the estimate, not to judge professional worth."
        ]
      },
      {
        "heading": "Privacy and retention",
        "paragraphs": [
          "Store the accrual packets, invoices, and client confirmations in a controlled folder with access limited to the study team. Remove client names, amounts, and matter details from the analysis file when they are not needed. If an example is shared, use a role label and redact the client and the amount. Keep the unredacted evidence separate from the working analysis.",
          "Do not circulate a client-level or preparer-level list about accrual variance outside the management context. Aggregate the results before sharing them more broadly, and check that a small group cannot be re-identified. The same rule applies to screenshots of the packet and to quoted messages. Privacy is part of the method, not an afterthought added at the end."
        ]
      },
      {
        "heading": "Applying the result",
        "paragraphs": [
          "Choose one change that matches the most common cause. If held time dominates, separate held work from the estimate and explain it in the packet. If rate changes dominate, confirm the approved rate before the cutoff. If costs dominate, add a vendor estimate check. Test one change on the next quarter before applying it broadly.",
          "A lower variance rate is not the only useful outcome. A clearer packet and fewer client questions can improve the relationship even when the rate stays similar. Report the direct result and the service result separately. Stop the change if it makes the packet longer without improving the estimate."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the study each quarter and after any change to the accrual definition, the billing system, or the client mix. Keep the definitions and the unit stable so periods can be compared. Report the lines that were excluded or still open beside the main rate. Review the coding guide after the first repetition and keep the changes visible.",
          "Review the result with the billing manager and the client relationship owner, not only with the preparer. Ask which fix is easiest to sustain and which cause creates the most client questions. Set one change and a follow-up date, then check whether the change held. The next study should test the repair, not just repeat the same count."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Government Accountability Office Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Internal Revenue Service recordkeeping guidance",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep"
      },
      {
        "label": "Legal Electronic Data Exchange Standard",
        "url": "https://ledes.org/"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "U.S. Census Bureau",
        "url": "https://www.census.gov/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      }
    ],
    "publishedAt": "2026-11-16",
    "thumbnail": "/thumbnails/november-16/how-often-do-accrual-estimates-differ-from-the-invoice-that-follows.webp"
  },
  {
    "slug": "how-much-review-time-is-spent-tracing-missing-matter-references",
    "title": "How much review time is spent tracing missing matter references?",
    "summary": "A time study that measures the review minutes spent tracing cost and time lines that lack a usable matter reference.",
    "cluster": "Invoice quality",
    "finding": "A missing matter reference looks like a small data defect, but it pushes a line out of the normal review path and into manual tracing that is rarely counted.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This protocol asks how much invoice review time goes to lines that lack a usable matter reference. The unit is a review minute attached to a line, and the measure is the active time spent searching for the matter, confirming the allocation, and correcting the record. The study covers the invoice review stage before release. It does not evaluate the quality of the underlying legal work.",
          "Scope the study to invoices with at least one time or cost line reviewed during the period. Include invoices that were released, held, and adjusted so the denominator reflects the full workload. Exclude invoices with no lines and record the number excluded. State the billing system, the matter master, and the owner of the time log."
        ]
      },
      {
        "heading": "Defining the event",
        "paragraphs": [
          "Define a missing reference as a line that cannot be matched to a matter using the reference on the invoice, the client matter number, or the timekeeper's default matter. A line with a reference that is merely formatted differently is a formatting issue, not a missing reference. A line with a valid matter but the wrong client number is an allocation issue. Write two examples and one boundary case before coding.",
          "Distinguish a missing reference from an ambiguous one. A missing reference has no usable identifier, while an ambiguous reference points to more than one matter. The repair differs, so code the two separately. A line that is later matched after a search is still a missing-reference event for the time study."
        ]
      },
      {
        "heading": "Population and denominator",
        "paragraphs": [
          "The population is every reviewed line on an included invoice. Report the number of invoices, the number of lines, the number excluded, and the number in the final sample. If a line was reviewed more than once, count the active minutes from each pass but keep the line as one unit. State how rework was handled in the coding guide.",
          "Report the review minutes per line and the share of minutes spent on missing-reference lines. A high share can reflect a few complex invoices, so report the number of invoices behind the share. Keep the raw time entries with the analysis file. The denominator should include the lines that were cleared quickly, not only the problem cases."
        ]
      },
      {
        "heading": "Evidence sources",
        "paragraphs": [
          "Use the invoice, the matter master, the time and cost detail, and the reviewer's time log as the primary evidence. Compare the line reference with the matter master and record the date each was observed. If the time log is missing, mark the line as incomplete rather than estimating from memory. The evidence log should let a second reviewer repeat the match.",
          "Rank the sources so reviewers know what to trust first. A contemporaneous time log is stronger than a later estimate, and the matter master is stronger than a billing note. A client matter number is stronger than an internal shorthand. Record the evidence type for each line so the analysis can separate a data gap from a real review burden."
        ]
      },
      {
        "heading": "Sampling",
        "paragraphs": [
          "Sample across clients, matter types, and invoice sizes so one large invoice does not define the result. Include lines that were clear, because the review time for a clean line is part of the baseline. Draw the sample before reading the outcome so the selection is not biased toward the difficult cases. If the population is small, review every line and extend the period.",
          "Stratify the sample by whether the line came from a time entry or a cost entry. Cost lines may lack a matter reference more often because they originate with a vendor. Report the minutes per line for each stratum rather than pooling them. The reader should be able to see where the review burden actually sits."
        ]
      },
      {
        "heading": "Coding the record",
        "paragraphs": [
          "Use a short code list that points to a specific repair. Code each line as clear, missing reference, ambiguous reference, wrong client number, or other, and record the stage where the issue was found. Add the number of search steps and the outcome. Code the line as cleared, corrected, or escalated so the time can be interpreted.",
          "Have a second reviewer code a sample and compare the results. Resolve disagreements by returning to the matter master and the invoice, not by majority vote. Report the agreement rate and revise any code that is applied inconsistently. If the reviewers cannot agree on what counts as usable, stop and fix the definition before continuing."
        ]
      },
      {
        "heading": "Measuring the variable",
        "paragraphs": [
          "Measure active review minutes with a short log completed at the moment of the work. Separate the time spent searching, confirming, correcting, and communicating so the largest component is visible. Report the median and the range rather than a single average, because one complex invoice can dominate a mean. Keep the raw entries with the analysis file.",
          "Do not convert the minutes to a dollar figure without an approved labor rate and a clear statement that it is an internal estimate. The study measures effort, not price. If the firm wants a cost view, run it separately with the finance owner. A precise number built on rounded guesses is less useful than a range with a clear source."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the overall minutes per line, the share spent on missing-reference lines, and the number of invoices behind each figure. Show the median and range for each issue type and the most common stage where the issue was found. Compare only groups with similar client and matter mixes. Include the clean lines so the report shows the full distribution.",
          "Give the reader one table that answers the main question and put the coding detail in an appendix. Write the finding in plain language before presenting the technical definition. Include the cases that contradict the pattern rather than hiding them in an average. A report that cannot be acted on is just another record of the past."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "Self-reported time can be rounded, and a missing log is not proof that no review occurred. Report the completeness of the time evidence before drawing a conclusion. Small samples, changing matter structures, and reviewer disagreement can all limit interpretation. A line that was cleared quickly may still have required a search that the reviewer did not log.",
          "Avoid comparing invoices that differ in cost volume or client requirements. A matter with many vendor costs will produce a different pattern from one with a single fee. Describe the context beside the minutes and avoid ranking individual reviewers. The purpose is to improve the intake and the matter master, not to judge professional worth."
        ]
      },
      {
        "heading": "Privacy and retention",
        "paragraphs": [
          "Store the invoices, matter master, and time logs in a controlled folder with access limited to the study team. Remove client names, amounts, and matter details from the analysis file when they are not needed. If an example is shared, use a role label and redact the client and the matter. Keep the unredacted evidence separate from the working analysis.",
          "Do not circulate a reviewer-level or client-level list about review time outside the management context. Aggregate the results before sharing them more broadly, and check that a small group cannot be re-identified. The same rule applies to screenshots of the billing system and to quoted vendor messages. Privacy is part of the method, not an afterthought added at the end."
        ]
      },
      {
        "heading": "Applying the result",
        "paragraphs": [
          "Choose one change that matches the most common issue. If the matter master is incomplete, add a required reference before a line can be posted. If vendor costs lack a reference, require the matter number on the purchase order. If the client number is wrong, fix the mapping at intake. Test the change on one client before applying it broadly.",
          "A lower minutes-per-line figure is not the only useful outcome. Fewer client questions and a cleaner matter master can improve the process even when the minutes stay similar. Report the direct result and the service result separately. Stop the change if it pushes the check into a private channel where it cannot be reviewed."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Repeat the study each invoice cycle and after any change to the matter master, the cost intake, or the billing system. Keep the definitions and the unit stable so periods can be compared. Report the lines that were excluded or still open beside the main measure. Review the coding guide after the first repetition and keep the changes visible.",
          "Review the result with the billing manager and the matter master owner, not only with the reviewer. Ask which fix is easiest to sustain and which issue creates the most rework. Set one change and a follow-up date, then check whether the change held. The next study should test the repair, not just repeat the same count."
        ]
      }
    ],
    "sources": [
      {
        "label": "Legal Electronic Data Exchange Standard",
        "url": "https://ledes.org/"
      },
      {
        "label": "U.S. Government Accountability Office Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Internal Revenue Service recordkeeping guidance",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep"
      },
      {
        "label": "Federal Trade Commission data security guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "United States Department of Labor work hours guidance",
        "url": "https://www.dol.gov/general/topic/workhours"
      }
    ],
    "publishedAt": "2026-11-16",
    "thumbnail": "/thumbnails/november-16/how-much-review-time-is-spent-tracing-missing-matter-references.webp"
  }
];
