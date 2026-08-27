import { contactConfig } from "@/config/site";
import type { FormSubmissionType, FormValues } from "@/lib/forms/types";

const formSubjects: Record<FormSubmissionType, string> = {
  general: "CAIRNOX — General enquiry",
  base_interest: "CAIRNOX BASE — New programme interest",
  elevate_application: "CAIRNOX ELEVATE — New coaching application",
  apex_enquiry: "CAIRNOX APEX — New project enquiry",
};

const formNames: Record<FormSubmissionType, string> = {
  general: "General enquiry",
  base_interest: "BASE interest",
  elevate_application: "ELEVATE application",
  apex_enquiry: "APEX project enquiry",
};

const fieldLabels: Record<string, string> = {
  name: "Name",
  organisation: "Organisation / team",
  message: "What can we help with?",
  trainingContext: "Cricket role and training context",
  interests: "Programme interests",
  location: "Location",
  sportContext: "Cricket role and performance context",
  currentLevel: "Current level",
  seasonStatus: "Current season status",
  improvements: "Development priorities",
  mainReason: "Main reason for seeking coaching",
  currentTraining: "Current training",
  existingCoach: "Current coach / team programme",
  competitionSchedule: "Competition / playing schedule",
  idealStart: "Preferred start",
  consent: "Application consent",
  role: "Role",
  organisationType: "Type of organisation",
  sport: "Cricket programme / performance environment",
  programmeContext: "Player / programme context",
  supportAreas: "Areas of support",
  projectObjective: "Project objective",
  currentEnvironment: "Current environment",
  supportFormats: "Preferred support format",
  timing: "Timing",
  additionalContext: "Additional context",
};

type FormSubmitResponse = {
  success?: boolean | "true" | "false";
  message?: string;
};

function preparePayload(type: FormSubmissionType, values: FormValues) {
  const payload: Record<string, string> = {
    _subject: formSubjects[type],
    _template: "table",
    _honey: "",
    submission_type: formNames[type],
    submitted_at: new Date().toISOString(),
    _url: window.location.href,
  };

  for (const [key, value] of Object.entries(values)) {
    const normalized = Array.isArray(value) ? value.join(", ") : value;
    if (!normalized) continue;

    // FormSubmit uses the lowercase `email` field as the Reply-To address.
    payload[key === "email" ? "email" : (fieldLabels[key] ?? key)] = normalized;
  }

  return payload;
}

export async function submitWithFormSubmit(
  type: FormSubmissionType,
  values: FormValues,
): Promise<{ accepted: boolean; message?: string }> {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(contactConfig.email)}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preparePayload(type, values)),
    },
  );

  const result = (await response.json().catch(() => ({}))) as FormSubmitResponse;
  const accepted =
    response.ok && result.success !== false && result.success !== "false";

  return { accepted, message: result.message };
}
