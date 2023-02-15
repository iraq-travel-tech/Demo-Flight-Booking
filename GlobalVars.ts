export let BASEURL: string;

if (process.env.NEXT_PUBLIC_VERCEL_URL) {
  if (process.env.MAIN_VERCEL_URL) {
    BASEURL = `${process.env.MAIN_VERCEL_URL}`;
  } else if (process.env.NODE_ENV === "production") {
    BASEURL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  } else {
    BASEURL = `${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
} else {
  BASEURL = "https://demo.iraqtraveltech.com";
}
