import {
  apexFormatOptions,
  apexOrganisationOptions,
  apexSupportOptions,
  apexTimingOptions,
  baseInterestOptions,
  elevateImprovementOptions,
  elevateLevelOptions,
  elevateSeasonOptions,
  elevateStartOptions,
  existingCoachOptions,
} from "@/lib/forms/options";
import type {
  FormErrors,
  FormSubmissionType,
  FormValues,
} from "@/lib/forms/types";

type ValidationResult =
  | { success: true; values: FormValues }
  | { success: false; values: FormValues; errors: FormErrors };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldLimits = {
  name: 120,
  email: 254,
  short: 180,
  message: 3000,
} as const;

function text(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function selections(formData: FormData, key: string) {
  return formData
    .getAll(key)
    .filter((value): value is string => typeof value === "string")
    .map((value) => value.trim())
    .filter(Boolean);
}

function requireText(
  values: FormValues,
  errors: FormErrors,
  key: string,
  label: string,
  maxLength: number,
) {
  const value = values[key];
  if (typeof value !== "string" || value.length === 0) {
    errors[key] = `Enter ${label.toLowerCase()}.`;
  } else if (value.length > maxLength) {
    errors[key] = `${label} must be ${maxLength.toLocaleString()} characters or fewer.`;
  }
}

function optionalText(
  values: FormValues,
  errors: FormErrors,
  key: string,
  label: string,
  maxLength: number,
) {
  const value = values[key];
  if (typeof value === "string" && value.length > maxLength) {
    errors[key] = `${label} must be ${maxLength.toLocaleString()} characters or fewer.`;
  }
}

function validateEmail(values: FormValues, errors: FormErrors, key = "email") {
  requireText(values, errors, key, "Email", fieldLimits.email);
  const value = values[key];
  if (typeof value === "string" && value.length > 0 && !EMAIL_PATTERN.test(value)) {
    errors[key] = "Enter a valid email address.";
  }
}

function validateAllowed(
  values: FormValues,
  errors: FormErrors,
  key: string,
  label: string,
  allowed: readonly string[],
  required = false,
) {
  const value = values[key];
  if (required && (typeof value !== "string" || value.length === 0)) {
    errors[key] = `Select ${label.toLowerCase()}.`;
  } else if (typeof value === "string" && value.length > 0 && !allowed.includes(value)) {
    errors[key] = `Select a valid ${label.toLowerCase()}.`;
  }
}

function validateSelectionGroup(
  values: FormValues,
  errors: FormErrors,
  key: string,
  label: string,
  allowed: readonly string[],
  required = false,
) {
  const value = values[key];
  const selected = Array.isArray(value) ? value : [];
  if (required && selected.length === 0) {
    errors[key] = `Select at least one ${label.toLowerCase()}.`;
  } else if (selected.some((item) => !allowed.includes(item))) {
    errors[key] = `Select valid options for ${label.toLowerCase()}.`;
  }
}

function result(values: FormValues, errors: FormErrors): ValidationResult {
  return Object.keys(errors).length ? { success: false, values, errors } : { success: true, values };
}

function validateGeneral(formData: FormData): ValidationResult {
  const values: FormValues = {
    name: text(formData, "name"),
    email: text(formData, "email"),
    organisation: text(formData, "organisation"),
    message: text(formData, "message"),
  };
  const errors: FormErrors = {};
  requireText(values, errors, "name", "Name", fieldLimits.name);
  validateEmail(values, errors);
  optionalText(values, errors, "organisation", "Organisation / team", fieldLimits.short);
  requireText(values, errors, "message", "What we can help with", fieldLimits.message);
  return result(values, errors);
}

function validateBase(formData: FormData): ValidationResult {
  const values: FormValues = {
    name: text(formData, "name"),
    email: text(formData, "email"),
    trainingContext: text(formData, "trainingContext"),
    interests: selections(formData, "interests"),
    additionalContext: text(formData, "additionalContext"),
  };
  const errors: FormErrors = {};
  requireText(values, errors, "name", "Name", fieldLimits.name);
  validateEmail(values, errors);
  optionalText(values, errors, "trainingContext", "Sport / training context", fieldLimits.short);
  validateSelectionGroup(values, errors, "interests", "area of interest", baseInterestOptions);
  optionalText(values, errors, "additionalContext", "Additional context", fieldLimits.message);
  return result(values, errors);
}

function validateElevate(formData: FormData): ValidationResult {
  const values: FormValues = {
    name: text(formData, "name"),
    email: text(formData, "email"),
    location: text(formData, "location"),
    sportContext: text(formData, "sportContext"),
    currentLevel: text(formData, "currentLevel"),
    seasonStatus: text(formData, "seasonStatus"),
    improvements: selections(formData, "improvements"),
    mainReason: text(formData, "mainReason"),
    currentTraining: text(formData, "currentTraining"),
    existingCoach: text(formData, "existingCoach"),
    competitionSchedule: text(formData, "competitionSchedule"),
    idealStart: text(formData, "idealStart"),
    additionalContext: text(formData, "additionalContext"),
    consent: text(formData, "consent"),
  };
  const errors: FormErrors = {};
  requireText(values, errors, "name", "Full name", fieldLimits.name);
  validateEmail(values, errors);
  optionalText(values, errors, "location", "Location", fieldLimits.short);
  requireText(values, errors, "sportContext", "Sport / performance context", fieldLimits.short);
  validateAllowed(values, errors, "currentLevel", "Current level", elevateLevelOptions, true);
  validateAllowed(values, errors, "seasonStatus", "Current season status", elevateSeasonOptions);
  validateSelectionGroup(
    values,
    errors,
    "improvements",
    "area you want to improve",
    elevateImprovementOptions,
    true,
  );
  requireText(values, errors, "mainReason", "Your main reason for seeking 1:1 coaching", fieldLimits.message);
  optionalText(values, errors, "currentTraining", "Current training", fieldLimits.message);
  validateAllowed(values, errors, "existingCoach", "Current coach / team programme", existingCoachOptions);
  optionalText(values, errors, "competitionSchedule", "Competition / playing schedule", fieldLimits.message);
  validateAllowed(values, errors, "idealStart", "Ideal start timing", elevateStartOptions);
  optionalText(values, errors, "additionalContext", "Additional context", fieldLimits.message);

  if (values.consent !== "accepted") {
    errors.consent = "Confirm that you understand this is an application and availability is not guaranteed.";
  }

  return result(values, errors);
}

function validateApex(formData: FormData): ValidationResult {
  const values: FormValues = {
    name: text(formData, "name"),
    email: text(formData, "email"),
    organisation: text(formData, "organisation"),
    role: text(formData, "role"),
    organisationType: text(formData, "organisationType"),
    sport: text(formData, "sport"),
    programmeContext: text(formData, "programmeContext"),
    supportAreas: selections(formData, "supportAreas"),
    projectObjective: text(formData, "projectObjective"),
    currentEnvironment: text(formData, "currentEnvironment"),
    supportFormats: selections(formData, "supportFormats"),
    timing: text(formData, "timing"),
    additionalContext: text(formData, "additionalContext"),
  };
  const errors: FormErrors = {};
  requireText(values, errors, "name", "Name", fieldLimits.name);
  validateEmail(values, errors);
  requireText(values, errors, "organisation", "Organisation", fieldLimits.short);
  optionalText(values, errors, "role", "Role", fieldLimits.short);
  validateAllowed(values, errors, "organisationType", "Type of organisation", apexOrganisationOptions, true);
  requireText(values, errors, "sport", "Sport / performance environment", fieldLimits.short);
  optionalText(values, errors, "programmeContext", "Athlete / programme context", fieldLimits.message);
  validateSelectionGroup(values, errors, "supportAreas", "area of support", apexSupportOptions, true);
  requireText(values, errors, "projectObjective", "What you are trying to improve or solve", fieldLimits.message);
  optionalText(values, errors, "currentEnvironment", "Current environment", fieldLimits.message);
  validateSelectionGroup(values, errors, "supportFormats", "preferred support format", apexFormatOptions);
  validateAllowed(values, errors, "timing", "Timing", apexTimingOptions);
  optionalText(values, errors, "additionalContext", "Additional context", fieldLimits.message);
  return result(values, errors);
}

export function validateFormSubmission(type: FormSubmissionType, formData: FormData): ValidationResult {
  switch (type) {
    case "general":
      return validateGeneral(formData);
    case "base_interest":
      return validateBase(formData);
    case "elevate_application":
      return validateElevate(formData);
    case "apex_enquiry":
      return validateApex(formData);
  }
}
