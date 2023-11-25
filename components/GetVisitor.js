import { fetchVisitorData } from "@/redux/dataSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const GetVisitor = () => {
  const dispatch = useDispatch();
  const visitorData = useSelector((state) => state.visitor.visitor); 

  useEffect(() => {
    dispatch(fetchVisitorData());
  }, [dispatch]);
  
  // Access the visitor data in your component
  console.log("Visitor Data:", visitorData); // Access the visitor object

  return null;
};

export default GetVisitor;
