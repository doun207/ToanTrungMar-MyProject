"use client";

import React, { useState } from "react";

export default function AIDesignModule() {
  const [activeTab, setActiveTab] = useState<"preview" | "compare">("preview");
  const [prompt, setPrompt] = useState("Đặt màn hình ở tường bên phải, hiển thị sóng biển xanh và giữ nguyên nội thất.");

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 font-sans overflow-hidden">
      
      {/* ================= CỘT 1: DỰ ÁN & ĐẦU VÀO (BÊN TRÁI - 22%) ================= */}
      <div className="w-[22%] bg-slate-800/80 border-r border-slate-700 p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-700">
          <h2 className="font-semibold text-lg flex items-center gap-2 text-white">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Thông tin dự án
          </h2>
        </div>

        {/* Thẻ chọn dự án */}
        <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600">
          <label className="text-xs text-slate-400 block mb-1">Dự án chọn:</label>
          <select className="w-full bg-slate-800 border border-slate-600 rounded px-2 py-1.5 text-sm font-medium focus:outline-none text-blue-300">
            <option>Phối cảnh Showroom LED</option>
            <option>Banner Chuỗi Cửa Hàng</option>
          </select>
        </div>

        {/* Danh sách ảnh hiện trạng */}
        <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-slate-300">Ảnh hiện trạng công trình *</span>
            <button className="text-xs text-blue-400 hover:underline">+ Thêm ảnh</button>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="relative border-2 border-blue-500 rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" 
                alt="Hiện trạng 1" 
                className="w-full h-24 object-cover"
              />
              <span className="absolute bottom-1 left-1 bg-black/70 text-[10px] px-1 rounded text-white">Ảnh gốc</span>
            </div>
            
            <div className="border border-slate-700 rounded-lg overflow-hidden opacity-60 hover:opacity-100 cursor-pointer flex items-center justify-center bg-slate-800 border-dashed">
              <div className="text-center p-2">
                <svg className="w-6 h-6 mx-auto text-slate-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-[10px] text-slate-400">Tải ảnh lên</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CỘT 2: MÀN HÌNH AI & PHIÊN BẢN (Ở GIỮA - 54%) ================= */}
      <div className="flex-1 flex flex-col bg-slate-900 border-r border-slate-700">
        
        {/* Header trên ảnh */}
        <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-800/40">
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveTab("preview")}
              className={`px-3 py-1 rounded-md text-xs font-medium transition ${activeTab === "preview" ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300"}`}
            >
              Phối cảnh AI
            </button>
            <button 
              onClick={() => setActiveTab("compare")}
              className={`px-3 py-1 rounded-md text-xs font-medium transition ${activeTab === "compare" ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300"}`}
            >
              So sánh gốc/mới
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span>⚡ AI sẵn sàng</span>
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
              Bản nháp đã lưu thư viện
            </span>
          </div>
        </div>

        {/* Khung Canvas Preview AI */}
        <div className="flex-1 p-4 flex items-center justify-center relative bg-black/40 overflow-hidden">
          <div className="relative max-w-full max-h-full rounded-lg overflow-hidden shadow-2xl border border-slate-700">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
              alt="Preview AI Render"
              className="max-h-[60vh] object-contain"
            />
            {/* Giả lập Màn hình LED được chèn vào góc */}
            <div className="absolute top-[25%] right-[20%] w-[35%] h-[40%] border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] bg-blue-900/40 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center p-2">
                <span className="bg-cyan-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded">LED P2.5 Indoor</span>
                <p className="text-[11px] text-cyan-200 mt-1">4.80m x 2.70m</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quản lý phiên bản & Thông số Token */}
        <div className="p-3 border-t border-slate-800 bg-slate-800/60">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-slate-400">Lịch sử phiên bản (Version History)</span>
            <div className="flex gap-4 text-xs text-slate-400">
              <span>Thời gian: <b className="text-slate-200">18s</b></span>
              <span>Tiêu tốn: <b className="text-amber-400">2,400 Tokens</b></span>
              <span>Chi phí: <b className="text-emerald-400">1,200 đ</b></span>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-20 h-12 border-2 border-blue-500 rounded overflow-hidden relative cursor-pointer">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=150" className="w-full h-full object-cover" />
              <span className="absolute bottom-0 w-full text-[8px] bg-black/80 text-center text-white">Bản AI gốc</span>
            </div>
            <div className="w-20 h-12 border border-slate-700 rounded overflow-hidden relative cursor-pointer opacity-70 hover:opacity-100">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=150" className="w-full h-full object-cover" />
              <span className="absolute bottom-0 w-full text-[8px] bg-black/80 text-center text-white">Bản v2</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CỘT 3: CHATBOX AI & THÔNG SỐ (BÊN PHẢI - 24%) ================= */}
      <div className="w-[24%] bg-slate-800/80 border-l border-slate-700 flex flex-col">
        
        {/* Header Action */}
        <div className="p-3 border-b border-slate-700 flex justify-between items-center">
          <button className="flex items-center gap-1 text-xs bg-slate-700 hover:bg-slate-600 px-2.5 py-1.5 rounded text-slate-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg> Tải file
          </button>
          <button className="flex items-center gap-1 text-xs bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded font-medium text-white shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg> Lưu bản hoàn thiện
          </button>
        </div>

        {/* Tab Chat / Thông số */}
        <div className="p-3 border-b border-slate-700/60 bg-slate-800">
          <h3 className="text-sm font-semibold flex items-center gap-2 text-blue-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg> Yêu cầu thiết kế AI
          </h3>
          <p className="text-[11px] text-slate-400 mt-0.5">Nội dung prompt sửa ảnh real-time với AI</p>
        </div>

        {/* Khung Thông số kỹ thuật LED */}
        <div className="p-3 space-y-3 bg-slate-900/40 text-xs border-b border-slate-700">
          <div className="flex justify-between items-center text-slate-300">
            <span className="font-semibold text-blue-300">🖥 LED Trong nhà - P2.5</span>
            <span className="text-[10px] bg-slate-700 px-1.5 py-0.5 rounded">Phẳng</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-slate-400">
            <div>Kích thước: <b className="text-slate-200">4.80 x 2.70 m</b></div>
            <div>Vị trí: <b className="text-slate-200">Tường bên phải</b></div>
          </div>
        </div>

        {/* Chatbox nhập Prompt */}
        <div className="flex-1 p-3 flex flex-col justify-end gap-3">
          <div className="space-y-2">
            <label className="text-xs text-slate-300 font-medium">Mô tả yêu cầu chỉnh sửa *</label>
            <textarea 
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500 resize-none"
              placeholder="Nhập prompt điều chỉnh..."
            />
          </div>

          {/* Nút Render lại AI */}
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg> Tạo lại bản nháp AI
          </button>
        </div>

      </div>

    </div>
  );
}