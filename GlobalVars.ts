export let BASEURL: string;

if (process.env.NEXT_PUBLIC_VERCEL_URL) {
  if (process.env.NODE_ENV === "production") {
    BASEURL = `https://travel-website-mu.vercel.app`;
  } else {
    BASEURL = `http://localhost:3000`;
  }
} else {
  BASEURL = "https://demo.iraqtraveltech.com";
}
