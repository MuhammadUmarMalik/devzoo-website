const defaultWhatsAppNumber = "923087588850";
const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ??
  defaultWhatsAppNumber;
const whatsappMessage =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
  "Hi Devzoo, I have a question about your services.";

const whatsappHref =
  whatsappNumber && whatsappNumber.length >= 8
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : "/contact";
const opensExternal = whatsappHref.startsWith("http");

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target={opensExternal ? "_blank" : undefined}
      rel={opensExternal ? "noopener noreferrer" : undefined}
      aria-label={
        opensExternal
          ? "Chat with Devzoo on WhatsApp"
          : "Open the Devzoo contact page"
      }
      title={
        opensExternal
          ? "Chat with us on WhatsApp"
          : "Add NEXT_PUBLIC_WHATSAPP_NUMBER to enable direct WhatsApp chat"
      }
      className="fixed right-4 bottom-4 z-[90] inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/14 bg-[#25D366] text-white shadow-[0_18px_40px_-18px_rgba(37,211,102,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-18px_rgba(37,211,102,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:right-6 sm:bottom-6"
    >
      <span className="whatsapp-float-ping" aria-hidden="true" />
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative z-[1] h-7 w-7"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
      </svg>
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
