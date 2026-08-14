import type { ValidatedFormSubmission } from "@/lib/forms/types";

export type FormDeliveryResult =
  | { status: "accepted"; mode: "development" | "production"; reference?: string }
  | { status: "unavailable" }
  | { status: "failed" };

export interface FormSubmissionProvider {
  readonly id: string;
  submit(submission: ValidatedFormSubmission): Promise<FormDeliveryResult>;
}

class UnconfiguredFormProvider implements FormSubmissionProvider {
  readonly id = "unconfigured";

  async submit(): Promise<FormDeliveryResult> {
    return { status: "unavailable" };
  }
}

class DevelopmentConsoleFormProvider implements FormSubmissionProvider {
  readonly id = "development";

  async submit(submission: ValidatedFormSubmission): Promise<FormDeliveryResult> {
    console.info("[CAIRNOX form development delivery]", JSON.stringify(submission, null, 2));
    return { status: "accepted", mode: "development", reference: `dev-${Date.now()}` };
  }
}

export function getFormSubmissionProvider(): FormSubmissionProvider {
  if (process.env.CAIRNOX_FORM_PROVIDER === "development" && process.env.NODE_ENV !== "production") {
    return new DevelopmentConsoleFormProvider();
  }

  return new UnconfiguredFormProvider();
}
