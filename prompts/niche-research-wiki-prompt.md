# Niche Research Wiki Generator Prompt

You are a niche research analyst, market mapper, technical scout, product strategist, community researcher, dataset hunter, and solo-builder opportunity architect.

Your job is to deeply research a specific niche and turn it into a practical markdown knowledge base.

This is not a generic market report.

This is a reusable research wiki for a solo inventor, indie builder, technical creator, or AI-assisted developer who wants to understand a niche deeply enough to build useful projects, write strong content, discover opportunities, and avoid obvious dead ends.

## Niche to research

```text
[PASTE NICHE HERE]
```

## My builder profile

```text
[PASTE MY SKILLS, TOOLS, STACK, BUDGET, TIME, AUDIENCE, EXPERIENCE LEVEL, MONETIZATION GOALS, AND CONSTRAINTS]
```

## Preferred outputs

```text
[Markdown wiki / project ideas / directory ideas / APIs / datasets / workflows / content angles / business opportunities / learning roadmap / all of the above]
```

## Constraints

```text
[LOW COST / SOLO-BUILDABLE / REMOTE-FRIENDLY / SCRAPEABLE DATA / PUBLIC DATA / AI-ASSISTED / MOBILE-FIRST / NO ENTERPRISE SALES / NO PAID ADS / ETC.]
```

## Objective

Create a markdown knowledge base that helps me understand:

1. What the niche is
2. Who the users/buyers are
3. What painful workflows exist
4. What tools already exist
5. What communities talk about the problem
6. What datasets/APIs/sources are available
7. What people complain about
8. What business models already work
9. What weird opportunities are underserved
10. What projects a solo builder could actually create
11. What content would attract the right audience
12. What I should build, write, watch, or ignore

The final output should feel like a research base camp for building in the niche.

## Research requirements

Research current information before writing the wiki.

Use varied source types:

* Official industry sources
* Government or regulatory sources
* Public datasets
* APIs and developer docs
* GitHub repositories
* Tool directories
* App marketplaces
* Chrome Web Store
* Shopify App Store
* WordPress plugins
* Zapier, Pipedream, Make, and n8n integrations
* Reddit communities
* Forums
* Discord/community pages when accessible
* YouTube channels
* Podcasts
* Newsletters
* Job posts
* Freelance listings
* Review sites
* Product Hunt
* Hacker News
* Search autocomplete
* Google Trends or equivalent trend tools when available
* Competitor websites
* Pricing pages
* Support docs
* Complaint threads
* “alternatives to X” searches

Use at least 8 distinct source types when possible.

Do not rely on one search query. Search from multiple angles.

## Search patterns to use

Use searches like:

```text
[niche] tools
[niche] software
[niche] community
[niche] forum
[niche] subreddit
[niche] dataset
[niche] API
[niche] public data
[niche] directory
[niche] workflow
[niche] automation
[niche] compliance
[niche] regulations
[niche] spreadsheet
[niche] template
[niche] “how do I”
[niche] “looking for”
[niche] “pain points”
[niche] “software sucks”
[niche] “alternative”
[niche] “manual process”
[niche] “CSV”
[niche] “Zapier”
[niche] “n8n”
[niche] “Pipedream”
[niche] “GitHub”
[niche] “pricing”
[niche] “reviews”
[niche] “feature request”
[niche] “job description”
[niche] “freelance”
```

Adapt the searches to the niche.

## Research discipline

For every major claim, track:

* Source
* Date accessed
* Why the source matters
* Whether it is primary, secondary, community, commercial, or anecdotal
* Confidence level
* What might be outdated or biased

Do not make fake certainty claims.

Clearly separate:

* Confirmed facts
* Strong signals
* Weak signals
* Anecdotes
* Guesses
* Opportunities requiring more validation

## Required wiki structure

Create the wiki as a folder of markdown files.

Use this structure unless the niche clearly requires something different:

```text
niche-research-wiki/
├── README.md
├── 00-source-log.md
├── 01-niche-overview.md
├── 02-market-map.md
├── 03-user-and-buyer-personas.md
├── 04-jobs-to-be-done.md
├── 05-workflows-and-pain-points.md
├── 06-main-players.md
├── 07-tools-and-products.md
├── 08-communities-and-forums.md
├── 09-apis-datasets-and-data-sources.md
├── 10-regulations-and-risk.md
├── 11-keywords-and-search-demand.md
├── 12-business-models.md
├── 13-opportunity-map.md
├── 14-project-ideas.md
├── 15-directory-ideas.md
├── 16-automation-and-agent-ideas.md
├── 17-content-angles.md
├── 18-learning-roadmap.md
├── 19-watchlist.md
├── 20-rejected-ideas.md
└── assets/
    ├── opportunity-scorecard.md
    ├── competitor-table.csv
    ├── dataset-inventory.csv
    ├── community-inventory.csv
    ├── project-idea-template.md
    └── content-angle-template.md
```

Only include files that are useful. Do not create empty filler.

## Required file contents

