
# Playwright + TypeScript Automation Tests

End-to-end test automation project built with Playwright and TypeScript.

## 🛠 Tech Stack

- **Playwright** — E2E test framework
- **TypeScript** — strongly typed JavaScript
- **Page Object Model** — test architecture pattern
- **Fixtures** — dependency injection for page objects

## 📁 Project Structure

```
tests/
  fixtures.ts          # Page object factory
  LoginPage.ts         # Login page actions
  InventoryPage.ts     # Product catalog actions
  CartPage.ts          # Cart actions
  CheckoutPage.ts      # Checkout form actions
  ConfirmationPage.ts  # Order confirmation
  login.spec.ts        # Login tests (data-driven)
  saucedemo.spec.ts    # Saucedemo smoke tests
  checkout.spec.ts     # Full E2E checkout flow

## ✅ Test Coverage

- Login — positive and negative scenarios
- Data-driven login tests (multiple users)
- Add items to cart
- Full E2E checkout flow: login → cart → checkout → confirmation

## 🚀 Run Tests

```bash
npm install
npx playwright install
npx playwright test
```

## 📊 View Report

```bash
npx playwright show-report
```