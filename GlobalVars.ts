export const BASEURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://${process.env.VERCEL_URL}`;
