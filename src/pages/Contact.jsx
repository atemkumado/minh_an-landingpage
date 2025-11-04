import React, { useState } from "react";
import axios from "axios";

export const Contact = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [success, setSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.target;
    try {
      await axios.post(`${API_BASE_URL}/submit`, {
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
    <div
      className="text-center p-6 py-14 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl mb-2 font-bold text-gray-800 font-montserrat">
        Liên hệ <span className="text-orange-500">M.A RENOVATION</span>
      </h1>
      <p className="text-gray-600 mb-12">
        Hãy để lại thông tin, M.A Renovation sẽ liên hệ lại với bạn trong thời gian sớm
        nhất!
      </p>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl flex flex-col gap-6 border border-gray-100 text-gray-800"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Họ tên
            <input
              name="name"
              type="text"
              required
              className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 transition"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4 mt-3 md:mt-0">
            Email
            <input
              name="email"
              type="email"
              required
              className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 transition"
            />
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Số điện thoại
            <input
              name="phone"
              type="text"
              required
              className="w-full py-3 px-4 mt-2 border border-gray-300 rounded focus:outline-none focus:border-orange-400 transition"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4 mt-3 md:mt-0">
            Nhu cầu
            <select
              name="demand"
              required
              className="w-full py-[12px] px-4 mt-2 border border-gray-300 rounded focus:outline-none focus:border-orange-400 transition appearance-none"
              defaultValue=""
            >
                <option value="" disabled hidden> -- Chọn -- </option>
                <option value="Cải tạo">Cải tạo</option>
                <option value="Nội thất">Nội thất</option>
                <option value="Thiết kế">Thiết kế</option>
            </select>
          </div>
        </div>
        <div className="py-2 text-left">
          Lời nhắn
          <textarea
            name="message"
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 h-36 focus:outline-none focus:border-orange-400 transition resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className={`bg-orange-500 text-white font-semibold py-2 hover:bg-orange-600 transition ${
            isSending ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {isSending ? "Đang gửi..." : "Gửi liên hệ"}
        </button>
      </form>

      {/* Popup cảm ơn */}
      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm mx-auto text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Cảm ơn bạn!
            </h3>
            <p className="text-gray-700 mb-6">
              Thông tin đã được gửi thành công.
              <br />
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
