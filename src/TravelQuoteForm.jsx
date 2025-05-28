import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function TravelQuoteForm() {
  const [form, setForm] = useState({
    departure: "",
    destination: "",
    hotel: false,
    startDate: "",
    endDate: "",
    clientEmail: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote requested:", form);
    alert("Quote request submitted. Confirmation will be sent to " + form.clientEmail);
    // TODO: integrate with backend or email API
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-[#4169E1] text-white py-6 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wide">Sterling Travel</div>
          <img src="https://craftedessex.com/cdn/shop/files/sterlingtravel.png?v=1715530997" alt="Sterling Travel Logo" className="h-10" />
        </div>
      </header>

      {/* Form Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-[#4169E1]">Request a Travel Quote</h1>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow-lg">
            <div>
              <Label htmlFor="departure">Departure Airport</Label>
              <Input name="departure" id="departure" type="text" required value={form.departure} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="destination">Destination Airport</Label>
              <Input name="destination" id="destination" type="text" required value={form.destination} onChange={handleChange} />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="hotel" name="hotel" checked={form.hotel} onChange={handleChange} />
              <Label htmlFor="hotel">Include Hotel?</Label>
            </div>

            <div>
              <Label htmlFor="startDate">Start Date</Label>
              <Input name="startDate" id="startDate" type="date" required value={form.startDate} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="endDate">End Date</Label>
              <Input name="endDate" id="endDate" type="date" required value={form.endDate} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="clientEmail">Your Email (to receive quote)</Label>
              <Input name="clientEmail" id="clientEmail" type="email" required value={form.clientEmail} onChange={handleChange} />
            </div>

            <Button type="submit" className="w-full bg-[#4169E1] hover:bg-[#3559b2]">Request Quote</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4169E1] text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Sterling Travel. All rights reserved.</p>
      </footer>
    </div>
  );
}