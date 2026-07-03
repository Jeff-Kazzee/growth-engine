# Growth Engine

A growth strategist for builders, creators, freelancers, and anyone trying to become known for something real. It finds evidence-backed opportunities, researches niches deeply, sharpens your public positioning — and unlike one-shot prompts, it **remembers everything and holds you accountable** between sessions.

It starts by interviewing you: who you are, what you want your brand to be, and what you want to stand out as. Everything else builds on that.

No hype, no guru sludge. It rejects weak ideas, kills stale commitments, and refuses to let you claim things you haven't earned.

## Three ways to use it

**1. As a Claude plugin (Cowork / Claude Code)**
Download `dist/growth-engine.plugin` and drop it into a Cowork chat, or install via Settings → Capabilities. In Claude Code: clone this repo and run `claude plugin install ./growth-engine`. Then say **"set up my growth engine"**.

**2. As individual skills (Claude, Zo Computer, any SKILL.md-compatible agent)**
Each folder in `skills/` is self-contained — take only what you want.
- **Zo Computer**: copy any `skills/<name>/` folder into your Zo `Skills/` directory (same SKILL.md format). Keep the `growth-engine/` memory folder in your Zo files.
- **Claude Code**: copy folders into `~/.claude/skills/`.

**3. As plain prompts (any AI, no plugin system at all)**
The `prompts/` folder has portable versions of everything — paste into Zo, Claude, ChatGPT, or whatever you use. See `prompts/README.md` for how to keep the memory working manually.

## The skills

| Skill | Say something like | What happens |
|---|---|---|
| **growth-setup** | "set up my growth engine" | Interviews you and researches your public work to build your profile + memory folder. Run first. |
| **opportunity-radar** | "scan for opportunities in X" | Hunts real-world changes (new APIs, broken workflows, community pain, pricing shifts) → ranked, evidence-backed opportunity list. |
| **niche-wiki** | "build a research wiki on X" | Deep-researches a niche into a living markdown knowledge base: market map, personas, pain points, datasets, project ideas. |
| **brand-positioning** | "work on my positioning" | Truthful, memorable positioning: statements, bios, content pillars, proof-asset plan, anti-positioning. |
| **growth-review** | "run my growth review" | The accountability core: scores follow-through, kills stale bets, audits your proof pipeline, flags drift from goals. |
| **growth-retro** | "retro the growth engine" | The system improves itself: reviews what advice worked and updates a playbook every other skill obeys. |

## The memory folder

Everything lives in a plain-markdown `growth-engine/` folder in your workspace — readable, editable, yours:

```
growth-engine/
├── profile.md          # who you are: skills, projects, goals, constraints, tone
├── playbook.md         # learned rules — what works for YOU; all skills obey this
├── watchlist.md        # signals being monitored + what would trigger action
├── decision-log.md     # append-only log of verdicts and commitments
├── proof-assets.md     # public proof pipeline (posts, repos, demos)
├── learning-roadmap.md # skill gaps mapped to opportunities
├── positioning.md      # current positioning system + score history
├── reviews/            # dated accountability reviews
└── wikis/              # niche research wikis
```

## Why memory matters

A brilliant one-shot answer you never revisit changes nothing. A system that remembers what you committed to, checks whether you shipped it, kills what's stale, and learns which advice you actually use — that compounds. The suggested rhythm: setup once, radar/wiki when exploring, positioning when publishing, **review every two weeks**, retro monthly.

## License

MIT — use it, fork it, share it.