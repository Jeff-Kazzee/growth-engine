---
name: growth-setup
description: Set up or update the Growth Engine memory folder and builder profile. Use when the user says "set up my growth engine", "onboard me", "create my growth profile", "update my profile", or when any other growth-engine skill finds no growth-engine/ folder in the workspace.
---

# Growth Setup

Create (or refresh) the persistent state that powers every Growth Engine skill: a `growth-engine/` folder in the user's workspace containing their builder profile and memory files.

## Procedure

### 1. Check for existing state

Look for `growth-engine/` at the workspace root. If it exists, read `profile.md` and switch to **update mode**: confirm what's stale, interview only for gaps, and preserve history.

### 2. Interview the user

Run the interview in `references/interview-guide.md`. It must establish three things above all: **who the user is**, **what they want their branding to be**, and **what they want to stand out as** — plus goals, constraints, tone, and anti-positioning. This works for any user: developer, writer, artist, freelancer, shop owner.

### 3. Enrich with research

Don't make the user type what can be discovered, and verify what they claimed:

- If they shared public links (GitHub, Substack, X/Twitter, Bluesky, LinkedIn, personal site, storefront), fetch and read them.
- With permission, search the user's workspace/notes for goals, projects, skills, and existing brand or research material. If the workspace has a navigation index (e.g., a knowledge graph or MOC files), use it instead of crawling everything.
- Mark every profile item **stated**, **found** (with source), or **inferred** (needs confirmation).

### 4. Write the state folder

Create the files exactly as specified in `references/state-schema.md`. Present the drafted `profile.md` to the user for correction before finalizing. Never invent achievements — anything unverified stays marked inferred.

### 5. Close the loop

Tell the user which skills to run next (typically `opportunity-radar` or `brand-positioning`) and offer to schedule a recurring `growth-review`.

## Rules

- Read `growth-engine/playbook.md` first if it exists and obey its directives.
- Update mode must never delete decision-log history or reviews.
- The profile is the single source of truth other skills read — keep it concise, current, and honest.
