export const formAnalyticsEvents = {
  general: {
    started: "general_enquiry_started",
    submitted: "general_enquiry_submitted",
  },
  base_interest: {
    started: "base_interest_started",
    submitted: "base_interest_submitted",
  },
  elevate_application: {
    started: "elevate_application_started",
    submitted: "elevate_application_submitted",
  },
  apex_enquiry: {
    started: "apex_enquiry_started",
    submitted: "apex_enquiry_submitted",
  },
} as const;

// Event names are intentionally not emitted until an analytics provider and
// consent approach have been approved.
