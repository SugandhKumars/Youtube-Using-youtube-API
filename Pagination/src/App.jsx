import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(1);
  const getProducts = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=100");
    const res = await data.json();
    setProducts(res?.products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  // console.log(products && products.length);
  return (
    <div>
      <div className="w-screen flex flex-wrap gap-y-7 justify-center items-center">
        {products?.slice(page * 20 - 20, page * 20)?.map((p) => (
          <div
            key={p?.id}
            className="h-52 w-52 bg-zinc-200 py-6 rounded-lg px-4 mr-8"
          >
            <img className="w-full h-full" src={p?.thumbnail} alt="" />
            <p>{p?.title}</p>
          </div>
        ))}

        {/* {console.log([...Array(products?.length)])} */}
      </div>
      {products?.length > 0 && (
        <div className="flex justify-center mx-auto mt-10">
          <div className="flex  w-[30%] gap-x-2 justify-center items-center cursor-pointer">
            <span
              className={`${
                page == 1 ? "hidden" : "block"
              } bg-zinc-200 px-2 py-1`}
              onClick={() => {
                if (page > 1) setPage(page - 1);
              }}
            >
              Previous
            </span>
            {[...Array(products?.length / 20)].map((_, i) => (
              <span
                key={i}
                onClick={() => setPage(i + 1)}
                className="border-[1px] border-black px-4 py-2"
              >
                {i + 1}
              </span>
            ))}
            <span
              className={`${
                page == products.length / 20 ? "hidden" : "block"
              } bg-zinc-200 px-2 py-1 active:bg-zinc-500 `}
              onClick={() => {
                if (page < products.length / 20) {
                  setPage(page + 1);
                }
              }}
            >
              Next
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
