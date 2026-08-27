"use client";

import { useState, type FormEventHandler } from "react";
import {
  CheckboxGroup,
  ConsentField,
  DirectEmailFallback,
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
import { validateFormSubmission } from "@/lib/forms/schemas";
import { submitWithFormSubmit } from "@/lib/forms/formsubmit-client";
import {
  initialFormState,
  type FormActionState,
  type FormSubmissionType,
} from "@/lib/forms/types";

function focusFormStatus(type: FormSubmissionType) {
  window.requestAnimationFrame(() => {
    document.getElementById(`${type}-form-status`)?.focus();
  });
}

function useStaticForm(type: FormSubmissionType) {
  const [state, setState] = useState<FormActionState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const honeypot = formData.get("website");

    if (typeof honeypot === "string" && honeypot.length > 0) {
      setState({
        status: "failure",
        message: "We couldn't process this submission.",
        detail: "Please refresh the page and try again.",
        errors: {},
        values: {},
      });
      focusFormStatus(type);
      return;
    }

    const validation = validateFormSubmission(type, formData);
    if (!validation.success) {
      setState({
        status: "invalid",
        message: "Check the highlighted fields.",
        detail: "Your information has not been submitted.",
        errors: validation.errors,
        values: validation.values,
      });
      focusFormStatus(type);
      return;
    }

    setIsSubmitting(true);

    try {
      const delivery = await submitWithFormSubmit(type, validation.values);

      if (!delivery.accepted) {
        setState({
          status: "failure",
          message: "We couldn't send this yet. Please try again.",
          detail: "Your information has not been delivered.",
          errors: {},
          values: validation.values,
        });
        focusFormStatus(type);
        return;
      }

      const successContent: Record<FormSubmissionType, { message: string; detail: string }> = {
        general: {
          message: "Enquiry received.",
          detail: "Thanks for contacting CAIRNOX. Your enquiry has been delivered for review.",
        },
        base_interest: {
          message: "Interest registered.",
          detail: "Thanks for your interest in CAIRNOX BASE. Your details have been received.",
        },
        elevate_application: {
          message: "Application received.",
          detail: "Thanks for applying for CAIRNOX ELEVATE. Mathew will review the information you provided before any next step is arranged.",
        },
        apex_enquiry: {
          message: "Enquiry received.",
          detail: "Thanks for contacting CAIRNOX about APEX. The project context will be reviewed before any next step is arranged.",
        },
      };

      form.reset();
      setState({
        status: "success",
        ...successContent[type],
        errors: {},
        values: {},
      });
      focusFormStatus(type);
    } catch {
      setState({
        status: "failure",
        message: "We couldn't send this yet. Please try again.",
        detail: "Your information has not been delivered. You can also email Mathew directly.",
        errors: {},
        values: validation.values,
      });
      focusFormStatus(type);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { state, onSubmit, isSubmitting };
}

function FormShell({
  onSubmit,
  state,
  type,
  children,
  submitLabel,
  disclaimer,
  isSubmitting,
}: {
  onSubmit: FormEventHandler<HTMLFormElement>;
  state: typeof initialFormState;
  type: FormSubmissionType;
  children: React.ReactNode;
  submitLabel: string;
  disclaimer?: boolean;
  isSubmitting: boolean;
}) {
  if (state.status === "success") {
    return <FormStatus state={state} id={`${type}-form-status`} />;
  }
  return (
    <form onSubmit={onSubmit} className="grid gap-9" noValidate>
      <Honeypot />
      <FormStatus state={state} id={`${type}-form-status`} />
      {children}
      <div className="grid gap-5 border-t border-line pt-8">
        <PrivacyNotice disclaimer={disclaimer} />
        <DirectEmailFallback />
        <SubmitButton disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : submitLabel}
        </SubmitButton>
      </div>
    </form>
  );
}

export function GeneralEnquiryForm() {
  const { state, onSubmit, isSubmitting } = useStaticForm("general");
  return (
    <FormShell type="general" onSubmit={onSubmit} state={state} submitLabel="Send enquiry" isSubmitting={isSubmitting}>
      <TextField label="Name" name="name" state={state} required autoComplete="name" maxLength={120} />
      <TextField label="Email" name="email" state={state} required type="email" autoComplete="email" inputMode="email" maxLength={254} />
      <TextField label="Organisation / team" name="organisation" state={state} autoComplete="organization" maxLength={180} />
      <TextareaField label="What can we help with?" name="message" state={state} required rows={6} maxLength={3000} />
    </FormShell>
  );
}

export function BaseInterestForm() {
  const { state, onSubmit, isSubmitting } = useStaticForm("base_interest");
  return (
    <FormShell type="base_interest" onSubmit={onSubmit} state={state} submitLabel="Register interest" disclaimer isSubmitting={isSubmitting}>
      <TextField label="Name" name="name" state={state} required autoComplete="name" maxLength={120} />
      <TextField label="Email" name="email" state={state} required type="email" autoComplete="email" inputMode="email" maxLength={254} />
      <TextField
        label="Cricket role and training context"
        name="trainingContext"
        state={state}
        maxLength={180}
        placeholder="e.g. fast bowler, batter, wicketkeeper, all-rounder"
      />
      <CheckboxGroup legend="What are you most interested in?" name="interests" state={state} options={baseInterestOptions} />
      <TextareaField label="Anything else we should know?" name="additionalContext" state={state} rows={5} maxLength={3000} />
    </FormShell>
  );
}

export function ElevateApplicationForm() {
  const { state, onSubmit, isSubmitting } = useStaticForm("elevate_application");
  return (
    <FormShell type="elevate_application" onSubmit={onSubmit} state={state} submitLabel="Submit ELEVATE application" disclaimer isSubmitting={isSubmitting}>
      <FormSection number="01" title="About you">
        <div className="grid gap-7 sm:grid-cols-2">
          <TextField label="Full name" name="name" state={state} required autoComplete="name" maxLength={120} />
          <TextField label="Email" name="email" state={state} required type="email" autoComplete="email" inputMode="email" maxLength={254} />
          <TextField label="Location" name="location" state={state} autoComplete="address-level2" maxLength={180} placeholder="City / country" className="sm:col-span-2" />
        </div>
      </FormSection>
      <FormSection number="02" title="Your cricket context">
        <TextField label="Cricket role and performance context" name="sportContext" state={state} required maxLength={180} />
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
  const { state, onSubmit, isSubmitting } = useStaticForm("apex_enquiry");
  return (
    <FormShell type="apex_enquiry" onSubmit={onSubmit} state={state} submitLabel="Discuss a project" isSubmitting={isSubmitting}>
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
        <TextField label="Cricket programme / performance environment" name="sport" state={state} required maxLength={180} />
        <TextareaField label="Approximate player / programme context" name="programmeContext" state={state} rows={5} maxLength={3000} />
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
