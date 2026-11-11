"use client";

import React, { useState } from "react";
import {
  // Sidebar icons
  LayoutGrid,
  Contact2,
  FileText,
  Clock3,
  Gift,
  Megaphone,
  BarChart3,
  Bell,
  UserCircle2,
  Users2,
  Settings,
  ChevronsLeft,
  // Header & Filter icons
  Search,
  ChevronDown,
  Plus,
  FileSpreadsheet,
  Upload,
  Filter,
  RefreshCw,
  // Table & Action icons
  Phone,
  Edit,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  List,
  Calendar,
  Grid,
  // Modal icons
  X,
  UserCheck,
  Paperclip,
  History,
  Check,
  Building2,
  User,
  Mail,
  MapPin,
  FileEdit,
  Star,
  Tag,
  AlertTriangle,
  ShieldAlert,
  Send,
  MessageSquare,
  ArrowRightLeft,
  // Attachment icons
  UploadCloud,
  FolderPlus,
  Download,
  Eye,
  Trash2,
  Boxes,
  HelpCircle,
  Pencil,
  ListFilter,
  ArrowRight,
  Info
} from "lucide-react";

// Icon xung nhịp cho Tab Tiến độ & Phối hợp
function ActivityIcon(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>
    </svg>
  );
}

// ============================================================================
// 1. COMPONENT MODAL CHI TIẾT LEAD (FULL 100% CÁC TAB - HOÀN CHỈNH TỪNG NÚT)
// ============================================================================
interface LeadDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadData?: any;
}

