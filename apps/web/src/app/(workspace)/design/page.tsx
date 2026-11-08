"use client";

import React, { useState } from "react";
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  Upload, 
  Sparkles, 
  FileSpreadsheet, 
  Archive, 
  CheckCircle2, 
  Maximize2, 
  Settings,
  Layers,
  Cpu,
  Box,
  Folder,
  Download,
  SlidersHorizontal,
  KeyRound,
  Send
} from "lucide-react";

export default function AIStudioPage() {
  const [mainTab, setMainTab] = useState("phoi-canh");
  const [viewMode, setViewMode] = useState("anh-goc");
  const [activeVersion, setActiveVersion] = useState("v2");
  const [promptText, setPromptText] = useState(
    "Phối cảnh màn hình LED P2.5 phẳng 8m x 4m lắp âm tường chính giữa sân khấu Ballroom, ánh sáng vàng ấm sang trọng."
  );
  const [bottomDesc, setBottomDesc] = useState(
    "Mô tả yêu cầu dựng phối cảnh / chỉnh nội dung màn hình LED..."
  );

  const handleCreateVersion = () => alert("Đã tạo phiên bản thành công!");
  const handleApprove = () => alert("Đã duyệt bản chốt!");
  const handleExportExcel = () => alert("Đang xuất file Excel...");
  const handleDownloadZip = () => alert("Đang tải ZIP...");

  const handleAddTag = (tagText: string) => {
    setPromptText((prev) => prev + " " + tagText);
  };

  return (
    <div className="flex flex-col h-screen bg-[#060810] text-slate-200 font-sans text-xs overflow-hidden select-none">
      
      {/* ==================== 1. TOPBAR CÔNG CỤ ==================== */}
      <header className="h-11 bg-[#090D18] border-b border-slate-800/80 px-3 flex items-center justify-between shrink-0 flex-nowrap overflow-hidden">
        <div className="flex items-center gap-1.5 shrink-0">
          <h1 className="font-semibold text-white text-[12px] tracking-tight">Hội trường Ballroom Tầng 3</h1>
          
          <button className="flex items-center gap-1 px-2 py-0.5 text-[10px] text-slate-300 hover:text-white bg-[#0D1322] border border-slate-800/80 rounded">
            <Edit2 className="w-2.5 h-2.5 text-slate-400" /> Sửa
          </button>
          
          <button className="flex items-center gap-1 px-2 py-0.5 text-[10px] text-slate-300 hover:text-red-400 bg-[#0D1322] border border-slate-800/80 rounded">
            <Trash2 className="w-2.5 h-2.5 text-slate-400" /> Xóa
          </button>

          <span className="px-2 py-0.5 rounded bg-[#0F172A] text-[#3B82F6] text-[10px] font-medium border border-blue-900/40">
            TT-20261101-0001
          </span>
        </div>

        <div className="flex items-center gap-1 shrink-0 px-1">
          <button 
            onClick={() => setMainTab("phoi-canh")}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-medium transition ${
              mainTab === "phoi-canh" 
                ? "bg-[#2563EB] text-white font-semibold shadow-sm" 
                : "bg-[#0D1322] text-slate-300 hover:bg-slate-800 border border-slate-800/60"
            }`}
          >
            <Layers className="w-3 h-3" /> Phối cảnh
          </button>

          <button 
            onClick={() => setMainTab("tao-anh-ai")}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-medium transition ${
              mainTab === "tao-anh-ai" 
                ? "bg-[#2563EB] text-white font-semibold" 
                : "bg-[#0D1322] text-slate-300 hover:bg-slate-800 border border-slate-800/60"
            }`}
          >
            <Sparkles className="w-3 h-3 text-purple-400" /> Tạo ảnh AI
          </button>

          <button className="flex items-center gap-1 px-2 py-1 text-[11px] text-slate-300 hover:text-white bg-[#0D1322] border border-slate-800/60 rounded">
            <Settings className="w-3 h-3 text-slate-400" /> Thông số
          </button>

          <button className="flex items-center gap-1 px-2 py-1 text-[11px] text-slate-300 hover:text-white bg-[#0D1322] border border-slate-800/60 rounded">
            <Maximize2 className="w-3 h-3 text-emerald-400" /> Mở rộng ảnh
          </button>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <div className="flex items-center bg-[#0D1426] border border-blue-900/50 rounded pl-2 pr-0.5 py-0.5 text-[10px] text-slate-200">
            <Cpu className="w-3 h-3 text-blue-400 mr-1" /> AI: GPT-Image-1
            <button className="ml-1.5 bg-[#2563EB] hover:bg-blue-500 text-white px-1.5 py-0.2 rounded text-[9px] font-medium">
              Đổi AI
            </button>
          </div>

          <button onClick={handleExportExcel} className="flex items-center gap-1 px-2 py-1 bg-[#064E3B]/80 hover:bg-[#064E3B] text-emerald-300 border border-emerald-800/80 rounded text-[11px] font-medium transition">
            <FileSpreadsheet className="w-3 h-3 text-emerald-400" /> Xuất Excel
          </button>

          <button onClick={handleDownloadZip} className="flex items-center gap-1 px-2 py-1 bg-[#78350F]/60 hover:bg-[#78350F] text-amber-300 border border-amber-800/80 rounded text-[11px] font-medium transition">
            <Archive className="w-3 h-3 text-amber-400" /> Tải ZIP
          </button>

          <button onClick={handleApprove} className="flex items-center gap-1 px-2.5 py-1 bg-[#2563EB] hover:bg-blue-500 text-white font-semibold rounded text-[11px] transition shadow-sm">
            <CheckCircle2 className="w-3 h-3" /> Duyệt bản chốt
          </button>
        </div>
      </header>

      {/* ==================== 2. KHUNG NỘI DUNG 3 CỘT ==================== */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* ---------------- CỘT 1: DỰ ÁN VÀ KHO ẢNH ---------------- */}
        <aside className="w-[270px] bg-[#060810] border-r border-slate-800/80 flex flex-col justify-between shrink-0 overflow-hidden">
          <div className="p-3 flex-1 flex flex-col gap-2.5 overflow-hidden">
            
            {/* Cụm 1: Danh sách Dự án */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-white text-xs tracking-wider">DỰ ÁN</span>
                  <span className="w-4 h-4 rounded-full bg-[#161F33] text-slate-400 font-mono text-[9px] flex items-center justify-center font-semibold">2</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-400">
                  <button className="hover:text-white transition">Chọn xóa</button>
                  <button className="hover:text-white transition">Lưu trữ</button>
                  <button className="px-2.5 py-0.5 bg-[#2563EB] hover:bg-blue-600 text-white rounded-full font-bold text-[11px] flex items-center gap-0.5 shadow-sm transition">
                    + Mới
                  </button>
                </div>
              </div>

              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Tìm tên dự án, mã Lead..." 
                  className="w-full bg-[#0B0E1B] border border-slate-800/90 rounded-lg px-2.5 py-1 text-[10px] text-slate-300 placeholder-slate-600 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <div className="p-2.5 rounded-xl bg-[#090D1A] border border-slate-800/80 hover:border-slate-700 cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-900 to-purple-900 shrink-0 border border-slate-700/40"></div>
                    <div>
                      <h4 className="font-bold text-slate-200 text-[11px] flex items-center gap-1">
                        Banner Qua... <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      </h4>
                      <p className="text-[9px] text-slate-500 mt-0.5">Tạo hình ảnh & Ba...</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Edit2 className="w-3 h-3 hover:text-slate-300" />
                    <Box className="w-3 h-3 hover:text-slate-300" />
                    <Trash2 className="w-3 h-3 hover:text-red-400" />
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#0D1830]/80 border border-blue-600/60 cursor-pointer flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#2563EB] shrink-0 border border-blue-400/30"></div>
                    <div>
                      <h4 className="font-bold text-white text-[11px] flex items-center gap-1">
                        Hội trường ... <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      </h4>
                      <p className="text-[9px] text-blue-400/80 font-mono mt-0.5">Lead: TT-2026110...</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Edit2 className="w-3 h-3 hover:text-white" />
                    <Box className="w-3 h-3 hover:text-white" />
                    <Trash2 className="w-3 h-3 hover:text-red-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Cụm 2: Thư viện ảnh dự án */}
            <div className="border-t border-slate-800/80 pt-2 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-200 text-[11px] tracking-wider flex items-center gap-1">
                  <Folder className="w-3 h-3 text-slate-400" /> KHO ẢNH DỰ ÁN
                </span>
                <button className="text-[10px] bg-[#0C1120] hover:bg-slate-800 text-slate-300 border border-slate-800 px-2 py-0.5 rounded flex items-center gap-1">
                  <Download className="w-2.5 h-2.5 text-slate-400" /> Tải ZIP
                </button>
              </div>

              <div className="grid grid-cols-2 gap-1 bg-[#080C18] p-0.5 rounded-lg border border-slate-800/90 text-center">
                <button className="py-1 bg-[#10192D] text-blue-400 font-bold rounded text-[10px] border border-slate-800/60">
                  Ảnh kỹ thuật (2)
                </button>
                <button className="py-1 text-slate-400 hover:text-slate-200 text-[10px] font-medium">
                  Bản thiết kế (2)
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-1.5 rounded-xl border border-slate-800/90 bg-[#0A0E1C] flex flex-col justify-between h-32 cursor-pointer">
                  <div className="w-full h-20 rounded-lg bg-[#2563EB] relative p-1.5">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                  <div className="px-0.5 pt-1">
                    <p className="font-semibold text-[9.5px] text-slate-300 truncate">hien-trang-ballr...</p>
                    <div className="flex items-center justify-between text-[8.5px] text-slate-500 mt-0.5 font-medium">
                      <span className="hover:text-slate-300">Đổi tên</span>
                      <span className="hover:text-slate-300">Tải</span>
                      <span className="hover:text-red-400">Xóa</span>
                    </div>
                  </div>
                </div>

                <div className="p-1.5 rounded-xl border border-blue-600/70 bg-[#0A0E1C] flex flex-col justify-between h-32 cursor-pointer">
                  <div className="w-full h-20 rounded-lg bg-gradient-to-br from-[#2D221D] to-[#120F15] border border-slate-700/40 relative p-1.5 flex flex-col justify-between">
                    <div className="flex items-center justify-between w-full">
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                      <span className="px-1.5 py-0.2 rounded-md bg-[#2563EB] text-white text-[8px] font-bold shadow-sm">
                        Đang dùng
                      </span>
                    </div>
                    <p className="font-mono text-[9.5px] text-blue-400 font-semibold truncate text-center">1.png</p>
                  </div>
                  <div className="px-0.5 pt-1">
                    <p className="font-mono text-[9.5px] text-blue-400 font-semibold truncate">1.png</p>
                    <div className="flex items-center justify-between text-[8.5px] text-slate-500 mt-0.5 font-medium">
                      <span className="hover:text-slate-300">Đổi tên</span>
                      <span className="hover:text-slate-300">Tải</span>
                      <span className="hover:text-red-400">Xóa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 border-t border-slate-800/80 bg-[#060810] space-y-2 shrink-0">
            <button className="w-full py-2 bg-[#0C1222] hover:bg-[#121A30] text-slate-200 font-semibold rounded-xl border border-slate-800/90 flex items-center justify-center gap-1.5 transition text-[10.5px] shadow-sm">
              <Upload className="w-3.5 h-3.5 text-blue-400" /> Tải ảnh kỹ thuật (Nhiều tệp)
            </button>
            
            <button className="w-full py-2 bg-[#0C1222] hover:bg-[#121A30] text-slate-300 font-medium rounded-xl border border-slate-800/90 flex items-center justify-center transition text-[10.5px] shadow-sm">
              Nhập ảnh khảo sát từ hồ sơ Lead
            </button>
          </div>
        </aside>

        {/* ---------------- CỘT 2: RENDER CANVAS (GIỮA) ---------------- */}
        <main className="flex-1 bg-[#04060C] flex flex-col justify-between overflow-hidden relative">
          <div className="h-9 px-3 flex items-center justify-between border-b border-slate-800/60 bg-[#090D18]/40">
            <div className="flex items-center gap-1 bg-[#060913] p-0.5 rounded border border-slate-800">
              <button 
                onClick={() => setViewMode("anh-goc")}
                className={`px-2.5 py-0.5 rounded text-[10px] transition ${
                  viewMode === "anh-goc" ? "bg-blue-600 text-white font-medium" : "text-slate-400 hover:text-white"
                }`}
              >
                Ảnh gốc
              </button>
              <button 
                onClick={() => setViewMode("ket-qua-ai")}
                className={`px-2.5 py-0.5 rounded text-[10px] transition ${
                  viewMode === "ket-qua-ai" ? "bg-blue-600 text-white font-medium" : "text-slate-400 hover:text-white"
                }`}
              >
                Kết quả AI
              </button>
              <button 
                onClick={() => setViewMode("ghep-3d")}
                className={`px-2.5 py-0.5 rounded text-[10px] transition ${
                  viewMode === "ghep-3d" ? "bg-blue-600 text-white font-medium" : "text-slate-400 hover:text-white"
                }`}
              >
                Ghép 3D Thực tế
              </button>
              <button 
                onClick={() => setViewMode("so-sanh")}
                className={`px-2.5 py-0.5 rounded text-[10px] transition ${
                  viewMode === "so-sanh" ? "bg-blue-600 text-white font-medium" : "text-slate-400 hover:text-white"
                }`}
              >
                So sánh
              </button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-6 relative">
            <div className="w-full max-w-xl h-72 border-2 border-dashed border-slate-800 rounded-xl bg-[#080C16] flex flex-col items-center justify-center relative">
              <div className="px-3 py-1 rounded-full bg-[#2563EB] text-white font-bold text-xs shadow flex items-center gap-2 border border-blue-400/40">
                <span>8.00m x 4.00m - P2.5</span>
                <span className="text-[9px] font-normal bg-blue-800 px-1.5 py-0.2 rounded-full text-blue-100">Chưa có sơ đồ?</span>
              </div>
              <p className="text-slate-500 text-xs mt-2">Khu vực hiển thị phối cảnh 3D Màn hình LED</p>
            </div>
          </div>

          {/* FOOTER CANVAS: NÚT THUMBNAIL PHIÊN BẢN V1, V2 CHUẨN KÍCH THƯỚC VÀ VỊ TRÍ MẪU BÊN PHẢI */}
          <div className="h-12 bg-[#090D18] border-t border-slate-800 px-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="font-semibold text-slate-200 text-xs">Phiên bản (2)</span>
              <div className="flex items-center gap-2">
                
                {/* THUMBNAIL V1 (Chữ nhật ngang) */}
                <div 
                  onClick={() => setActiveVersion("v1")}
                  className={`w-14 h-9 rounded-xl bg-[#141B2D] border cursor-pointer relative p-1 flex justify-between items-end transition ${
                    activeVersion === "v1" ? "border-blue-500 bg-[#19233C]" : "border-slate-800/90 hover:border-slate-700"
                  }`}
                >
                  {/* Tag v1 ở góc dưới trái */}
                  <span className="bg-[#090D18] text-slate-300 font-mono text-[9px] px-1 py-0.2 rounded font-bold">
                    v1
                  </span>
                  {/* Khung ảnh preview góc trên phải */}
                  <div className="w-4 h-4 rounded-md bg-emerald-500/80 self-start"></div>
                </div>

                {/* THUMBNAIL V2 (ACTIVE - Chữ nhật ngang) */}
                <div 
                  onClick={() => setActiveVersion("v2")}
                  className={`w-14 h-9 rounded-xl bg-[#15203A] border border-blue-500 cursor-pointer relative p-1 flex justify-between items-end transition shadow-sm ${
                    activeVersion === "v2" ? "ring-1 ring-blue-500/40" : ""
                  }`}
                >
                  {/* Tag v2 ở góc dưới trái */}
                  <span className="bg-[#090D18] text-white font-mono text-[9px] px-1 py-0.2 rounded font-bold">
                    v2
                  </span>
                  {/* Khung ảnh preview góc trên phải kèm chấm active */}
                  <div className="relative self-start">
                    <div className="w-4 h-4 rounded-md bg-cyan-400"></div>
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 ring-1 ring-slate-900"></span>
                  </div>
                </div>

              </div>
            </div>

            <button className="flex items-center gap-1 text-xs text-slate-300 hover:text-white bg-[#060913] border border-slate-800 px-2.5 py-1 rounded">
              <Archive className="w-3 h-3 text-slate-400" /> Tải v2
            </button>
          </div>
        </main>

        {/* ---------------- CỘT 3: CẤU HÌNH AI (PHẢI) ---------------- */}
        <aside className="w-[310px] bg-[#060810] border-l border-slate-800/80 flex flex-col justify-between shrink-0 overflow-hidden">
          <div className="p-2.5 space-y-1.5 flex-1 flex flex-col justify-between overflow-hidden">
            
            <div className="flex items-center justify-between pb-1 border-b border-blue-600/40">
              <div className="flex items-center gap-1.5 border-b-2 border-blue-500 pb-0.5 -mb-1">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-bold text-blue-400 text-[11px]">Tạo ảnh AI</span>
              </div>
              <button className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1">
                <SlidersHorizontal className="w-3 h-3" /> Thông số
              </button>
            </div>

            <div className="p-2 rounded-xl bg-[#090D1A] border border-slate-800/80">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-[10.5px]">Hội trường Ballroom Tầng 3 (P2.5)</h4>
                <button className="text-[9.5px] text-blue-400 hover:underline">Sửa thông số</button>
              </div>
              <p className="text-[9.5px] text-slate-400 mt-0.5">Kích thước: <span className="text-slate-200 font-medium">8m • 4m (32 m²) • Tỷ lệ 16:9</span></p>
              <p className="text-[9px] text-slate-500">Ảnh gốc đang chọn: 1.png</p>
            </div>

            <div className="p-2 rounded-xl bg-[#090D1A] border border-slate-800/80 space-y-1">
              <div className="flex items-center justify-between text-[10px]">
                <span className="font-bold text-white flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-blue-400" /> Chọn Con AI & Model thực thi
                </span>
                <button className="text-[9px] bg-[#121B30] text-slate-300 border border-slate-700/80 px-1.5 py-0.5 rounded-lg flex items-center gap-1">
                  <KeyRound className="w-2.5 h-2.5 text-amber-400" /> Cấu hình Đa AI
                </button>
              </div>

              <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                <div>
                  <label className="block text-[9px] text-slate-400 mb-0.5">Nền tảng AI (Provider)</label>
                  <select className="w-full bg-[#050711] border border-slate-800 rounded-lg px-1.5 py-0.5 text-[9.5px] text-slate-200 focus:outline-none">
                    <option>OpenAI GPT-Img</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[9px] text-slate-400 mb-0.5">Mô hình (Model)</label>
                  <select className="w-full bg-[#050711] border border-slate-800 rounded-lg px-1.5 py-0.5 text-[9.5px] text-slate-200 focus:outline-none">
                    <option>OpenAI GPT-Img</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-300 text-[9.5px] mb-0.5 uppercase tracking-wider">YÊU CẦU</label>
              <div className="w-full bg-[#090D1A] border border-slate-800/80 rounded-xl p-2 text-[10px] text-slate-200 leading-relaxed">
                {promptText}
              </div>
            </div>

            <div className="p-1.5 rounded-xl bg-[#0D1830]/60 border border-blue-900/50">
              <div className="flex items-center justify-between text-[10px]">
                <span className="font-semibold text-blue-300">Kết quả AI (gpt-image-1)</span>
                <span className="px-1.5 py-0.2 rounded bg-[#1D3557] text-blue-200 text-[9px] font-mono">Phiên bản v1</span>
              </div>
              <p className="text-[9px] text-slate-400 mt-0.5 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-blue-400 shrink-0" /> Bản nháp mới đã được thêm vào thư viện.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-[9.5px]">
                <button className="text-blue-400 hover:underline font-medium">Mẫu Prompt chuẩn kỹ thuật LED</button>
                <button className="text-slate-300 hover:text-white font-medium flex items-center gap-0.5">
                  Mở Ghép 3D <span className="text-blue-400">➔</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-1 pt-0.5">
                <button 
                  onClick={() => handleAddTag("Hội trường P2.5")}
                  className="px-2 py-1 bg-[#0B101D] hover:bg-slate-800 border border-slate-800/90 rounded-lg text-slate-300 text-[9px] text-left truncate transition"
                >
                  + Hội trường P2.5
                </button>
                <button 
                  onClick={() => handleAddTag("Showroom 4K")}
                  className="px-2 py-1 bg-[#0B101D] hover:bg-slate-800 border border-slate-800/90 rounded-lg text-slate-300 text-[9px] text-left truncate transition"
                >
                  + Showroom 4K
                </button>
                <button 
                  onClick={() => handleAddTag("Tòa nhà Outdoor")}
                  className="px-2 py-1 bg-[#0B101D] hover:bg-slate-800 border border-slate-800/90 rounded-lg text-slate-300 text-[9px] text-left truncate transition"
                >
                  + Tòa nhà Outdoor
                </button>
                <button 
                  onClick={() => handleAddTag("Nhà máy Andon")}
                  className="px-2 py-1 bg-[#0B101D] hover:bg-slate-800 border border-slate-800/90 rounded-lg text-slate-300 text-[9px] text-left truncate transition"
                >
                  + Nhà máy Andon
                </button>
              </div>
            </div>

            <div className="pt-0.5">
              <textarea 
                rows={2}
                value={bottomDesc}
                onChange={(e) => setBottomDesc(e.target.value)}
                className="w-full bg-[#090D1A] border border-slate-800/80 rounded-xl p-1.5 text-[9.5px] text-slate-400 focus:outline-none resize-none leading-normal"
              ></textarea>
            </div>
          </div>

          <div className="p-2 border-t border-slate-800/80 bg-[#060810] flex items-center gap-1.5 shrink-0">
            <select className="bg-[#090D1A] border border-slate-800 rounded-xl px-2 py-1.5 text-[9.5px] text-slate-300 focus:outline-none">
              <option>Chế độ Nháp nhanh</option>
            </select>
            <button 
              onClick={handleCreateVersion}
              className="flex-1 py-1.5 bg-[#4F46E5] hover:bg-indigo-600 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-1 transition text-[10.5px]"
            >
              <Send className="w-3 h-3 -rotate-45" /> Tạo phiên bản
            </button>
          </div>
        </aside>

      </div>
    </div>
  );
}