import { useState, useEffect } from "react";
import axios from "axios";
import api from "../api";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    product_name: "",
    price: "",
    description: "",
    category: "",
    stock: "",
  });
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("product_name", formData.product_name);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("stock", formData.stock);
    data.append("image", file);

    api
      .post("/products/submit", data)
      .then((res) => {
        console.log(res.data.message);
        // fetchProducts(); // Update product list after adding
        setFormData({
          product_name: "",
          price: "",
          description: "",
          category: "",
          stock: "",
        });
        setFile(null); // Clear form
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
        <h1 className="text-2xl font-bold text-[#575757] mb-6">
          Add New Product
        </h1>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-6"
          method="post"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="product-name"
                className="block text-sm font-medium text-[#575757] mb-1"
              >
                Product Name
              </label>
              <input
                type="text"
                id="product-name"
                name="product_name"
                value={formData.product_name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#d8c9ae] rounded-md focus:outline-none focus:ring-1 focus:ring-[#575757]"
                placeholder="Enter product name"
              />
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-[#575757] mb-1"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                onChange={handleChange}
                value={formData.price}
                className="w-full px-3 py-2 border border-[#d8c9ae] rounded-md focus:outline-none focus:ring-1 focus:ring-[#575757]"
                placeholder="Enter price"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-[#575757] mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              rows="4"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#d8c9ae] rounded-md focus:outline-none focus:ring-1 focus:ring-[#575757]"
              placeholder="Enter detailed product description"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#575757] mb-2">
              Product Images
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#d8c9ae] border-dashed rounded-lg cursor-pointer bg-[#f8f5ee] hover:bg-[#f0ece1]">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-[#575757]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-[#575757]">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-[#575757]">
                    PNG, JPG, GIF (MAX. 5MB each)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  multiple
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-[#575757] mb-1"
              >
                Category
              </label>
              <select
                id="category"
                onChange={handleChange}
                value={formData.category}
                name="category"
                className="w-full px-3 py-2 border border-[#d8c9ae] rounded-md focus:outline-none focus:ring-1 focus:ring-[#575757]"
              >
                <option value="">Select a category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="home">Home & Garden</option>
                <option value="beauty">Beauty</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="stock"
                className="block text-sm font-medium text-[#575757] mb-1"
              >
                Stock Quantity
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#d8c9ae] rounded-md focus:outline-none focus:ring-1 focus:ring-[#575757]"
                placeholder="Enter available quantity"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-[#575757] text-[#d8c9ae] rounded-md hover:bg-[#454545] transition"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
