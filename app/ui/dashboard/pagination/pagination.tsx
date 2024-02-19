"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const Pagination = ({ count }: any) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const currentPage = parseInt(searchParams.get("page") || "1");
    setPage(currentPage);
  }, [searchParams]);

  const ITEM_PER_PAGE = 1;

  const hasPrev = page > 1;
  const hasNext = page * ITEM_PER_PAGE < count;

  const handleChangePage = (type: string) => {
    const nextPage = type === "prev" ? page - 1 : page + 1;
    replace(`${pathname}?page=${nextPage}`);
  };

  return (
    <div className="flex justify-between">
      <button
        className={`px-4 py-2 text-white bg-gray-600 rounded-lg cursor-pointer ${
          hasPrev ? "hover:bg-gray-700" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Anterior
      </button>
      <button
        className={`px-4 py-2 text-white bg-gray-600 rounded-lg cursor-pointer ${
          hasNext ? "hover:bg-gray-700" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Próxima
      </button>
    </div>
  );
};

export default Pagination;
