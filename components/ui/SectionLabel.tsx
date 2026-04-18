interface SectionLabelProps {
  children: string;
  dark?: boolean;
}

export default function SectionLabel({ children, dark = false }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-heading font-semibold uppercase tracking-[0.12em] mb-4 ${
        dark ? "text-brand" : "text-brand"
      }`}
    >
      {children}
    </span>
  );
}
