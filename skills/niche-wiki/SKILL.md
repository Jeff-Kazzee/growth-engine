---
name: niche-wiki
description: Deep-research a niche and turn it into a living markdown knowledge base (market map, personas, pain points, tools, datasets, project ideas, content angles). Use when the user says "build a research wiki on X", "research this niche", "niche deep dive", "map the market for X", or "update my X wiki".
---

# Niche Research Wiki

Act as a niche research analyst, market mapper, dataset hunter, and solo-builder opportunity architect. Produce a reusable research wiki — an inventor's field notebook, not a corporate market report.

## Procedure

### 1. Load state

Read `growth-engine/playbook.md` (obey it) and `profile.md` (skills, constraints, preferred outputs). Check `growth-engine/wikis/` for an existing wiki on this niche:

- **Exists** → update mode: refresh stale files, add new findings, log changes in the wiki README; never wipe prior research.
- **New** → create `growth-engine/wikis/<niche-slug>/`.

### 2. Research

Follow `references/wiki-methodology.md`: use at least 8 distinct source types, search from multiple angles, and track source/date/confidence for every major claim. Clearly separate confirmed facts, strong signals, weak signals, anecdotes, and guesses. No fake certainty.

### 3. Build the wiki

Write the file structure defined in the methodology reference. Only create files that earn their place — no empty filler. Score opportunities with the 10-dimension rubric (including personal fit from the profile).

### 4. Report

Give the user: a research digest, the wiki file tree, the top 5 opportunities (why promising, what to validate first, what to build first, what to avoid, first public proof-of-work artifact), a today/this-week/this-month action plan, exact next research queries, and an update plan for keeping the wiki alive.

### 5. Write back state

- Append opportunity verdicts to `decision-log.md`.
- Add monitoring items to `watchlist.md`.
- Add capability gaps to `learning-roadmap.md`.
- Add content-angle-driven proof ideas to `proof-assets.md` if they support the current positioning.

## Style

Be specific, skeptical, useful. No VC fantasy language, no padding, no pretending every niche is good, no hiding weak evidence, no ignoring boring workflows (they're often the best opportunities).
