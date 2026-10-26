# Personal Website --- Implementation Plan

> **Purpose:** Build a personal portfolio website using the uploaded
> moodboard and reference board as the visual direction. Treat this
> document as the source of truth for design and implementation. If
> implementation details are not specified, prefer the simplest
> maintainable option that preserves the art direction.

## 1. Project Overview

Create a personal website that feels like a **dark, experimental digital
portfolio**: cyber/Y2K, dreamy, nostalgic, slightly surreal, and
editorial. The site should combine expressive visual elements with
readable information about the owner, skills, and projects.

The result should feel intentionally art-directed rather than like a
standard corporate portfolio template. Visual experimentation must not
make navigation or content difficult to understand.

### Main goals

-   Present the owner, technical skills, projects, and contact links.
-   Establish a distinctive visual identity built around black, violet,
    lavender, and electric purple.
-   Combine portfolio information with collage-like imagery, interface
    panels, and poster-inspired graphics.
-   Remain responsive, accessible, and reasonably fast.
-   Make content and project entries easy to update.

### Non-goals

-   Do not build a full CMS or admin dashboard unless requested later.
-   Do not add authentication, a database, or backend services for a
    primarily static portfolio.
-   Do not copy the reference layouts pixel-for-pixel. Use them as
    visual direction, not as assets or templates to reproduce exactly.

## 2. Visual Direction

### Moodboard interpretation

The first board suggests: - Predominantly black / near-black
backgrounds. - Violet and lavender imagery with high contrast. - Dreamy,
blurred, grainy, glitch-like, and low-resolution visual treatments. -
Anime-inspired eyes and figures, butterflies, hands, sky imagery, and
nostalgic media motifs. - Small image fragments arranged as a collage,
with large areas of negative space. - A mysterious, nocturnal, slightly
melancholic atmosphere.

### Reference-board interpretation

The second board suggests: - Dense editorial layouts that mix structured
UI cards with expressive posters. - Profile cards, skill panels, labels,
bars, grids, and compact metadata. - Poster typography, large condensed
display text, eye imagery, decorative symbols, and layered
compositions. - Purple color swatches paired with dark navy, black,
muted gray, and pale lavender. - A contrast between orderly information
panels and irregular artistic compositions.

### Design principle

**Structured information + chaotic decoration.** Use grids and clear
hierarchy for actual portfolio content. Use collage, overlaps, grain,
glow, and asymmetry for visual personality.

## 3. Color System

Use the following initial palette as a starting point. Keep colors in
design tokens so they can be adjusted consistently.

  Token                      Suggested value   Use
  -------------------------- ----------------- ----------------------------------
  `--color-bg`               `#050407`         Main page background
  `--color-surface`          `#111019`         Cards and panels
  `--color-surface-raised`   `#1B1725`         Elevated panels
  `--color-purple`           `#7847F5`         Primary accent and active states
  `--color-purple-bright`    `#A45BFF`         Highlights, links, glow
  `--color-lavender`         `#B8A0F0`         Secondary accent and headings
  `--color-lavender-pale`    `#E1D8FF`         High-contrast details
  `--color-text`             `#F3F0FA`         Primary text
  `--color-text-muted`       `#AAA3B8`         Supporting text
  `--color-border`           `#393044`         Subtle panel borders

Guidelines: - Black should remain the dominant color. - Use bright
purple selectively; avoid making every element glow. - Keep body text
high contrast and comfortable to read. - Use pale lavender for small
labels, metadata, and visual contrast. - Gradients may move between deep
violet, electric purple, and muted blue. - Avoid introducing unrelated
bright colors unless they come from a specific image.

## 4. Typography

Use a two-part type system: - **Display type:** futuristic, condensed,
pixel-inspired, or editorial typography for hero titles, project names,
and poster-like decorative text. - **Interface/body type:** a clean
sans-serif for descriptions, navigation, skill details, and metadata.

Rules: - Large display text can be uppercase, tightly tracked, and
visually expressive. - Body text must remain legible; avoid overly
stylized fonts for paragraphs. - Use small uppercase labels for panel
headings and metadata. - Establish a clear scale for page title, section
title, card title, body, and caption. - Use no more than two or three
font families. - Load fonts locally or through a reliable font provider
and provide sensible fallbacks.

## 5. Layout and Page Structure

Build a single-page portfolio initially, with sections that can later be
split into routes if needed.

### 5.1 Global shell

-   Near-black page background.
-   Centered content container with a deliberate maximum width.
-   Generous outer margins on desktop; consistent horizontal padding on
    mobile.
-   Subtle borders, thin rules, and compact labels to create an
    interface/editorial feel.
-   Optional small persistent navigation, but it must not cover content
    on small screens.

### 5.2 Hero / Profile

Purpose: introduce the owner and establish the visual identity
immediately.