function LeadDetailModal({ isOpen, onClose, leadData }: LeadDetailModalProps) {
  const [activeTab, setActiveTab] = useState<"thong-tin" | "tien-do" | "tep-kem" | "lich-su">("lich-su");
  const [currentStep, setCurrentStep] = useState(0);
  const [showExtendedInfo, setShowExtendedInfo] = useState(true);

  // State Tab Sản phẩm quan tâm (Tab Thông tin chung)
  const [activeCategory, setActiveCategory] = useState<"led" | "bang-so" | "khac">("led");
  const [selectedProducts, setSelectedProducts] = useState<string[]>(["Màn hình LED Indoor", "Màn hình LED Outdoor"]);

  // State Tab Tệp đính kèm
  const [fileSearch, setFileSearch] = useState("");
  const [fileTypeFilter, setFileTypeFilter] = useState("ALL");
  const [fileUploaderFilter, setFileUploaderFilter] = useState("ALL");
  const [fileDateFilter, setFileDateFilter] = useState("ALL");

  // State Tab Lịch sử
  const [historySearch, setHistorySearch] = useState("");
  const [historyTypeFilter, setHistoryTypeFilter] = useState("ALL");
  const [historyUserFilter, setHistoryUserFilter] = useState("ALL");
  const [historyTimeFilter, setHistoryTimeFilter] = useState("ALL");

  // Dữ liệu tệp đính kèm mẫu
  const [attachments] = useState([
    {
      id: "1",
      name: "Báo giá LED P3.pdf",
      type: "PDF",
      typeColor: "bg-rose-100 text-rose-700",
      size: "1.2 MB",
      uploader: "Nguyễn Quản Trị",
      uploadTime: "07/11/2026 14:30",
      iconType: "pdf"
    },
    {
      id: "2",
      name: "Danh sách sản phẩm.xlsx",
      type: "XLSX",
      typeColor: "bg-emerald-100 text-emerald-700",
      size: "356 KB",
      uploader: "Nguyễn Quản Trị",
      uploadTime: "07/11/2026 14:28",
      iconType: "excel"
    },
    {
      id: "3",
      name: "Hình ảnh hiện trường.jpg",
      type: "JPG",
      typeColor: "bg-blue-100 text-blue-700",
      size: "2.8 MB",
      uploader: "Lý Kinh Doanh 2",
      uploadTime: "06/11/2026 16:05",
      iconType: "image"
    }
  ]);

  // Dữ liệu Lịch sử mẫu (Chuẩn y chang ảnh)
  const [historyEvents] = useState([
    {
      id: "1",
      action: "Cập nhật trạng thái",
      actor: "Nguyễn Quản Trị",
      fromStatus: "Đã gửi báo giá",
      fromBg: "bg-slate-100 text-slate-700",
      toStatus: "Vừa nhận thông tin",
      toBg: "bg-blue-100 text-blue-700",
      description: "Chuyển nhanh trạng thái sang Vừa nhận thông tin",
      time: "23:43 · 07/11/2026",
      iconBg: "bg-blue-600",
      icon: Pencil
    },
    {
      id: "2",
      action: "Cập nhật trạng thái",
      actor: "Nguyễn Quản Trị",
      fromStatus: "Đang soạn báo giá",
      fromBg: "bg-slate-100 text-slate-700",
      toStatus: "Đã gửi báo giá",
      toBg: "bg-blue-100 text-blue-700",
      description: "Chuyển nhanh trạng thái sang Đã gửi báo giá",
      time: "23:43 · 07/11/2026",
      iconBg: "bg-emerald-600",
      icon: Check
    },
    {
      id: "3",
      action: "Cập nhật trạng thái",
      actor: "Nguyễn Quản Trị",
      fromStatus: "Vừa nhận thông tin",
      fromBg: "bg-slate-100 text-slate-700",
      toStatus: "Đang soạn báo giá",
      toBg: "bg-blue-100 text-blue-700",
      description: "Chuyển nhanh trạng thái sang Đang soạn báo giá",
      time: "23:43 · 07/11/2026",
      iconBg: "bg-purple-600",
      icon: Info
    }
  ]);

  if (!isOpen) return null;

  const toggleProduct = (prodName: string) => {
    if (selectedProducts.includes(prodName)) {
      setSelectedProducts(selectedProducts.filter((p) => p !== prodName));
    } else {
      setSelectedProducts([...selectedProducts, prodName]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 overflow-y-auto">
      <div className="bg-[#F8FAFC] rounded-2xl shadow-2xl border border-slate-200 w-full max-w-6xl max-h-[94vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150 text-xs">
        
        {/* ================= HEADER MODAL CHUẨN ================= */}
        <div className="p-4 border-b border-slate-200/80 bg-white flex items-start justify-between shrink-0">
          <div className="space-y-2">
            {/* DÒNG 1: Mã Lead Badge + Tên Khách Hàng */}
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 font-extrabold text-[11.5px] rounded-full border border-blue-100/80">
                {leadData?.id || "TT-20261105-0005"}
              </span>
              <h2 className="text-base font-extrabold text-slate-900 leading-tight">
                {leadData?.customer || "Cửa hàng LED Thương mại Sao Việt (Nghi khảo giá)"}
              </h2>
            </div>

            {/* DÒNG 2: 2 Badge Trạng Thái */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 bg-purple-50 text-purple-700 rounded-full font-bold text-[10.5px] border border-purple-100">
                {leadData?.status || "Vừa nhận thông tin"}
              </span>
              <span className="px-3 py-0.5 bg-rose-50 text-rose-600 rounded-full font-bold text-[10.5px] border border-rose-100 flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-rose-500" />
                <span>Spam chờ duyệt (Đối thủ khảo giá)</span>
              </span>
            </div>

            {/* DÒNG 3: Chuỗi thông tin chi tiết */}
            <div className="flex items-center gap-2.5 text-[10.5px] text-slate-500 font-medium pt-0.5">
              <span className="flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-slate-400" /> 
                Dự án: <strong className="text-slate-700 font-bold">{leadData?.project || "Hỏi giá lẻ nhiều kích thước P2/P3/P4"}</strong>
              </span>

              <span className="text-slate-300 font-normal">|</span>

              <span className="flex items-center gap-1 font-bold text-slate-700">
                <Phone className="w-3.5 h-3.5 text-slate-400" /> 
                {leadData?.phone || "0908999888"}
              </span>

              <span className="text-slate-300 font-normal">|</span>

              <span>
                Nguồn: <strong className="text-slate-700 font-bold">{leadData?.source || "Nhập tay"}</strong>
              </span>

              <span className="text-slate-300 font-normal">|</span>

              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-slate-400" /> 
                Phụ trách: <strong className="text-slate-800 font-bold">{leadData?.assigneeName || "Lý Kinh Doanh 2"}</strong>
              </span>
            </div>
          </div>

          {/* CỤM NÚT THAO TÁC BÊN PHẢI */}
          <div className="flex items-center gap-2 shrink-0">
            <button className="flex items-center gap-2 px-3.5 py-1.5 bg-[#009A61] hover:bg-emerald-700 text-white font-extrabold text-[11.5px] rounded-xl shadow-2xs transition cursor-pointer">
              <UserCheck className="w-4 h-4" />
              <span>Xác nhận tiếp nhận</span>
            </button>

            <button className="p-1.5 bg-white border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-xl transition cursor-pointer shadow-2xs">
              <ChevronDown className="w-4 h-4" />
            </button>

            <button 
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= TAB NAVIGATION ================= */}
        <div className="px-4 border-b border-slate-200/80 bg-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab("thong-tin")}
              className={`flex items-center gap-1.5 px-4 py-2.5 font-bold text-xs border-b-2 transition cursor-pointer ${
                activeTab === "thong-tin"
                  ? "border-blue-600 text-blue-600 font-extrabold"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <FileText className="w-4 h-4" /> Thông tin chung
            </button>

            <button
              onClick={() => setActiveTab("tien-do")}
              className={`flex items-center gap-1.5 px-4 py-2.5 font-bold text-xs border-b-2 transition cursor-pointer ${
                activeTab === "tien-do"
                  ? "border-blue-600 text-blue-600 font-extrabold"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <ActivityIcon className="w-4 h-4" /> Tiến độ & Phối hợp
            </button>

            <button
              onClick={() => setActiveTab("tep-kem")}
              className={`flex items-center gap-1.5 px-4 py-2.5 font-bold text-xs border-b-2 transition cursor-pointer ${
                activeTab === "tep-kem"
                  ? "border-blue-600 text-blue-600 font-extrabold"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Paperclip className="w-4 h-4" /> Tệp đính kèm
            </button>

            <button
              onClick={() => setActiveTab("lich-su")}
              className={`flex items-center gap-1.5 px-4 py-2.5 font-bold text-xs border-b-2 transition cursor-pointer ${
                activeTab === "lich-su"
                  ? "border-blue-600 text-blue-600 font-extrabold"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <History className="w-4 h-4" /> Lịch sử <span className="bg-blue-100 text-blue-700 text-[9.5px] px-1.5 py-0.2 rounded-full font-extrabold ml-0.5">3</span>
            </button>
          </div>

          <span className="text-[10.5px] font-bold text-emerald-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Cho phép sửa trực tiếp
          </span>
        </div>

        {/* ================= NỘI DUNG CHÍNH CỦA MODAL ================= */}
        <div className="flex-1 overflow-y-auto p-3.5 min-h-0 space-y-3">
          
          {/* ================= TAB 1: THÔNG TIN CHUNG (ĐẦY ĐỦ 100%) ================= */}
          {activeTab === "thong-tin" && (
            <div className="flex gap-3.5 items-start">
              
              {/* CỘT TRÁI - MAIN FORM CONTENT */}
              <div className="flex-1 space-y-3.5 min-w-0">
                
                {/* 1. THANH STEPPER TRẠNG THÁI */}
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="relative flex items-center justify-between px-6">
                    <div className="absolute left-10 right-10 top-3 h-0.5 bg-slate-200 -z-0"></div>

                    {[
                      { step: 0, label: "Vừa nhận thông tin" },
                      { step: 1, label: "Đang soạn báo giá" },
                      { step: 2, label: "Đã gửi báo giá" },
                      { step: 3, label: "Chốt thành công", isWin: true },
                      { step: 4, label: "Thất bại", isLost: true }
                    ].map((st) => {
                      const isActive = currentStep === st.step;

                      return (
                        <div 
                          key={st.step} 
                          onClick={() => setCurrentStep(st.step)}
                          className="relative z-10 flex flex-col items-center cursor-pointer group"
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition border-2 ${
                            isActive
                              ? "bg-blue-600 border-blue-600 text-white shadow-md ring-4 ring-blue-100"
                              : st.isWin
                              ? "bg-white border-emerald-500 text-emerald-500"
                              : st.isLost
                              ? "bg-white border-rose-500 text-rose-500"
                              : "bg-white border-slate-300 text-slate-400"
                          }`}>
                            {isActive ? (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            ) : st.isWin ? (
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            ) : st.isLost ? (
                              <X className="w-3.5 h-3.5 stroke-[3]" />
                            ) : (
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                            )}
                          </div>

                          <span className={`text-[11px] font-bold mt-2 transition ${
                            isActive ? "text-blue-700 font-extrabold" : "text-slate-700"
                          }`}>
                            {st.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. THÔNG TIN KHÁCH HÀNG & DỰ ÁN */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-600" />
                      <h3 className="font-extrabold text-slate-800 text-xs">
                        Thông tin khách hàng & Dự án
                      </h3>
                    </div>
                  </div>

                  {/* Dòng 1: Số điện thoại, Người liên hệ, Email */}
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[10.5px] font-bold text-slate-600 mb-1">
                        Số điện thoại <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                        <input 
                          type="text" 
                          defaultValue={leadData?.phone || "0908999888"}
                          className="w-full bg-slate-50/80 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-slate-900 font-extrabold focus:bg-white focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10.5px] font-bold text-slate-600 mb-1">Người liên hệ</label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                        <input 
                          type="text" 
                          defaultValue="Tuấn Khảo Giá"
                          className="w-full bg-slate-50/80 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 font-bold text-slate-800 focus:bg-white focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10.5px] font-bold text-slate-600 mb-1">Email nhận báo giá</label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                        <input 
                          type="text" 
                          defaultValue="tuankhaogia@saoviet-synthetic.vn"
                          className="w-full bg-slate-50/80 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 font-semibold text-slate-700 focus:bg-white focus:border-blue-500 focus:outline-none truncate"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dòng 2: Đơn vị / Công ty, Tên dự án */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10.5px] font-bold text-slate-600 mb-1">Đơn vị / Công ty</label>
                      <div className="relative">
                        <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                        <input 
                          type="text" 
                          defaultValue={leadData?.customer || "Cửa hàng LED Thương mại Sao Việt"}
                          className="w-full bg-slate-50/80 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 font-bold text-slate-800 focus:bg-white focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10.5px] font-bold text-slate-600 mb-1">Tên dự án / Công trình</label>
                      <div className="relative">
                        <Boxes className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                        <input 
                          type="text" 
                          defaultValue={leadData?.project || "Hỏi giá lẻ nhiều kích thước P2/P3/P4"}
                          className="w-full bg-slate-50/80 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 font-bold text-slate-800 focus:bg-white focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* THÔNG TIN MỞ RỘNG (GIAO DIỆN XANH NHẠT CHUẨN) */}
                  <div className="pt-1">
                    <div className="bg-[#EEF2FF]/60 p-3.5 rounded-2xl border border-blue-100/80 space-y-3">
                      <button 
                        onClick={() => setShowExtendedInfo(!showExtendedInfo)}
                        className="flex items-center gap-1.5 text-blue-700 font-extrabold text-[11px] cursor-pointer"
                      >
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showExtendedInfo ? "" : "-rotate-90"}`} />
                        <span>Thông tin mở rộng</span>
                      </button>

                      {showExtendedInfo && (
                        <div className="space-y-3 pt-1">
                          <div className="grid grid-cols-3 gap-3">
                            <div>
                              <label className="block text-[10px] font-bold text-slate-500 mb-1">Khu vực công trình</label>
                              <div className="relative">
                                <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                                <select className="w-full bg-white border border-slate-200 rounded-xl pl-8 pr-4 py-1.5 text-[11px] font-bold text-slate-800 focus:outline-none cursor-pointer">
                                  <option>TP. Hồ Chí Minh</option>
                                </select>
                              </div>
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold text-slate-500 mb-1">Quận / Huyện</label>
                              <div className="relative">
                                <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                                <select className="w-full bg-white border border-slate-200 rounded-xl pl-8 pr-4 py-1.5 text-[11px] font-bold text-slate-800 focus:outline-none cursor-pointer">
                                  <option>Quận Tân Bình</option>
                                </select>
                              </div>
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold text-slate-500 mb-1">Địa chỉ lắp đặt chi tiết</label>
                              <div className="relative">
                                <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                                <input 
                                  type="text" 
                                  placeholder="Số nhà, đường, KCN..." 
                                  className="w-full bg-white border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-[11px] focus:outline-none"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[10px] font-bold text-slate-500 mb-1">Nguồn khách khai thác</label>
                              <div className="relative">
                                <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                                <select className="w-full bg-white border border-slate-200 rounded-xl pl-8 pr-4 py-1.5 text-[11px] font-bold text-slate-800 focus:outline-none cursor-pointer">
                                  <option>Nhập tay</option>
                                </select>
                              </div>
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold text-slate-500 mb-1">Ghi chú</label>
                              <div className="relative">
                                <FileEdit className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                                <input 
                                  type="text" 
                                  placeholder="Thông tin bổ sung về khách hàng, nhu cầu..."
                                  className="w-full bg-white border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-[11px] focus:outline-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* 3. KHỐI SẢN PHẨM QUAN TÂM */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-2">
                      <Boxes className="w-4 h-4 text-blue-600" />
                      <h3 className="font-extrabold text-slate-800 text-xs">Sản phẩm quan tâm</h3>
                    </div>

                    <span className="px-2.5 py-0.5 bg-blue-100/80 text-blue-700 font-bold text-[10px] rounded-full">
                      Đã chọn {selectedProducts.length} sản phẩm
                    </span>
                  </div>

                  {/* Thanh tìm kiếm & Badge sản phẩm được chọn */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="relative flex-1 min-w-[200px]">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                      <input 
                        type="text" 
                        placeholder="Tìm sản phẩm (ví dụ: Màn hình LED, Bảng điện tử...)" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-[11px] focus:bg-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      {selectedProducts.map((p, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 font-bold rounded-lg text-[10.5px] border border-blue-100"
                        >
                          {p}
                          <button onClick={() => toggleProduct(p)} className="hover:text-blue-900 cursor-pointer">
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Danh mục sản phẩm & Checkbox */}
                  <div className="grid grid-cols-4 gap-3 pt-1">
                    <div className="space-y-1 border-r border-slate-100 pr-2">
                      <button 
                        onClick={() => setActiveCategory("led")}
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg font-bold text-[11px] flex items-center justify-between transition cursor-pointer ${
                          activeCategory === "led" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <span>Màn hình LED</span>
                        <span className="text-[9.5px] opacity-70">(8)</span>
                      </button>

                      <button 
                        onClick={() => setActiveCategory("bang-so")}
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg font-bold text-[11px] flex items-center justify-between transition cursor-pointer ${
                          activeCategory === "bang-so" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <span>Bảng điện tử & Hiển thị số</span>
                        <span className="text-[9.5px] opacity-70">(12)</span>
                      </button>

                      <button 
                        onClick={() => setActiveCategory("khac")}
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg font-bold text-[11px] flex items-center justify-between transition cursor-pointer ${
                          activeCategory === "khac" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <span>Dịch vụ / Nhu cầu khác</span>
                        <span className="text-[9.5px] opacity-70">(5)</span>
                      </button>
                    </div>

                    <div className="col-span-3 grid grid-cols-2 gap-2 pl-2">
                      {[
                        "Màn hình LED Indoor",
                        "Màn hình LED lưới",
                        "Màn hình LED Outdoor",
                        "Màn hình LED GOB",
                        "Màn hình LED Cong",
                        "Màn hình LED COB"
                      ].map((prodName, idx) => {
                        const isChecked = selectedProducts.includes(prodName);
                        return (
                          <label 
                            key={idx} 
                            className={`flex items-center gap-2 p-1.5 rounded-lg cursor-pointer transition ${
                              isChecked ? "bg-blue-50/50" : "hover:bg-slate-50"
                            }`}
                          >
                            <input 
                              type="checkbox" 
                              checked={isChecked}
                              onChange={() => toggleProduct(prodName)}
                              className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className={`text-[11px] ${isChecked ? "font-bold text-slate-900" : "font-medium text-slate-700"}`}>
                              {prodName}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>

              {/* CỘT PHẢI SIDEBAR CỦA TAB THÔNG TIN CHUNG */}
              <aside className="w-[280px] space-y-3 shrink-0">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs space-y-2.5">
                  <div className="flex items-center gap-1.5 font-extrabold text-slate-800 text-xs border-b border-slate-100 pb-2">
                    <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Tổng quan Lead</span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 flex items-center gap-1"><Calendar className="w-3 h-3" /> Ngày nhận:</span>
                      <span className="font-bold text-slate-800">07/11/2026 15:14</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 flex items-center gap-1"><Clock className="w-3 h-3" /> Lần cập nhật:</span>
                      <span className="font-bold text-slate-800">07/11/2026 15:14</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 flex items-center gap-1"><User className="w-3 h-3" /> Phụ trách:</span>
                      <span className="font-extrabold text-slate-900">Lý Kinh Doanh 2</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 flex items-center gap-1"><Tag className="w-3 h-3" /> Nguồn Lead:</span>
                      <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-md font-bold text-[10px]">Nhập tay</span>
                    </div>

                    <div className="flex justify-between items-center pt-0.5">
                      <span className="text-slate-400 flex items-center gap-1"><Star className="w-3 h-3 text-amber-500" /> Mức độ ưu tiên:</span>
                      <span className="px-2.5 py-0.5 bg-rose-100 text-rose-700 rounded-md font-extrabold text-[10px]">Cao</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs space-y-2.5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-1.5 font-extrabold text-slate-800 text-xs">
                      <Bell className="w-3.5 h-3.5 text-blue-600" />
                      <span>Nhắc việc & Lịch hẹn</span>
                    </div>
                    <button className="text-blue-600 font-bold text-[10.5px] hover:underline cursor-pointer">+ Thêm</button>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2.5 bg-rose-50/80 border border-rose-100 rounded-xl space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-rose-800 text-[11px] flex items-center gap-1">
                          <Clock className="w-3 h-3 text-rose-600" /> Liên hệ xác nhận nhu cầu
                        </span>
                        <span className="px-1.5 py-0.2 bg-rose-200 text-rose-800 font-bold text-[9px] rounded">Quá hạn</span>
                      </div>
                      <p className="text-[10px] text-rose-600 font-medium">Đã 2 giờ chưa xác nhận tiếp nhận</p>
                    </div>

                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-800 text-[11px] flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-blue-600" /> Hẹn khảo sát công trình
                        </span>
                        <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal className="w-3 h-3.5" /></button>
                      </div>
                      <p className="text-[10px] text-slate-500 font-bold">10/11/2026 09:00</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs space-y-2.5">
                  <div className="flex items-center gap-1.5 font-extrabold text-slate-800 text-xs border-b border-slate-100 pb-2">
                    <FileEdit className="w-3.5 h-3.5 text-blue-600" />
                    <span>Ghi chú nhanh</span>
                  </div>

                  <textarea 
                    placeholder="Nhập ghi chú..." 
                    rows={2}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-[11px] focus:bg-white focus:border-blue-500 focus:outline-none resize-none"
                  ></textarea>

                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[10px] font-semibold cursor-pointer border border-slate-200">
                      x Khách cần báo giá sớm
                    </span>
                    <span className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[10px] font-semibold cursor-pointer border border-slate-200">
                      x Quan tâm màn hình Outdoor
                    </span>
                  </div>
                </div>
              </aside>

            </div>
          )}

          {/* ================= TAB 2: TIẾN ĐỘ & PHỐI HỢP (ĐẦY ĐỦ 100%) ================= */}
          {activeTab === "tien-do" && (
            <div className="space-y-3">
              
              {/* 1. HÀNG 4 THẺ CHỈ SỐ BÊN TRÊN */}
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium">Nhân viên kinh doanh phụ trách</p>
                    <p className="text-xs font-extrabold text-slate-900 mt-0.5">Lý Kinh Doanh 2</p>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium">Trạng thái Lead</p>
                    <span className="inline-block px-2.5 py-0.5 bg-purple-50 text-purple-700 font-bold rounded-full text-[10px] border border-purple-100 mt-0.5">
                      Vừa nhận thông tin
                    </span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium">Ngày nhận</p>
                    <p className="text-xs font-extrabold text-slate-900 mt-0.5">07/11/2026 15:14</p>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                    <Star className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium">Mức độ ưu tiên</p>
                    <span className="inline-block px-2 py-0.5 bg-rose-100 text-rose-700 font-extrabold rounded-md text-[10px] mt-0.5">
                      Cao
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. HÀNG 2 KHỐI: TIẾN ĐỘ PIPELINE & CHUYỂN GIAO NVKD */}
              <div className="grid grid-cols-12 gap-3 items-start">
                
                {/* KHỐI TRÁI: TIẾN ĐỘ PIPELINE */}
                <div className="col-span-7 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <ActivityIcon className="w-4 h-4 text-blue-600" />
                    <h3 className="font-extrabold text-slate-800 text-xs">Tiến độ Pipeline</h3>
                  </div>

                  {/* Stepper Thanh Tiến Độ */}
                  <div className="relative flex items-center justify-between px-6 pt-1">
                    <div className="absolute left-10 right-10 top-4 h-0.5 bg-slate-200 -z-0"></div>

                    {[
                      { step: 0, label: "Vừa nhận thông tin" },
                      { step: 1, label: "Đang soạn báo giá" },
                      { step: 2, label: "Đã gửi báo giá" },
                      { step: 3, label: "Chốt thành công", isWin: true },
                      { step: 4, label: "Thất bại", isLost: true }
                    ].map((st) => {
                      const isActive = currentStep === st.step;
                      return (
                        <div 
                          key={st.step} 
                          onClick={() => setCurrentStep(st.step)}
                          className="relative z-10 flex flex-col items-center cursor-pointer"
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition border-2 ${
                            isActive
                              ? "bg-blue-600 border-blue-600 text-white shadow-md ring-4 ring-blue-100"
                              : st.isWin
                              ? "bg-white border-emerald-500 text-emerald-500"
                              : st.isLost
                              ? "bg-white border-rose-500 text-rose-500"
                              : "bg-white border-slate-300 text-slate-400"
                          }`}>
                            {isActive ? (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            ) : st.isWin ? (
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            ) : st.isLost ? (
                              <X className="w-3.5 h-3.5 stroke-[3]" />
                            ) : (
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                            )}
                          </div>
                          <span className={`text-[10.5px] font-bold mt-2 ${isActive ? "text-blue-700 font-extrabold" : "text-slate-700"}`}>
                            {st.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Form Cập nhật Pipeline */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10.5px] font-bold text-slate-600 mb-1">
                          Trạng thái cập nhật <span className="text-rose-500">*</span>
                        </label>
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 font-bold text-slate-800 focus:outline-none cursor-pointer text-[11px]">
                          <option>Vừa nhận thông tin</option>
                          <option>Đang soạn báo giá</option>
                          <option>Đã gửi báo giá</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10.5px] font-bold text-slate-600 mb-1">
                          Lý do (nếu Thất bại hoặc Mở lại Lead)
                        </label>
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-slate-400 focus:outline-none cursor-pointer text-[11px]">
                          <option>Chọn hoặc nhập lý do...</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-0.5">
                      <div className="relative flex-1">
                        <Pencil className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                        <input 
                          type="text" 
                          placeholder="Ghi chú tiến độ, nội dung trao đổi..." 
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-[11px] focus:bg-white focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                      <button className="px-4 py-1.5 bg-[#1D61E7] hover:bg-blue-700 text-white font-extrabold rounded-xl shadow-2xs transition cursor-pointer flex items-center gap-1.5 shrink-0 text-[11px]">
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Cập nhật Pipeline</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* KHỐI PHẢI: CHUYỂN GIAO NVKD */}
                <div className="col-span-5 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <ArrowRightLeft className="w-4 h-4 text-blue-600" />
                    <h3 className="font-extrabold text-slate-800 text-xs">Chuyển giao Nhân viên kinh doanh</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[10.5px] font-bold text-slate-600 mb-1">
                        Lý do chuyển <span className="text-rose-500">*</span>
                      </label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 font-bold text-slate-800 focus:outline-none cursor-pointer text-[11px]">
                        <option>Bàn giao khách hàng</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10.5px] font-bold text-slate-600 mb-1">
                        NVKD nhận <span className="text-rose-500">*</span>
                      </label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-slate-400 focus:outline-none cursor-pointer text-[11px]">
                        <option>-- Chọn nhân viên --</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                    <input 
                      type="text" 
                      placeholder="Ghi chú bàn giao..." 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-[11px] focus:bg-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <button className="w-full py-2 bg-[#1E3A8A] hover:bg-blue-900 text-white font-extrabold rounded-xl shadow-2xs transition cursor-pointer flex items-center justify-center gap-1.5 text-[11.5px]">
                    <ArrowRightLeft className="w-3.5 h-3.5" />
                    <span>Chuyển giao</span>
                  </button>
                </div>
              </div>

              {/* 3. HÀNG 2 KHỐI DƯỚI: KIỂM SOÁT RỦI RO & GHI CHÚ PHỐI HỢP */}
              <div className="grid grid-cols-12 gap-3 items-start">
                
                {/* KHỐI TRÁI: KIỂM SOÁT RỦI RO */}
                <div className="col-span-6 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <h3 className="font-extrabold text-slate-800 text-xs">Kiểm soát rủi ro</h3>
                  </div>

                  {/* Cảnh báo nghi dò giá */}
                  <div className="space-y-1.5">
                    <p className="font-bold text-slate-800 text-[11px] flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500" /> 
                      <span>Cảnh báo nghi dò giá</span>
                      <HelpCircle className="w-3 h-3 text-blue-400 cursor-pointer ml-0.5" />
                    </p>
                    <div className="flex items-center gap-2">
                      <input 
                        type="text" 
                        placeholder="Căn cứ xác định đối thủ khảo giá..." 
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-[11px] focus:outline-none focus:bg-white focus:border-blue-500"
                      />
                      <button className="px-3.5 py-1.5 bg-[#EA580C] hover:bg-orange-700 text-white font-extrabold rounded-xl shadow-2xs transition cursor-pointer shrink-0 text-[11px]">
                        Phát cảnh báo
                      </button>
                    </div>
                  </div>

                  {/* Đánh dấu Spam */}
                  <div className="space-y-1.5 pt-1">
                    <p className="font-bold text-slate-800 text-[11px] flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-500" /> 
                      <span>Đánh dấu Spam</span>
                      <HelpCircle className="w-3 h-3 text-blue-400 cursor-pointer ml-0.5" />
                    </p>
                    <div className="flex items-center gap-2">
                      <select className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 font-bold text-slate-800 focus:outline-none cursor-pointer text-[11px]">
                        <option>SĐT không tồn tại</option>
                        <option>Sai số / Nhầm máy</option>
                      </select>
                      <button className="px-3.5 py-1.5 bg-[#1E293B] hover:bg-slate-900 text-white font-extrabold rounded-xl shadow-2xs transition cursor-pointer shrink-0 text-[11px]">
                        Gắn cờ Spam
                      </button>
                    </div>
                    <p className="text-[9.5px] text-slate-400 font-medium pt-0.5">
                      SĐT sai / Nhầm máy tự loại khỏi báo cáo Ads; Đối thủ khảo giá vào diện chờ xác nhận.
                    </p>
                  </div>
                </div>

                {/* KHỐI PHẢI: GHI CHÚ PHỐI HỢP */}
                <div className="col-span-6 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    <h3 className="font-extrabold text-slate-800 text-xs">Ghi chú phối hợp</h3>
                  </div>

                  <textarea 
                    rows={3} 
                    placeholder="Nhập ghi chú phối hợp với các bộ phận (Kỹ thuật, Dự án, ...)..." 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-[11px] focus:bg-white focus:border-blue-500 focus:outline-none resize-none"
                  ></textarea>

                  <div className="flex items-center gap-1.5 flex-wrap">
                    <button className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-[10px] font-extrabold cursor-pointer border border-blue-100">
                      + Báo giá
                    </button>
                    <button className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-[10px] font-extrabold cursor-pointer border border-blue-100">
                      + Kỹ thuật
                    </button>
                    <button className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-[10px] font-extrabold cursor-pointer border border-blue-100">
                      + Dự án
                    </button>
                    <button className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-[10px] font-extrabold cursor-pointer border border-blue-100">
                      + Khác
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ================= TAB 3: TỆP ĐÍNH KÈM (ĐẦY ĐỦ 100%) ================= */}
          {activeTab === "tep-kem" && (
            <div className="space-y-3.5">
              <div className="bg-white border-2 border-dashed border-blue-200 hover:border-blue-400 rounded-2xl p-6 text-center space-y-3 transition group cursor-pointer">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-800 text-xs">Kéo thả tệp vào đây để tải lên</h3>
                  <p className="text-[10.5px] text-slate-400 mt-0.5 font-medium">Hoặc</p>
                </div>

                <div className="flex items-center justify-center gap-2 pt-0.5">
                  <button className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-xl border border-blue-100 transition cursor-pointer text-[11px]">
                    <Upload className="w-3.5 h-3.5" /> Chọn tệp
                  </button>

                  <button className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-xl border border-blue-100 transition cursor-pointer text-[11px]">
                    <FolderPlus className="w-3.5 h-3.5" /> Chọn thư mục
                  </button>
                </div>

                <p className="text-[10px] text-slate-400 font-semibold pt-1">
                  Hỗ trợ: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG, CAD, ZIP, RAR... (tối đa 100 MB/tệp)
                </p>
              </div>

              {/* THANH LỌC CHUẨN MẪU TỆP ĐÍNH KÈM */}
              <div className="flex items-end justify-between gap-3 w-full pt-1">
                <div className="relative w-64">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input 
                    type="text" 
                    value={fileSearch}
                    onChange={(e) => setFileSearch(e.target.value)}
                    placeholder="Tìm tên tệp..." 
                    className="w-full bg-white border border-slate-200/90 rounded-2xl pl-9 pr-3 py-1.5 text-[11px] text-slate-700 placeholder-slate-400 focus:border-blue-500 focus:outline-none shadow-2xs"
                  />
                </div>

                <div className="flex items-end gap-3">
                  <div className="flex flex-col gap-1 w-36">
                    <label className="text-[10.5px] font-bold text-slate-600">Loại tệp</label>
                    <div className="relative">
                      <select 
                        value={fileTypeFilter}
                        onChange={(e) => setFileTypeFilter(e.target.value)}
                        className="w-full bg-white border border-slate-200/90 rounded-2xl px-3 py-1.5 text-[11px] font-bold text-slate-900 appearance-none focus:border-blue-500 focus:outline-none cursor-pointer pr-8 shadow-2xs"
                      >
                        <option value="ALL">Tất cả</option>
                        <option value="PDF">PDF</option>
                        <option value="XLSX">Excel</option>
                        <option value="JPG">Hình ảnh</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-700 stroke-[2.5] absolute right-2.5 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 w-44">
                    <label className="text-[10.5px] font-bold text-slate-600">Người tải</label>
                    <div className="relative">
                      <select 
                        value={fileUploaderFilter}
                        onChange={(e) => setFileUploaderFilter(e.target.value)}
                        className="w-full bg-white border border-slate-200/90 rounded-2xl px-3 py-1.5 text-[11px] font-bold text-slate-900 appearance-none focus:border-blue-500 focus:outline-none cursor-pointer pr-8 shadow-2xs"
                      >
                        <option value="ALL">Tất cả</option>
                        <option value="Nguyễn Quản Trị">Nguyễn Quản Trị</option>
                        <option value="Lý Kinh Doanh 2">Lý Kinh Doanh 2</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-700 stroke-[2.5] absolute right-2.5 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 w-44">
                    <label className="text-[10.5px] font-bold text-slate-600">Thời gian</label>
                    <div className="relative">
                      <Calendar className="w-3.5 h-3.5 text-slate-700 absolute left-2.5 top-2.5 pointer-events-none" />
                      <select 
                        value={fileDateFilter}
                        onChange={(e) => setFileDateFilter(e.target.value)}
                        className="w-full bg-white border border-slate-200/90 rounded-2xl pl-8 pr-8 py-1.5 text-[11px] font-bold text-slate-900 appearance-none focus:border-blue-500 focus:outline-none cursor-pointer shadow-2xs"
                      >
                        <option value="ALL">Tất cả</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-700 stroke-[2.5] absolute right-2.5 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <button className="flex items-center gap-1.5 bg-white border border-slate-200/90 hover:bg-slate-50 rounded-2xl px-3 py-1.5 text-[11px] font-bold text-blue-700 shadow-2xs transition cursor-pointer">
                      <ListFilter className="w-3.5 h-3.5 text-blue-600" />
                      <span>Sắp xếp: <strong className="text-blue-700">Mới nhất</strong></span>
                      <ChevronDown className="w-3.5 h-3.5 text-blue-600 stroke-[2.5] ml-0.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* BẢNG DANH SÁCH TỆP ĐÍNH KÈM */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden space-y-2 p-3">
                <div className="flex items-center justify-between pb-1">
                  <div className="flex items-center gap-1.5 font-extrabold text-slate-800 text-xs">
                    <Paperclip className="w-4 h-4 text-blue-600" />
                    <span>Danh sách tệp đính kèm ({attachments.length})</span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#F8FAFC] border-b border-slate-200/80 text-[10.5px] text-slate-500 font-extrabold">
                        <th className="p-2.5 w-8 text-center"><input type="checkbox" className="rounded border-slate-300" /></th>
                        <th className="p-2.5">Tên tệp</th>
                        <th className="p-2.5">Loại tệp</th>
                        <th className="p-2.5">Dung lượng</th>
                        <th className="p-2.5">Người tải</th>
                        <th className="p-2.5">Thời gian tải</th>
                        <th className="p-2.5 text-center">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-[11px] font-medium">
                      {attachments.map((file) => (
                        <tr key={file.id} className="hover:bg-slate-50 transition">
                          <td className="p-2.5 text-center"><input type="checkbox" className="rounded border-slate-300" /></td>

                          <td className="p-2.5">
                            <div className="flex items-center gap-2">
                              {file.iconType === "pdf" ? (
                                <div className="w-6 h-6 rounded bg-rose-50 text-rose-600 font-extrabold flex items-center justify-center text-[9px] shrink-0">PDF</div>
                              ) : file.iconType === "excel" ? (
                                <div className="w-6 h-6 rounded bg-emerald-50 text-emerald-600 font-extrabold flex items-center justify-center text-[9px] shrink-0">XLS</div>
                              ) : (
                                <div className="w-6 h-6 rounded bg-blue-50 text-blue-600 font-extrabold flex items-center justify-center text-[9px] shrink-0">JPG</div>
                              )}
                              <span className="font-bold text-slate-800 hover:text-blue-600 cursor-pointer">{file.name}</span>
                            </div>
                          </td>

                          <td className="p-2.5">
                            <span className={`px-2 py-0.5 rounded font-extrabold text-[9.5px] ${file.typeColor}`}>
                              {file.type}
                            </span>
                          </td>

                          <td className="p-2.5 text-slate-600 font-bold">{file.size}</td>

                          <td className="p-2.5 text-slate-800 font-semibold">{file.uploader}</td>

                          <td className="p-2.5 text-slate-500">{file.uploadTime}</td>

                          <td className="p-2.5 text-center">
                            <div className="flex items-center justify-center gap-1.5 text-slate-500">
                              <button className="p-1 hover:text-blue-600 hover:bg-slate-100 rounded transition cursor-pointer" title="Tải xuống">
                                <Download className="w-3.5 h-3.5" />
                              </button>
                              <button className="p-1 hover:text-blue-600 hover:bg-slate-100 rounded transition cursor-pointer" title="Xem trước">
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button className="p-1 hover:text-rose-600 hover:bg-slate-100 rounded transition cursor-pointer" title="Xóa tệp">
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                  <span className="text-[10px] font-bold text-slate-500 shrink-0">Đã sử dụng 4.4 MB / 500 MB</span>
                  <div className="flex-1 max-w-xs h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: "1%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 4: LỊCH SỬ (Y CHANG 100% THEO MẪU MỚI) ================= */}
          {activeTab === "lich-su" && (
            <div className="space-y-3.5">
              
              {/* Header Tiêu đề & Đếm sự kiện */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <History className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-sm">Lịch sử hoạt động</h3>
                </div>

                <span className="text-[11px] font-bold text-slate-500">
                  {historyEvents.length} sự kiện · Mới nhất ở trên
                </span>
              </div>

              {/* Thanh Filter Lịch sử chuẩn y chang thiết kế */}
              <div className="flex items-end justify-between gap-3 w-full">
                {/* Ô Tìm kiếm trong lịch sử... */}
                <div className="relative flex-1 max-w-xs">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input 
                    type="text" 
                    value={historySearch}
                    onChange={(e) => setHistorySearch(e.target.value)}
                    placeholder="Tìm kiếm trong lịch sử..." 
                    className="w-full bg-white border border-slate-200/90 rounded-2xl pl-9 pr-3 py-1.5 text-[11px] text-slate-700 placeholder-slate-400 focus:border-blue-500 focus:outline-none shadow-2xs"
                  />
                </div>

                {/* Cụm 3 ô Filter Select & Nút Đặt lại */}
                <div className="flex items-end gap-2.5">
                  {/* Select 1: Loại hoạt động */}
                  <div className="flex flex-col gap-1 w-36">
                    <label className="text-[10.5px] font-bold text-slate-500">Loại hoạt động</label>
                    <div className="relative">
                      <select 
                        value={historyTypeFilter}
                        onChange={(e) => setHistoryTypeFilter(e.target.value)}
                        className="w-full bg-white border border-slate-200/90 rounded-2xl px-3 py-1.5 text-[11px] font-bold text-slate-900 appearance-none focus:border-blue-500 focus:outline-none cursor-pointer pr-8 shadow-2xs"
                      >
                        <option value="ALL">Tất cả</option>
                        <option value="Cập nhật trạng thái">Cập nhật trạng thái</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-700 stroke-[2.5] absolute right-2.5 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Select 2: Người thực hiện */}
                  <div className="flex flex-col gap-1 w-40">
                    <label className="text-[10.5px] font-bold text-slate-500">Người thực hiện</label>
                    <div className="relative">
                      <select 
                        value={historyUserFilter}
                        onChange={(e) => setHistoryUserFilter(e.target.value)}
                        className="w-full bg-white border border-slate-200/90 rounded-2xl px-3 py-1.5 text-[11px] font-bold text-slate-900 appearance-none focus:border-blue-500 focus:outline-none cursor-pointer pr-8 shadow-2xs"
                      >
                        <option value="ALL">Tất cả</option>
                        <option value="Nguyễn Quản Trị">Nguyễn Quản Trị</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-700 stroke-[2.5] absolute right-2.5 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Select 3: Khoảng thời gian */}
                  <div className="flex flex-col gap-1 w-40">
                    <label className="text-[10.5px] font-bold text-slate-500">Khoảng thời gian</label>
                    <div className="relative">
                      <Calendar className="w-3.5 h-3.5 text-slate-700 absolute left-2.5 top-2.5 pointer-events-none" />
                      <select 
                        value={historyTimeFilter}
                        onChange={(e) => setHistoryTimeFilter(e.target.value)}
                        className="w-full bg-white border border-slate-200/90 rounded-2xl pl-8 pr-8 py-1.5 text-[11px] font-bold text-slate-900 appearance-none focus:border-blue-500 focus:outline-none cursor-pointer shadow-2xs"
                      >
                        <option value="ALL">Tất cả</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-700 stroke-[2.5] absolute right-2.5 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Nút Đặt lại */}
                  <div className="flex flex-col gap-1">
                    <button 
                      onClick={() => {
                        setHistorySearch("");
                        setHistoryTypeFilter("ALL");
                        setHistoryUserFilter("ALL");
                        setHistoryTimeFilter("ALL");
                      }}
                      className="flex items-center gap-1.5 bg-white border border-slate-200/90 hover:bg-slate-50 text-blue-700 font-bold rounded-2xl px-3.5 py-1.5 text-[11px] shadow-2xs transition cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-blue-600" />
                      <span>Đặt lại</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Danh sách các Thẻ sự kiện timeline dạng Card bo tròn */}
              <div className="space-y-3 pt-1">
                {historyEvents.map((ev) => {
                  const IconComp = ev.icon;
                  return (
                    <div 
                      key={ev.id}
                      className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-2xs flex items-start justify-between gap-4 transition hover:border-slate-300"
                    >
                      <div className="flex items-start gap-3">
                        {/* Icon tròn bên trái */}
                        <div className={`w-8 h-8 rounded-full ${ev.iconBg} text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5`}>
                          <IconComp className="w-4 h-4" />
                        </div>

                        {/* Nội dung chi tiết sự kiện */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-1.5 text-xs">
                            <span className="font-extrabold text-slate-900">{ev.action}</span>
                            <span className="text-slate-300 font-bold">·</span>
                            <span className="font-bold text-slate-500">{ev.actor}</span>
                          </div>

                          {/* Badge chuyển trạng thái từ -> sang */}
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-[10.5px] font-bold ${ev.fromBg}`}>
                              {ev.fromStatus}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                            <span className={`px-3 py-1 rounded-full text-[10.5px] font-bold ${ev.toBg}`}>
                              {ev.toStatus}
                            </span>
                          </div>

                          <p className="text-[11px] font-medium text-slate-600">
                            {ev.description}
                          </p>
                        </div>
                      </div>

                      {/* Ngày giờ ở góc phải */}
                      <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-bold shrink-0 pt-0.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{ev.time}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

        </div>

        {/* ================= FOOTER ACTION BAR ================= */}
        <div className="p-3 border-t border-slate-200/80 bg-white flex items-center justify-end gap-2 shrink-0">
          <button 
            onClick={onClose}
            className="px-5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition cursor-pointer"
          >
            Hủy
          </button>
          <button 
            onClick={onClose}
            className="px-6 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl text-xs shadow-xs transition cursor-pointer flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            Lưu thay đổi
          </button>
        </div>

      </div>
    </div>
  );
}

// ============================================================================
// 2. COMPONENT TRANG DASHBOARD CHÍNH (MAIN DASHBOARD PAGE)
// ============================================================================
export default function LeadManagementPage() {
  const [activeTab, setActiveTab] = useState<"danh-sach" | "kanban" | "nhac-viec" | "bao-gia">("danh-sach");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<any>(null);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [sourceFilter, setSourceFilter] = useState("ALL");
  const [productFilter, setProductFilter] = useState("ALL");
  const [assigneeFilter, setAssigneeFilter] = useState("ALL");

  const [leads] = useState([
    {
      id: "TT-20261107-0021",
      customer: "Cửa hàng LED Thương mại Sao Mai",
      project: "Dự án: Màn hình LED nhà hàng tiệc cưới",
      phone: "0908999888",
      source: "Hotline",
      product: "Màn hình LED",
      status: "Vừa nhận thông tin",
      statusColor: "bg-purple-100 text-purple-700",
      assignee: "LK",
      assigneeName: "Lý Kinh Doanh",
      createdDate: "07/11/2026",
      createdTime: "15:14"
    },
    {
      id: "TT-20261107-0020",
      customer: "Bệnh viện Đa khoa Quốc tế Minh Tâm",
      project: "Dự án: Màn hình LED Sảnh khám",
      phone: "0908100204",
      source: "Google Ads",
      product: "Màn hình LED Indoor",
      status: "Đang soạn báo giá",
      statusColor: "bg-amber-100 text-amber-800",
      assignee: "TK",
      assigneeName: "Trần Kinh Doanh",
      createdDate: "07/11/2026",
      createdTime: "14:32"
    },
    {
      id: "TT-20261106-0019",
      customer: "Tập đoàn Bất động sản Nam Sơn",
      project: "Dự án: Màn hình LED Outdoor",
      phone: "0908100203",
      source: "Website",
      product: "Màn hình LED Outdoor",
      status: "Đã gửi báo giá",
      statusColor: "bg-blue-100 text-blue-700",
      assignee: "LK",
      assigneeName: "Lý Kinh Doanh",
      createdDate: "06/11/2026",
      createdTime: "10:20"
    },
    {
      id: "TT-20261106-0018",
      customer: "Công ty TNHH Xây dựng An Phát",
      project: "Dự án: LED cổng trường",
      phone: "0912345678",
      source: "Zalo",
      product: "Màn hình LED",
      status: "Chốt thành công",
      statusColor: "bg-emerald-100 text-emerald-700",
      assignee: "ND",
      assigneeName: "Nguyễn Duy",
      createdDate: "06/11/2026",
      createdTime: "09:05"
    },
    {
      id: "TT-20261105-0017",
      customer: "Trường Đại học Công nghệ TP.HCM",
      project: "Dự án: Màn hình LED hội trường",
      phone: "0987654321",
      source: "Website",
      product: "Màn hình LED Indoor",
      status: "Thất bại",
      statusColor: "bg-rose-100 text-rose-700",
      assignee: "LK",
      assigneeName: "Lý Kinh Doanh",
      createdDate: "05/11/2026",
      createdTime: "16:40"
    }
  ]);

  const handleOpenLeadDetail = (lead: any) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  return (
    <div className="flex h-screen bg-[#F4F6FB] text-slate-700 font-sans text-xs overflow-hidden select-none">
      
      {/* ================= SIDEBAR LEFT ================= */}
      <aside className="w-[220px] bg-white border-r border-slate-200/80 flex flex-col justify-between shrink-0 h-full overflow-y-auto">
        <div>
          <div className="p-3.5 border-b border-slate-100 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-md">
              TT
            </div>
            <div>
              <h1 className="font-extrabold text-slate-900 text-xs leading-tight">Toàn Trung CRM</h1>
              <p className="text-[9.5px] text-slate-400 font-medium mt-0.5">Enterprise LED & Marketing</p>
            </div>
          </div>

          <div className="p-2.5 space-y-4">
            <div>
              <p className="px-2.5 py-1 text-[9.5px] font-extrabold text-slate-400 uppercase tracking-wider">
                ĐIỀU HÀNH & KINH DOANH
              </p>
              <nav className="space-y-1 mt-1">
                <a href="#" className="flex items-center gap-2.5 px-2.5 py-2 text-slate-700 hover:bg-slate-50 rounded-xl font-bold text-[11.5px] transition">
                  <LayoutGrid className="w-4 h-4 text-slate-500" /> 
                  <span>Tổng quan điều hành</span>
                </a>

                <a href="#" className="flex items-center justify-between px-2.5 py-2 bg-blue-50/90 text-blue-700 rounded-xl font-extrabold text-[11.5px] transition shadow-2xs">
                  <span className="flex items-center gap-2.5">
                    <Contact2 className="w-4 h-4 text-blue-600" /> 
                    <span>Quản lý Lead & KH</span>
                  </span>
                  <div className="w-1 h-3.5 bg-blue-600 rounded-full -mr-2.5"></div>
                </a>

                <a href="#" className="flex items-center gap-2.5 px-2.5 py-2 text-slate-700 hover:bg-slate-50 rounded-xl font-bold text-[11.5px] transition">
                  <FileText className="w-4 h-4 text-slate-500" /> 
                  <span>Pipeline & Giao dịch</span>
                </a>

                <a href="#" className="flex items-center gap-2.5 px-2.5 py-2 text-slate-700 hover:bg-slate-50 rounded-xl font-bold text-[11.5px] transition">
                  <Clock3 className="w-4 h-4 text-slate-500" /> 
                  <span>Chăm sóc khách hàng</span>
                </a>

                <a href="#" className="flex items-center gap-2.5 px-2.5 py-2 text-slate-700 hover:bg-slate-50 rounded-xl font-bold text-[11.5px] transition">
                  <Gift className="w-4 h-4 text-slate-500" /> 
                  <span>Chiến dịch Marketing</span>
                </a>

                <a href="#" className="flex items-center gap-2.5 px-2.5 py-2 text-slate-700 hover:bg-slate-50 rounded-xl font-bold text-[11.5px] transition">
                  <Megaphone className="w-4 h-4 text-purple-600" /> 
                  <span>Từ khóa & SEO</span>
                </a>

                <a href="#" className="flex items-center gap-2.5 px-2.5 py-2 text-slate-700 hover:bg-slate-50 rounded-xl font-bold text-[11.5px] transition">
                  <BarChart3 className="w-4 h-4 text-emerald-600" /> 
                  <span>Phân tích & Báo cáo</span>
                </a>
              </nav>
            </div>

            <div className="pt-1 border-t border-slate-100">
              <p className="px-2.5 py-1 text-[9.5px] font-extrabold text-slate-400 uppercase tracking-wider">
                CÁ NHÂN
              </p>
              <nav className="space-y-1 mt-1">
                <a href="#" className="flex items-center justify-between px-2.5 py-2 text-slate-700 hover:bg-slate-50 rounded-xl font-bold text-[11.5px] transition">
                  <span className="flex items-center gap-2.5">
                    <Bell className="w-4 h-4 text-slate-500" /> 
                    <span>Thông báo</span>
                  </span>
                  <span className="w-4 h-4 rounded-full bg-blue-600 text-white font-bold text-[9px] flex items-center justify-center">
                    4
                  </span>
                </a>

                <a href="#" className="flex items-center gap-2.5 px-2.5 py-2 text-slate-700 hover:bg-slate-50 rounded-xl font-bold text-[11.5px] transition">
                  <UserCircle2 className="w-4 h-4 text-slate-500" /> 
                  <span>Hồ sơ cá nhân</span>
                </a>
              </nav>
            </div>

            <div className="pt-1 border-t border-slate-100">
              <p className="px-2.5 py-1 text-[9.5px] font-extrabold text-slate-400 uppercase tracking-wider">
                QUẢN TRỊ HỆ THỐNG
              </p>
              <nav className="space-y-1 mt-1">
                <a href="#" className="flex items-center gap-2.5 px-2.5 py-2 text-slate-700 hover:bg-slate-50 rounded-xl font-bold text-[11.5px] transition truncate">
                  <Users2 className="w-4 h-4 text-slate-500 shrink-0" /> 
                  <span className="truncate">Quản lý Phòng ban & Nh...</span>
                </a>

                <a href="#" className="flex items-center gap-2.5 px-2.5 py-2 text-slate-700 hover:bg-slate-50 rounded-xl font-bold text-[11.5px] transition">
                  <Settings className="w-4 h-4 text-slate-500" /> 
                  <span>Cài đặt hệ thống</span>
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="p-3 border-t border-slate-100 bg-white">
          <button className="flex items-center gap-2 text-slate-500 hover:text-slate-800 text-[11px] font-extrabold transition cursor-pointer">
            <ChevronsLeft className="w-4 h-4" /> 
            <span>Thu gọn menu</span>
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT AREA ================= */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        
        {/* Topbar Header */}
        <header className="h-11 bg-white border-b border-slate-200/80 px-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-slate-500 font-medium text-xs">
            <span>Toàn Trung</span>
            <span>/</span>
            <span className="text-slate-800 font-bold">Quản lý Lead & Khách hàng</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-60">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
              <input 
                type="text" 
                placeholder="Tìm nhanh Lead, SĐT, dự án, công ty..." 
                className="w-full bg-slate-100/80 border border-transparent rounded-lg pl-8 pr-3 py-1 text-[11px] focus:bg-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            <button className="relative p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
            </button>

            <div className="flex items-center gap-2 border-l border-slate-200 pl-3">
              <div className="w-6 h-6 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center text-[9px]">
                NT
              </div>
              <span className="font-bold text-slate-800 text-xs">Nguyễn Quản Trị</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>
        </header>

        {/* Dashboard Body Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 min-w-0">
          
          {/* HÀNG 1: TIÊU ĐỀ + CỤM NÚT */}
          <div className="flex items-center justify-between gap-4 w-full">
            <div>
              <h2 className="text-lg font-bold text-slate-900 leading-tight">Quản lý Lead & Khách hàng</h2>
              <p className="text-slate-400 text-[10.5px] mt-0.5">Theo dõi, khai thác và quản lý toàn bộ hồ sơ Lead từ các kênh</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl shadow-2xs transition text-[11.5px] cursor-pointer">
                <Upload className="w-3.5 h-3.5 text-slate-500" /> Nhập từ file
              </button>
              <button className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl shadow-2xs transition text-[11.5px] cursor-pointer">
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" /> Xuất Excel
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1D61E7] hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs transition text-[11.5px] cursor-pointer">
                <Plus className="w-3.5 h-3.5" /> Tạo Lead mới <ChevronDown className="w-3 h-3 opacity-80 ml-0.5" />
              </button>
            </div>
          </div>

          {/* HÀNG 2: BẮT ĐẦU CHIA 2 CỘT */}
          <div className="flex gap-4 min-w-0 items-start">
            
            {/* CỘT TRÁI */}
            <div className="flex-1 space-y-3.5 min-w-0">
              
              {/* 6 Thẻ Metric Chỉ Số */}
              <div className="grid grid-cols-6 gap-2">
                <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-medium text-slate-400">Tổng Lead</p>
                    <p className="text-base font-extrabold text-slate-900 mt-0.5">128</p>
                    <span className="inline-flex items-center text-[8.5px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded mt-0.5">
                      ▲ +12% <span className="text-slate-400 font-normal ml-0.5">vs 30 ngày</span>
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Contact2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-medium text-slate-400">Chờ tiếp nhận</p>
                    <p className="text-base font-extrabold text-slate-900 mt-0.5">12</p>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-medium text-slate-400">Đang soạn báo giá</p>
                    <p className="text-base font-extrabold text-slate-900 mt-0.5">26</p>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <FileText className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-medium text-slate-400">Đã gửi báo giá</p>
                    <p className="text-base font-extrabold text-slate-900 mt-0.5">34</p>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-medium text-slate-400">Chốt thành công</p>
                    <p className="text-base font-extrabold text-slate-900 mt-0.5">24</p>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-medium text-slate-400">Thất bại</p>
                    <p className="text-base font-extrabold text-slate-900 mt-0.5">5</p>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                    <XCircle className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* TAB CHUYỂN DẠNG XEM */}
              <div className="flex items-center gap-1 border-b border-slate-200 pb-1.5">
                <button 
                  onClick={() => setActiveTab("danh-sach")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-bold text-[11px] transition cursor-pointer ${
                    activeTab === "danh-sach" ? "bg-blue-600 text-white shadow-sm" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <List className="w-3.5 h-3.5" /> Danh sách Lead
                </button>

                <button 
                  onClick={() => setActiveTab("kanban")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-bold text-[11px] transition cursor-pointer ${
                    activeTab === "kanban" ? "bg-blue-600 text-white shadow-sm" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" /> Pipeline (Kanban)
                </button>

                <button 
                  onClick={() => setActiveTab("nhac-viec")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-bold text-[11px] relative transition cursor-pointer ${
                    activeTab === "nhac-viec" ? "bg-blue-600 text-white shadow-sm" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <Bell className="w-3.5 h-3.5" /> Nhắc việc tự động
                  <span className="bg-rose-500 text-white text-[8.5px] px-1.5 py-0.2 rounded-full font-bold ml-0.5">12</span>
                </button>

                <button 
                  onClick={() => setActiveTab("bao-gia")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-bold text-[11px] transition cursor-pointer ${
                    activeTab === "bao-gia" ? "bg-blue-600 text-white shadow-sm" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <BarChart3 className="w-3.5 h-3.5" /> Báo giá & Theo dõi
                </button>
              </div>

              {/* BỘ LỌC NÂNG CAO */}
              <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2.5 w-full">
                <div className="flex items-center justify-between gap-3">
                  <div className="relative flex-1">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                    <input 
                      type="text" 
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      placeholder="Tìm kiếm theo tên khách hàng, SĐT, dự án, mã Lead..." 
                      className="w-full bg-[#F7F8FC] border border-slate-200/70 rounded-xl pl-9 pr-4 py-1.5 text-[11px] text-slate-700 placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:outline-none transition"
                    />
                  </div>

                  <button className="flex items-center gap-1.5 text-[#1D61E7] font-bold text-[11px] hover:opacity-80 shrink-0 cursor-pointer">
                    <Filter className="w-3.5 h-3.5" /> Bộ lọc nâng cao
                  </button>
                </div>

                <div className="flex items-end gap-1.5 w-full pt-0.5">
                  <div className="flex-1 min-w-[105px]">
                    <label className="block text-[10px] font-bold text-slate-400 mb-1">Trạng thái</label>
                    <div className="relative">
                      <select 
                        value={statusFilter} 
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="w-full bg-[#F7F8FC] border border-slate-200/70 rounded-xl pl-2 pr-5 py-1.5 text-[10px] font-semibold text-slate-700 appearance-none focus:outline-none cursor-pointer whitespace-nowrap"
                      >
                        <option value="ALL">Tất cả trạng thái</option>
                        <option value="NEW">Vừa nhận thông tin</option>
                        <option value="DRAFT">Đang soạn báo giá</option>
                      </select>
                      <ChevronDown className="w-3 h-3 text-slate-500 absolute right-1.5 top-2 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-[95px]">
                    <label className="block text-[10px] font-bold text-slate-400 mb-1">Nguồn Lead</label>
                    <div className="relative">
                      <select 
                        value={sourceFilter} 
                        onChange={(e) => setSourceFilter(e.target.value)}
                        className="w-full bg-[#F7F8FC] border border-slate-200/70 rounded-xl pl-2 pr-5 py-1.5 text-[10px] font-semibold text-slate-700 appearance-none focus:outline-none cursor-pointer whitespace-nowrap"
                      >
                        <option value="ALL">Tất cả nguồn</option>
                        <option value="Hotline">Hotline</option>
                        <option value="Google Ads">Google Ads</option>
                      </select>
                      <ChevronDown className="w-3 h-3 text-slate-500 absolute right-1.5 top-2 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-[100px]">
                    <label className="block text-[10px] font-bold text-slate-400 mb-1">Sản phẩm</label>
                    <div className="relative">
                      <select 
                        value={productFilter} 
                        onChange={(e) => setProductFilter(e.target.value)}
                        className="w-full bg-[#F7F8FC] border border-slate-200/70 rounded-xl pl-2 pr-5 py-1.5 text-[10px] font-semibold text-slate-700 appearance-none focus:outline-none cursor-pointer whitespace-nowrap"
                      >
                        <option value="ALL">Tất cả sản phẩm</option>
                        <option value="Màn hình LED">Màn hình LED</option>
                      </select>
                      <ChevronDown className="w-3 h-3 text-slate-500 absolute right-1.5 top-2 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-[105px]">
                    <label className="block text-[10px] font-bold text-slate-400 mb-1">Người phụ trách</label>
                    <div className="relative">
                      <select 
                        value={assigneeFilter} 
                        onChange={(e) => setAssigneeFilter(e.target.value)}
                        className="w-full bg-[#F7F8FC] border border-slate-200/70 rounded-xl pl-2 pr-5 py-1.5 text-[10px] font-semibold text-slate-700 appearance-none focus:outline-none cursor-pointer whitespace-nowrap"
                      >
                        <option value="ALL">Tất cả nhân viên</option>
                        <option value="LK">Lý Kinh Doanh</option>
                      </select>
                      <ChevronDown className="w-3 h-3 text-slate-500 absolute right-1.5 top-2 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex-[1.6] min-w-[210px]">
                    <label className="block text-[10px] font-bold text-slate-400 mb-1">Ngày tạo</label>
                    <div className="flex items-center gap-1">
                      <div className="relative flex-1 min-w-0">
                        <Calendar className="w-3 h-3 text-slate-500 absolute left-2 top-2 pointer-events-none" />
                        <input 
                          type="text" 
                          defaultValue="01/11/2026 - 07/11/2026"
                          className="w-full bg-white border border-slate-200/90 rounded-xl pl-6 pr-5 py-1 text-[10px] font-bold text-slate-800 focus:outline-none shadow-2xs whitespace-nowrap"
                        />
                        <ChevronDown className="w-3 h-3 text-slate-500 absolute right-1.5 top-2 pointer-events-none" />
                      </div>

                      <button className="px-3 py-1.5 bg-[#1D61E7] hover:bg-blue-700 text-white font-extrabold rounded-xl text-[10.5px] shadow-xs transition shrink-0 cursor-pointer">
                        Lọc
                      </button>

                      <button className="p-1.5 bg-white border border-slate-200/90 hover:bg-slate-50 text-slate-600 rounded-xl shadow-2xs transition shrink-0 cursor-pointer">
                        <RefreshCw className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* BẢNG DỮ LIỆU LEAD */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
                <div className="p-3 border-b border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-xs">Danh sách Lead (128)</span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-[11px]">Sắp xếp:</span>
                    <select className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-[11px] text-slate-700 font-medium">
                      <option>Ngày nhận mới nhất</option>
                    </select>
                    <div className="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50 gap-0.5">
                      <button className="p-1 bg-blue-100 shadow-xs rounded-md text-blue-700"><List className="w-3.5 h-3.5" /></button>
                      <button className="p-1 text-slate-400 hover:text-slate-600"><Grid className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[950px]">
                    <thead>
                      <tr className="bg-[#F8FAFC] border-b border-slate-200/80 text-[10.5px] text-slate-800 font-extrabold">
                        <th className="p-3 w-8 text-center"><input type="checkbox" className="rounded border-slate-300" /></th>
                        <th className="p-3 whitespace-nowrap">Mã Lead</th>
                        <th className="p-3 whitespace-nowrap">Khách hàng / Dự án</th>
                        <th className="p-3 whitespace-nowrap">Liên hệ & Nguồn</th>
                        <th className="p-3 whitespace-nowrap">Sản phẩm</th>
                        <th className="p-3 whitespace-nowrap">Trạng thái</th>
                        <th className="p-3 whitespace-nowrap">Phụ trách</th>
                        <th className="p-3 whitespace-nowrap font-extrabold text-slate-900">Ngày nhận</th>
                        <th className="p-3 text-center whitespace-nowrap">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-[11.5px] font-medium">
                      {leads.map((item) => (
                        <tr 
                          key={item.id} 
                          onClick={() => handleOpenLeadDetail(item)}
                          className="hover:bg-slate-50/80 transition cursor-pointer"
                        >
                          <td className="p-3 text-center" onClick={(e) => e.stopPropagation()}>
                            <input type="checkbox" className="rounded border-slate-300" />
                          </td>

                          <td className="p-3">
                            <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 rounded-md font-bold text-[10.5px] border border-blue-100">
                              {item.id}
                            </span>
                          </td>

                          <td className="p-3 max-w-[210px]">
                            <p className="font-bold text-slate-900 truncate">{item.customer}</p>
                            <p className="text-[10px] text-slate-400 truncate mt-0.5">{item.project}</p>
                          </td>

                          <td className="p-3">
                            <p className="font-bold text-slate-800 flex items-center gap-1 text-[11px]">
                              <Phone className="w-3 h-3 text-slate-400" /> {item.phone}
                            </p>
                            <span className="inline-block px-2 py-0.2 rounded bg-blue-50 text-blue-600 text-[9.5px] font-bold mt-0.5">
                              {item.source}
                            </span>
                          </td>

                          <td className="p-3">
                            <span className="inline-block px-2 py-0.5 bg-slate-100/80 text-blue-900 rounded-md text-[10.5px] font-semibold">
                              {item.product}
                            </span>
                          </td>

                          <td className="p-3 whitespace-nowrap">
                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap ${item.statusColor}`}>
                              {item.status}
                            </span>
                          </td>

                          <td className="p-3 whitespace-nowrap">
                            <div className="flex items-center gap-1.5">
                              <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-[8.5px]">
                                {item.assignee}
                              </div>
                              <span className="text-slate-800 font-semibold text-[11px]">{item.assigneeName}</span>
                            </div>
                          </td>

                          <td className="p-3 text-[11px] whitespace-nowrap">
                            <p className="font-extrabold text-slate-800 tracking-normal">{item.createdDate}</p>
                            <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{item.createdTime}</p>
                          </td>

                          <td className="p-3 text-center" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-center gap-1 text-slate-600">
                              <button className="p-1.5 bg-slate-50 hover:bg-slate-100 rounded-lg text-emerald-600 border border-slate-100 transition cursor-pointer">
                                <Phone className="w-3.5 h-3.5" />
                              </button>
                              <button 
                                onClick={() => handleOpenLeadDetail(item)}
                                className="p-1.5 bg-slate-50 hover:bg-slate-100 rounded-lg text-blue-600 border border-slate-100 transition cursor-pointer"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button className="p-1.5 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-500 border border-slate-100 transition cursor-pointer">
                                <MoreHorizontal className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination Footer */}
                <div className="p-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <span>Hiển thị</span>
                    <select className="bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 font-bold text-slate-700">
                      <option>10 / trang</option>
                    </select>
                    <span>Đang hiển thị 1 - 10 trên 128 Lead</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button className="p-1 border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-40" disabled>
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button className="w-5 h-5 bg-blue-600 text-white rounded font-bold text-[11px] flex items-center justify-center">1</button>
                    <button className="w-5 h-5 hover:bg-slate-100 text-slate-600 rounded font-bold text-[11px] flex items-center justify-center">2</button>
                    <button className="w-5 h-5 hover:bg-slate-100 text-slate-600 rounded font-bold text-[11px] flex items-center justify-center">3</button>
                    <span>...</span>
                    <button className="w-5 h-5 hover:bg-slate-100 text-slate-600 rounded font-bold text-[11px] flex items-center justify-center">13</button>
                    <button className="p-1 border border-slate-200 rounded hover:bg-slate-50">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* ================= CỘT PHẢI BẢNG DASHBOARD ================= */}
            <aside className="w-[260px] space-y-3 shrink-0">
              
              {/* Thẻ Nhắc việc tự động */}
              <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2.5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800 text-xs">
                    <Bell className="w-3.5 h-3.5 text-blue-600" />
                    <span>Nhắc việc tự động</span>
                  </div>
                  <span className="bg-rose-500 text-white font-bold text-[9.5px] px-1.5 py-0.2 rounded-full">12</span>
                </div>

                <div className="space-y-1.5">
                  <div className="p-2 rounded-xl bg-rose-50/80 border border-rose-100 flex items-center justify-between cursor-pointer hover:bg-rose-100/80 transition">
                    <div>
                      <p className="font-bold text-rose-700 text-[11px]">Chưa tiếp nhận</p>
                      <p className="text-[9.5px] text-rose-500">Lead mới quá 2 giờ chưa xác nhận</p>
                    </div>
                    <span className="font-extrabold text-rose-600 text-xs bg-white px-2 py-0.5 rounded-lg border border-rose-200">3</span>
                  </div>

                  <div className="p-2 rounded-xl bg-amber-50/80 border border-amber-100 flex items-center justify-between cursor-pointer hover:bg-amber-100/80 transition">
                    <div>
                      <p className="font-bold text-amber-700 text-[11px]">Lead dừng yên</p>
                      <p className="text-[9.5px] text-amber-500">Không được triển khai &gt; 3 ngày</p>
                    </div>
                    <span className="font-extrabold text-amber-600 text-xs bg-white px-2 py-0.5 rounded-lg border border-amber-200">4</span>
                  </div>

                  <div className="p-2 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-between cursor-pointer hover:bg-blue-100/80 transition">
                    <div>
                      <p className="font-bold text-blue-700 text-[11px]">Báo giá chưa phản hồi</p>
                      <p className="text-[9.5px] text-blue-500">Đã gửi báo giá: 1 ngày (1) / 2 tuần (1)</p>
                    </div>
                    <span className="font-extrabold text-blue-600 text-xs bg-white px-2 py-0.5 rounded-lg border border-blue-200">3</span>
                  </div>

                  <div className="p-2 rounded-xl bg-purple-50/80 border border-purple-100 flex items-center justify-between cursor-pointer hover:bg-purple-100/80 transition">
                    <div>
                      <p className="font-bold text-purple-700 text-[11px]">Đến lịch hẹn</p>
                      <p className="text-[9.5px] text-purple-500">Cần chăm sóc trong hôm nay</p>
                    </div>
                    <span className="font-extrabold text-purple-600 text-xs bg-white px-2 py-0.5 rounded-lg border border-purple-200">2</span>
                  </div>
                </div>
              </div>

              {/* Thẻ Lead gần đây */}
              <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2.5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="font-bold text-slate-800 text-xs">Lead gần đây</span>
                  <button className="text-blue-600 hover:underline font-bold text-[10px]">Xem tất cả</button>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-xs">
                    <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      +
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-[11px]">Tạo Lead mới</p>
                      <p className="text-[10px] text-blue-600 font-mono">TT-20261107-0021 - Cửa hàng LED...</p>
                      <p className="text-[9px] text-slate-400">2 phút trước</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-xs">
                    <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      ✎
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-[11px]">Cập nhật thông tin</p>
                      <p className="text-[10px] text-slate-600 font-mono">TT-20261107-0020 - Sửa SĐT</p>
                      <p className="text-[9px] text-slate-400">15 phút trước</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-xs">
                    <div className="w-4 h-4 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      ➔
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-[11px]">Chuyển Lead</p>
                      <p className="text-[10px] text-slate-600 font-mono">TT-20261106-0019 - Sang Lý Kinh Doanh</p>
                      <p className="text-[9px] text-slate-400">1 giờ trước</p>
                    </div>
                  </div>
                </div>
              </div>

            </aside>

          </div>

        </div>

      </div>

      {/* ================= MODAL CHI TIẾT LEAD ================= */}
      <LeadDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        leadData={selectedLead}
      />

    </div>
  );
}