import React, { useEffect, useState } from "react";
// import ProfileMenu from "../components/ProfileMenu";
import toast from "react-hot-toast";
import axios from "axios";
import Loader from "../components/Loader";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const orderProducts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/api/v1/cart/order");
        setOrders(data);
        setLoading(false);
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
    <div className=" mt-4 mb-32">
      {/* <div>
        <ProfileMenu />
      </div> */}
      {loading && <Loader />}
      {orders?.length < 1 && (
        <div className="mt-10  text-gray-400 flex justify-center items-center flex-col">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-28"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </div>

          <p className=" text-center  font-medium">You have no orders yet</p>
        </div>
      )}

      <div>
        {orders.length > 0 &&
          orders.map((order) => {
            return (
              <div className="border-dashed font-mono p-3 w-full bg-gray-100 mb-4 rounded-lg  border-2 border-gray-300">
                <h1 className="  text-sm " key={order._id}>
                  <span className=" font-medium">ORDER ID:</span> {order._id}
                </h1>
                <p className=" text-sm ">
                  <span className=" font-medium">NUMBER OF ITEMS:</span>{" "}
                  {order?.products.length} items
                </p>
                <p className=" text-sm ">
                  <span className=" font-medium">ADDRESS:</span> {""}
                  {order?.delivery.address},{order?.delivery.state},
                  {order?.delivery.country}.
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Orders;
