"use client";

import { useState } from "react";
import Modal from "../admin/ui/Model"; // framer-motion modal
import CompanyCard from "./ComapanyCard";

type CategoryType = { category: string; rate: string };

type CompanyType = {
  logo?: string;
  name: string;
  founder?: string;
  ceo?: string;
  foundedYear?: string;
  website?: string;
  email?: string;
  phone?: string;
  address?: string;
  companyCashbackRate?: string;
  maxCashback?: string;
  productName?: string;
  productCashbackRate?: string;
  deeplink?: string;
  description?: string;
  categories?: CategoryType[];
  status: "Active" | "Inactive";
  rating?: number;
  reviews?: number; // make optional or required based on CompanyCardProps
};

export default function Company() {
  const [companies, setCompanies] = useState<CompanyType[]>([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Partial<CompanyType>>({ categories: [] });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (
    index: number,
    field: "category" | "rate",
    value: string
  ) => {
    const newCategories = [...(form.categories || [])];
    newCategories[index] = { ...newCategories[index], [field]: value };
    setForm((prev) => ({ ...prev, categories: newCategories }));
  };

  const addCategory = () => {
    setForm((prev) => ({
      ...prev,
      categories: [...(prev.categories || []), { category: "", rate: "" }],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name) return;

    // Add reviews = rating or 0 if not provided
    setCompanies((prev) => [
      ...prev,
      { ...form, status: "Active", reviews: form.rating || 0 } as CompanyType,
    ]);

    setForm({ categories: [] });
    setOpen(false);
  };

  return (
    <div className="space-y-6 p-6">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800"
      >
        + Company
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {companies.map((company, index) => (
          <CompanyCard key={index} {...company} />
        ))}
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} title="Add New Company">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Grid Inputs */}
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Company Name *"
              value={form.name || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl placeholder-gray-400 text-black"
            />
            <input
              type="text"
              name="founder"
              placeholder="Founder *"
              value={form.founder || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl placeholder-gray-400 text-black"
            />
            <input
              type="text"
              name="ceo"
              placeholder="CEO *"
              value={form.ceo || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl placeholder-gray-400 text-black"
            />
            <input
              type="text"
              name="foundedYear"
              placeholder="Founded Year *"
              value={form.foundedYear || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl placeholder-gray-400 text-black"
            />
            <input
              type="text"
              name="website"
              placeholder="Website"
              value={form.website || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl placeholder-gray-400 text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl placeholder-gray-400 text-black"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={form.phone || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl placeholder-gray-400 text-black"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl placeholder-gray-400 text-black"
            />
            <input
              type="text"
              name="companyCashbackRate"
              placeholder="Company Cashback Rate"
              value={form.companyCashbackRate || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl placeholder-gray-400 text-black"
            />
            <input
              type="text"
              name="maxCashback"
              placeholder="Maximum Cashback"
              value={form.maxCashback || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl placeholder-gray-400 text-black"
            />
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={form.productName || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl placeholder-gray-400 text-black"
            />
            <input
              type="text"
              name="productCashbackRate"
              placeholder="Product Cashback Rate"
              value={form.productCashbackRate || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl placeholder-gray-400 text-black"
            />
            <input
              type="text"
              name="deeplink"
              placeholder="Deeplink"
              value={form.deeplink || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl placeholder-gray-400 text-black"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={form.description || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl col-span-3 placeholder-gray-400 text-black"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold mb-2 text-black">Category Cashback Rates</h3>
            {(form.categories || []).map((cat, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 mb-2">
                <input
                  type="text"
                  placeholder="Category Name"
                  value={cat.category}
                  onChange={(e) => handleCategoryChange(index, "category", e.target.value)}
                  className="p-2 border border-gray-200 rounded-xl placeholder-gray-400 text-black"
                />
                <input
                  type="text"
                  placeholder="Cashback Rate"
                  value={cat.rate}
                  onChange={(e) => handleCategoryChange(index, "rate", e.target.value)}
                  className="p-2 border border-gray-200 rounded-xl placeholder-gray-400 text-black"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addCategory}
              className="px-4 py-2 bg-black text-white rounded-xl"
            >
              + Add Category
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-xl hover:bg-white hover:text-black hover:border-2"
          >
            SAVE COMPANY
          </button>
        </form>
      </Modal>
    </div>
  );
}
