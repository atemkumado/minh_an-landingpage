import React, { useState } from "react";
import axios from "axios";

export const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.target;
    try {
      await axios.post("http://localhost:3000/api/submit", {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        demand: form.demand.value,
        message: form.message.value,
      });
      setSuccess(true);
      form.reset();
    } catch {
      setSuccess(false);
    }
    setIsSending(false);
  };

  // Đóng popup
  const closePopup = () => setSuccess(false);

  return (
    <div className="relative pt-16 pb-24 px-4 bg-gray-50" id="Contact">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl flex flex-col gap-6 border border-gray-100"
      >
        <h2 className="text-2xl font-bold mb-2 text-orange-500 text-center font-montserrat">
          Liên hệ Minh An
        </h2>
        <input
          name="name"
          placeholder="Họ tên"
          required
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-400 transition"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-400 transition"
        />
        <input
          name="phone"
          placeholder="Số điện thoại"
          required
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-400 transition"
        />
        <input
          name="demand"
          placeholder="Nhu cầu"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-400 transition"
        />
        <textarea
          name="message"
          placeholder="Lời nhắn"
          rows={3}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-400 transition resize-none"
        />
        <button
          type="submit"
          disabled={isSending}
          className={`bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition ${isSending ? "opacity-60 cursor-not-allowed" : ""}`}
        >
          {isSending ? "Đang gửi..." : "Gửi liên hệ"}
        </button>
      </form>

      {/* Popup cảm ơn */}
      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm mx-auto text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Cảm ơn bạn!</h3>
            <p className="text-gray-700 mb-6">
              Thông tin đã được gửi thành công.<br />
              Minh An sẽ liên hệ lại với bạn trong thời gian sớm nhất.
            </p>
            <button
              onClick={closePopup}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};