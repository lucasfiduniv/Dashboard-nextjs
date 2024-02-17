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
];

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const count = productsData.length;
  const ITEMS_PER_PAGE = 5;
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const products = productsData.slice(startIndex, endIndex);

  return (
    <div className="bg-[#182237] p-6 rounded-lg mt-6">
      <div className="flex items-center justify-between mb-4">
        <Search placeholder="Buscar Por Produto..." />
        <Link href="/dashboard/products/add">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Novo Produto
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-4">Título</td>
            <td className="p-4">Descrição</td>
            <td className="p-4">Preço</td>
            <td className="p-4">Criado Em</td>
            <td className="p-4">Quantidade</td>
            <td className="p-4">Ação</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="p-4">
                <div className="flex items-center gap-3">
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
                  {product.title}
                </div>
              </td>
              <td className="p-4">{product.desc}</td>
              <td className="p-4">${product.price}</td>
              <td className="p-4">
                {product.createdAt?.toString().slice(4, 16)}
              </td>
              <td className="p-4">{product.stock}</td>
              <td className="p-4">
                <div className="flex gap-4">
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className="px-4 py-2 bg-teal-500 text-white rounded-md">
                      Ver
                    </button>
                  </Link>
                  {/* <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className="px-4 py-2 bg-crimson text-white rounded-md">
                      Delete
                    </button>
                  </form> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={Math.ceil(count / ITEMS_PER_PAGE)} />
    </div>
  );
};

export default ProductsPage;
