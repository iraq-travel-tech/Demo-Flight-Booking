export let BASEURL: string;

if (process.env.NODE_ENV === "development") {
  BASEURL = `http://localhost:3000`;
} else if (
  process.env.NODE_ENV === "production" &&
  process.env.NEXT_PUBLIC_VERCEL_URL
) {
  BASEURL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
} else {
  BASEURL = "https://demo.iraqtraveltech.com";
}
