"use client";

import React, { useState } from "react";
import { 
  Sparkles, Upload, Download, Settings, RefreshCw, 
  Layers, Plus, Trash2, Eye, FileSpreadsheet, Archive, Check 
} from "lucide-react";

export default function AIDesignWorkspace() {
  // State quản lý model AI và thông số
  const [provider, setProvider] = useState("OpenAI GPT-Image");
  const [model, setModel] = useState("gpt-image-v1");
  const [prompt, setPrompt] = useState(
    "Phối cảnh màn hình LED P2.5 phẳng 8m x 4m lắp âm tường chính giữa sân khấu Ballroom, ánh sáng vàng ấm sang trọng."
  );

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-slate-100 overflow-hidden font-sans">
      
      {/* ----------------- TOP BAR (HEADER) ----------------- */}
      <header className="h-14 border-b border-slate-800 bg-slate-950 px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <h1 className="font-semibold text-lg text-white">Hội trường Ballroom Tầng 3</h1>
          <span className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-400">Lead: TT-20261101-0001</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg transition">
            <Layers className="w-3.5 h-3.5" /> Phối cảnh
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg transition">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Tạo ảnh AI
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg transition">
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" /> Xuất Excel
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg transition">
            <Archive className="w-3.5 h-3.5 text-amber-400" /> Tải ZIP
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-xs font-medium rounded-lg transition text-white">
            <Check className="w-3.5 h-3.5" /> Duyệt bản chốt
          </button>
        </div>
      </header>

      {/* ----------------- MAIN LAYOUT 3 CỘT ----------------- */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* === CỘT 1: SIDEBAR TRÁI (Dự án & Kho ảnh) === */}
        <aside className="w-72 border-r border-slate-800 bg-slate-950 p-4 flex flex-col gap-4 shrink-0 overflow-y-auto">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 uppercase">Dự án (2)</span>
              <button className="p-1 hover:bg-slate-800 rounded text-blue-400"><Plus className="w-4 h-4" /></button>
            </div>
            <input 
              type="text" 
              placeholder="Tìm tên dự án, mã Lead..." 
              className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="p-2.5 bg-blue-950/40 border border-blue-500/30 rounded-lg cursor-pointer">
              <p className="text-xs font-medium text-blue-300">Hội trường Ballroom...</p>
              <p className="text-[10px] text-slate-500 mt-1">Lead: TT-20261101-0001</p>
            </div>
          </div>

          <hr className="border-slate-800 my-1" />

          {/* Kho ảnh */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 uppercase">Kho ảnh dự án</span>
              <button className="text-[11px] text-blue-400 hover:underline">Tải ZIP</button>
            </div>
            
            <div className="flex border-b border-slate-800 mb-3 text-xs">
              <button className="pb-1.5 border-b-2 border-blue-500 font-medium text-blue-400">Ảnh kỹ thuật (2)</button>
              <button className="pb-1.5 ml-4 text-slate-500 hover:text-slate-300">Bản thiết kế (2)</button>
            </div>

            {/* Thumbnail ảnh mẫu */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="border border-blue-500/50 bg-slate-900 p-1.5 rounded relative group">
                <div className="h-20 bg-slate-800 rounded overflow-hidden flex items-center justify-center">
                  <span className="text-[10px] text-slate-500">Ảnh khảo sát</span>
                </div>
                <p className="text-[10px] text-slate-300 truncate mt-1">1.png (Đang dùng)</p>
              </div>
            </div>

            <button className="w-full py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs rounded-lg flex items-center justify-center gap-2 transition mt-auto">
              <Upload className="w-3.5 h-3.5" /> Tải ảnh kỹ thuật (Nhiều tệp)
            </button>
          </div>
        </aside>


        {/* === CỘT 2: CANVAS GIỮA (Hiển thị phối cảnh) === */}
        <main className="flex-1 flex flex-col bg-slate-900 overflow-hidden relative">
          {/* Top Canvas Tabs */}
          <div className="h-10 border-b border-slate-800 bg-slate-950 px-4 flex items-center gap-4 text-xs">
            <button className="px-3 py-1 bg-slate-800 text-blue-400 font-medium rounded">Ảnh gốc</button>
            <button className="px-3 py-1 text-slate-400 hover:text-slate-200">Kết quả AI</button>
            <button className="px-3 py-1 text-slate-400 hover:text-slate-200">Ghép 3D Thực tế</button>
            <button className="px-3 py-1 text-slate-400 hover:text-slate-200">So sánh</button>
          </div>

          {/* Khung hiển thị ảnh chính */}
          <div className="flex-1 p-4 flex items-center justify-center relative overflow-hidden bg-slate-950/50">
            <div className="relative border border-slate-800 rounded-xl overflow-hidden shadow-2xl max-w-full max-h-full flex items-center justify-center bg-slate-900">
              {/* Ảnh xem trước mockup */}
              <div className="w-[800px] h-[450px] bg-slate-800 flex flex-col items-center justify-center relative">
                <span className="text-slate-500 text-sm">Khu vực hiển thị Canvas / Bounding Box LED</span>
                
                {/* Badge thông số LED đè lên ảnh */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600/90 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full shadow-lg border border-blue-400/30 flex items-center gap-2">
                  <span className="font-semibold">8.00m x 4.00m - P2.5</span>
                  <span className="text-[10px] bg-blue-800 px-1.5 py-0.5 rounded">Chưa có sơ đồ?</span>
                </div>
              </div>
            </div>
          </div>

          {/* Thanh xem lại phiên bản dưới chân Canvas */}
          <div className="h-14 border-t border-slate-800 bg-slate-950 px-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Phiên bản (2):</span>
              <div className="w-8 h-8 rounded border border-blue-500 bg-slate-800 cursor-pointer flex items-center justify-center text-[10px] font-bold text-blue-400">v1</div>
              <div className="w-8 h-8 rounded border border-slate-700 bg-slate-800 cursor-pointer flex items-center justify-center text-[10px] font-bold text-slate-400">v2</div>
            </div>
            
            <button className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-xs font-medium rounded-lg transition text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Tạo phiên bản
            </button>
          </div>
        </main>


        {/* === CỘT 3: PANEL PHẢI (Cấu hình AI & Thông số) === */}
        <aside className="w-80 border-l border-slate-800 bg-slate-950 p-4 flex flex-col gap-4 shrink-0 overflow-y-auto">
          <div>
            <h2 className="text-sm font-semibold text-white">Hội trường Ballroom Tầng 3 (P2.5)</h2>
            <p className="text-xs text-slate-400 mt-1">Kích thước: 8m x 4m (32 m²) | Tỷ lệ 16:9</p>
          </div>

          <hr className="border-slate-800" />

          {/* Cấu hình Provider & Model */}
          <div className="flex flex-col gap-3">
            <label className="text-xs font-semibold text-slate-400 uppercase">Chọn Con AI & Model thực thi</label>
            
            <div>
              <span className="text-[11px] text-slate-400 block mb-1">Nền tảng AI (Provider)</span>
              <select 
                value={provider} 
                onChange={(e) => setProvider(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
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
                className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
              >
                <option value="gpt-image-v1">OpenAI GPT-Image (gpt-image-1)</option>
                <option value="dall-e-3">DALL-E 3</option>
              </select>
            </div>
          </div>

          {/* Ô nhập Yêu cầu Prompt */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400 uppercase">Yêu cầu phối cảnh</label>
            <textarea 
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded p-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          {/* Thư viện Prompt mẫu */}
          <div>
            <span className="text-[11px] font-medium text-slate-400 block mb-2">Mẫu Prompt chuẩn kỹ thuật LED Toàn Trung:</span>
            <div className="grid grid-cols-2 gap-1.5">
              <button className="p-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded text-[11px] text-slate-300 text-left truncate">
                • Hội trường P2.5
              </button>
              <button className="p-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded text-[11px] text-slate-300 text-left truncate">
                • Showroom 4K
              </button>
              <button className="p-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded text-[11px] text-slate-300 text-left truncate">
                • Tòa nhà Outdoor
              </button>
              <button className="p-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded text-[11px] text-slate-300 text-left truncate">
                • Nhà máy Andon
              </button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}