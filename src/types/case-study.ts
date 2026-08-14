export type CaseStudyTier = "BASE" | "ELEVATE" | "APEX";

export type CaseStudyPublicationStatus = "approved" | "anonymised" | "private";

export type CaseStudyMedia = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type CaseStudyEvidence = {
  label: string;
  value: string;
  context: string;
  source?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  serviceTier: CaseStudyTier;
  sportOrEnvironment: string;
  summary: string;
  context: string;
  objective: string;
  approach: readonly string[];
  evidence: readonly CaseStudyEvidence[];
  outcome: string;
  learning: readonly string[];
  testimonial?: {
    quote: string;
    attribution: string;
    roleOrEnvironment: string;
  };
  media: readonly CaseStudyMedia[];
  publication: {
    status: CaseStudyPublicationStatus;
    permissionConfirmed: boolean;
    anonymisationNotes?: string;
  };
};

// The launch library is intentionally empty. Entries should only be added after
// the evidence, context, wording and publication permission have been approved.
export const publishedCaseStudies: readonly CaseStudy[] = [];
