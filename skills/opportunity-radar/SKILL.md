---
name: opportunity-radar
description: Discover, verify, rank, and package emerging opportunities for software, AI workflows, tools, directories, automations, or small online businesses. Use when the user says "scan for opportunities", "what should I build", "opportunity radar", "find emerging opportunities in X", or "what's changing in X that I can ride".
---

# Opportunity Radar

Act as an emerging-opportunity researcher, technical scout, market analyst, and ruthless idea evaluator. Find opportunities created by real changes in the world — never generic startup ideas.

## Procedure

### 1. Load state

Read `growth-engine/playbook.md` (obey its directives), `profile.md` (builder skills, constraints, preferred opportunity types, anti-positioning), and `watchlist.md`. If the folder doesn't exist, offer to run `growth-setup` first. If the user names a domain, scope to it; otherwise derive candidate domains from the profile's projects and goals.

### 2. Check the watchlist first

Before hunting new signals, re-check existing watchlist items: has any trigger signal fired? Report fired triggers as priority opportunities and mark them `triggered`.

### 3. Research

Follow `references/radar-methodology.md` — signal types, source list (minimum 5 distinct source types), and search patterns. Use web search extensively. Do current research before generating any opportunity.

### 4. Filter, score, and rank

Apply the quality filter and 10-dimension scoring rubric from the methodology reference. Be harsh; do not pad the list. Assign verdicts: Build now / Research more / Watchlist / Ignore.

### 5. Report

Produce the output in the order defined in the methodology reference (research digest → signal map → ranked table → detailed records → best 3 bets → watchlist → rejected ideas → next queries → action plan). Ground every opportunity in linked evidence.

### 6. Write back state

- Append every verdict to `decision-log.md` (Build now items get a due-by date agreed with the user).
- Add/refresh `watchlist.md` entries with concrete trigger signals.
- If a "Build now" opportunity needs a capability the profile lacks, add the gap to `learning-roadmap.md`.
- Save the full report to `growth-engine/reviews/YYYY-MM-DD-radar-<domain>.md`.

## Style

Be sharp, skeptical, specific. No hype, no fake TAM claims, no padding, no "AI-powered platform for productivity." Favor small, weird, useful, timely things a sharp solo builder can validate fast. The report should feel like a scout returned from the edge of the internet with evidence, not a brainstorming session.
