"use client";

import React, { useState } from "react";
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
  Plus, 
  Edit3, 
  Lock, 
  Trash2, 
  Mail, 
  Phone,
  LogOut,
  UserPlus,
  UserCheck,
  Crown
} from "lucide-react";

export default function DesignBriefFullPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const mockData = [
    {
      id: "MNV: #0001",
      name: "Nguyễn Quản Trị",
      title: "Hội trường Ballroom Tầng 3",
      specs: "8m x 4m (P2.5 Indoor)",
      badge: "Bạn",
      avatar: "NT",
      avatarBg: "bg-black text-white",
      email: "admin@toantrung.vn",
      phone: "0903111222",
      department: "• Phòng Quản trị Hệ thống",
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
      title: "LED Outdoor Tòa Nhà Nam Sài Gòn",
      specs: "12m x 6m (P4 Outdoor)",
      avatar: "TD",
      avatarBg: "bg-blue-500 text-white",
      email: "sales@toantrung.vn",
      phone: "0903222333",
      department: "• Phòng Kinh doanh",
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
      title: "Màn hình Cong Showroom Tân Bình",
      specs: "5m x 2.5m (P2.0 Flexible)",
      avatar: "L2",
      avatarBg: "bg-sky-400 text-white",
      email: "sales2@toantrung.vn",
      phone: "0903222334",
      department: "• Phòng Kinh doanh",
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
      title: "Phối cảnh Banner LED Mall",
      specs: "4m x 2m (Outdoor)",
      avatar: "LT",
      avatarBg: "bg-purple-500 text-white",
      email: "marketing@toantrung.vn",
      phone: "0903333444",
      department: "• Phòng Marketing",
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
      title: "Dự án LED Sân Thượng",
      specs: "10m x 5m",
      avatar: "PK",
      avatarBg: "bg-amber-500 text-white",
      email: "designer@toantrung.vn",
      phone: "0903444555",
      department: "• Phòng Marketing",
      deptColor: "bg-purple-50 text-purple-600",
      role: "Chuyên viên Thiết kế 3D",
      roleStyle: "bg-amber-50 text-amber-600 font-medium",
      status: "• Hoạt động",
      statusStyle: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      isLoggedUser: false
    }
  ];

  return (
    <div className="flex h-screen bg-[#F4F6F9] font-sans text-slate-800 overflow-hidden">
      {/* ==================== 1. SIDEBAR TRAI (CHUAN Y CHANG ANH MAU) ==================== */}
      <aside className={`${isCollapsed ? "w-16" : "w-60"} bg-white border-r border-slate-200 flex flex-col justify-between transition-all duration-300 shrink-0 z-20`}>
        <div>
          {/* Logo Header */}
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

          {/* Menu Items List */}
          <div className="p-2.5 space-y-5 overflow-y-auto max-h-[calc(100vh-120px)]">
            {/* Group 1 */}
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

            {/* Group 2 */}
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

            {/* Group 3 */}
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

        {/* User Info Bottom Sidebar */}
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

      {/* ==================== 2. KHUNG NỘI DUNG CHÍNH (MAIN CONTENT) ==================== */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Topbar Bar */}
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

        {/* Workspace Area */}
        <div className="p-6">
          {/* Header & Badges ĐÃ SỬA KHỚP 100% VỚI MẪU CÔNG TY */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-slate-900">Quản lý Phòng ban & Tài khoản</h1>
                
                {/* 3 THẺ BADGE CHUẨN MẪU CÔNG TY */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EEF4FF] text-[#1E40AF] border border-[#DBEAFE]">
                  <Users className="w-3.5 h-3.5 text-[#3B82F6]" />
                  9 nhân sự
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]">
                  <UserCheck className="w-3.5 h-3.5 text-[#10B981]" />
                  9 đang hoạt động
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

            <button className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0B4EDA] hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition">
              <UserPlus className="w-3.5 h-3.5" /> Cấp tài khoản nhân sự
            </button>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
            {/* Filter Tabs & Search */}
            <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <button onClick={() => setActiveTab("all")} className={`px-3 py-1 rounded-full text-xs font-semibold transition ${activeTab === "all" ? "bg-black text-white" : "bg-slate-100 text-slate-600"}`}>
                  Tất cả phòng ban <span className="ml-1 text-[10px] opacity-70">9</span>
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

            {/* Data Table CHUẨN Y CHANG CÔNG TY */}
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
                  {mockData.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition">
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
                      <td className="py-2.5">
                        <div className="text-slate-600 text-[11px] flex items-center gap-1">
                          <Mail className="w-3 h-3 text-slate-400" /> {item.email}
                        </div>
                        <div className="text-slate-400 text-[10px] flex items-center gap-1">
                          <Phone className="w-3 h-3 text-slate-400" /> {item.phone}
                        </div>
                      </td>
                      <td className="py-2.5">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] ${item.deptColor}`}>
                          {item.department}
                        </span>
                      </td>
                      <td className="py-2.5">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] ${item.roleStyle}`}>
                          {item.role}
                        </span>
                      </td>
                      <td className="py-2.5">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] ${item.statusStyle}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-2.5 text-right pr-2">
                        {item.isLoggedUser ? (
                          <span className="text-[11px] text-slate-400 italic">Đang đăng nhập</span>
                        ) : (
                          <div className="inline-flex items-center gap-1">
                            <button className="flex items-center gap-1 px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded text-[11px] transition">
                              <Edit3 className="w-3 h-3" /> Sửa
                            </button>
                            <button className="flex items-center gap-1 px-2 py-0.5 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded text-[11px] transition">
                              <Lock className="w-3 h-3" /> Khóa
                            </button>
                            <button className="p-1 text-red-500 hover:bg-red-50 rounded transition">
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
      </main>
    </div>
  );
}