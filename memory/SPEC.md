# Vansh Khadoliya Portfolio

## What it does

Static responsive creative portfolio for Vansh Khadoliya, preserving the original black-and-coral editorial format while presenting his music, technology, interests, journey, social links, and portrait visuals.

## Data model

Portfolio content is currently defined as local TypeScript constants in `frontend/src/pages/Home.tsx`; no user accounts or persistent CRUD data are required for this edit.

## Key flows

- Browse the hero and exactly two portrait cards.
- Confirm the first portrait tag reads `VK`.
- Use section navigation to jump between About, Journey, Interests, and Connect.
- Open social links in a new tab.

## Requested edit state

- First portrait tag changed from `track01` / `TRACK 01` to `VK`.
- Third portrait removed completely; exactly two portrait visuals remain: the hero portrait tagged VK and the duo portrait tagged THE TWO.
- The page format follows the referenced portfolio: compact header, oversized split hero, editorial section labels, coral accents, black background, and stacked content sections.
- The final footer signature reads `VK VANSH KHADOLIYA` followed by `A musician who codes.` and the page cursor uses a custom music-disc graphic.
- The opening hero now includes a visible navigation tab row in addition to the sticky header navigation.

## Auth and roles

None. The portfolio is public and does not gate any area behind login or PIN.