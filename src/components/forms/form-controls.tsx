"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { Button, TextLink } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";
import type { FormActionState, FormFieldValue } from "@/lib/forms/types";

function fieldValue(value: FormFieldValue | undefined) {
  return typeof value === "string" ? value : "";
}

function FieldMessage({ id, error, hint }: { id: string; error?: string; hint?: string }) {
  if (!error && !hint) return null;
  return (
    <p id={id} className={cn("mt-2 text-sm leading-6", error ? "font-semibold text-ink" : "text-mineral")}>
      {error ?? hint}
    </p>
  );
}

export function TextField({
  label,
  name,
  state,
  hint,
  required,
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<"input">, "defaultValue"> & {
  label: string;
  name: string;
  state: FormActionState;
  hint?: string;
}) {
  const error = state.errors[name];
  const descriptionId = `${name}-description`;
  return (
    <div className={className}>
      <label htmlFor={name} className="form-label">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={name}
        name={name}
        required={required}
        defaultValue={fieldValue(state.values[name])}
        aria-invalid={Boolean(error)}
        aria-describedby={error || hint ? descriptionId : undefined}
        className="form-control"
        {...props}
      />
      <FieldMessage id={descriptionId} error={error} hint={hint} />
    </div>
  );
}

export function TextareaField({
  label,
  name,
  state,
  hint,
  required,
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<"textarea">, "defaultValue"> & {
  label: string;
  name: string;
  state: FormActionState;
  hint?: string;
}) {
  const error = state.errors[name];
  const descriptionId = `${name}-description`;
  return (
    <div className={className}>
      <label htmlFor={name} className="form-label">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        defaultValue={fieldValue(state.values[name])}
        aria-invalid={Boolean(error)}
        aria-describedby={error || hint ? descriptionId : undefined}
        className="form-control form-textarea"
        {...props}
      />
      <FieldMessage id={descriptionId} error={error} hint={hint} />
    </div>
  );
}

export function SelectField({
  label,
  name,
  state,
  options,
  placeholder = "Select an option",
  required,
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<"select">, "defaultValue"> & {
  label: string;
  name: string;
  state: FormActionState;
  options: readonly string[];
  placeholder?: string;
}) {
  const error = state.errors[name];
  const descriptionId = `${name}-description`;
  return (
    <div className={className}>
      <label htmlFor={name} className="form-label">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue={fieldValue(state.values[name])}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? descriptionId : undefined}
        className="form-control form-select"
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option value={option} key={option}>{option}</option>
        ))}
      </select>
      <FieldMessage id={descriptionId} error={error} />
    </div>
  );
}

export function CheckboxGroup({
  legend,
  name,
  state,
  options,
  required,
}: {
  legend: string;
  name: string;
  state: FormActionState;
  options: readonly string[];
  required?: boolean;
}) {
  const selected = Array.isArray(state.values[name]) ? state.values[name] : [];
  const error = state.errors[name];
  const errorId = `${name}-description`;
  return (
    <fieldset aria-describedby={error ? errorId : undefined} aria-invalid={Boolean(error)}>
      <legend className="form-label mb-4">
        {legend} {required && <span aria-hidden="true">*</span>}
      </legend>
      <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
        {options.map((option) => {
          const id = `${name}-${option.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
          return (
            <label key={option} htmlFor={id} className="form-choice">
              <input
                id={id}
                name={name}
                value={option}
                type="checkbox"
                defaultChecked={selected.includes(option)}
              />
              <span>{option}</span>
            </label>
          );
        })}
      </div>
      <FieldMessage id={errorId} error={error} />
    </fieldset>
  );
}

export function ConsentField({
  name,
  state,
  children,
}: {
  name: string;
  state: FormActionState;
  children: ReactNode;
}) {
  const error = state.errors[name];
  const errorId = `${name}-description`;
  return (
    <div>
      <label htmlFor={name} className="form-choice items-start">
        <input
          id={name}
          name={name}
          value="accepted"
          type="checkbox"
          required
          defaultChecked={state.values[name] === "accepted"}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        />
        <span>{children}</span>
      </label>
      <FieldMessage id={errorId} error={error} />
    </div>
  );
}

export function FormSection({
  number,
  title,
  children,
}: {
  number?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="border-t border-line pt-7 sm:pt-9">
      <legend className="mb-8 flex w-full items-baseline gap-5 pr-3 text-sm font-semibold uppercase tracking-[0.12em]">
        {number && <span className="text-mineral">{number}</span>}
        <span>{title}</span>
      </legend>
      <div className="grid gap-7 sm:gap-8">{children}</div>
    </fieldset>
  );
}

export function FormStatus({ state }: { state: FormActionState }) {
  if (state.status === "idle") return null;
  const isSuccess = state.status === "success";
  return (
    <div
      role={isSuccess ? "status" : "alert"}
      className={cn(
        "border-l-2 px-5 py-4",
        isSuccess ? "border-moss bg-stone-light" : "border-ink bg-stone-light",
      )}
      tabIndex={-1}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.12em]">{state.message}</p>
      {state.detail && <p className="mt-2 max-w-2xl text-sm leading-6 text-mineral">{state.detail}</p>}
    </div>
  );
}

export function Honeypot() {
  return (
    <div className="form-honeypot" aria-hidden="true" hidden>
      <label htmlFor="website">Website</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function PrivacyNotice({ disclaimer = false }: { disclaimer?: boolean }) {
  return (
    <p className="max-w-xl text-sm leading-6 text-mineral">
      Your information will only be used to respond to your enquiry or application.{" "}
      <TextLink href="/privacy">Privacy</TextLink>
      {disclaimer && (
        <>
          {" · "}<TextLink href="/training-disclaimer">Training disclaimer</TextLink>
        </>
      )}
    </p>
  );
}

export function SubmitButton({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} aria-disabled={pending} className="w-full sm:w-auto">
      {pending ? "Submitting…" : children}
    </Button>
  );
}
