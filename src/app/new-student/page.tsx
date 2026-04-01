"use client";
import { useMutation } from "convex/react";
import React, { useState } from "react";
import { api } from "../../../convex/_generated/api";

interface FormData {
  name: string;
  role: "admin" | "student" | "teach" | "";
  github: string;
}

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    role: "",
    github: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const createNewStudent = useMutation(api.student.createNewStudent);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass =
    "w-full bg-zinc-900 border border-zinc-700 text-zinc-100 placeholder-zinc-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all duration-200";

  const labelClass =
    "block text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2";

  return (
    <div className="h-[90vh] bg-zinc-950 text-zinc-100 font-mono flex  ">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto px-6 py-10 space-y-8 flex flex-col items-center justify-center"
      >
        {/* — Basic Info — */}
        <section className="w-full ">
          <div className="grid grid-cols-1  sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className={labelClass}>GitHub Username</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">
                  @
                </span>
                <input
                  type="text"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="username"
                  className={`${inputClass} pl-8`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* — Role & Status — */}
        <section className="w-full">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
              02
            </span>
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-300">
              Role & Status
            </h2>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
                required
              >
                <option value="" disabled>
                  Select a role…
                </option>
                <option value="student">Student</option>
                <option value="teach">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
        </section>

        {/* — Submit — */}
        <button
          type="submit"
          className="bg-red-500 w-full mt-4 border rounded-md py-3"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Page;
