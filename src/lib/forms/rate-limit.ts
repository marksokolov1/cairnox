import type { FormSubmissionType } from "@/lib/forms/types";

export type RateLimitDecision = {
  allowed: boolean;
  configured: boolean;
};

export interface FormRateLimitAdapter {
  readonly id: string;
  check(type: FormSubmissionType): Promise<RateLimitDecision>;
}

class UnconfiguredRateLimitAdapter implements FormRateLimitAdapter {
  readonly id = "unconfigured";

  async check(): Promise<RateLimitDecision> {
    return { allowed: true, configured: false };
  }
}

export function getFormRateLimitAdapter(): FormRateLimitAdapter {
  return new UnconfiguredRateLimitAdapter();
}
