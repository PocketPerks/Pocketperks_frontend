"use client";

import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import CompanyCard from "@/components/admin/CompanyCard";

type CategoryType = { id: number; name: string };

type BrandType = {
  brand_name: string;
  logo_url?: string;
  description?: string;
  is_featured?: boolean;
  offer_highlight?: string;
  cashback?: string;
  cashback_type?: string;
  is_sale?: boolean;
  offerLink?: string;
  categories?: CategoryType[];
  status?: "Active" | "Inactive";
  rating?: number;
  id?: number;
};

export default function Company() {
  const [activeTab, setActiveTab] = useState<"online" | "offline">("online");
  const [onlineBrands, setOnlineBrands] = useState<BrandType[]>([]);
  const [offlineBrands, setOfflineBrands] = useState<BrandType[]>([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Partial<BrandType>>({ categories: [] });
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch brands on tab change
  useEffect(() => {
    fetchBrands();
  }, [activeTab]);

  const fetchBrands = async () => {
    try {
      const res = await fetch(`/api/companies/${activeTab}`);
      if (!res.ok) throw new Error("Failed to fetch brands");
      const data = await res.json();
      if (activeTab === "online") setOnlineBrands(data);
      else setOfflineBrands(data);
    } catch (err: any) {
      console.error("Error fetching brands:", err);
      setError(err.message || "Unknown error fetching brands");
    }
  };

  useEffect(() => {
    // Temporary hardcoded categories (replace with API if needed)
    const hardcoded = [
      { id: 1, category_name: "Mobiles" },
      { id: 2, category_name: "Electronics" },
      { id: 3, category_name: "Fashion" },
      { id: 4, category_name: "Groceries" },
      { id: 5, category_name: "Home & Kitchen" },
      { id: 6, category_name: "Beauty & Personal Care" },
      { id: 7, category_name: "Sports & Fitness" },
    ];

    const formatted = hardcoded.map((c) => ({ id: c.id, name: c.category_name }));
    setCategoryList(formatted);
    setLoadingCategories(false);
  }, []);

  // handle form input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCategorySelect = (id: number) => {
    const selected = categoryList.find((c) => c.id === id);
    if (!selected) return;
    if (form.categories?.some((c) => c.id === id)) return;
    setForm((prev) => ({
      ...prev,
      categories: [...(prev.categories || []), selected],
    }));
  };

  const removeCategory = (id: number) => {
    setForm((prev) => ({
      ...prev,
      categories: prev.categories?.filter((c) => c.id !== id),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.brand_name) {
      setError("Brand name is required");
      return;
    }

    setSaving(true);
    setError(null);

    try {
      const endpoint = `/api/companies/${activeTab}`;
      const payload = {
        brand_name: form.brand_name,
        logo_url: form.logo_url || "",
        description: form.description || "",
        is_featured: form.is_featured || false,
        offer_highlight: form.offer_highlight || "",
        cashback: form.cashback || "",
        cashback_type: form.cashback_type || "",
        is_sale: form.is_sale || false,
        offerLink: form.offerLink || "",
        category_ids: form.categories?.map((c) => c.id) || [],
      };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to save brand");
      }

      const data = await res.json();

      // Refresh brand list after saving
      await fetchBrands();

      setForm({ categories: [] });
      setOpen(false);
    } catch (err: any) {
      console.error("Error saving brand:", err);
      setError(err.message || "Unknown error saving brand");
    } finally {
      setSaving(false);
    }
  };

  const brands = activeTab === "online" ? onlineBrands : offlineBrands;

  return (
    <div className="space-y-6 p-6">
      {/* Tabs */}
      <div className="flex gap-4 border-b pb-2">
        {["online", "offline"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "online" | "offline")}
            className={`px-4 py-2 font-semibold rounded-t-lg transition ${
              activeTab === tab
                ? "bg-black text-white"
                : "text-gray-600 hover:text-black"
            }`}
          >
            {tab === "online" ? "Online Brands" : "Offline Brands"}
          </button>
        ))}
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {/* Add Brand Button */}
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800"
      >
        + Add {activeTab === "online" ? "Online" : "Offline"} Brand
      </button>

      {/* Brand Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {brands.map((brand, i) => (
          <CompanyCard key={brand.id || i} {...brand} />
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={`Add New ${activeTab === "online" ? "Online" : "Offline"} Brand`}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              name="brand_name"
              placeholder="Brand Name *"
              value={form.brand_name || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl text-black placeholder-gray-400"
            />
            <input
              type="text"
              name="logo_url"
              placeholder="Logo URL"
              value={form.logo_url || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl text-black placeholder-gray-400"
            />
            <input
              type="text"
              name="offer_highlight"
              placeholder="Offer Highlight"
              value={form.offer_highlight || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl text-black placeholder-gray-400"
            />
            <input
              type="text"
              name="cashback"
              placeholder="Cashback"
              value={form.cashback || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl text-black placeholder-gray-400"
            />
            <input
              type="text"
              name="cashback_type"
              placeholder="Cashback Type"
              value={form.cashback_type || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl text-black placeholder-gray-400"
            />
            <input
              type="text"
              name="offerLink"
              placeholder="Offer Link"
              value={form.offerLink || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl text-black placeholder-gray-400"
            />

            <div className="flex items-center gap-4 col-span-3">
              <label className="flex items-center gap-2 text-black">
                <input
                  type="checkbox"
                  name="is_featured"
                  checked={form.is_featured || false}
                  onChange={handleChange}
                />
                Featured
              </label>
              <label className="flex items-center gap-2 text-black">
                <input
                  type="checkbox"
                  name="is_sale"
                  checked={form.is_sale || false}
                  onChange={handleChange}
                />
                Sale Active
              </label>
            </div>

            <textarea
              name="description"
              placeholder="Description"
              value={form.description || ""}
              onChange={handleChange}
              className="p-2 border border-gray-200 rounded-xl col-span-3 text-black placeholder-gray-400"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold mb-2 text-black">Categories</h3>

            {form.categories && form.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {form.categories.map((cat) => (
                  <div
                    key={cat.id}
                    className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-black"
                  >
                    <span>
                      #{cat.id} - {cat.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeCategory(cat.id)}
                      className="text-red-500 font-bold"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-2">
              <select
                className="flex-1 p-2 border border-gray-200 rounded-xl text-black"
                onChange={(e) => {
                  const id = Number(e.target.value);
                  if (id) handleCategorySelect(id);
                  e.target.value = "";
                }}
                defaultValue=""
              >
                <option value="">
                  {loadingCategories ? "Loading categories..." : "Select Category"}
                </option>
                {categoryList.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={saving}
            className={`w-full py-2 rounded-xl transition ${
              saving
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-white hover:text-black hover:border-2"
            }`}
          >
            {saving ? "Saving..." : "SAVE BRAND"}
          </button>
        </form>
      </Modal>
    </div>
  );
}
