import Image from "next/image";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import noproduct from "@/public/noproduct.png";

interface SearchParams {
  q?: string;
  page?: number;
}

const productsData = [
  {
    id: 1,
    title: "Produto",
    desc: "descricao",
    price: 100,
    createdAt: new Date(),
    stock: 10,
    img: "",
  },
  {
    id: 2,
    title: "Produto 2",
    desc: "descricao 2",
    price: 150,
    createdAt: new Date(),
    stock: 15,
    img: "",
  },
  {
    id: 3,
    title: "Produto 3",
    desc: "descricao 3",
    price: 150,
    createdAt: new Date(),
    stock: 15,
    img: "",
  },
];

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const count = productsData.length;
  const ITEMS_PER_PAGE = 1;
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const products = productsData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
  const showPagination = totalPages > 1 && page < totalPages;

  return (
    <div className="bg-[#182237] p-6 rounded-lg mt-6">
      <div className="mb-4 flex justify-between items-center">
        <Search placeholder="Buscar por um produto..." />
        <Link href="products/add">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Adicionar Usuário
          </button>
        </Link>
      </div>
      {products.map((product) => (
        <div
          key={product.id}
          className="mb-6 bg-[#182237] p-4 rounded-md hover:shadow-[3px_3px_0px_0px_rgba(0,59,255)] shadow shadow-blue-800"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
            <div className="mb-2 md:mb-0 flex items-center gap-4">
              {product.img ? (
                <Image
                  src={product.img}
                  alt=""
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              ) : (
                <Image
                  src={noproduct}
                  alt=""
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              )}
              <span>{product.title}</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <div className="md:mr-4">
                <span className="text-sm text-gray-400">Descrição:</span>{" "}
                <span>{product.desc}</span>
              </div>
              <div>
                <span className="text-sm text-gray-400">Preço:</span>{" "}
                <span>${product.price}</span>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <span className="text-sm text-gray-400">Criado Em:</span>{" "}
            <span>{product.createdAt?.toString().slice(4, 16)}</span>
          </div>
          <div className="mt-2">
            <span className="text-sm text-gray-400">Quantidade:</span>{" "}
            <span>{product.stock}</span>
          </div>
          <div className="mt-4 flex gap-4">
            <Link href={`/dashboard/products/${product.id}`}>
              <button className="px-4 py-2 bg-teal-500 hover:bg-teal-700 text-white rounded-md">
                Ver
              </button>
            </Link>
          </div>
        </div>
      ))}
      <Pagination count={totalPages} />
    </div>
  );
};

export default ProductsPage;
