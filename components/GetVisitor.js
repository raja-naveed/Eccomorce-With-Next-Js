
import { fetchVisitor, loadVisitor } from "@/redux/visitorSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const GetVisitor = () => {
  const visitor = useSelector((state) => state.visitor);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = sessionStorage.getItem("visitor_data");
    // console.log(data);

    if (!data) {
      dispatch(fetchVisitor());
    } else {
      dispatch(loadVisitor());
    }
  }, []);

  // console.log(visitor);

  return null;
};
export default GetVisitor;
