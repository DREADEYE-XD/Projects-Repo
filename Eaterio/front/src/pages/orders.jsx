import React from "react";

const Orders = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3 font-bold">
        <thead>
          <tr className="text-center text-xl">
            <th>Order ID</th>
            <th className="hidden md:block">Date</th>
            <th>Price</th>
            <th className="hidden md:block">Items</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-red-100 text-center">
            <td className="px-1 py-3">1234878</td>
            <td className="hidden md:block px-1 py-3">19.06.2024</td>
            <td className="px-1 py-3">$80</td>
            <td className="hidden md:block overflow-hidden">Silian (1), Margerita (2), Silian (1), Margerita (2), Silian (1), Margerita (2)</td>
            <td className="text-red-500 px-1 py-3">In Progress...</td>
          </tr>
          <tr className="odd:bg-slate-200 text-center">
            <td className="px-1 py-3">1234878</td>
            <td className="hidden md:block px-1 py-3">19.06.2024</td>
            <td className="px-1 py-3">$80</td>
            <td className="hidden md:block">Silian (1), Margerita (2)</td>
            <td className="text-green-600 px-1 py-3">Completed</td>
          </tr>
          <tr className="odd:bg-slate-200 text-center">
            <td className="px-1 py-3">1234878</td>
            <td className="hidden md:block px-1 py-3">19.06.2024</td>
            <td className="px-1 py-3">$80</td>
            <td className="hidden md:block">Silian (1), Margerita (2)</td>
            <td className="text-green-600 px-1 py-3">Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
