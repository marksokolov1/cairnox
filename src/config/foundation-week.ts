export const foundationWeekDownloadEnabled = process.env.NEXT_PUBLIC_FOUNDATION_WEEK_DOWNLOAD === "true";

export const foundationWeekSignupEnabled =
  foundationWeekDownloadEnabled && process.env.NEXT_PUBLIC_FOUNDATION_WEEK_SIGNUP === "true";

export const foundationWeekPdfPath = "/downloads/cairnox-foundation-week-three-day.pdf";
export const foundationWeekAnchor = "#foundation-week";
export const foundationWeekSignupPath = `/base${foundationWeekAnchor}` as const;
