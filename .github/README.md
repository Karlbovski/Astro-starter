# Customized starter from Astro Starter Kit: Minimal

`v. 1.2.0`

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
