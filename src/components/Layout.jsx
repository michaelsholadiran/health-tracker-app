import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, clearCurrentUser } from '../utils/storage';
import { useInactivity } from '../hooks/useInactivity';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  useInactivity(() => {
    clearCurrentUser();
    navigate('/login');
  }, 300000);

  const handleLogout = () => {
    clearCurrentUser();
    navigate('/login');
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar onLogout={handleLogout} />
      <main className="ml-[280px] w-[calc(100%-280px)] min-h-screen p-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
