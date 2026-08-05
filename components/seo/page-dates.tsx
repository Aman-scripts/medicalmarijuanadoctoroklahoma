import { formatDisplayDate, type PageSeo } from "@/lib/seo";

export function PageDates({ page }: { page: PageSeo }) {
  return (
    <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-relaxed text-[#0E3B2E]/75">
      <time dateTime={page.datePublished}>
        Published {formatDisplayDate(page.datePublished)}
      </time>
      <span aria-hidden="true"> · </span>
      <time dateTime={page.dateModified}>
        Last updated {formatDisplayDate(page.dateModified)}
      </time>
    </p>
  );
}