Content: - Name or personal alias. - Short role line, such as
Informatics Student / Software Developer. - One concise introduction. -
Primary links: Projects, About/Skills, Contact, and relevant external
profiles. - A profile panel inspired by the reference board. - A
decorative collage using selected visuals from the moodboard: eyes,
butterfly, abstract violet texture, or other suitable imagery.

Layout direction: - Asymmetric two-column composition on desktop. -
Profile/information panel on one side and a larger visual collage on the
other. - Stack into one column on mobile. - Make the name and primary
call to action easy to find even when decorative elements are present.

### 5.3 About

Purpose: provide a short, professional introduction without losing the
site's personality.

Content: - A concise paragraph about the owner and interests. - Optional
compact metadata such as education, current focus, or location if the
owner chooses to disclose it. - A small decorative image or label, not a
large visual that competes with the text.

Tone: - Clear, direct, and realistic. - Do not claim expertise or
experience that the owner has not confirmed.

### 5.4 Skills / Abilities

Purpose: display technical skills in a visual format inspired by the
reference board's ability and software-skills panels.

Possible groups: - Programming languages - Frontend and backend
development - Automation and tooling - Computer vision / OCR - Databases
and developer tools

Implementation notes: - Render skills from a structured data list rather
than hardcoding each card separately. - Use compact cards, tags, small
icons, or grouped labels. - If skill bars are used, they should
represent an explicitly defined and meaningful measure. Do not invent
percentages or imply objective proficiency ratings without user-provided
values. - Keep the section scannable; avoid filling the screen with too
many badges.

### 5.5 Projects

Purpose: make project work the main evidence of practical ability.

Each project card should support: - Project name - One-sentence
summary - Role or contribution - Technology stack - Optional thumbnail /
screenshot - Links to source code and live demo, when available -
Optional status label

Visual direction: - Mix orderly information cards with a few larger
editorial/project feature cards. - Use violet borders, tinted image
treatments, and subtle hover states. - Give each project enough space
for a readable description. - Do not fabricate repositories, demos,
metrics, or project details.

Potential initial project categories, subject to the owner's final
selection: - Browser automation / paid-promotion verification - Web
application / product showcase - Hackathon project - Other coursework or
personal projects

### 5.6 Contact / Footer

Purpose: make it easy to contact the owner.

Include only links the owner provides, such as: - Email - GitHub -
LinkedIn - Other relevant portfolio or professional profiles

Design: - A compact final panel or poster-like closing block. - Clear
link labels and visible focus states. - Small decorative marks may echo
the site's eye, butterfly, or glitch motifs. - Do not publish private
contact details without the owner's approval.

## 6. Art Direction and Graphic Elements

Use these motifs as a coherent visual vocabulary: - Abstract eyes / eye
close-ups - Butterflies and delicate silhouettes - Purple-tinted
portraits or abstract figures - Cloudy skies and dreamlike imagery -
Grain, scanlines, chromatic aberration, blur, and subtle glitch
effects - DVD / retro media references - Small geometric symbols,
interface markers, and poster-like labels

Usage rules: - Select a small set of recurring motifs instead of using
every motif everywhere. - Keep decorative images separate from
meaningful text and controls. - Prefer original, licensed, or
owner-provided assets. - Do not assume the reference-board images are
cleared for reuse. - If an image is unavailable, create a CSS treatment
or use a clearly identified placeholder rather than silently fetching an
unrelated image. - Use overlays and filters consistently so mixed images
still feel like one art direction.

## 7. Interaction and Motion

Motion should feel atmospheric and restrained, not distracting.

Recommended interactions: - Smooth anchor navigation. - Subtle card lift
or border-color change on hover. - Gentle glow or image shift for
selected decorative elements. - Small reveal transitions when sections
enter view, if they do not delay content access. - Optional
low-intensity grain or scanline treatment.

Constraints: - Respect `prefers-reduced-motion`. - Do not use constant
aggressive flicker, strobing, or rapid glitch animations. - Avoid
animation that blocks reading, navigation, or interaction. - Ensure
hover effects also have keyboard-focus equivalents. - Do not make
essential information available only through animation or hover.

## 8. Responsive Behavior

### Desktop

-   Use asymmetrical grids and overlapping collage elements.
-   Keep project cards and profile panels aligned to a deliberate grid.
-   Allow generous negative space around the hero artwork.

### Tablet

-   Reduce overlap and decorative image size.
-   Preserve readable card widths.
-   Reflow multi-column skills and project grids as needed.

### Mobile

-   Use a single-column layout.
-   Move decorative imagery into the normal flow or simplify it; do not
    allow it to cover text.
-   Keep navigation compact and touch targets comfortably sized.
-   Prevent horizontal overflow from oversized display text, posters, or
    absolute-positioned elements.
-   Maintain sufficient spacing between cards and links.

## 9. Accessibility and Usability

