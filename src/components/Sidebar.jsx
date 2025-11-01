import { useNavigate, useLocation } from 'react-router-dom';
import { getCurrentUser } from '../utils/storage';
import { PillIcon, DashboardIcon, HeartIcon, UserIcon, LogoutIcon } from './Icons';

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = getCurrentUser();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: DashboardIcon },
    { path: '/medications', label: 'Medications', icon: PillIcon },
    { path: '/vitals', label: 'Vital Signs', icon: HeartIcon }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-[280px] bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen fixed left-0 top-0 py-8 flex flex-col z-[100] border-r border-white/10">
      <div className="px-6 pb-8 border-b border-white/10 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <PillIcon size={20} color="white" />
          </div>
          <h1 className="m-0 text-[22px] font-bold text-white tracking-tight">
            Health Tracker
          </h1>
        </div>
        {currentUser && (
          <div className="px-3 py-2 bg-white/10 rounded-lg text-[13px] text-white/90 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <UserIcon size={14} color="rgba(255,255,255,0.9)" />
              {currentUser}
            </span>
          </div>
        )}
      </div>

      <nav className="flex-1 px-3">
        {menuItems.map(item => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full px-4 py-3.5 mb-1.5 border-none text-white text-left cursor-pointer text-[15px] flex items-center gap-3 rounded-lg font-medium transition-all ${
              isActive(item.path)
                ? 'bg-primary font-semibold translate-x-1'
                : 'bg-transparent hover:bg-white/10 hover:translate-x-1'
            }`}
          >
            <span className="w-6 flex items-center justify-center">
              <item.icon size={20} color="currentColor" />
            </span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="px-6 border-t border-white/10 pt-5">
        <button
          onClick={onLogout}
          className="w-full py-3.5 bg-white/10 text-white border border-white/20 rounded-lg text-[15px] cursor-pointer font-semibold transition-all flex items-center justify-center gap-2 hover:bg-white/20 hover:border-white/30"
        >
          <LogoutIcon size={18} color="currentColor" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
