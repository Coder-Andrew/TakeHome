# Trend Capital Front-End Take-Home Test
This repo contains my implementation of the Trend Capital front-end take-home.  
It includes two responsive landing pages (Insurance and E-commerce Hero + CTA) built with Next.js and TailwindCSS, with a focus on performance and mobile-first design.

## Setup

### Prerequisites
- Node.js 18 or later
- npm or pnpm

### Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/Coder-Andrew/TakeHome.git
cd take-home
npm install
```

Run the project
```bash
npm run dev
```

Navigate to `localhost:3000` in a browser

## Live URLs
- Car Insurance Landing Page: https://take-home-xl4e.vercel.app/insurance
- E-commerce Hero + CTA: https://take-home-xl4e.vercel.app/gummies

## Time Spent

### Car Insurance Landing Page
- Hero: 2.5h
- Customer Reviews: 1.5h
- Highlighted On: 50m
- Footer: 10m
- Touch-ups: 1h

### E-commerce Hero + CTA
- Hero: 3.5h
- Supporting CTA Block: 1h
- Touch-ups: 1h

## Lighthouse
### Insurance Landing Page
![Insurance Landing Page Lighthouse Score](/Lighthouse-Insurance-Pic.PNG)

[Full Report](/Lighthouse-Insurance.pdf)

### Gummy Landing Page
![Gummy Landing Page Lighthouse Score](/Lighthouse-Gummy-Pic.PNG)

[Full Report](/Lighthouse-Gummy.pdf)

## Trade-offs / Decisions
- Directly used some of the images/icons pulled from Figma instead of react-icons for consistency.
- Some parts of the code could be better componentized. I didn’t go as far as I could here due to both limited experience in that area and time considerations.
- Worked on getting most of the core items on Task 2 (Hero + CTA). With more time, I would work on polishing it out a bit more (hover states, better alignment, cleaning up project structure a bit better). 
- Focused on mobile-first responsiveness. Desktop layouts work, but could use more refinement with additional time.
- Implemented some accessibility best practices (semantic HTML, alt text on images). Didn’t fully address ARIA compliance across all components due to time constraints, but I would expand on that in a production setting.
