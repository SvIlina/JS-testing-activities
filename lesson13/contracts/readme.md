# Lesson 13 - Contract Testing with Pact

This project demonstrates consumer-driven contract testing with:

1. Mocha test runner
2. Chai assertions
3. Pact V3 and Pact V4
4. Provider verification against The Dog API

## Prerequisites

1. Node.js 18+ (or newer)
2. npm
3. Internet access (provider verification calls https://api.thedogapi.com/v1)

## Install

```bash
npm install
```

## Test Files

1. `tests/dogs-image.pact.spec.ts` - Pact V3 example
2. `tests/image-service-pact-v4.spec.ts` - Pact V4 example
3. `src/dog-service.ts` - consumer client used by pact tests

## Run All Tests

```bash
npm test
```

## Run Pact V4 Only

```bash
npx mocha tests/image-service-pact-v4.spec.ts --require tsx --timeout 120000
```

## Generated Contract Files

Pact writes contracts to the `pacts` folder after a successful consumer test.

Expected files:

1. `pacts/dogs-consumer-dogs-provider.json`
2. `pacts/image-consumer-v4-image-provider-v4.json`

## Typical Flow

1. Run consumer pact test to generate JSON contract.
2. Run provider verification using generated contract.
3. Publish pact (optional in CI/CD).

## Why Contract JSON Might Not Be Created

If a consumer test fails, Pact will not write the JSON contract.

Common causes:

1. Request headers/path/body in the interaction do not match the actual client request.
2. Assertion failures inside `executeTest` callback.
3. Consumer and provider verification are run together and verification starts before file write completes.

## Recommended Practice

In CI, split into separate steps:

1. Consumer tests (generate pact)
2. Provider verification (use generated pact file)

## Notes

1. Use your own API key if needed.
2. Keep interaction definitions aligned with `DogService` request shape.
