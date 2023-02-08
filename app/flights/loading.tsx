import LoadingTicketCard from "@/components/flights/LoadingTicketCard";

export default function page() {
  return (
    <div className="flex flex-col gap-4 pt-24 px-4 pb-10">
      {[1, 2, 3, 4].map((i, index) => (
        <LoadingTicketCard key={i} />
      ))}
    </div>
  );
}
