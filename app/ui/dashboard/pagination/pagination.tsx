import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }: any) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = parseInt(searchParams.get("page") || "1");

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", (page - 1).toString())
      : params.set("page", (page + 1).toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="p-10 flex justify-between">
      <button
        className="px-4 py-2 cursor-pointer"
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Anterior
      </button>
      <button
        className="px-4 py-2 cursor-pointer"
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Próxima
      </button>
    </div>
  );
};

export default Pagination;
