"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Megaphone, 
  Search, 
  BarChart3, 
  Sparkles, 
  Bell, 
  User, 
  Settings, 
  ChevronLeft, 
  Edit3, 
  Lock, 
  Trash2, 
  Mail, 
  Phone,
  LogOut,
  UserPlus,
  UserCheck,
  Crown,
  X
} from "lucide-react";

export default function DesignBriefFullPage() {
  const router = useRouter();

  // 1. STATE DỮ LIỆU BẢNG (9 NHÂN SỰ CHUẨN MẪU CÔNG TY)
  const [briefs, setBriefs] = useState([
    {
      id: "MNV: #0001",
      name: "Nguyễn Quản Trị",
      badge: "Bạn",
      avatar: "NT",
      avatarBg: "bg-black text-white",
      email: "admin@toantrung.vn",
      phone: "0903111222",
      department: "• Quản trị Hệ thống",
      deptCat: "sys",
      deptColor: "bg-slate-100 text-slate-700",
      role: "Quản trị viên Hệ thống",
      roleStyle: "bg-black text-white font-semibold",
      status: "• Hoạt động",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      isLoggedUser: true
    },
    {
      id: "MNV: #0002",
      name: "Trần Kinh Doanh",
      avatar: "TD",
      avatarBg: "bg-blue-500 text-white",
      email: "sales@toantrung.vn",
      phone: "0903222333",
      department: "• Phòng Kinh doanh",
      deptCat: "sales",
      deptColor: "bg-blue-50 text-blue-600",
      role: "Chuyên viên Kinh doanh",
      roleStyle: "bg-blue-50 text-blue-600 font-medium",
      status: "• Hoạt động",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      isLoggedUser: false
    },
    {
      id: "MNV: #0003",
      name: "Lý Kinh Doanh 2",
      avatar: "L2",
      avatarBg: "bg-sky-400 text-white",
      email: "sales2@toantrung.vn",
      phone: "0903222334",
      department: "• Phòng Kinh doanh",
      deptCat: "sales",
      deptColor: "bg-blue-50 text-blue-600",
      role: "Chuyên viên Kinh doanh",
      roleStyle: "bg-blue-50 text-blue-600 font-medium",
      status: "• Hoạt động",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      isLoggedUser: false
    },
    {
      id: "MNV: #0004",
      name: "Lê Truyền Thông",
      avatar: "LT",
      avatarBg: "bg-purple-500 text-white",
      email: "marketing@toantrung.vn",
      phone: "0903333444",
      department: "• Phòng Marketing",
      deptCat: "mkt",
      deptColor: "bg-purple-50 text-purple-600",
      role: "Chuyên viên Marketing & SEO",
      roleStyle: "bg-purple-50 text-purple-600 font-medium",
      status: "• Hoạt động",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      isLoggedUser: false
    },
    {
      id: "MNV: #0005",
      name: "Phạm Thiết Kế",
      avatar: "PK",
      avatarBg: "bg-amber-500 text-white",
      email: "designer@toantrung.vn",
      phone: "0903444555",
      department: "• Phòng Marketing",
      deptCat: "mkt",
      deptColor: "bg-purple-50 text-purple-600",
      role: "Chuyên viên Thiết kế 3D",
      roleStyle: "bg-amber-50 text-amber-600 font-medium",
      status: "• Hoạt động",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      isLoggedUser: false
    },
    {
      id: "MNV: #0006",
      name: "Hoàng Quảng Cáo Ads",
      avatar: "HA",
      avatarBg: "bg-teal-500 text-white",
      email: "ads@toantrung.vn",
      phone: "0903555666",
      department: "• Phòng Marketing",
      deptCat: "mkt",
      deptColor: "bg-purple-50 text-purple-600",
      role: "Chuyên viên Quảng cáo Ads",
      roleStyle: "bg-cyan-50 text-cyan-600 font-medium",
      status: "• Hoạt động",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      isLoggedUser: false
    },
    {
      id: "MNV: #0007",
      name: "Võ Trưởng Phòng Marketing",
      avatar: "VM",
      avatarBg: "bg-emerald-600 text-white",
      email: "mkt.lead@toantrung.vn",
      phone: "0903666777",
      department: "• Phòng Marketing",
      deptCat: "mkt",
      deptColor: "bg-purple-50 text-purple-600",
      role: "Trưởng phòng Marketing",
      roleStyle: "bg-emerald-50 text-emerald-700 font-semibold",
      status: "• Hoạt động",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      isLoggedUser: false
    },
    {
      id: "MNV: #0008",
      name: "Đặng Trưởng Phòng Sales",
      avatar: "DS",
      avatarBg: "bg-indigo-600 text-white",
      email: "sales.lead@toantrung.vn",
      phone: "0903777888",
      department: "• Phòng Kinh doanh",
      deptCat: "sales",
      deptColor: "bg-blue-50 text-blue-600",
      role: "Trưởng phòng Kinh doanh",
      roleStyle: "bg-blue-100 text-blue-700 font-semibold",
      status: "• Hoạt động",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      isLoggedUser: false
    },
    {
      id: "MNV: #0009",
      name: "Bùi Giám Đốc",
      avatar: "BD",
      avatarBg: "bg-red-500 text-white",
      email: "bod@toantrung.vn",
      phone: "0903888999",
      department: "• Ban Giám đốc",
      deptCat: "bod",
      deptColor: "bg-red-50 text-red-600",
      role: "Ban Giám đốc",
      roleStyle: "bg-red-50 text-red-600 font-semibold",
      status: "• Hoạt động",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      isLoggedUser: false
    }
  ]);

  // 2. STATE TƯƠNG TÁC
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newDept, setNewDept] = useState("sales");

  // Xóa nhân sự
  const handleDelete = (id: string) => {
    if (confirm("Bạn có chắc muốn xóa nhân sự/brief này?")) {
      setBriefs(briefs.filter(b => b.id !== id));
    }
  };

  // Thêm nhân sự mới
  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newEmail) return;

    const newUser = {
      id: `MNV: #${Math.floor(1000 + Math.random() * 9000)}`,
      name: newName,
      avatar: newName.substring(0, 2).toUpperCase(),
      avatarBg: "bg-blue-600 text-white",
      email: newEmail,
      phone: newPhone || "0900000000",
      department: newDept === "sales" ? "• Phòng Kinh doanh" : newDept === "mkt" ? "• Phòng Marketing" : "• Quản trị Hệ thống",
      deptCat: newDept,
      deptColor: "bg-blue-50 text-blue-600",
      role: "Chuyên viên Kinh doanh",
      roleStyle: "bg-blue-50 text-blue-600 font-medium",
      status: "• Hoạt động",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      isLoggedUser: false
    };

    setBriefs([newUser, ...briefs]);
    setNewName("");
    setNewEmail("");
    setNewPhone("");
    setIsModalOpen(false);
  };

  // Lọc dữ liệu
  const filteredBriefs = briefs.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || item.deptCat === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="flex h-screen bg-[#F4F6F9] font-sans text-slate-800 overflow-hidden">
      {/* 1. SIDEBAR */}
      <aside className={`${isCollapsed ? "w-16" : "w-60"} bg-white border-r border-slate-200 flex flex-col justify-between transition-all duration-300 shrink-0 z-20`}>
        <div>
          <div className="h-14 px-4 flex items-center justify-between border-b border-slate-100">
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="w-8 h-8 rounded-xl bg-[#0B4EDA] text-white font-bold text-xs flex items-center justify-center shrink-0">
                TT
              </div>
              {!isCollapsed && (
                <div>
                  <h2 className="font-bold text-slate-900 text-xs leading-tight">Toàn Trung CRM</h2>
                  <p className="text-[9px] text-slate-400 font-medium">Enterprise LED & Marketing</p>
                </div>
              )}
            </div>
            <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-slate-400 hover:text-slate-600 p-1">
              <ChevronLeft className={`w-4 h-4 transition-transform ${isCollapsed ? "rotate-180" : ""}`} />
            </button>
          </div>

          <div className="p-2.5 space-y-5 overflow-y-auto max-h-[calc(100vh-120px)]">
            <div>
              {!isCollapsed && <p className="px-3 text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">ĐIỀU HÀNH & KINH DOANH</p>}
              <nav className="space-y-0.5">
                <a href="#" className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50">
                  <LayoutDashboard className="w-4 h-4 text-blue-500" />
                  {!isCollapsed && <span>Tổng quan điều hành</span>}
                </a>
                <a href="#" className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50">
                  <Users className="w-4 h-4 text-purple-500" />
                  {!isCollapsed && <span>Leads & Giao dịch</span>}
                </a>
                <a href="#" className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50">
                  <Megaphone className="w-4 h-4 text-cyan-500" />
                  {!isCollapsed && <span>Chiến dịch Marketing</span>}
                </a>
                <a href="#" className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50">
                  <Search className="w-4 h-4 text-pink-500" />
                  {!isCollapsed && <span>Từ khóa & SEO</span>}
                </a>
                <a href="#" className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50">
                  <BarChart3 className="w-4 h-4 text-emerald-500" />
                  {!isCollapsed && <span>Phân tích & Báo cáo</span>}
                </a>
                <a href="/design" className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  {!isCollapsed && <span>AI Mockup Studio</span>}
                </a>
              </nav>
            </div>

            <div>
              {!isCollapsed && <p className="px-3 text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">CÁ NHÂN</p>}
              <nav className="space-y-0.5">
                <a href="#" className="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50">
                  <div className="flex items-center gap-2.5">
                    <Bell className="w-4 h-4 text-slate-400" />
                    {!isCollapsed && <span>Thông báo</span>}
                  </div>
                  {!isCollapsed && <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center">4</span>}
                </a>
                <a href="#" className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50">
                  <User className="w-4 h-4 text-slate-400" />
                  {!isCollapsed && <span>Hồ sơ cá nhân</span>}
                </a>
              </nav>
            </div>

            <div>
              {!isCollapsed && <p className="px-3 text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">QUẢN TRỊ HỆ THỐNG</p>}
              <nav className="space-y-0.5">
                <a href="/design-brief" className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-bold text-blue-700 bg-blue-50 border-r-4 border-blue-600">
                  <Users className="w-4 h-4 text-blue-600" />
                  {!isCollapsed && <span>Quản lý Phòng ban & Nh...</span>}
                </a>
                <a href="#" className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50">
                  <Settings className="w-4 h-4 text-slate-400" />
                  {!isCollapsed && <span>Cài đặt hệ thống</span>}
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="p-3 border-t border-slate-100 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] flex items-center justify-center shrink-0">NT</div>
          {!isCollapsed && (
            <div>
              <h4 className="text-xs font-bold text-slate-800">Nguyễn Quản Trị</h4>
              <p className="text-[9px] text-slate-400">Quản trị viên</p>
            </div>
          )}
        </div>
      </aside>

      {/* 2. MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="h-12 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-400">
            Toàn Trung / <span className="text-slate-800 font-medium">Quản lý Phòng ban & Tài khoản</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Tìm nhanh Lead, SĐT, Dự án..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-full pl-8 pr-3 py-1 text-[11px] focus:outline-none"
              />
              <span className="absolute right-2.5 top-1.5 text-[9px] text-slate-400 bg-slate-200 px-1 rounded">/</span>
            </div>

            <div className="relative p-1.5 hover:bg-slate-100 rounded-full cursor-pointer text-slate-600">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full"></span>
            </div>

            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className="w-6 h-6 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center">
                NT
              </div>
              <span className="text-xs font-semibold text-slate-700">Nguyễn Quản Trị</span>
            </div>

            <button className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-800 pl-2">
              <LogOut className="w-3.5 h-3.5" /> Đăng xuất
            </button>
          </div>
        </header>

        <div className="p-6">
          {/* HEADER & BADGES */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-slate-900">Quản lý Phòng ban & Tài khoản</h1>
                
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EEF4FF] text-[#1E40AF] border border-[#DBEAFE]">
                  <Users className="w-3.5 h-3.5 text-[#3B82F6]" />
                  {briefs.length} nhân sự
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]">
                  <UserCheck className="w-3.5 h-3.5 text-[#10B981]" />
                  {briefs.length} đang hoạt động
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFFBEB] text-[#B45309] border border-[#FDE68A]">
                  <Crown className="w-3.5 h-3.5 text-[#F59E0B]" />
                  4 Quản lý / Trưởng nhóm
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Quản trị danh sách nhân sự theo 4 khối phòng ban và phân quyền chuẩn 8 vai trò BA.
              </p>
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0B4EDA] hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition"
            >
              <UserPlus className="w-3.5 h-3.5" /> Cấp tài khoản nhân sự
            </button>
          </div>

          {/* TABLE CONTAINER */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
            <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <button onClick={() => setActiveTab("all")} className={`px-3 py-1 rounded-full text-xs font-semibold transition ${activeTab === "all" ? "bg-black text-white" : "bg-slate-100 text-slate-600"}`}>
                  Tất cả phòng ban <span className="ml-1 text-[10px] opacity-70">{briefs.length}</span>
                </button>
                <button onClick={() => setActiveTab("sales")} className={`px-3 py-1 rounded-full text-xs font-semibold transition ${activeTab === "sales" ? "bg-black text-white" : "bg-slate-100 text-slate-600"}`}>
                  Phòng Kinh doanh <span className="ml-1 text-[10px] opacity-70">3</span>
                </button>
                <button onClick={() => setActiveTab("mkt")} className={`px-3 py-1 rounded-full text-xs font-semibold transition ${activeTab === "mkt" ? "bg-black text-white" : "bg-slate-100 text-slate-600"}`}>
                  Phòng Marketing <span className="ml-1 text-[10px] opacity-70">4</span>
                </button>
                <button onClick={() => setActiveTab("bod")} className={`px-3 py-1 rounded-full text-xs font-semibold transition ${activeTab === "bod" ? "bg-black text-white" : "bg-slate-100 text-slate-600"}`}>
                  Ban Giám đốc <span className="ml-1 text-[10px] opacity-70">1</span>
                </button>
                <button onClick={() => setActiveTab("sys")} className={`px-3 py-1 rounded-full text-xs font-semibold transition ${activeTab === "sys" ? "bg-black text-white" : "bg-slate-100 text-slate-600"}`}>
                  Quản trị Hệ thống <span className="ml-1 text-[10px] opacity-70">1</span>
                </button>
              </div>

              <div className="relative w-56">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Tìm tên nhân sự, email, SĐT..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1 text-xs focus:outline-none"
                />
              </div>
            </div>

            {/* DATA TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200 pb-2">
                    <th className="pb-2 pl-2">NHÂN SỰ</th>
                    <th className="pb-2">THÔNG TIN LIÊN HỆ</th>
                    <th className="pb-2">PHÒNG BAN</th>
                    <th className="pb-2">VAI TRÒ & PHÂN QUYỀN</th>
                    <th className="pb-2">TRẠNG THÁI</th>
                    <th className="pb-2 text-right pr-2">THAO TÁC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {filteredBriefs.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition">
                      {/* Cột Nhân sự */}
                      <td className="py-2.5 pl-2">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-7 h-7 rounded-full ${item.avatarBg} font-bold text-[10px] flex items-center justify-center shrink-0`}>
                            {item.avatar}
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 flex items-center gap-1.5">
                              {item.name}
                              {item.badge && <span className="px-1.5 py-0.2 bg-blue-100 text-blue-600 rounded text-[9px] font-medium">{item.badge}</span>}
                            </div>
                            <div className="text-[10px] text-slate-400">{item.id}</div>
                          </div>
                        </div>
                      </td>

                      {/* Cột Liên hệ */}
                      <td className="py-2.5">
                        <div className="text-slate-600 text-[11px] flex items-center gap-1">
                          <Mail className="w-3 h-3 text-slate-400" /> {item.email}
                        </div>
                        <div className="text-slate-400 text-[10px] flex items-center gap-1">
                          <Phone className="w-3 h-3 text-slate-400" /> {item.phone}
                        </div>
                      </td>

                      {/* Cột Phòng ban */}
                      <td className="py-2.5">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] ${item.deptColor}`}>
                          {item.department}
                        </span>
                      </td>

                      {/* Cột Vai trò */}
                      <td className="py-2.5">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] ${item.roleStyle}`}>
                          {item.role}
                        </span>
                      </td>

                      {/* Cột Trạng thái - ĐÃ SỬA CHỐNG RỚT DÒNG 100% */}
                      <td className="py-2.5">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] whitespace-nowrap inline-flex items-center gap-1 ${item.statusStyle}`}>
                          {item.status}
                        </span>
                      </td>

                      {/* Cột Thao tác */}
                      <td className="py-2.5 text-right pr-2">
                        {item.isLoggedUser ? (
                          <div className="flex items-center justify-end gap-2">
                            <span className="text-[11px] text-slate-400 italic">Đang đăng nhập</span>
                            <button 
                              onClick={() => router.push("/design")}
                              className="px-2 py-0.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded text-[11px] font-semibold transition"
                            >
                              AI Studio ➔
                            </button>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1">
                            <button 
                              onClick={() => router.push("/design")}
                              className="px-2 py-0.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded text-[11px] font-semibold transition mr-1"
                            >
                              AI Studio ➔
                            </button>
                            <button className="flex items-center gap-1 px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded text-[11px] transition">
                              <Edit3 className="w-3 h-3" /> Sửa
                            </button>
                            <button className="flex items-center gap-1 px-2 py-0.5 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded text-[11px] transition">
                              <Lock className="w-3 h-3" /> Khóa
                            </button>
                            <button onClick={() => handleDelete(item.id)} className="p-1 text-red-500 hover:bg-red-50 rounded transition">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* MODAL THÊM TÀI KHOẢN */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-5 border border-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <h3 className="font-bold text-slate-900 text-sm">Cấp Tài Khoản Nhân Sự Mới</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <form onSubmit={handleAddUser} className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Họ và Tên</label>
                  <input type="text" required placeholder="VD: Nguyễn Văn A..." value={newName} onChange={(e) => setNewName(e.target.value)} className="w-full border border-slate-200 rounded-lg p-2 focus:outline-none" />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Email Công Ty</label>
                  <input type="email" required placeholder="VD: a.nguyen@toantrung.vn..." value={newEmail} onChange={(e) => setNewEmail(e.target.value)} className="w-full border border-slate-200 rounded-lg p-2 focus:outline-none" />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Số Điện Thoại</label>
                  <input type="text" placeholder="VD: 0909123456..." value={newPhone} onChange={(e) => setNewPhone(e.target.value)} className="w-full border border-slate-200 rounded-lg p-2 focus:outline-none" />
                </div>
                <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg font-medium">Hủy</button>
                  <button type="submit" className="px-4 py-1.5 bg-[#0B4EDA] text-white rounded-lg font-semibold hover:bg-blue-700">Tạo tài khoản</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}