import React, { useEffect, useMemo, useState, ChangeEvent } from "react";
import { companies as COMPANY_LIST } from "@/components/admin/finance/data/companies";

const PREDEFINED_CATEGORIES: string[] = [
  "Electronics",
  "Fashion",
  "Books",
  "Home & Garden",
  "Sports",
  "Toys",
  "Beauty",
  "Food & Beverages",
];

type GradientKey = "orange" | "pink" | "purple" | "blue" | "green";

const GRADIENT_BG: Record<GradientKey, string> = {
  orange: "from-orange-500 to-orange-600",
  pink: "from-pink-500 to-pink-600",
  purple: "from-purple-500 to-purple-600",
  blue: "from-blue-500 to-blue-600",
  green: "from-green-500 to-green-600",
};

const GRADIENT_SWATCH: Record<GradientKey, string> = {
  orange: "from-orange-400 to-orange-600",
  pink: "from-pink-400 to-pink-600",
  purple: "from-purple-400 to-purple-600",
  blue: "from-blue-400 to-blue-600",
  green: "from-green-400 to-green-600",
};

const COMPANY_SUGGESTIONS: string[] = COMPANY_LIST.map((c) => c.name);

interface BannerData {
  companyName: string;
  title: string;
  percentageOff: number;
  gradientType: GradientKey;
  categories: string[];
  bannerFile: File | null;
}

