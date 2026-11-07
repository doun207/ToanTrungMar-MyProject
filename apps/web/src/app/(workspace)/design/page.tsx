"use client";

import React, { useState } from "react";
import { 
  Sparkles, Upload, Download, Settings, RefreshCw, 
  Layers, Plus, Trash2, Eye, FileSpreadsheet, Archive, Check, Maximize2
} from "lucide-react";

export default function AIDesignWorkspace() {
  // State quản lý Provider, Model và Prompt
  const [provider, setProvider] = useState("OpenAI GPT-Image");
  const [model, setModel] = useState("gpt-image-v1");
  const [prompt, setPrompt] = useState(
    "Phối cảnh màn hình LED P2.5 phẳng 8m x 4m lắp âm tường chính giữa sân khấu Ballroom, ánh sáng vàng ấm sang trọng."
  );

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-slate-100 overflow-hidden font-sans">
      
      {/* ================= 1. HEADER TOP BAR ================= */}
      <header className="h-14 border-b border-slate-800 bg-slate-950 px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <h1 className="font-semibold text-base text-white">Hội trường Ballroom Tầng 3</h1>
          <span className="text-xs bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-slate-400">
            Lead: TT-20261101-0001
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg transition border border-slate-700">
            <Layers className="w-3.5 h-3.5 text-blue-400" /> Phối cảnh
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg transition border border-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Tạo ảnh AI
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg transition border border-slate-700">
            <Settings className="w-3.5 h-3.5 text-slate-400" /> Thông số
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg transition border border-slate-700">
            <Maximize2 className="w-3.5 h-3.5 text-emerald-400" /> Mở rộng ảnh
          </button>
          <div className="h-4 w-[1px] bg-slate-800 mx-1"></div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg transition border border-slate-700">
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" /> Xuất Excel
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg transition border border-slate-700">
            <Archive className="w-3.5 h-3.5 text-amber-400" /> Tải ZIP
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-xs font-medium rounded-lg transition text-white shadow-lg shadow-blue-600/20">
            <Check className="w-3.5 h-3.5" /> Duyệt bản chốt
          </button>
        </div>
      </header>

      {/* ================= 2. MAIN LAYOUT 3 CỘT ================= */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* --- CỘT TRÁI: QUẢN LÝ DỰ ÁN & KHO ẢNH --- */}
        <aside className="w-72 border-r border-slate-800 bg-slate-950 p-3.5 flex flex-col gap-4 shrink-0 overflow-y-auto">
          {/* Quản lý dự án */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Dự án (2)</span>
              <button className="p-1 hover:bg-slate-800 rounded text-blue-400 transition"><Plus className="w-4 h-4" /></button>
            </div>
            <input 
              type="text" 
              placeholder="Tìm tên dự án, mã Lead..." 
              className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-blue-500 placeholder-slate-600"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg cursor-pointer hover:border-slate-700">
              <p className="text-xs font-medium text-slate-300">Banner Quang...</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Tạo hình ảnh & Ba...</p>
            </div>
            <div className="p-2.5 bg-blue-950/40 border border-blue-500/40 rounded-lg cursor-pointer">
              <p className="text-xs font-medium text-blue-300">Hội trường Ballroom Tầng 3</p>
              <p className="text-[10px] text-blue-400/70 mt-0.5">Lead: TT-20261101-0001</p>
            </div>
          </div>

          <hr className="border-slate-800/80" />

          {/* Kho ảnh dự án */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Kho ảnh dự án</span>
              <button className="text-[11px] text-blue-400 hover:underline flex items-center gap-1">
                <Download className="w-3 h-3" /> Tải ZIP
              </button>
            </div>
            
            <div className="flex border-b border-slate-800 mb-3 text-xs">
              <button className="pb-1.5 border-b-2 border-blue-500 font-medium text-blue-400">Ảnh kỹ thuật (2)</button>
              <button className="pb-1.5 ml-4 text-slate-500 hover:text-slate-300">Bản thiết kế (2)</button>
            </div>

            {/* Danh sách ảnh */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="border border-slate-800 bg-slate-900 p-1.5 rounded-lg group relative">
                <div className="h-20 bg-slate-800 rounded overflow-hidden flex items-center justify-center text-[10px] text-slate-500">
                  hien-trang.png
                </div>
                <p className="text-[10px] text-slate-400 truncate mt-1">hien-trang-ballr...</p>
              </div>
              <div className="border border-blue-500/60 bg-blue-950/20 p-1.5 rounded-lg relative">
                <span className="absolute top-2 right-2 bg-blue-600 text-[9px] text-white px-1.5 py-0.5 rounded font-medium">Đang dùng</span>
                <div className="h-20 bg-slate-800 rounded overflow-hidden flex items-center justify-center text-[10px] text-slate-400">
                  1.png
                </div>
                <p className="text-[10px] text-blue-300 font-medium truncate mt-1">1.png</p>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-1.5">
              <button className="w-full py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs rounded-lg flex items-center justify-center gap-2 transition">
                <Upload className="w-3.5 h-3.5" /> Tải ảnh kỹ thuật (Nhiều tệp)
              </button>
              <button className="w-full py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 text-xs rounded-lg flex items-center justify-center gap-2 transition">
                Nhập ảnh khảo sát từ hồ sơ Lead
              </button>
            </div>
          </div>
        </aside>


        {/* --- CỘT GIỮA: CANVAS & PHỐI CẢNH 3D --- */}
        <main className="flex-1 flex flex-col bg-slate-900 overflow-hidden relative">
          {/* Tabs trên Canvas */}
          <div className="h-10 border-b border-slate-800 bg-slate-950 px-4 flex items-center gap-3 text-xs">
            <button className="px-3 py-1 bg-slate-800 text-blue-400 font-medium rounded border border-slate-700">Ảnh gốc</button>
            <button className="px-3 py-1 text-slate-400 hover:text-slate-200">Kết quả AI</button>
            <button className="px-3 py-1 text-slate-400 hover:text-slate-200">Ghép 3D Thực tế</button>
            <button className="px-3 py-1 text-slate-400 hover:text-slate-200">So sánh</button>
          </div>

          {/* Vùng Canvas chính */}
          <div className="flex-1 p-4 flex items-center justify-center relative overflow-hidden bg-slate-950/60">
            <div className="relative border border-slate-800 rounded-xl overflow-hidden shadow-2xl max-w-full max-h-full flex items-center justify-center bg-slate-900 group">
              {/* Giả lập khung Canvas màn hình LED */}
              <div className="w-[850px] h-[480px] bg-slate-800/80 flex flex-col items-center justify-center relative border border-slate-700">
                <div className="text-center p-6 border border-dashed border-slate-600 rounded-xl bg-slate-900/40 backdrop-blur">
                  <p className="text-slate-300 font-medium text-sm">TOAN TRUNG TELECOM JSC</p>
                  <p className="text-xs text-slate-500 mt-1">Khu vực hiển thị phối cảnh & Khung neo màn hình LED</p>
                </div>
                
                {/* Bounding Box ghim kích thước LED */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600/90 backdrop-blur text-white text-xs px-3.5 py-1.5 rounded-full shadow-xl border border-blue-400/40 flex items-center gap-2">
                  <span className="font-semibold">8.00m x 4.00m - P2.5</span>
                  <span className="text-[10px] bg-blue-900/80 px-2 py-0.5 rounded text-blue-200 border border-blue-400/30">Chưa có sơ đồ?</span>
                </div>

                {/* Công cụ góc ảnh */}
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <button className="bg-slate-900/80 border border-slate-700 text-slate-300 text-[11px] px-2.5 py-1 rounded shadow">Khung neo LED</button>
                </div>

                {/* Controls Zoom góc dưới */}
                <div className="absolute bottom-3 right-3 bg-slate-900/90 border border-slate-800 text-xs px-2.5 py-1 rounded-lg flex items-center gap-2 text-slate-300">
                  <span>100%</span>
                  <button className="hover:text-white">+</button>
                  <button className="bg-slate-800 px-2 py-0.5 rounded text-[11px]">Vừa khung</button>
                </div>
              </div>
            </div>
          </div>

          {/* Thanh xem phiên bản dưới chân Canvas */}
          <div className="h-14 border-t border-slate-800 bg-slate-950 px-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-medium">Phiên bản (2):</span>
              <div className="w-8 h-8 rounded border border-blue-500 bg-blue-950/40 cursor-pointer flex items-center justify-center text-xs font-bold text-blue-400 shadow-sm">v1</div>
              <div className="w-8 h-8 rounded border border-slate-800 bg-slate-900 cursor-pointer flex items-center justify-center text-xs font-bold text-slate-500 hover:text-slate-300">v2</div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1">
                <Download className="w-3.5 h-3.5" /> Tải v2
              </button>
              <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-xs text-slate-300">
                <span className="text-slate-500 text-[11px]">Chế độ:</span>
                <select className="bg-transparent focus:outline-none cursor-pointer">
                  <option>Nhập nhanh</option>
                  <option>Chính xác</option>
                </select>
              </div>
              <button className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-xs font-medium rounded-lg transition text-white flex items-center gap-1.5 shadow-lg shadow-blue-600/20">
                <Sparkles className="w-3.5 h-3.5" /> Tạo phiên bản
              </button>
            </div>
          </div>
        </main>


        {/* --- CỘT PHẢI: CẤU HÌNH AI & THÔNG SỐ --- */}
        <aside className="w-80 border-l border-slate-800 bg-slate-950 p-4 flex flex-col gap-4 shrink-0 overflow-y-auto">
          {/* Thông tin màn hình LED */}
          <div>
            <h2 className="text-sm font-semibold text-white">Hội trường Ballroom Tầng 3 (P2.5)</h2>
            <p className="text-xs text-slate-400 mt-1">
              Kích thước: <span className="text-slate-200">8m x 4m (32 m²)</span> | Tỷ lệ: <span className="text-slate-200">16:9</span>
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">Ảnh gốc đang chọn: 1.png</p>
          </div>

          <hr className="border-slate-800/80" />

          {/* Chọn Con AI & Model */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Chọn Con AI & Model thực thi</span>
            
            <div>
              <span className="text-[11px] text-slate-400 block mb-1">Nền tảng AI (Provider)</span>
              <select 
                value={provider} 
                onChange={(e) => setProvider(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
              >
                <option value="OpenAI GPT-Image">OpenAI GPT-Image</option>
                <option value="Midjourney">Midjourney API</option>
                <option value="Stable Diffusion">Stable Diffusion XL</option>
              </select>
            </div>

            <div>
              <span className="text-[11px] text-slate-400 block mb-1">Mô hình (Model)</span>
              <select 
                value={model} 
                onChange={(e) => setModel(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
              >
                <option value="gpt-image-v1">OpenAI GPT-Image (gpt-image-1)</option>
                <option value="dall-e-3">DALL-E 3</option>
              </select>
            </div>
          </div>

          {/* Ô nhập Prompt */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Yêu cầu</span>
            <textarea 
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500 resize-none leading-relaxed"
            />
          </div>

          {/* Thư viện Mẫu Prompt */}
          <div>
            <span className="text-[11px] font-medium text-slate-400 block mb-2">Mẫu Prompt chuẩn kỹ thuật LED Toàn Trung:</span>
            <div className="grid grid-cols-2 gap-1.5">
              <button 
                onClick={() => setPrompt("Phối cảnh màn hình LED P2.5 phẳng 8m x 4m âm tường sân khấu Ballroom.")}
                className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-[11px] text-slate-300 text-left truncate transition"
              >
                • Hội trường P2.5
              </button>
              <button 
                onClick={() => setPrompt("Phối cảnh màn hình LED Showroom 4K siêu nét, ánh sáng hiện đại.")}
                className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-[11px] text-slate-300 text-left truncate transition"
              >
                • Showroom 4K
              </button>
              <button 
                onClick={() => setPrompt("Phối cảnh màn hình LED Outdoor ngoài trời tòa nhà cao tầng.")}
                className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-[11px] text-slate-300 text-left truncate transition"
              >
                • Tòa nhà Outdoor
              </button>
              <button 
                onClick={() => setPrompt("Phối cảnh màn hình LED hiển thị thông số nhà máy Andon sản xuất.")}
                className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-[11px] text-slate-300 text-left truncate transition"
              >
                • Nhà máy Andon
              </button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}