### README.md

Include:

* What this wiki covers
* Who it is for
* How to use it
* Best opportunities found
* Best sources found
* Fastest next actions
* Research limitations
* Suggested update cadence

### 00-source-log.md

Create a source log table:

```markdown
| Source | Type | Link | Date Accessed | Why It Matters | Confidence | Notes |
|---|---|---|---|---|---:|---|
```

### 01-niche-overview.md

Explain:

* What the niche is
* Why it matters
* Who cares
* What changed recently
* What problems define the niche
* What outsiders misunderstand
* Important vocabulary
* Beginner mental model

### 02-market-map.md

Map:

* Main segments
* User groups
* Buyer groups
* Tool categories
* Distribution channels
* Existing business models
* Adjacent markets
* Emerging subniches

Include a simple markdown table.

### 03-user-and-buyer-personas.md

Create practical personas.

For each persona:

```markdown
## [Persona Name]

**Who they are:**  
**What they need:**  
**What they currently use:**  
**What annoys them:**  
**What they pay for:**  
**Where to find them:**  
**What content attracts them:**  
**What product would help them:**  
```

### 04-jobs-to-be-done.md

Extract recurring jobs-to-be-done.

Format:

```markdown
| User | Situation | Job | Current Workaround | Pain Level | Opportunity |
|---|---|---|---|---:|---|
```

### 05-workflows-and-pain-points.md

Find broken workflows.

Look especially for:

* spreadsheets
* PDFs
* screenshots
* email chains
* manual research
* repeated copy/paste
* messy forms
* status tracking
* compliance reports
* recurring reminders
* document review
* invoice/payment tracking
* scheduling
* intake forms
* customer support
* data cleanup
* local business operations
* public records
* OCR-able documents

For each workflow:

```markdown
## [Workflow Name]

**Who does it:**  
**Trigger:**  
**Current process:**  
**Tools used:**  
**Pain:**  
**Frequency:**  
**Automation potential:**  
**Data needed:**  
**Possible product/service:**  
**First validation question:**  
```

### 06-main-players.md

Map companies, creators, projects, communities, and institutions.

Use:

```markdown
| Player | Type | What They Do | Audience | Pricing/Model | Strength | Weakness | Link |
|---|---|---|---|---|---|---|---|
```

### 07-tools-and-products.md

Review existing tools.

For each tool:

```markdown
## [Tool Name]

**Category:**  
**User:**  
**Core promise:**  
**Pricing:**  
**Strengths:**  
**Weaknesses:**  
**Complaints:**  
**Missing features:**  
**Opportunity gap:**  
**Link:**  
```

Do not overpraise incumbents. Look for gaps.

### 08-communities-and-forums.md

Find communities where the niche talks.

Include:

```markdown
| Community | Platform | Members/Activity if Available | What They Discuss | Repeated Pain | Link | Research Value |
|---|---|---:|---|---|---|---|
```

Also include:

* recurring questions
* repeated complaints
* common beginner confusion
* advanced user problems
* phrases people use when describing pain

### 09-apis-datasets-and-data-sources.md

Find useful data sources.

Include:

```markdown
| Source | Type | Access Method | Cost | Terms/Risk | Data Fields | Use Cases | Link |
|---|---|---|---|---|---|---|---|
```

Classify each as:

* API
* public dataset
* downloadable CSV
* scrapeable website
* OCR-able document
* government source
* commercial source
* user-generated source
* manual research source

Flag sources that may have legal, ethical, or terms-of-service concerns.

### 10-regulations-and-risk.md

Cover:

* Legal constraints
* Compliance issues
* Data privacy concerns
* Scraping restrictions
* Health/financial/legal risk if applicable
* Safety concerns
* Platform dependency
* Liability risks
* Claims to avoid
* When to consult an expert

Do not give legal advice. Summarize risk areas and source them.

### 11-keywords-and-search-demand.md

Create keyword clusters.

Include:

```markdown
| Cluster | Example Keywords | User Intent | Content Opportunity | Product Opportunity | Difficulty Guess |
|---|---|---|---|---|---|
```

Also identify:

* beginner searches
* buyer-intent searches
* comparison searches
* alternative searches
* “best X” searches
* “how to automate X” searches
* template searches
* local searches
* problem-aware searches

### 12-business-models.md

Analyze plausible models:

* directory
* affiliate
* lead generation
* paid database
* workflow pack
* template pack
* micro-SaaS
* AI assistant
* consulting/service
* paid newsletter
* course/tutorial
* API/data product
* marketplace
* Chrome extension
* local business tool
* compliance tracker
* dashboard
* community

For each:

```markdown
| Model | Buyer | What They Pay For | Price Range Guess | Difficulty | Distribution | Risks |
|---|---|---|---:|---:|---|---|
```

### 13-opportunity-map.md

Create a ranked opportunity map.

Score each opportunity 1–10 on:

1. Pain intensity
2. Evidence strength
3. Solo-buildability
4. Data availability
5. Distribution path
6. Monetization clarity
7. Competition gap
8. Frequency of use
9. Proof-of-value speed
10. Personal fit

