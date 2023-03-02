export let BASEURL: string;

if (process.env.NODE_ENV === "development") {
  BASEURL = "http://localhost:3000";
}
if (process.env.NEXT_PUBLIC_BUILDTIME_URL) {
  BASEURL = process.env.NEXT_PUBLIC_BUILDTIME_URL;
} else {
  BASEURL = "https://demo.iraqtraveltech.com";
}
