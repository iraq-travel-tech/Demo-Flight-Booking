import HomeTopBg from "@/components/Home/components/HomeTopBg";
import HomeSearch from "@/components/Home/HomeSearch";

export default function page({ params }) {
  return (
    <div className="max-w-2xl mx-auto h-screen">
      <HomeTopBg lang={params.lang} />
      <HomeSearch lang={params.lang} />
    </div>
  );
}
