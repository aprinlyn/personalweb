---
title: "How I Built My Personal Website with Astro and Tailwind CSS"
description: "A behind-the-scenes look at the tech choices, architecture decisions, and lessons learned while building my portfolio website from scratch."
pubDate: 2026-04-05
tags: ["astro", "tailwind", "web-development", "portfolio"]
---

# How I Built My Personal Website with Astro and Tailwind CSS

Every developer needs a personal website, and I finally built mine. Here's the full story of how I went from an empty directory to a deployed portfolio site.

## Why Astro?

I evaluated several options — Next.js, Gatsby, Hugo, and Astro. Here's why Astro won:

- **Zero JavaScript by default**: Pages load blazing fast because Astro only ships JS when you explicitly need interactivity
- **Markdown-first blogging**: Content collections make it trivial to write blog posts in Markdown
- **Island architecture**: I can use React components only where I need interactivity (like the JSON formatter in the playground)
- **Simple mental model**: For a content-heavy site, Astro's approach of "static by default" just makes sense

## The Tech Stack

| Layer | Choice |
|---|---|
| Framework | Astro |
| Styling | Tailwind CSS |
| Content | Markdown + Astro Content Collections |
| Interactive components | React (via Astro islands) |
| Hosting | Cloudflare Pages |

## Project Structure

I organized the project following Astro's conventions:

```
src/
├── components/     → Reusable UI components
├── layouts/        → Base page layouts
├── pages/          → Route pages
├── content/blog/   → Markdown blog posts
└── styles/         → Global styles (Tailwind)
```

## Key Decisions

### Content Collections for Blog Posts

Astro's content collections give you type-safe frontmatter validation. Each blog post has a schema that enforces required fields like `title`, `description`, and `pubDate`.

### Dark Mode

I implemented dark mode using Tailwind's `dark:` variant with a class-based toggle. The theme preference is saved to `localStorage` and respects the system preference on first visit.

### Responsive Design

Every page is mobile-first. The navigation collapses into a hamburger menu on small screens, and the grid layouts adjust from 1 to 2-3 columns based on viewport width.

## What I Learned

1. **Astro's learning curve is gentle** — if you know HTML and any component framework, you'll pick it up fast
2. **Tailwind CSS speeds up development** — no context-switching between HTML and CSS files
3. **Content collections are powerful** — type-safe content with zero runtime cost
4. **Ship early** — a simple live site beats a perfect local site

## What's Next

- Adding more playground tools (regex tester, API request builder)
- Writing more blog posts about testing and engineering
- Building out the project portfolio with real showcases

The site itself is my first portfolio project — and you're reading the first blog post. More to come!
