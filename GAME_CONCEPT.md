# Cultivation Life — Game Concept and Implementation

Updated: September 10, 2026

## Vision
A text-based life simulation and cultivation RPG inspired by BitLife and Murim fiction. Live an ordinary or extraordinary life through family, school, work, relationships, chance encounters and cultivation. The reward is an interesting personal story, not simply larger numbers.

The original long-term proposal is preserved in docs/ORIGINAL_GAME_CONCEPT.md. This document distinguishes the playable prototype from future ambitions.

## Current technology
React 19, Vite 6 and TypeScript. Browser localStorage saves one current life automatically. No accounts, backend or cloud saves are implemented. Starting another life replaces the current save after confirmation and character creation. Portrait assets are supplied by the project owner and rendered from local image sheets.

## Character creation
Players choose a name, Male or Female, a child portrait and an adult portrait. Portrait choices are filtered by gender: the top row of every sheet is male, the bottom row female. A baby icon is shown before age 3, the child portrait from 3–17, and the selected adult portrait from 18. Older saves without an adult portrait can receive an adulthood appearance prompt.

Unlimited animated fate rerolls randomize village, family, spiritual root, talent, personality and attributes. Name, gender and portrait choices remain unchanged during rerolls. The Fate Guide lists all outcomes, probabilities, current selections and implemented effects.

- Villages: Blackwind, Jadebrook, Pinecloud, Redstone.
- Families: farming, merchant, declining martial clan, poor laborers, herbalists, blacksmiths, scholars, minor nobles. Starting silver ranges from 5 to 80.
- Roots: Fire, Water, Wood, Earth, Metal. Elemental affinities are descriptive pending technique systems.
- Talent: Modest, Promising, Exceptional.
- Attributes: strength, intelligence, charisma, constitution, perception, willpower, luck. Initial rolls range from 5 to 20; not all attributes yet affect outcomes.
- Personalities: Patient, Ambitious, Kind, Disciplined, Reckless. Patient grants +10% cultivation speed; Disciplined grants +15%.

New lives begin at age 0 with a chronicle entry describing the family, village and named mother and father.

## Main interface and Chronicle
The top bar consistently shows a clickable player portrait and name, silver and age. Clicking the identity opens the Character dialog with attributes, portrait and Inner Path, including manual breakthroughs. Character is not a sidebar tab.

Chronicle is a fixed-height story screen with an independently scrolling journal. All entries are grouped by age in ascending order, with events in their chronological order inside each group. There are no previous/next pages. The journal follows new entries when the reader is already near its bottom; a Latest button returns to the newest entries. Header and bottom controls stay outside the journal scroll area.

The persistent bottom bar contains Spend a Year on the left, health, the central + Age Up button, realm with a small qi progress bar, and Relationships on the right. The other menus include Cultivation, Activities and Inventory. School is hidden before age 6 and replaced by Occupation after graduation.

## Time, actions and events
Age Up advances one year and resets three activity points. Outings, individual social interactions and school tasks consume these points without immediately advancing age. Spend a Year offers cultivation, work, rest and connecting with people; each advances one year.

Random decision pop-ups are occasional rather than mandatory each year: a 30% roll is used when an intervening quiet year has elapsed. Scheduled consequences can still occur when due. Resolving a pop-up records the choice in the chronicle. Every aged year also creates an age-appropriate background story. NPC milestones, education, jobs, purchases and major decisions add further entries.

Event content includes childhood experiences, village celebrations, lost money, traders, shrines, caravans, rivalries and injured strangers. Helping a stranger can be repaid five years later; humiliation can return as a confrontation after eight years. These are currently authored rules, not a general simulation of every possible consequence.

## Martial school
Enrollment occurs at age 6; a one-time welcome explains annual qi, school progression and activity points. School lasts until graduation at 18.

Grades and conduct are tracked from 0 to 100. Assignments improve grades and intelligence; practice improves strength and willpower. Students can open classmates' or teachers' profiles to talk, befriend, seek guidance, train or fight. Fights can damage health, conduct, grades and relationships. Grades decline by 2 at the start of each school year.

Daily lessons grant yearly qi based on talent, grades and cultivation bonuses. A qualifying student automatically makes a supervised breakthrough, at most one per school year, up to Foundation Establishment. Independent idle cultivation unlocks at 12. Graduation records the final school results and opens Occupation.

## Cultivation
Realms: Mortal → Qi Gathering → Foundation Establishment → Core Formation → Nascent Soul. Detailed early/middle/late/peak stages are not implemented.

