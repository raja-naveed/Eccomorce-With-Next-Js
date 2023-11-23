import { selectTotalQuantity } from "@/redux/cartSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const totalQuantity = useSelector(selectTotalQuantity);
  const router = useRouter();
  const [visitorData, setVisitorData] = useState();

  const handlescroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = sessionStorage.getItem('visitor_data');
      if (data) {
        try {
          const parsedData = JSON.parse(data);
          setVisitorData(parsedData.address);
        } catch (error) {
          console.error('Error parsing JSON:', error);
          // Handle the case where JSON parsing fails
        }
      } else {
        // Handle the case where visitor_data is not found in sessionStorage
      }
    }
  }, [router]);

  useEffect(() => {
    window.addEventListener('scroll', handlescroll);
    return () => {
      window.removeEventListener('scroll', handlescroll);
    };
  }, []);

  return (
    <div className={`text-black flex justify-between items-center py-6 ${scrolled ? 'sticky-header' : ''}`}>
      <Link href="/" className="text-2xl font-bold text-gray-800">
        <img src="/logo.png" alt="" height={70} width={200} />
      </Link>
      <ul className="flex items-center font-semibold">
        <li className="ml-6">
          <Link href="/">Home</Link>
        </li>
        <li className="ml-6">
          <Link href="/products">Products</Link>
        </li>
        <li className="ml-6">
          <p>{visitorData ? visitorData.city : 'Loading...'}</p>
          <Link href="/cart">
            <div className="flex items-center bg-[#F59E0D] px-2 py-2 rounded-lg">
              <span className="font-semibold">{totalQuantity}</span>
              <AiOutlineShoppingCart size={20} className=" ml-2" />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
