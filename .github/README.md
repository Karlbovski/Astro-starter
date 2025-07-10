# Customized starter from Astro Starter Kit: Minimal

```sh
# create a new project based on a GitHub repository’s main branch
npm create astro@latest -- --template <github-username>/<github-repo>
# to use a different branch name, pass it as part of the --template argument
npm create astro@latest -- --template <github-username>/<github-repo>#<branch>.
```


## 🚀 What was added in this Starter?

### CSS Pipeline

This starter already includes a very basic `Sass/Scss` architecture that uses **modern** `Sass` **standards**. 

> The `Sass` pattern/structure used is **not** final and it might change in future releases.

[Astro Docs |  Styles and CSS](https://docs.astro.build/en/guides/styling/)

The `Sass` pattern is inspired by the 7-1 Pattern (7 folders 1 file ) but simplified.

<details>
<summary>7-1 example</summary>

```css
styles/
|
|–– abstracts/
|   |– _functions.scss    # Sass Functions
|   |– _mixins.scss       # Sass Mixins
|   |– _placeholders.scss # Sass Placeholders
|
|–– core/
|   |– _reset.scss        # Reset/normalize
|   |– _variables.scss    # Sass Variables
|   |– _typography.scss   # Typography rules
|   …                     # Etc.
|
|–– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cover.scss        # Cover
|   |– _dropdown.scss     # Dropdown
|   …                     # Etc.
|
|–– layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|   …                     # Etc.
|
|–– pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|   …                     # Etc.
|
|–– themes/
|   |– _theme.scss        # Default theme
|   |– _admin.scss        # Admin theme
|   …                     # Etc.
|
|–– vendors/
|   |– _bootstrap.scss    # Bootstrap
|   |– _jquery-ui.scss    # jQuery UI
|   …                     # Etc.
|
|– main.scss              # Main Sass file
```

</details>
</br>


## 🧑‍🚀 **Seasoned astronaut?** Delete the following. Have fun!

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

# 👀 TODO
- Typography global rules
    - Font-Face
    - Variable Fonts
    - Variables
        - Font Weights
- Colors
    - add Black and neutral
- Reset. Check 2025 rules