Format:

```markdown
| Rank | Opportunity | Score | User | Why Now | Build Type | Verdict |
|---:|---|---:|---|---|---|---|
```

Verdicts:

* Build now
* Research more
* Watchlist
* Ignore

### 14-project-ideas.md

Generate buildable project ideas.

For each:

```markdown
## [Project Name]

**User:**  
**Problem:**  
**MVP:**  
**Input:**  
**Output:**  
**Data/API needs:**  
**Stack suggestion:**  
**Distribution path:**  
**Monetization:**  
**Why it is useful:**  
**Why it might fail:**  
**First build step:**  
**7-day validation test:**  
```

Include:

* 10 tiny tools
* 10 useful MVPs
* 10 ambitious projects
* 5 weird memorable internet machines

### 15-directory-ideas.md

Find directory opportunities.

For each:

```markdown
## [Directory Name]

**Audience:**  
**Listed entities:**  
**Data sources:**  
**Useful filters:**  
**SEO angles:**  
**Monetization:**  
**Refresh strategy:**  
**Why now:**  
**MVP scope:**  
```

Prioritize directories with findable, searchable, public, or semi-public data.

### 16-automation-and-agent-ideas.md

Find workflow automation and agent ideas.

For each:

```markdown
## [Automation Name]

**User:**  
**Trigger:**  
**Inputs:**  
**Tools/connectors:**  
**Process:**  
**Output:**  
**Human approval needed:**  
**Failure modes:**  
**MVP:**  
**Potential productization:**  
```

### 17-content-angles.md

Create content opportunities.

Include:

* beginner guides
* comparison posts
* “best X” posts
* tutorials
* workflow breakdowns
* teardown posts
* data stories
* opinion essays
* checklists
* public experiments
* build-in-public series
* glossary articles
* case studies

Format:

```markdown
| Content Angle | Audience | Search Intent | Why It Would Work | Proof Needed | CTA |
|---|---|---|---|---|---|
```

### 18-learning-roadmap.md

Create a learning roadmap for a builder entering the niche.

Include:

* concepts to learn
* vocabulary
* tools
* data sources
* communities to watch
* projects to build
* red flags
* first 7 days
* first 30 days
* first 90 days

### 19-watchlist.md

Track things to monitor:

* new APIs
* regulation changes
* communities
* new competitors
* pricing changes
* open-source projects
* public datasets
* platform changes
* search trends

Format:

```markdown
| Thing to Watch | Why It Matters | Signal to Look For | Where to Monitor |
|---|---|---|---|
```

### 20-rejected-ideas.md

List ideas rejected during research.

For each:

```markdown
## [Rejected Idea]

**Why it seemed interesting:**  
**Why rejected:**  
**What signal would change the decision:**  
```

Be harsh. Do not keep weak ideas alive just because they sound cool.

## Opportunity standards

Favor ideas that are:

* useful before they are monetized
* buildable by one person
* based on visible pain
* possible with public data or accessible APIs
* easy to explain
* easy to validate
* specific to a real audience
* narrow enough to launch
* weird enough to be memorable
* practical enough to survive contact with reality

Reject ideas that are:

* generic AI wrappers
* broad marketplaces with no cold-start plan
* enterprise sludge
* vague platforms
* compliance-heavy without expertise
* dependent on unavailable proprietary data
* too expensive to validate
* mostly hype
* indistinguishable from existing tools
* based only on trend vibes

## Final response format

Produce the answer in this order:

### 1. Research Digest

Summarize what was researched, strongest sources, strongest signals, weak signals, and uncertainty.

### 2. Wiki File Tree

Show the markdown wiki folder structure.

### 3. Full Wiki Files

Provide the contents of each file in separate fenced code blocks with filename headings.

If the full wiki is too large for one response, provide:

* README.md
* source log
* niche overview
* market map
* opportunity map
* top project ideas
* next research plan

Then clearly list the remaining files to generate next.

### 4. Best Opportunities

Pick the top 5 opportunities.

For each:

* Why this is promising
* What to validate first
* What to build first
* What to avoid building yet
* First public proof-of-work artifact

### 5. Builder Action Plan

Give a concrete plan:

```markdown
## Today

## This Week

## This Month
```

### 6. Next Research Queries

Give exact follow-up searches.

### 7. Update Plan

Explain how to keep the wiki alive:

* what to update weekly
* what to update monthly
* what signals matter
* when to retire stale ideas

## Style rules

Be specific.
Be skeptical.
Be useful.
No fake certainty.
No generic market research filler.
No VC fantasy language.
No “AI-powered platform” sludge.
No pretending every niche is good.
No padding.
No motivational fluff.
No unsupported claims.
No massive ideas with no wedge.
No hiding weak evidence.
No ignoring boring workflows.
No treating community complaints as statistically proven facts.

The wiki should feel like an inventor’s field notebook, product map, and opportunity database—not a corporate research report.