export default function BannerCustomizer(): JSX.Element {
  const [data, setData] = useState<BannerData>({
    companyName: "",
    title: "Great Indian Festival",
    percentageOff: 30,
    gradientType: "blue",
    categories: [],
    bannerFile: null,
  });
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  // Derived preview URL with cleanup to avoid memory leaks
  const previewUrl = useMemo<string | null>(
    () => (data.bannerFile ? URL.createObjectURL(data.bannerFile) : null),
    [data.bannerFile]
  );
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePercentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const numeric = val === "" ? 0 : Math.max(0, Math.min(100, Number(val)));
    setData((prev) => ({ ...prev, percentageOff: Number.isNaN(numeric) ? 0 : numeric }));
  };

  const handleAddCategory = (e: ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    if (value && !data.categories.includes(value)) {
      setData((prev) => ({ ...prev, categories: [...prev.categories, value] }));
    }
    e.target.value = ""; // reset dropdown
  };

  const handleRemoveCategory = (cat: string): void => {
    setData((prev) => ({
      ...prev,
      categories: prev.categories.filter((c) => c !== cat),
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      setData((prev) => ({ ...prev, bannerFile: e.target.files![0] }));
    }
  };

  const handleReset = () => {
    setData({
      companyName: "",
      title: "Great Indian Festival",
      percentageOff: 30,
      gradientType: "blue",
      categories: [],
      bannerFile: null,
    });
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setSaveMessage(null);
      if (!data.bannerFile) {
        setSaveMessage("Please upload a banner image before saving.");
        return;
      }
      const form = new FormData();
      form.append("banner", data.bannerFile);
      form.append("brandName", data.companyName || "");
      form.append("title", data.title || "");
      form.append("percentageOff", String(data.percentageOff ?? 0));
      form.append("gradientType", data.gradientType);
      form.append("categories", JSON.stringify(data.categories));

      // Use Next.js same-origin proxy route to avoid CORS and keep backend URL server-side
      const res = await fetch(`http://localhost:4000/api/banner/create`, {
        method: "POST",
        body: form,
      });

      const raw = await res.text();
      let json: any = null;
      try {
        json = JSON.parse(raw);
      } catch {
        if (!res.ok) {
          const snippet = raw?.slice?.(0, 120) || "";
          throw new Error(`Error (${res.status}): Non-JSON response ${snippet}`);
        }
      }
      if (!res.ok) {
        const msg = json?.error || json?.message || res.statusText || "Failed to save banner";
        throw new Error(`Error (${res.status}): ${msg}`);
      }
      setSaveMessage("Banner saved successfully.");
    } catch (err: any) {
      setSaveMessage(err?.message || "Something went wrong while saving.");
    } finally {
      setSaving(false);
    }
  };

  const gradients: GradientKey[] = ["orange", "pink", "purple", "blue", "green"];

  return (
    <div className="flex flex-col md:flex-row h-[80vh] md:h-[calc(100vh-6rem)] bg-background rounded-2xl shadow overflow-hidden">
      <div className="flex-1 overflow-auto p-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-purple-600 font-semibold">Banner Preview</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-1.5 text-sm rounded-lg ring-1 ring-foreground/10 hover:bg-foreground/5"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className={`px-3 py-1.5 text-sm rounded-lg bg-foreground text-background hover:opacity-90 disabled:opacity-60`}
            >
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </div>

        {/* Banner Preview */}
        <div className="flex flex-col md:flex-row overflow-hidden rounded-xl ring-1 ring-foreground/10">
          {/* Left side (gradient background) */}
          <div
            className={`flex-1 p-8 text-white relative flex flex-col justify-center bg-gradient-to-r ${GRADIENT_BG[data.gradientType]}`}
          >
            {/* Decorative circle */}
            <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white/10" />

            <div className="relative z-10">
              <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wide text-white/90 bg-white/10 px-2 py-1 rounded mb-2">
                {data.companyName || "Company"}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold capitalize">
                {data.title || "Sale Title"}
              </h2>
              <p className="text-4xl md:text-5xl font-extrabold mt-2">
                {data.percentageOff}% {" "}
                <span className="text-xl font-medium">OFF</span>
              </p>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mt-4">
                {data.categories.map((cat, i) => (
                  <span
                    key={`${cat}-${i}`}
                    className="bg-white/20 text-white text-xs px-3 py-1 rounded-full flex items-center gap-2"
                  >
                    {cat}
                    <button
                      type="button"
                      onClick={() => handleRemoveCategory(cat)}
                      className="text-white/80 hover:text-white text-xs"
                      aria-label={`Remove ${cat}`}
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                type="button"
                className="mt-6 bg-white text-black px-6 py-2 rounded-xl shadow hover:bg-gray-100"
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Right side (uploaded image) */}
          <div className="flex-1 h-64 md:h-auto">
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" className="h-full w-full object-cover" />
            ) : (
              <div className="h-full flex items-center justify-center bg-gray-200 text-gray-600">
                No Image Selected
              </div>
            )}
          </div>
        </div>

        {/* Footer note */}
        {saveMessage && (
          <p className="text-center text-sm mt-3 text-foreground/80">
            {saveMessage}
          </p>
        )}
        <p className="text-center text-sm text-gray-500 mt-3">
          This is how your banner will appear to customers
        </p>

        {/* Controls Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left side inputs */}
          <div>
            <label htmlFor="companyName" className="block font-medium">
              Company
            </label>
            <input
              id="companyName"
              name="companyName"
              value={data.companyName}
              onChange={handleTextChange}
              list="company-options"
              className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/30"
              placeholder="Select or type company name"
            />
            <datalist id="company-options">
              {COMPANY_SUGGESTIONS.map((name) => (
                <option key={name} value={name} />
              ))}
            </datalist>

            <label htmlFor="title" className="block mt-3 font-medium">
              Title
            </label>
            <input
              id="title"
              name="title"
              value={data.title}
              onChange={handleTextChange}
              className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/30"
              placeholder="e.g., Great Indian Festival"
            />

            <label htmlFor="percentageOff" className="block mt-3 font-medium">
              Percentage Off
            </label>
            <input
              id="percentageOff"
              name="percentageOff"
              type="number"
              min={0}
              max={100}
              value={data.percentageOff}
              onChange={handlePercentChange}
              className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/30"
              placeholder="0 - 100"
            />

            <label className="block mt-3 font-medium">Categories</label>
            <select
              onChange={handleAddCategory}
              className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/30"
              defaultValue=""
              aria-label="Add category"
            >
              <option value="" disabled>
                Select category
              </option>
              {PREDEFINED_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <p className="mt-3 font-semibold">Upload Banner</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-2"
            />
            {data.bannerFile && (
              <p className="text-xs text-gray-500 mt-1 truncate">
                Selected: {data.bannerFile.name}
              </p>
            )}
          </div>

          {/* Gradient selector */}
          <div>
            <p className="font-semibold">Select Gradient</p>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {gradients.map((g) => (
                <button
                  type="button"
                  key={g}
                  onClick={() => setData((prev) => ({ ...prev, gradientType: g }))}
                  className={`h-12 rounded-lg cursor-pointer border-2 bg-gradient-to-r ${GRADIENT_SWATCH[g]} ${
                    data.gradientType === g ? "border-black" : "border-transparent"
                  }`}
                  aria-label={`Select ${g} gradient`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
