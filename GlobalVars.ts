export let BASEURL: string;

if (process.env.NEXT_PUBLIC_VERCEL_URL) {
  BASEURL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
}
if (process.env.NEXT_PUBLIC_BUILDTIME_URL) {
  BASEURL = `http://localhost:3000`;
} else {
  BASEURL = "https://demo.iraqtraveltech.com";
}
