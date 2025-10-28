import { bookingScript } from "@/lib/data";

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 my-2">
      <h1 className="text-3xl font-semibold text-[color:var(--fg)] sm:text-4xl">
        Book Your Stay
      </h1>
      <ExternalWidget txt={bookingScript} />
    </div>
  );
}

function ExternalWidget({ txt }: { txt: string }) {
  return (
    <div
      className="contaner bg-white rounded-md"
      dangerouslySetInnerHTML={{ __html: txt }}
    />
  );
}
