
import React from "react";
import { motion } from "framer-motion";

const ratings = [
  { user: "User A", rating: 5 },
  { user: "User B", rating: 4 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const StoreOwnerDashboard = () => {
  const averageRating =
    ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length || 0;

  return (
    <div className="min-h-screen bg-black p-6">
      <motion.div
        className="max-w-5xl mx-auto space-y-12"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* Title */}
        <motion.h1
          className="text-6xl font-bold text-center text-gray-100 drop-shadow-sm"
          variants={fadeUp}
        >
          Store Owner Dashboard
        </motion.h1>

        {/* Average Rating */}
        <motion.section
          variants={fadeUp}
          custom={1}
          whileHover={{ scale: 1.02 }}
          className="border border-gray-500 rounded-2xl shadow-lg p-6 text-center transition duration-300 hover:shadow-xl"
        >
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">
            Your Store Average Rating
          </h2>
          <p className="text-6xl font-extrabold text-yellow-500 drop-shadow-md">
            {averageRating.toFixed(1)}
          </p>
        </motion.section>

        {/* User Ratings Table */}
        <motion.section
          variants={fadeUp}
          custom={2}
          whileHover={{ scale: 1.01 }}
          className="border border-gray-500 rounded-2xl shadow-lg p-6 transition duration-300 hover:shadow-xl"
        >
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">
            User Ratings
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-500 text-gray-100 text-sm uppercase">
                  <th className="px-6 py-3 text-left">User Name</th>
                  <th className="px-6 py-3 text-left">Rating</th>
                </tr>
              </thead>
              <tbody>
                {ratings.map((r, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-black" : "bg-gray-900"
                    } hover:bg-gray-800 border-b transition duration-200`}
                  >
                    <td className="px-6 py-4 text-gray-100">{r.user}</td>
                    <td className="px-6 py-4 font-medium text-yellow-600">
                      {r.rating}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Update Password */}
        <motion.section
          variants={fadeUp}
          custom={3}
          whileHover={{ scale: 1.02 }}
          className="border border-gray-500 rounded-2xl shadow-lg p-6 max-w-md mx-auto transition duration-300 hover:shadow-xl"
        >
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">
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
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200"
            >
              Update Password
            </button>
          </form>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default StoreOwnerDashboard;
