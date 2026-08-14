"use client";

import { useActionState } from "react";
import {
  CheckboxGroup,
  ConsentField,
  FormSection,
  FormStatus,
  Honeypot,
  PrivacyNotice,
  SelectField,
  SubmitButton,
  TextareaField,
  TextField,
} from "@/components/forms/form-controls";
import {
  submitApexEnquiry,
  submitBaseInterest,
  submitElevateApplication,
  submitGeneralEnquiry,
} from "@/lib/forms/actions";
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
import { initialFormState } from "@/lib/forms/types";

function FormShell({
  action,
  state,
  children,
  submitLabel,
  disclaimer,
}: {
  action: (payload: FormData) => void;
  state: typeof initialFormState;
  children: React.ReactNode;
  submitLabel: string;
  disclaimer?: boolean;
}) {
  if (state.status === "success") {
    return <FormStatus state={state} />;
  }
  return (
    <form action={action} className="grid gap-9" noValidate={false}>
      <Honeypot />
      <FormStatus state={state} />
      {children}
      <div className="grid gap-5 border-t border-line pt-8">
        <PrivacyNotice disclaimer={disclaimer} />
        <SubmitButton>{submitLabel}</SubmitButton>
      </div>
    </form>
  );
}

export function GeneralEnquiryForm() {
  const [state, action] = useActionState(submitGeneralEnquiry, initialFormState);
  return (
    <FormShell action={action} state={state} submitLabel="Send enquiry">
      <TextField label="Name" name="name" state={state} required autoComplete="name" maxLength={120} />
      <TextField label="Email" name="email" state={state} required type="email" autoComplete="email" inputMode="email" maxLength={254} />
      <TextField label="Organisation / team" name="organisation" state={state} autoComplete="organization" maxLength={180} />
      <TextareaField label="What can we help with?" name="message" state={state} required rows={6} maxLength={3000} />
    </FormShell>
  );
}

export function BaseInterestForm() {
  const [state, action] = useActionState(submitBaseInterest, initialFormState);
  return (
    <FormShell action={action} state={state} submitLabel="Register interest" disclaimer>
      <TextField label="Name" name="name" state={state} required autoComplete="name" maxLength={120} />
      <TextField label="Email" name="email" state={state} required type="email" autoComplete="email" inputMode="email" maxLength={254} />
      <TextField
        label="Sport / training context"
        name="trainingContext"
        state={state}
        maxLength={180}
        placeholder="e.g. rugby, cricket, squash, general athletic development"
      />
      <CheckboxGroup legend="What are you most interested in?" name="interests" state={state} options={baseInterestOptions} />
      <TextareaField label="Anything else we should know?" name="additionalContext" state={state} rows={5} maxLength={3000} />
    </FormShell>
  );
}

export function ElevateApplicationForm() {
  const [state, action] = useActionState(submitElevateApplication, initialFormState);
  return (
    <FormShell action={action} state={state} submitLabel="Submit ELEVATE application" disclaimer>
      <FormSection number="01" title="About you">
        <div className="grid gap-7 sm:grid-cols-2">
          <TextField label="Full name" name="name" state={state} required autoComplete="name" maxLength={120} />
          <TextField label="Email" name="email" state={state} required type="email" autoComplete="email" inputMode="email" maxLength={254} />
          <TextField label="Location" name="location" state={state} autoComplete="address-level2" maxLength={180} placeholder="City / country" className="sm:col-span-2" />
        </div>
      </FormSection>
      <FormSection number="02" title="Your sport">
        <TextField label="Sport / performance context" name="sportContext" state={state} required maxLength={180} />
        <SelectField label="Current level" name="currentLevel" state={state} options={elevateLevelOptions} required />
        <SelectField label="Current season status" name="seasonStatus" state={state} options={elevateSeasonOptions} />
      </FormSection>
      <FormSection number="03" title="What you need">
        <CheckboxGroup legend="What are you looking to improve?" name="improvements" state={state} options={elevateImprovementOptions} required />
        <TextareaField label="What is your main reason for seeking 1:1 coaching?" name="mainReason" state={state} required rows={6} maxLength={3000} />
        <TextareaField label="What does your current training look like?" name="currentTraining" state={state} rows={5} maxLength={3000} />
      </FormSection>
      <FormSection number="04" title="Coaching context">
        <SelectField label="Do you currently have a coach / team programme?" name="existingCoach" state={state} options={existingCoachOptions} />
        <TextareaField label="What does your competition / playing schedule look like?" name="competitionSchedule" state={state} rows={5} maxLength={3000} />
        <SelectField label="When would you ideally like to start?" name="idealStart" state={state} options={elevateStartOptions} />
      </FormSection>
      <FormSection number="05" title="Final">
        <TextareaField label="Anything else Mathew should know?" name="additionalContext" state={state} rows={5} maxLength={3000} />
        <ConsentField name="consent" state={state}>
          I understand that submitting this form is an application for ELEVATE and does not guarantee coaching availability.
        </ConsentField>
      </FormSection>
    </FormShell>
  );
}

export function ApexEnquiryForm() {
  const [state, action] = useActionState(submitApexEnquiry, initialFormState);
  return (
    <FormShell action={action} state={state} submitLabel="Discuss a project">
      <FormSection number="01" title="Contact">
        <div className="grid gap-7 sm:grid-cols-2">
          <TextField label="Name" name="name" state={state} required autoComplete="name" maxLength={120} />
          <TextField label="Work email" name="email" state={state} required type="email" autoComplete="email" inputMode="email" maxLength={254} />
          <TextField label="Organisation" name="organisation" state={state} required autoComplete="organization" maxLength={180} />
          <TextField label="Role" name="role" state={state} autoComplete="organization-title" maxLength={180} />
        </div>
      </FormSection>
      <FormSection number="02" title="Environment">
        <SelectField label="Type of organisation" name="organisationType" state={state} options={apexOrganisationOptions} required />
        <TextField label="Sport / performance environment" name="sport" state={state} required maxLength={180} />
        <TextareaField label="Approximate athlete / programme context" name="programmeContext" state={state} rows={5} maxLength={3000} />
      </FormSection>
      <FormSection number="03" title="Area of support">
        <CheckboxGroup legend="What would you like to discuss?" name="supportAreas" state={state} options={apexSupportOptions} required />
      </FormSection>
      <FormSection number="04" title="Project context">
        <TextareaField label="What are you trying to improve or solve?" name="projectObjective" state={state} required rows={6} maxLength={3000} />
        <TextareaField label="What does the current environment look like?" name="currentEnvironment" state={state} rows={5} maxLength={3000} />
        <CheckboxGroup legend="Preferred support format" name="supportFormats" state={state} options={apexFormatOptions} />
        <SelectField label="Timing" name="timing" state={state} options={apexTimingOptions} />
      </FormSection>
      <FormSection number="05" title="Final">
        <TextareaField label="Anything else we should know?" name="additionalContext" state={state} rows={5} maxLength={3000} />
      </FormSection>
    </FormShell>
  );
}
