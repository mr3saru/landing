## Mr Saru - Landing page

![mr3saru](/docs/mr3saru.png)

## Project stack:

- [NextJS](https://nextjs.org/)
- [Styled JSX](https://github.com/vercel/styled-jsx)
- [TypeScript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
- [Husky](https://github.com/typicode/husky)

## Getting Started

clone the repo:

```bash
git clone https://github.com/mr3saru/landing.git
```

install dependencies:

```bash
yarn install
```

add environment variables:

```
NEXT_PUBLIC_BASE_URL=
API_CONTACT_FORM_URL=
```

run the server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available commands

- `dev`: run the application in development mode `localhost:3000`
- `build`: create production version
- `start`: run production version
- `check`: check formatting on all components and pages
- `format`: formats all components and pages

## Patterns

```
/pages
  _route system_
/components
  _reusable components_
/styles
  _global styles and theme_
/utils
  _utility functions_
/templates
  _page layout and modules_
/icons
  _svg exported icons_
/docs
  _documentation_
```

## Git flow

Checkout to wip and rebase it

```bash
git checkout wip
git fetch origin
git rebase origin/wip
```

Create a new branch

```bash
git checkout -b MY-BRANCH-NAME
```

Make your changes...

Submit a Pull Request

```bash
git push origin MY-BRANCH-NAME
```

Aways compare or PR with `wip` branch

![compare](/docs/github-compare.png)

Click on submit button and you will see a new branch in the pull request

Wait for approval or change request
