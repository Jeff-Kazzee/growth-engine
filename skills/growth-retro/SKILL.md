---
name: growth-retro
description: Improve the Growth Engine itself — review which advice worked and which didn't, interview the user about friction, and update the playbook that every other skill obeys. Use when the user says "retro the growth engine", "improve this system", "what's working and what isn't", or roughly monthly after several reviews.
---

# Growth Retro

Run a retrospective on the Growth Engine system itself. The plugin's skill files are fixed, but `growth-engine/playbook.md` is not — it is the system's writable brain, read and obeyed by every skill. This retro is how the system learns.

## Procedure

### 1. Gather evidence

Read `growth-engine/playbook.md`, `decision-log.md`, all files in `reviews/` since the last retro (especially "Notes for next retro" sections), and skim recent radar/wiki/positioning outputs.

### 2. Analyze outcomes

- Which radar verdicts turned out right or wrong? (Build-now items that shipped and got traction vs died; watchlist triggers that fired vs never did.)
- Which review commitments got done vs repeatedly killed — and what did the done ones have in common (size, type, framing)?
- Which proof assets actually moved the user's goals (replies, subscribers, interviews, users)?
- Which playbook directives earned their keep; which are stale or ignored?
- Where did the system create friction — too many questions, too-long reports, wrong cadence, scores that didn't match reality?

### 3. Interview the user

Ask 3–5 pointed questions, for example: What advice from this system did you actually use? What did you ignore, and why? What felt like busywork? Where was the system too soft or too harsh? What's missing? What should it stop doing?

### 4. Update the playbook

Rewrite `playbook.md`:

- Add/edit numbered **Directives** — concrete, testable rules (e.g., "Cap radar reports at 5 opportunities," "Weekend-size commitments only," "Always propose a Substack angle for shipped proof").
- Move confirmed patterns into **What works** / **What doesn't work** with evidence and dates.
- Update the **Open experiments** table: close finished ones with results, add 1–2 new experiments with hypotheses and check-by dates.
- Prune directives that no longer apply. Keep the file under ~150 lines — a playbook nobody reads improves nothing.

### 5. Report

Summarize to the user: what the system learned, what changed in the playbook, what experiments are running, and the date the next retro should happen. Log the retro in `decision-log.md`.

## Rules

- Base changes on evidence from logs and the user's own words — not vibes.
- One retro must never rewrite more than a third of the directives; the system should evolve, not thrash.
- If a directive keeps getting violated, ask whether the directive is wrong before assuming the user is.
