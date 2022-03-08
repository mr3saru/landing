## Mr Saru - Landing page

![mr3saru](/docs/mr3saru.png)

## Project stack:

- [ReactJS](https://reactjs.org/)
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
  #route system
/components
  #reusable components
/styles
  #global styles and theme
/utils
  #utility functions
/templates
  #page layout and modules
/icons
  #svg exported icons
/docs
  #documentation
```

## Git flow

1. Checkout to wip get all the changes

```bash
git checkout wip
git fetch origin
git reset --hard origin/wip
```

2. Create a new branch

```bash
git checkout -b MY-BRANCH-NAME
```

3. Make your changes...

4. Fech the wip branch and solve all conflicts

```bash
git fetch wip
git rebase origin/wip
```

5. Submit a Pull Request

```bash
git push origin MY-BRANCH-NAME
```

6. Acess the pull request link and compare the changes with the `wip` branch

![compare](/docs/github-compare.png)

7. Click on submit button and you will see a new branch in the pull request

8. Wait for approval or change request
