export let BASEURL: string;

if (
  process.env.NODE_ENV === "development" &&
  process.env.NEXT_PUBLIC_VERCEL_URL
) {
  BASEURL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
} else if (process.env.NODE_ENV === "production") {
  BASEURL = "https://travel-website-mu.vercel.app";
} else if (process.env.NODE_ENV === "development") {
  BASEURL = "http://localhost:3000";
} else {
  BASEURL = "https://demo.iraqtraveltech.com";
}
