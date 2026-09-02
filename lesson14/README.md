# Vitest Project

This project demonstrates automated testing in TypeScript using Vitest.

## Project Goal

- Keep a fast Vitest setup for unit-style testing.
- Use global setup to initialize shared state.
- Validate behavior of source modules in `src/`.

## Structure

- `tests/` - Vitest test specs.
- `src/` - source modules and interfaces.
- `src/hooks/` - Vitest global setup files.
- `vitest.config.ts` - Vitest configuration.
- `tsconfig.json` - TypeScript configuration.
- `eslint.config.mjs` - lint rules.

## Install

```bash
npm install
```

## Run Tests

```bash
npm test
```

## Type Check and Lint

```bash
npm run run
```

## Add New Tests

1. Create a `.spec.ts` file in `tests/`.
2. Import modules from `src/`.
3. Run `npm test`.
