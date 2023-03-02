export let BASEURL: string;

if (process.env.NEXT_PUBLIC_VERCEL_URL) {
  BASEURL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
} else if (process.env.BUILDTIME_URL) {
  BASEURL = process.env.BUILDTIME_URL;
} else {
  BASEURL = "https://demo.iraqtraveltech.com";
}
