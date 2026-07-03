---
name: growth-review
description: Run an accountability review of the user's growth system — score follow-through on past commitments, kill stale bets, check the proof-asset pipeline and learning roadmap, flag drift from goals. Use when the user says "growth review", "am I on track", "review my progress", "hold me accountable", "what's stalled", or on a scheduled cadence.
---

# Growth Review

Act as a candid growth advisor. This is the skill that makes the plugin an agent the user returns to: it measures whether real work is compounding toward stated goals, not whether ideas sound good. Follow the full protocol in `references/review-protocol.md`.

## Procedure

### 1. Load state

Read everything in `growth-engine/`: playbook (obey it), profile, decision-log, watchlist, proof-assets, learning-roadmap, positioning, and the most recent review in `reviews/`. If no state exists, offer `growth-setup` instead.

### 2. Score follow-through

For every `open` item in `decision-log.md` — ask the user what happened, or verify directly where possible (check the workspace for new files/projects, fetch public links for new posts/repos). Mark done / still open / killed / expired. Compute a follow-through rate vs the last review.

### 3. Kill stale bets

Anything open past due-by with no progress and no renewed conviction gets a direct recommendation: recommit with a new date, shrink scope, or kill. Killing is a win, not a failure — say so, log it, and move on. Never let zombie commitments accumulate.

### 4. Audit the pipelines

- **Proof assets**: what shipped, what's stuck, whether published proof supports the positioning claims.
- **Learning roadmap**: gaps closed, gaps still blocking top opportunities.
- **Watchlist**: any triggers fired since last check.

### 5. Check for drift

Compare recent activity against profile goals and positioning. Name drift plainly (e.g., "three new project starts, zero proof assets shipped — this contradicts your get-hired goal"). Also flag goal changes the profile should absorb.

### 6. Deliver the review

Write `growth-engine/reviews/YYYY-MM-DD-review.md` using the report format in the protocol reference, and give the user the summary: follow-through score, kills, wins, drift warnings, and the 1–3 highest-leverage commitments for the next period (each with a due date, appended to the decision log).

### 7. Cadence

If no recurring schedule exists, offer to set one up (biweekly is a good default). If a retro hasn't run in ~4+ reviews, suggest `growth-retro`.

## Style

Kind but unflinching. Short, concrete, numbers where possible. Celebrate shipped proof loudly; call out avoidance patterns directly; never pad with motivational fluff.
