export type FormSubmissionType =
  | "general"
  | "base_interest"
  | "elevate_application"
  | "apex_enquiry";

export type FormFieldValue = string | string[];
export type FormValues = Record<string, FormFieldValue>;
export type FormErrors = Record<string, string>;

export type FormActionStatus =
  | "idle"
  | "invalid"
  | "unavailable"
  | "failure"
  | "success";

export type FormActionState = {
  status: FormActionStatus;
  message?: string;
  detail?: string;
  errors: FormErrors;
  values: FormValues;
};

export type ValidatedFormSubmission = {
  type: FormSubmissionType;
  submittedAt: string;
  payload: FormValues;
};

export const initialFormState: FormActionState = {
  status: "idle",
  errors: {},
  values: {},
};
