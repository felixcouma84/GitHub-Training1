Playwright E2E test for product display

Setup & run

1. Install dependencies:

```bash
npm install
```

2. (Optional) Install browser binaries if Playwright prompts you:

```bash
npx playwright install
```

3. Run tests:

```bash
npm test
```

What this test does

- Reads `app/product.html` and loads it into the browser context.
- Verifies heading, image, price, and description are visible and correct.
