# Carlos Garcia — Portfolio outline

A local, static portfolio built with semantic HTML and plain CSS. A small vanilla JavaScript file handles language switching. No build step, external fonts, or package dependencies are required.

## Files

```text
index.html
cv.html
css/styles.css
js/language.js
js/language-controls.js
images/carlos.jpg
images/carlos.png
images/avatar-placeholder.svg
README.md
```

## Preview

Open `index.html` directly in a browser. Optionally run `python3 -m http.server 8000 --bind 127.0.0.1` from this directory and visit `http://127.0.0.1:8000`.

## Layout

- The introduction uses two equal columns and fills at least the first viewport on desktop. Content can expand freely.
- At 760px and below, introduction panels and projects stack into a single column.
- At 360px and below, introduction navigation buttons also stack.
- Typography and spacing use fluid values; CSS variables at the start of `css/styles.css` collect the provisional design choices.
- Both pages share typography, colors, focus styles, and rectangular buttons.
- Keyboard skip links and reduced-motion support are included.

## Pending review

1. Exact typography: currently system sans-serif and monospace fonts.
2. Spacing and proportions: currently provisional responsive values.
3. Confirm which of the local photo formats to use as the final avatar.
4. Carlos's real introduction and role in both supported languages.
5. Email, GitHub, and LinkedIn URLs.
6. The three project names, descriptions, and repository URLs.
7. All curriculum details: profile, experience, skills, education, and contact.

Disabled contact and repository controls intentionally have no fabricated destinations. Replace them with anchors using real URLs when approved. Social placeholders use `aria-disabled="true"`; replace them with named anchors and remove that attribute when URLs are available. Internal navigation is functional.

## Languages

Spanish is the default, including when JavaScript is disabled. The top language selector switches both pages between Spanish and English. The choice is saved locally and carried in internal page links so navigation also works when browser storage is unavailable. Without JavaScript, the selector stays hidden and the Spanish content remains readable.

Translations live in `js/language.js`. Elements use `data-i18n` keys, with separate keys for accessible labels, image alternative text, and metadata. When changing copy, update both dictionaries and the default Spanish HTML together. Names and code identifiers remain unchanged.

The visible language controls are styled as `es / en` text links without a header bar. `js/language-controls.js` only connects these controls to the existing hidden select and synchronizes their pressed state. Translation and persistence logic in `js/language.js` remains unchanged.
