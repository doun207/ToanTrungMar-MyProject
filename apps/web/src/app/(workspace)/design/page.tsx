"use client";

import React, { useState } from "react";
import { 
  Sparkles, Upload, Download, Settings, RefreshCw, 
  Layers, Plus, Trash2, Eye, FileSpreadsheet, Archive, Check, Maximize2, Edit3, Trash, Sliders,
  Cpu, Key, Send, ArrowRight, Box, Folder
} from "lucide-react";

export default function AIDesignWorkspace() {
  const [rightTab, setRightTab] = useState<"ai" | "specs">("ai");
  const [provider, setProvider] = useState("OpenAI GPT-Image");
  const [model, setModel] = useState("gpt-image-v1");
  const [prompt, setPrompt] = useState(
    "Phối cảnh màn hình LED P2.5 phẳng 8m x 4m lắp âm tường chính giữa sân khấu Ballroom, ánh sáng vàng ấm sang trọng."
  );
  const [bottomInput, setBottomInput] = useState("");
  const [activeVersion, setActiveVersion] = useState("v2");
  const [photoTab, setPhotoTab] = useState<"tech" | "design">("tech");

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-slate-100 overflow-hidden font-sans">
      
      {/* ================= 1. HEADER TOP BAR ================= */}
      <header className="h-12 border-b border-slate-800 bg-slate-950 px-3 flex items-center justify-between shrink-0 text-xs">
        
        {/* Khối bên trái */}
        <div className="flex items-center gap-1.5 shrink-0">
          <h1 className="font-semibold text-white text-xs whitespace-nowrap">
            Hội trường Ballroom Tầng 3
          </h1>
          
          <div className="flex items-center gap-1">
            <button className="flex items-center gap-0.5 px-1.5 py-0.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 rounded text-[10px] transition whitespace-nowrap">
              <Edit3 className="w-2.5 h-2.5 text-slate-400" /> Sửa
            </button>

            <button className="flex items-center gap-0.5 px-1.5 py-0.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 rounded text-[10px] transition whitespace-nowrap">
              <Trash className="w-2.5 h-2.5 text-slate-400" /> Xóa
            </button>
          </div>

          <span className="text-[10px] bg-blue-950/60 border border-blue-500/40 text-blue-300 px-1.5 py-0.5 rounded font-medium whitespace-nowrap">
            TT-20261101-0001
          </span>
        </div>

        {/* Khối bên phải */}
        <div className="flex items-center gap-1 shrink-0">
          <button className="flex items-center gap-1 px-2 py-1 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded transition shadow-sm whitespace-nowrap text-[11px]">
            <Layers className="w-3 h-3" /> Phối cảnh
          </button>

          <button className="flex items-center gap-1 px-1.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition border border-slate-700 whitespace-nowrap text-[11px]">
            <Sparkles className="w-3 h-3 text-purple-400" /> Tạo ảnh AI
          </button>

          <button className="flex items-center gap-1 px-1.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition border border-slate-700 whitespace-nowrap text-[11px]">
            <Settings className="w-3 h-3 text-slate-400" /> Thông số
          </button>

          <button className="flex items-center gap-1 px-1.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition border border-slate-700 whitespace-nowrap text-[11px]">
            <Maximize2 className="w-3 h-3 text-emerald-400" /> Mở rộng ảnh
          </button>

          <div className="flex items-center gap-1 px-1.5 py-0.5 bg-blue-950/40 border border-blue-500/40 rounded whitespace-nowrap">
            <Cpu className="w-3 h-3 text-blue-400" />
            <span className="text-blue-200 font-medium text-[11px]">AI: GPT-Image-1</span>
            <button className="px-1.5 py-0.5 bg-blue-600 hover:bg-blue-500 text-white text-[9px] font-semibold rounded transition">
              Đổi AI
            </button>
          </div>

          <button className="flex items-center gap-1 px-1.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition border border-slate-700 whitespace-nowrap text-[11px]">
            <FileSpreadsheet className="w-3 h-3 text-emerald-400" /> Xuất Excel
          </button>

          <button className="flex items-center gap-1 px-1.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition border border-slate-700 whitespace-nowrap text-[11px]">
            <Archive className="w-3 h-3 text-amber-400" /> Tải ZIP
          </button>

          <button className="flex items-center gap-1 px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded transition shadow-sm whitespace-nowrap text-[11px]">
            <Check className="w-3 h-3" /> Duyệt bản chốt
          </button>
        </div>
      </header>

      {/* ================= 2. MAIN LAYOUT 3 CỘT ================= */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* --- CỘT TRÁI: QUẢN LÝ DỰ ÁN & KHO ẢNH DỰ ÁN --- */}
        <aside className="w-72 border-r border-slate-800 bg-slate-950 p-3 flex flex-col gap-3 shrink-0 overflow-y-auto">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Dự án</span>
                <span className="text-[10px] bg-slate-800 border border-slate-700 text-slate-400 px-1.5 py-0.2 rounded-full font-medium">2</span>
              </div>

              <div className="flex items-center gap-2">
                <button className="text-[11px] text-slate-400 hover:text-slate-200 transition">
                  Chọn xóa
                </button>
                <button className="text-[11px] text-slate-400 hover:text-slate-200 transition">
                  Lưu trữ
                </button>
                <button className="flex items-center gap-1 px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-full shadow transition">
                  <Plus className="w-3.5 h-3.5" /> Mới
                </button>
              </div>
            </div>

            <input 
              type="text" 
              placeholder="Tìm tên dự án, mã Lead..." 
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-blue-500 placeholder-slate-600"
            />
          </div>

          {/* Danh sách Dự án */}
          <div className="flex flex-col gap-2">
            <div className="p-2 bg-slate-900/80 hover:bg-slate-900 border border-slate-800 rounded-xl cursor-pointer flex items-center justify-between group transition">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-slate-800 shrink-0 border border-slate-700 overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-slate-800"></div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-medium text-slate-200 truncate">Banner Qua...</p>
                    <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
                  </div>
                  <p className="text-[10px] text-slate-500 truncate mt-0.5">Tạo hình ảnh & Ba...</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 text-slate-400 opacity-60 group-hover:opacity-100 transition shrink-0 ml-1">
                <button className="p-1 hover:text-slate-200 rounded hover:bg-slate-800"><Edit3 className="w-3.5 h-3.5" /></button>
                <button className="p-1 hover:text-slate-200 rounded hover:bg-slate-800"><Box className="w-3.5 h-3.5" /></button>
                <button className="p-1 hover:text-slate-200 rounded hover:bg-slate-800"><Trash2 className="w-3.5 h-3.5" /></button>
              </div>
            </div>

            <div className="p-2 bg-blue-950/30 border border-blue-500/40 rounded-xl cursor-pointer flex items-center justify-between group transition">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-blue-600 shrink-0 border border-blue-400/40 overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full bg-blue-600"></div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-medium text-blue-200 truncate">Hội trường ...</p>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                  </div>
                  <p className="text-[10px] text-blue-400/70 truncate mt-0.5">Lead: TT-2026110...</p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-blue-300/70 group-hover:text-blue-200 transition shrink-0 ml-1">
                <button className="p-1 hover:text-white rounded hover:bg-blue-900/40"><Edit3 className="w-3.5 h-3.5" /></button>
                <button className="p-1 hover:text-white rounded hover:bg-blue-900/40"><Box className="w-3.5 h-3.5" /></button>
                <button className="p-1 hover:text-white rounded hover:bg-blue-900/40"><Trash2 className="w-3.5 h-3.5" /></button>
              </div>
            </div>
          </div>

          <hr className="border-slate-800/80" />

          {/* KHO ẢNH DỰ ÁN */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                <Folder className="w-3.5 h-3.5 text-slate-400" />
                <span>Kho ảnh dự án</span>
              </div>
              <button className="flex items-center gap-1 text-[11px] bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 px-2 py-0.5 rounded-md transition">
                <Download className="w-3 h-3 text-slate-400" /> Tải ZIP
              </button>
            </div>
            
            {/* Tab Pill */}
            <div className="bg-slate-900/90 p-1 rounded-xl flex gap-1 mb-3 text-xs border border-slate-800/80">
              <button 
                onClick={() => setPhotoTab("tech")}
                className={`flex-1 py-1 rounded-lg font-medium text-center transition ${
                  photoTab === "tech" 
                    ? "bg-slate-800 text-blue-400 shadow-sm border border-slate-700/60" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Ảnh kỹ thuật (2)
              </button>
              <button 
                onClick={() => setPhotoTab("design")}
                className={`flex-1 py-1 rounded-lg font-medium text-center transition ${
                  photoTab === "design" 
                    ? "bg-slate-800 text-blue-400 shadow-sm border border-slate-700/60" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Bản thiết kế (2)
              </button>
            </div>

            {/* Danh sách Thumbs Ảnh */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="border border-slate-800 bg-slate-900/90 rounded-xl p-1 flex flex-col justify-between overflow-hidden group">
                <div className="h-20 bg-blue-700 rounded-lg relative overflow-hidden flex items-center justify-center">
                  <input type="checkbox" className="absolute top-1.5 left-1.5 w-3.5 h-3.5 rounded accent-blue-600 cursor-pointer" />
                </div>
                <div className="pt-1.5 px-0.5">
                  <p className="text-[10px] font-medium text-slate-300 truncate">hien-trang-ballr...</p>
                  <div className="flex items-center justify-between text-[9px] text-slate-400 mt-1">
                    <button className="hover:text-blue-400 transition">Đổi tên</button>
                    <button className="hover:text-blue-400 transition">Tải</button>
                    <button className="hover:text-red-400 transition">Xóa</button>
                  </div>
                </div>
              </div>

              <div className="border border-blue-500/60 bg-blue-950/20 rounded-xl p-1 flex flex-col justify-between overflow-hidden relative">
                <div className="h-20 bg-slate-800 rounded-lg relative overflow-hidden flex items-center justify-center">
                  <input type="checkbox" className="absolute top-1.5 left-1.5 w-3.5 h-3.5 rounded accent-blue-600 cursor-pointer z-10" />
                  <span className="absolute top-1.5 right-1.5 bg-blue-600 text-[9px] text-white px-1.5 py-0.5 rounded font-medium z-10 shadow">Đang dùng</span>
                  <div className="w-full h-full bg-gradient-to-tr from-amber-800/40 to-slate-800 flex items-center justify-center text-[10px] text-slate-400">
                    1.png
                  </div>
                </div>
                <div className="pt-1.5 px-0.5">
                  <p className="text-[10px] font-semibold text-blue-300 truncate">1.png</p>
                  <div className="flex items-center justify-between text-[9px] text-slate-400 mt-1">
                    <button className="hover:text-blue-400 transition">Đổi tên</button>
                    <button className="hover:text-blue-400 transition">Tải</button>
                    <button className="hover:text-red-400 transition">Xóa</button>
                  </div>
                </div>
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

        {/* --- CỘT GIỮA --- */}
        <main className="flex-1 flex flex-col bg-slate-900 overflow-hidden relative">
          <div className="h-10 border-b border-slate-800 bg-slate-950 px-4 flex items-center gap-3 text-xs">
            <button className="px-3 py-1 bg-slate-800 text-blue-400 font-medium rounded border border-slate-700">Ảnh gốc</button>
            <button className="px-3 py-1 text-slate-400 hover:text-slate-200">Kết quả AI</button>
            <button className="px-3 py-1 text-slate-400 hover:text-slate-200">Ghép 3D Thực tế</button>
            <button className="px-3 py-1 text-slate-400 hover:text-slate-200">So sánh</button>
          </div>

          <div className="flex-1 p-4 flex items-center justify-center relative overflow-hidden bg-slate-950/60">
            <div className="relative border border-slate-800 rounded-xl overflow-hidden shadow-2xl max-w-full max-h-full flex items-center justify-center bg-slate-900 group">
              <div className="w-[850px] h-[480px] bg-slate-800/80 flex flex-col items-center justify-center relative border border-slate-700">
                <div className="text-center p-6 border border-dashed border-slate-600 rounded-xl bg-slate-900/40 backdrop-blur">
                  <p className="text-slate-300 font-medium text-sm">TOAN TRUNG TELECOM JSC</p>
                  <p className="text-xs text-slate-500 mt-1">Khu vực hiển thị phối cảnh & Khung neo màn hình LED</p>
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600/90 backdrop-blur text-white text-xs px-3.5 py-1.5 rounded-full shadow-xl border border-blue-400/40 flex items-center gap-2">
                  <span className="font-semibold">8.00m x 4.00m - P2.5</span>
                  <span className="text-[10px] bg-blue-900/80 px-2 py-0.5 rounded text-blue-200 border border-blue-400/30">Chưa có sơ đồ?</span>
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <button className="bg-slate-900/80 border border-slate-700 text-slate-300 text-[11px] px-2.5 py-1 rounded shadow">Khung neo LED</button>
                </div>

                <div className="absolute bottom-3 right-3 bg-slate-900/90 border border-slate-800 text-xs px-2.5 py-1 rounded-lg flex items-center gap-2 text-slate-300">
                  <span>100%</span>
                  <button className="hover:text-white">+</button>
                  <button className="bg-slate-800 px-2 py-0.5 rounded text-[11px]">Vừa khung</button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-14 border-t border-slate-800 bg-slate-950 px-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-300 font-medium">Phiên bản (2)</span>
              
              <div className="flex items-center gap-2">
                <div 
                  onClick={() => setActiveVersion("v1")}
                  className={`w-14 h-9 rounded-md border relative cursor-pointer overflow-hidden bg-slate-800 transition ${
                    activeVersion === "v1" 
                      ? "border-blue-500 ring-1 ring-blue-500" 
                      : "border-slate-700 hover:border-slate-500"
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 flex items-center justify-end p-0.5">
                    <div className="w-4 h-4 bg-teal-500/80 rounded-sm"></div>
                  </div>
                  <span className="absolute bottom-0.5 left-1 text-[9px] font-bold text-white bg-black/60 px-1 rounded">v1</span>
                  {activeVersion === "v1" && (
                    <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-emerald-400 rounded-full border border-slate-950"></span>
                  )}
                </div>

                <div 
                  onClick={() => setActiveVersion("v2")}
                  className={`w-14 h-9 rounded-md border relative cursor-pointer overflow-hidden bg-slate-800 transition ${
                    activeVersion === "v2" 
                      ? "border-blue-500 ring-1 ring-blue-500" 
                      : "border-slate-700 hover:border-slate-500"
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-tr from-slate-900 via-slate-800 to-cyan-900 flex items-center justify-end p-0.5">
                    <div className="w-4 h-4 bg-cyan-400/80 rounded-sm"></div>
                  </div>
                  <span className="absolute bottom-0.5 left-1 text-[9px] font-bold text-white bg-black/60 px-1 rounded">v2</span>
                  {activeVersion === "v2" && (
                    <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-950"></span>
                  )}
                </div>
              </div>
            </div>
            
            <button className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition">
              <Download className="w-3.5 h-3.5 text-slate-400" /> Tải v2
            </button>
          </div>
        </main>

        {/* --- CỘT PHẢI --- */}
        <aside className="w-80 border-l border-slate-800 bg-slate-950 flex flex-col shrink-0 h-full overflow-hidden">
          <div className="flex border-b border-slate-800 px-3.5 pt-2.5 gap-5 text-xs font-medium shrink-0 bg-slate-950">
            <button 
              onClick={() => setRightTab("ai")}
              className={`pb-2 flex items-center gap-1.5 border-b-2 transition ${
                rightTab === "ai" 
                  ? "border-blue-500 text-blue-400 font-semibold" 
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" /> Tạo ảnh AI
            </button>
            <button 
              onClick={() => setRightTab("specs")}
              className={`pb-2 flex items-center gap-1.5 border-b-2 transition ${
                rightTab === "specs" 
                  ? "border-blue-500 text-blue-400 font-semibold" 
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" /> Thông số
            </button>
          </div>

          <div className="p-3 flex-1 overflow-y-auto flex flex-col gap-2.5 no-scrollbar">
            <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-xl shrink-0">
              <div className="flex items-start justify-between gap-1">
                <h2 className="text-[11px] font-semibold text-white leading-snug">
                  Hội trường Ballroom Tầng 3 (P2.5)
                </h2>
                <button className="text-[10px] text-blue-400 hover:underline shrink-0 font-medium whitespace-nowrap">
                  Sửa thông số
                </button>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">
                Kích thước: <span className="text-slate-200">8m × 4m (32 m²)</span> · Tỷ lệ 16:9
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                Ảnh gốc đang chọn: 1.png
              </p>
            </div>

            <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-xl flex flex-col gap-1.5 shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-slate-200 font-semibold text-[11px]">
                  <Cpu className="w-3.5 h-3.5 text-blue-400" />
                  <span>Chọn Con AI & Model thực thi</span>
                </div>
                <button className="flex items-center gap-1 px-1.5 py-0.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded text-[9px] text-slate-300 font-medium transition">
                  <Key className="w-2.5 h-2.5 text-amber-400" /> Cấu hình Đa AI
                </button>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                <div>
                  <label className="text-[9px] text-slate-400 block mb-0.5">Nền tảng AI (Provider)</label>
                  <select 
                    value={provider} 
                    onChange={(e) => setProvider(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2 py-1 text-[11px] text-slate-200 focus:outline-none focus:border-blue-500"
                  >
                    <option value="OpenAI GPT-Image">OpenAI GPT-Image</option>
                    <option value="Midjourney">Midjourney</option>
                  </select>
                </div>

                <div>
                  <label className="text-[9px] text-slate-400 block mb-0.5">Mô hình (Model)</label>
                  <select 
                    value={model} 
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2 py-1 text-[11px] text-slate-200 focus:outline-none focus:border-blue-500"
                  >
                    <option value="gpt-image-v1">OpenAI GPT-Image (gpt-image-1)</option>
                    <option value="dall-e-3">DALL-E 3</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 shrink-0">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Yêu cầu</span>
              <div className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-[11px] text-slate-200 leading-normal">
                {prompt}
              </div>
            </div>

            <div className="p-2 bg-blue-950/20 border border-blue-500/30 rounded-xl flex flex-col gap-1 shrink-0">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-300">Kết quả AI (gpt-image-1)</span>
                <span className="text-[9px] bg-blue-900/60 border border-blue-500/40 text-blue-300 px-1.5 py-0.2 rounded font-medium">
                  Phiên bản v1
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-blue-400 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Bản nháp mới đã được thêm vào thư viện.</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 shrink-0">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold text-slate-400">
                  Mẫu Prompt chuẩn kỹ thuật LED Toàn Trung:
                </span>
                <button className="text-[10px] text-blue-400 hover:underline font-medium flex items-center gap-0.5">
                  Mở Ghép 3D Thực tế <ArrowRight className="w-2.5 h-2.5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                <button 
                  onClick={() => setPrompt("Phối cảnh màn hình LED P2.5 phẳng 8m x 4m âm tường sân khấu Ballroom.")}
                  className="px-2 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-[11px] text-slate-300 text-left transition flex items-center gap-1 truncate"
                >
                  <span className="text-slate-500 font-bold">+</span> Hội trường P2.5
                </button>
                <button 
                  onClick={() => setPrompt("Phối cảnh màn hình LED Showroom 4K siêu nét, ánh sáng hiện đại.")}
                  className="px-2 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-[11px] text-slate-300 text-left transition flex items-center gap-1 truncate"
                >
                  <span className="text-slate-500 font-bold">+</span> Showroom 4K
                </button>
                <button 
                  onClick={() => setPrompt("Phối cảnh màn hình LED Outdoor ngoài trời tòa nhà cao tầng.")}
                  className="px-2 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-[11px] text-slate-300 text-left transition flex items-center gap-1 truncate"
                >
                  <span className="text-slate-500 font-bold">+</span> Tòa nhà Outdoor
                </button>
                <button 
                  onClick={() => setPrompt("Phối cảnh màn hình LED hiển thị thông số nhà máy Andon sản xuất.")}
                  className="px-2 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-[11px] text-slate-300 text-left transition flex items-center gap-1 truncate"
                >
                  <span className="text-slate-500 font-bold">+</span> Nhà máy Andon
                </button>
              </div>
            </div>

          </div>

          <div className="p-3 border-t border-slate-800 bg-slate-950 flex flex-col gap-2 shrink-0">
            <textarea 
              rows={2}
              value={bottomInput}
              onChange={(e) => setBottomInput(e.target.value)}
              placeholder="Mô tả yêu cầu dựng phối cảnh / chỉnh nội dung màn hình LED..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2 text-[11px] text-slate-200 focus:outline-none focus:border-blue-500 placeholder-slate-600 resize-none leading-normal"
            />

            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-2 py-1 rounded-lg text-[11px] text-slate-300">
                <span className="text-slate-500 text-[10px]">Chế độ</span>
                <select className="bg-transparent focus:outline-none cursor-pointer text-[11px] font-medium">
                  <option>Nháp nhanh</option>
                  <option>Chính xác</option>
                </select>
              </div>

              <button className="flex-1 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs rounded-xl shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-1.5 transition">
                <Send className="w-3.5 h-3.5" /> Tạo phiên bản
              </button>
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
}