export const MIN_EXPLICIT_TOKEN_BUDGET = 100_000_000;

export function explicitTokenBudgetError(tokenBudget: number | undefined): string | null {
  if (tokenBudget === undefined || tokenBudget >= MIN_EXPLICIT_TOKEN_BUDGET) {
    return null;
  }
  return "Explicit goal token budgets must be at least 100,000,000 tokens.";
}
