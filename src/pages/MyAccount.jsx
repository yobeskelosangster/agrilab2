import React, { useState } from "react";
import "./MyAccount.css";

const MyAccount = () => {
  // Mock user data
  const [user] = useState({
    name: "Yobe Skello",
    email: "yobe@example.com",
  });

  // Mock orders data
  const [orders] = useState([
    {
      id: 1,
      date: "2025-10-09",
      products: [
        { name: "Fresh Maize", quantity: 2 },
        { name: "Organic Tomatoes", quantity: 5 },
      ],
      total: 760,
      status: "Delivered",
    },
    {
      id: 2,
      date: "2025-09-28",
      products: [{ name: "Green Spinach", quantity: 3 }],
      total: 150,
      status: "Pending",
    },
  ]);

  return (
    <div className="account-container">
      <h1>My Account</h1>

      {/* User Information */}
      <section className="user-info">
        <h2>User Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </section>

      {/* Order History */}
      <section className="order-history">
        <h2>Order History</h2>
        {orders.length === 0 ? (
          <p>You have no orders yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Products</th>
                <th>Total (MK)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.date}</td>
                  <td>
                    {order.products.map((p, index) => (
                      <div key={index}>
                        {p.name} x {p.quantity}
                      </div>
                    ))}
                  </td>
                  <td>{order.total}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default MyAccount;
