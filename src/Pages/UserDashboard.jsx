
import React, { useState } from "react";
import { motion } from "framer-motion";
import UserBanner from "../../public/img/beautiful-teenage-girl-joyfully-dancing-with-pink-shopping-bags-her-hands_1163-1513.avif"; // Add a user illustration
import StoreAvatar from "../../public/img/beautiful-teenage-girl-joyfully-dancing-with-pink-shopping-bags-her-hands_1163-1513.avif"; // Replace with relevant avatar

const stores = [
  {
    id: 1,
    name: "Store A",
    address: "123 Street",
    overallRating: 4.5,
    userRating: 4,
  },
  {
    id: 2,
    name: "Store B",
    address: "456 Avenue",
    overallRating: 3.9,
    userRating: null,
  },
];

const NormalUserDashboard = () => {
  const [ratings, setRatings] = useState(
    stores.reduce((acc, s) => ({ ...acc, [s.id]: s.userRating }), {})
  );

  const handleRatingChange = (storeId, value) => {
    setRatings({ ...ratings, [storeId]: Number(value) });
  };

  return (
    <div className="min-h-screen bg-black p-8">
      {/* Banner */}
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <div>
          <h1 className="text-6xl font-bold text-white drop-shadow-md">
            Welcome, User!
          </h1>
          <p className="text-gray-200 mt-2">
            Explore stores and share your ratings.
          </p>
        </div>
        <motion.video
          src="/img/user video 3.mp4" // or import and use: import dashboardVideo from ...
          className="w-80 h-48 object-contain rounded-xl"
          autoPlay
          muted
          loop
          playsInline
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Stores Table */}
      <motion.section
        className="border border-gray-400 p-6 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-6">Your Stores</h2>
        <div className="overflow-x-auto ">
          <table className="w-full table-auto border border-gray-300 text-left">
            <thead className="border border-gray-300 text-white">
              <tr>
                <th className="p-4">Store</th>
                <th className="p-4">Address</th>
                <th className="p-4">Overall Rating</th>
                <th className="p-4">Your Rating</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((store) => (
                <tr
                  key={store.id}
                  className="border-t hover:bg-gray-600 transition"
                >
                  <td className="p-4 flex items-center gap-2 text-white">
                    <img
                      src={StoreAvatar}
                      alt={store.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    {store.name}
                  </td>
                  <td className="p-4 text-white">{store.address}</td>
                  <td className="p-4 text-yellow-600 font-medium">
                    {store.overallRating}
                  </td>
                  <td className="p-4 text-white">
                    <select
                      value={ratings[store.id] || ""}
                      onChange={(e) =>
                        handleRatingChange(store.id, e.target.value)
                      }
                      className="p-2 border border-gray-500 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Rate</option>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Password Section */}
      <motion.section
        className="mt-12 max-w-md border border-gray-500 p-6 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl  text-white font-semibold text-blue-900 mb-4">
          Update Password
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Password updated (mock)!");
          }}
          className="space-y-4"
        >
          <input
            type="password"
            placeholder="New Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
          >
            Update Password
          </button>
        </form>
      </motion.section>
    </div>
  );
};

export default NormalUserDashboard;
