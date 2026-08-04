import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function PageBreadcrumb({ page }: { page: string }) {
  return (
    <div className="border-b border-black/5 bg-[#F6F5F0] px-6 py-3 md:hidden">
      <Breadcrumb>
        <BreadcrumbList className="text-[#0E3B2E]/80">
          <BreadcrumbItem>
            <BreadcrumbLink render={<a href="/" />} className="hover:text-[#0E3B2E]">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-medium text-[#0E3B2E]">{page}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
