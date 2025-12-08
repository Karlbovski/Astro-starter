# Customized starter from Astro Starter Kit: Minimal

`v. 1.3.0`

Usage:

```sh
# create a new project based on a GitHub repository’s main branch
npm create astro@latest -- --template Karlbovski/astro-starter
# to use a different **branch** name, pass it as part of the --template argument
npm create astro@latest -- --template Karlbovski/astro-starter#decap-cms.
```

## Images

> Research. This works in dev builds for me but the documentation says that works on the server only and should break builds if implemented in the client.

```jsx
---
import { getImage } from "astro:assets";
import logo from "../assets/heartbeat.png";

const optimizedBackground = await getImage({ src: logo, format: "avif" });
---

<div style={`background-image: url(${optimizedBackground.src}); height:100vh; width:100%; background-size: cover; background-position: center center; position: fixed; top: 0; z-index: -1;`} </div>

```

## Astro Font

`Type: FontFamily[]`

`Added in: astro@5.7.0`

This experimental feature allows you to use fonts from your filesystem and various font providers (eg. Google, Fontsource, Bunny) through a unified, fully customizable, and type-safe API.

[Docs](https://docs.astro.build/en/reference/experimental-flags/fonts/)

## Astro Icon

Astro Icon is a straightforward icon system for the Astro framework. This guide assumes that you have an existing Astro project.

[Docs](https://www.astroicon.dev/getting-started/)

---

## CSS Pipeline

### Resets (default)

Contains:

- Reset is based on Andy Bell's modern CSS reset: https://piccalil.li/blog/a-modern-css-reset/ .
- Some custom rules and preliminary TYPOGRAPHY.
- Few utility classes /such as .visually-hidden

### Layouts

Base contains Global not scoped styling goes here.
See Astro's Style and CSS options docs to decide how to proceed.

### Abstracts (default)

Should contain everything that is not going to be compiled as CSS (i.e. mixins, variables, functions, etc...)

#### Media queries mixin (not-default)

> Responsive Brakpoints mixins using min-width -> up

> Some Rules ( assure Mobile First design )

Min-Width: Refers to everything greater than or equal to the amount given.
Max-Width: Refers to everything less than or equal to the amount given.

Use relative units ( 100% = 1 em ~= 16px ~= 14pt )

Extra small devices (portrait phones, less than 576px) have no media query since this is the default ( like in Bootstrap ).

Implementation example :
@include lg {
max-width: 90vw;
margin: $card-base-margin auto;
}
Know ISSUES:
SyntaxError : If a specific phone(i.e. 320px) needs to be targeted, i can use the custom device mixin, r-minwidth().

#### Typography

Font Families implemented trough Astro Font experimental pipeline.
Type scales from [type-scale.com](https://type-scale.com)

### 🚧 TODOS

~~- Astro Fonts pipeline implementation~~

~~- First Iteration OK~~

---

- Astro icons pipeline implementation
  - improve performances by including icons `svg` files in build.
  - remove current icon implementation.

---

- Refactor scss pipeline

---

- Netlify + Decap-CMS integration

---

- SEO
  - sitemap
  - robot.txt
  - meta-tags
  - schemas

---

- Lighthouse Test and refactor accordingly

---

- Markdown advanced rendering
