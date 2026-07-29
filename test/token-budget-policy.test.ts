import assert from "node:assert/strict";
import test from "node:test";

import { explicitTokenBudgetError, MIN_EXPLICIT_TOKEN_BUDGET } from "../src/token-budget-policy.js";

test("explicit token budget policy keeps omission unbounded and enforces the minimum", () => {
  assert.equal(MIN_EXPLICIT_TOKEN_BUDGET, 100_000_000);
  assert.equal(explicitTokenBudgetError(undefined), null);
  assert.match(explicitTokenBudgetError(99_999_999) ?? "", /at least 100,000,000 tokens/);
  assert.equal(explicitTokenBudgetError(100_000_000), null);
});
