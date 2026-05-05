# Low Ember Codex Workflow

## Build Method

Work in phased prompts. Do not ask Codex to build the full homepage in one pass.

## Phase Sequence

1. Create scaffold and architecture.
2. Add design tokens and global style foundation.
3. Add site constants and homepage data model.
4. Build shared UI primitives.
5. Build layout components.
6. Build header and hero.
7. Build feature strip and dining cards.
8. Build kitchen and bar sections.
9. Build room and private dining sections.
10. Build happenings, location, and footer.
11. Run responsive QA.
12. Run accessibility QA.
13. Run lint/build cleanup.
14. Prepare final commit before merge.

## Validation Commands

Use:

npm run lint
npm run build

Also run:

git status

before reporting completion.

## Git Checkpoints

Recommended commits:

- Initial Next.js scaffold
- Create Low Ember scaffold and architecture
- Add Low Ember design tokens
- Add Low Ember homepage data model
- Add Low Ember UI primitives
- Build Low Ember header and hero
- Build Low Ember feature sections
- Build Low Ember kitchen and bar sections
- Build Low Ember room private dining and happenings
- Add Low Ember location and footer
- Improve Low Ember responsive behavior
- Improve Low Ember accessibility and build quality

## Branching

Primary feature branch:

feature/low-ember-homepage

Do not merge into main until:
- homepage is implemented
- npm run lint passes
- npm run build passes
- responsive QA is complete
- accessibility QA is complete
- user has reviewed the local/Vercel result
