export let BASEURL: string;

if (process.env.NODE_ENV === "development") {
  BASEURL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
} else if (
  process.env.NODE_ENV === "production" &&
  process.env.NEXT_PUBLIC_VERCEL_URL
) {
  BASEURL = "https://travel-website-mu.vercel.app";
} else {
  BASEURL = "https://demo.iraqtraveltech.com";
}
