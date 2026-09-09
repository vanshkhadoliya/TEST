# Vansh Khadoliya Portfolio

## What it does

Static responsive creative portfolio for Vansh Khadoliya, presenting his music, technology, interests, journey, social links, and a small interactive audio-player-style control.

## Data model

Portfolio content is currently defined as local TypeScript constants in `frontend/src/pages/Home.tsx`; no user accounts or persistent CRUD data are required for this edit.

## Key flows

- Browse the hero and exactly two portrait cards.
- Confirm the first portrait tag reads `VK`.
- Use section navigation to jump between About, Journey, Interests, and Connect.
- Toggle the visual-only `VK — Side A` player control.
- Open social links in a new tab.

## Requested edit state

- First portrait tag changed from `track01` / `TRACK 01` to `VK`.
- Third portrait removed completely; the gallery renders exactly two portrait cards: VK and THE TWO.

## Auth and roles

None. The portfolio is public and does not gate any area behind login or PIN.