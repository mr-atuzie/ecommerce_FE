import React, { useEffect, useState } from "react";
import ProfileMenu from "../components/ProfileMenu";
import toast from "react-hot-toast";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const orderProducts = async () => {
      try {
        const { data } = await axios.get("/api/v1/cart/order");
        setOrders(data);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        toast.error(message);
      }
    };

    orderProducts();
  }, []);

  console.log(orders);
  return (
    <div className=" mb-32">
      <div>
        <ProfileMenu />
      </div>

      <div>
        {orders.map((order) => {
          return (
            <div
              className=" font-mono text-sm border-dashed p-3 w-full bg-gray-100 mb-4 rounded-lg  border-2 border-gray-300"
              key={order._id}
            >
              {order._id}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