Year-long cultivation gains qi using talent, willpower and speed bonuses, at a small health cost. Real-time idle cultivation has a start/pause control, does not advance age, and accrues at a displayed qi-per-minute rate. Away-time gains are capped at four hours per absence. Idle gains pause during unresolved events and stop after death or at the highest implemented realm.

Speed bonuses add together: living master +25%, clan +10%, Patient +10% or Disciplined +15%, equipped spirit jade +20% or breathing manual +35%. Only one boosting item can be equipped. The Cultivation screen displays the portrait, progress, rate and bonus breakdown, with a subtle breathing glow.

Manual breakthroughs consume a realm-dependent qi threshold. Success depends on talent, willpower and health, capped at 90%; failure removes 22 health and can kill an injured character. School-supervised breakthroughs use the separate rules above. Breakthrough results and training actions receive simple visual feedback respecting reduced-motion preferences.

## NPCs and relationships
New lives generate parents, a childhood acquaintance and villagers. School generates an instructor and four classmates. Masters can be acquired through activities. Reusable name, background, personality, trait and occupation templates produce variations between runs. Generated records persist in the save.

NPC profiles show identity, explicit Male/Female gender, child/adult portrait assignment, age, role/job, realm, root, talent, personality, background, goal, wealth, qi, stats, bond and shared memories. Child portraits become adult portraits at age 18. NPCs age, cultivate, improve willpower, gain adult income and can die. Their goals and many descriptive traits currently provide flavor rather than autonomous decision-making.

Lists contain clickable names/portraits rather than interaction buttons. All individual actions are inside the profile. Relationships is divided into Parents and Friends; acquaintances are found at school or Activities → People. Befriending raises bond by 12 and establishes friendship at 60. Serious school fights may end a friendship. Talking, gifts, sparring and school interactions consume activity points and can leave memories.

## Activities, inventory and assets
Activities is organized into category buttons: People, Training, Market, Alleys, Royal Office and Clans. Opening a category reveals its choices.

Training raises strength and willpower at a health cost. Market work earns silver. Alleys can yield a spirit herb or injury. Royal errands raise favor and reputation and pay silver. A reputation requirement gates acquiring a master or joining the Azure Reed Clan.

Inventory lists owned consumables and equipment, silver, royal favor, clan and family residence. The residence is informational, not a tradable property. Market purchases include recovery pills, spirit herbs, spirit jade and breathing manuals. Items can be consumed or equipped; ownership, costs and effects are enforced.

## Occupations
Graduates aged 18+ can apply for six jobs: village laborer, merchant assistant, caravan guard, herbalist apprentice, martial instructor and imperial clerk. Requirements use school results, intelligence, strength and cultivation realm. A basic laborer position has no additional academic/stat requirements beyond adulthood and graduation.

A character holds one job. Applying or changing jobs gives no immediate payment. Salary is paid once whenever a year passes, including year-long activities. Players can resign. Current annual salaries range from 25 to 110 silver. Promotions and job-specific event chains are future work.

## Death and saves
Health depletion, cultivation failure, dangerous encounters and old age can end a life. Lifespan increases with realm. Death disables progression and provides a summary of age, realm, wealth, reputation and a legacy score. The score currently describes only this run; previous generations and histories do not carry forward.

Existing save migrations add newer fields without rerolling established characters. Saves are local to the browser and origin. A localhost save will not automatically transfer to a hosted domain.

## Content organization
- src/game.ts: simulation, actions, NPC progression, jobs and compatibility defaults.
- src/pools.ts: reusable names, NPC templates, descriptive traits/backgrounds and additional main/background events. Some original authored events remain in game.ts.
- src/Chronicle.tsx: age-grouped journal.
- src/Creation.tsx: character creation, fate guide and reusable modal.
- src/School.tsx: school interface and portrait rendering.
- src/NPC.tsx: NPC lists, profiles and portraits.
- src/Mechanics.tsx: cultivation, activity categories, inventory and relationships.
- src/Occupation.tsx: job requirements and applications.
- src/main.tsx and src/style.css: app layout, saved state and presentation.
- public/: original portrait sheets used by the game.

## Planned, not yet implemented
Detailed combat and techniques; equipment slots; alchemy and crafting; travel and distinct regional event pools; richer careers and promotions; autonomous NPC marriages, children and politics; persistent clans across lives; inheritance; sect wars; imperial simulation; accounts and cloud saves; achievements and leaderboards. The current small job/clan/NPC systems are foundations rather than complete versions of that long-term vision.

## Development and hosting
Run npm install, npm run dev. Validate with npm test and npm run build. Vite outputs a static site in dist. The project can be imported into Vercel using its Vite preset, npm run build, and dist as the output directory. No environment variables or backend services are currently required.

Core design rule: Does this create an interesting story or decision?
