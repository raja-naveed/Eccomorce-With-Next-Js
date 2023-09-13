import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navigation = () => {
  return (
    <div className=" text-black flex justify-between items-center py-6">
      <Link href="/" className="text-2xl font-bold text-gray-800">
        <img src="/logo.png" alt="" />
      </Link>
      <ul className="flex items-center font-semibold">
        <li className="ml-6">
          <Link href="/">Home</Link>
        </li>
        <li className="ml-6">
          <Link href="/products">Products</Link>
        </li>
        <li className="ml-6">
          <Link href="/cart">
            <div className="flex items-center bg-[#F59E0D] px-2 py-2 rounded-lg">
              <span className="font-semibold">0</span>
              <AiOutlineShoppingCart size={20} className=" ml-2" />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