-   Use semantic HTML landmarks and a logical heading order.
-   Provide meaningful alt text for informative images; use empty alt
    text for purely decorative images.
-   Maintain readable contrast for body text and controls.
-   Make all navigation and interactive elements keyboard accessible.
-   Show a visible focus indicator.
-   Do not use color alone to communicate a state.
-   Ensure text remains readable over gradients and images, using
    overlays when necessary.
-   Test at narrow viewport widths and with reduced motion enabled.

## 10. Technical Implementation Guidance

The exact stack can be chosen based on the existing repository.
**Inspect the repository before creating or replacing files.** Reuse the
current framework and conventions if a project already exists.

If starting from scratch, a reasonable default is: - React with Next.js,
or the existing preferred React setup. - TypeScript if the project
already uses it or the implementation benefits from stronger typing. -
CSS Modules, Tailwind CSS, or the existing styling system; do not add
multiple styling systems without a reason. - Lucide or a similar icon
set only where icons improve clarity. - Static data files for profile,
skills, projects, and links.

Architecture suggestions: - `components/`: shared UI such as navigation,
cards, skill groups, and footer. - `sections/`: hero, about, skills,
projects, and contact. - `data/`: editable portfolio content. -
`styles/` or existing global styling location: color tokens, typography,
and shared effects. - `public/`: owner-provided images, thumbnails, and
decorative assets.

Implementation requirements: - Keep repeated content data-driven. -
Reuse design tokens rather than scattering hex values throughout
components. - Avoid unnecessary dependencies and backend services. - Do
not expose secrets or API keys in client-side code. - Use responsive CSS
rather than fixed desktop-only dimensions. - Keep the website deployable
as a static site if no backend functionality is required.

## 11. Suggested Content Data Model

Use structured objects similar to these. Replace all example
placeholders with owner-confirmed content.

``` ts
type SkillGroup = {
  title: string;
  skills: string[];
};

type Project = {
  title: string;
  summary: string;
  role?: string;
  technologies: string[];
  image?: string;
  repositoryUrl?: string;
  demoUrl?: string;
  status?: string;
};

type SocialLink = {
  label: string;
  url: string;
};
```

Store profile text, skills, projects, and links in a separate data file
so the owner can update them without editing layout components.

## 12. Suggested Build Sequence

Implement in this order:

1.  **Repository inspection**
    -   Identify framework, package manager, current routes, and styling
        conventions.
    -   Preserve existing functionality and avoid overwriting useful
        work.
2.  **Design foundation**
    -   Define color tokens, typography, spacing, borders, shadows, and
        shared layout rules.
3.  **Page skeleton**
    -   Create the global shell and all major sections with semantic
        structure.
4.  **Hero and profile**
    -   Establish the core visual identity and responsive collage.
5.  **Skills and projects**
    -   Add reusable, data-driven cards and groups.
6.  **Decorative art direction**
    -   Apply image treatments, grain, poster-like elements, and
        controlled overlap.
7.  **Interactions**
    -   Add navigation, hover/focus states, and restrained motion.
8.  **Responsive and accessibility pass**
    -   Test desktop, tablet, mobile, keyboard navigation, contrast, and
        reduced motion.
9.  **Quality checks**
    -   Run the existing lint, type-check, and build commands where
        available.
    -   Fix errors introduced by the implementation.
    -   Check for missing assets, broken links, overflow, and console
        errors.

## 13. Definition of Done

The website is ready for review when: - \[ \] The overall appearance
clearly reflects the black / violet / lavender moodboard. - \[ \] The
design combines editorial collage elements with structured portfolio
panels. - \[ \] Hero, About, Skills, Projects, and Contact sections are
present. - \[ \] Content is editable from structured data where
appropriate. - \[ \] No unconfirmed skills, project details, URLs, or
performance metrics have been invented. - \[ \] Layout works at desktop,
tablet, and mobile widths. - \[ \] Navigation and interactive elements
work with keyboard input. - \[ \] Reduced-motion preferences are
respected. - \[ \] Informative images have appropriate alt text. - \[ \]
No major overflow, broken links, missing assets, or build errors
remain. - \[ \] The project uses the existing repository's conventions
and avoids unnecessary dependencies.

## 14. Instructions for the Implementing AI

1.  Read this plan and inspect the existing repository before making
    changes.
2.  Treat the uploaded moodboard and reference board as the primary
    visual references.
3.  Prioritize art direction, layout quality, and responsive behavior
    over adding unnecessary features.
4.  Make reasonable visual decisions without asking about every small
    detail.
5.  Do not invent personal information, project facts, metrics, links,
    or images.
6.  Use placeholders only where owner-provided content or assets are
    genuinely missing, and make those placeholders easy to replace.
7.  Implement the website, run available checks, and report:
    -   What was implemented
    -   Which files were created or changed
    -   Which content/assets still need to be supplied
    -   Which checks passed or failed
