import React from "react";
import { FaUsers, FaStore, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import AdminImage from "../../public/img/admin2.png";
import BgBanner from "../../public/img/admin.avif"; // Add a nice dashboard banner image
import StoreAvatar from "../../public/img/beautiful-teenage-girl-joyfully-dancing-with-pink-shopping-bags-her-hands_1163-1513.avif"; // Add a store avatar image

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-black p-6 relative">
      {/* Background Banner */}
      <div
        className="absolute top-0 left-0 w-full h-64 bg-cover bg-center rounded-b-3xl shadow-lg"
        style={{ backgroundImage: `url(${BgBanner})` }}
      >
        <div className="w-full h-full bg-blue-900/60 backdrop-blur-sm rounded-b-3xl"></div>
      </div>

      <div className="relative z-10 mt-10">
        {/* Dashboard Header */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-6xl font-bold text-white drop-shadow-md">Admin Dashboard</h1>
            <p className="text-blue-100 mt-2">
              Welcome back! Here's an overview of the platform.
            </p>
          </div>
          <motion.img
            src={AdminImage}
            alt="Admin"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-46 h-50 object-contain drop-shadow-xl animate-pulse"
          />
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500 transition duration-300"
          >
            <div className="flex items-center gap-4">
              <FaUsers className="text-4xl text-blue-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
                <p className="text-3xl font-bold text-blue-700">120</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500 transition duration-300"
          >
            <div className="flex items-center gap-4">
              <FaStore className="text-4xl text-green-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Total Stores</h2>
                <p className="text-3xl font-bold text-green-700">45</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500 transition duration-300"
          >
            <div className="flex items-center gap-4">
              <FaStar className="text-4xl text-purple-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Total Ratings</h2>
                <p className="text-3xl font-bold text-purple-700">370</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Registered Stores Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-black border border-gray-500 rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
        >
          <h2 className="text-2xl font-bold text-white mb-6 border-b pb-2">
            Recent Registered Stores
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left">
              <thead>
                <tr className="border border-gray-500 text-white">
                  <th className="p-3 font-semibold">Store</th>
                  <th className="p-3 font-semibold">Email</th>
                  <th className="p-3 font-semibold">Address</th>
                  <th className="p-3 font-semibold">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b text-white hover:bg-gray-600 transition">
                  <td className="p-3 flex items-center gap-3">
                    <img
                      src={StoreAvatar}
                      alt="Store A"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    Store A
                  </td>
                  <td className="p-3">storea@example.com</td>
                  <td className="p-3">123 Main St</td>
                  <td className="p-3">4.5</td>
                </tr>
                <tr className="border-b text-white hover:bg-gray-600 transition">
                  <td className="p-3 flex items-center gap-3">
                    <img
                      src={StoreAvatar}
                      alt="Store B"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    Store B
                  </td>
                  <td className="p-3">storeb@example.com</td>
                  <td className="p-3">456 Oak St</td>
                  <td className="p-3">4.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
