import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const htmlPath = path.join(__dirname, '..', 'app', 'product.html');
const html = fs.readFileSync(htmlPath, 'utf8');

test('product displays correctly', async ({ page }) => {
  await page.setContent(html, { waitUntil: 'domcontentloaded' });

  await expect(page.getByRole('heading', { name: 'Awesome Product' })).toBeVisible();
  await expect(page.locator('#product-image')).toBeVisible();
  await expect(page.locator('.price')).toHaveText('$19.99');
  await expect(page.locator('.description')).toContainText('awesome product');
});
