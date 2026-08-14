"use server";

import { getFormSubmissionProvider } from "@/lib/forms/provider";
import { getFormRateLimitAdapter } from "@/lib/forms/rate-limit";
import { validateFormSubmission } from "@/lib/forms/schemas";
import type {
  FormActionState,
  FormSubmissionType,
  ValidatedFormSubmission,
} from "@/lib/forms/types";

const successContent: Record<FormSubmissionType, { message: string; detail: string }> = {
  general: {
    message: "Enquiry received.",
    detail: "Thanks for contacting CAIRNOX. Your enquiry has been accepted for delivery.",
  },
  base_interest: {
    message: "Interest registered.",
    detail: "Thanks for your interest in CAIRNOX BASE. Your details have been received.",
  },
  elevate_application: {
    message: "Application received.",
    detail:
      "Thanks for applying for CAIRNOX ELEVATE. Mathew will review the information you provided before the next step is arranged.",
  },
  apex_enquiry: {
    message: "Enquiry received.",
    detail:
      "Thanks for contacting CAIRNOX about APEX. The project context will be reviewed before the next step is arranged.",
  },
};

async function handleFormSubmission(
  type: FormSubmissionType,
  _previousState: FormActionState,
  formData: FormData,
): Promise<FormActionState> {
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return {
      status: "failure",
      message: "We couldn't process this submission.",
      detail: "Please refresh the page and try again.",
      errors: {},
      values: {},
    };
  }

  const validation = validateFormSubmission(type, formData);
  if (!validation.success) {
    return {
      status: "invalid",
      message: "Check the highlighted fields.",
      detail: "Your information has not been submitted.",
      errors: validation.errors,
      values: validation.values,
    };
  }

  const rateLimit = await getFormRateLimitAdapter().check(type);
  if (!rateLimit.allowed) {
    return {
      status: "failure",
      message: "We couldn't send this yet. Please try again.",
      detail: "Your information has not been delivered.",
      errors: {},
      values: validation.values,
    };
  }

  const submission: ValidatedFormSubmission = {
    type,
    submittedAt: new Date().toISOString(),
    payload: validation.values,
  };

  try {
    const delivery = await getFormSubmissionProvider().submit(submission);

    if (delivery.status === "unavailable") {
      return {
        status: "unavailable",
        message: "Form delivery is not configured yet.",
        detail: "Your details have not been sent or stored. No submission has been completed.",
        errors: {},
        values: validation.values,
      };
    }

    if (delivery.status === "failed") {
      return {
        status: "failure",
        message: "We couldn't send this yet. Please try again.",
        detail: "Your information has not been delivered.",
        errors: {},
        values: validation.values,
      };
    }

    const content = successContent[type];
    return {
      status: "success",
      message: content.message,
      detail:
        delivery.mode === "development"
          ? `${content.detail} Development test only: no email was sent.`
          : content.detail,
      errors: {},
      values: {},
    };
  } catch (error) {
    console.error(`[CAIRNOX forms] ${type} delivery failed`, error);
    return {
      status: "failure",
      message: "We couldn't send this yet. Please try again.",
      detail: "Your information has not been delivered.",
      errors: {},
      values: validation.values,
    };
  }
}

export async function submitGeneralEnquiry(
  previousState: FormActionState,
  formData: FormData,
) {
  return handleFormSubmission("general", previousState, formData);
}

export async function submitBaseInterest(
  previousState: FormActionState,
  formData: FormData,
) {
  return handleFormSubmission("base_interest", previousState, formData);
}

export async function submitElevateApplication(
  previousState: FormActionState,
  formData: FormData,
) {
  return handleFormSubmission("elevate_application", previousState, formData);
}

export async function submitApexEnquiry(
  previousState: FormActionState,
  formData: FormData,
) {
  return handleFormSubmission("apex_enquiry", previousState, formData);
}
