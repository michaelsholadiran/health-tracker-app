import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { getCurrentUser } from './utils/storage';
import Login from './components/Login';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Medications from './pages/Medications';
import Vitals from './pages/Vitals';

const PrivateRoute = ({ children }) => {
  const currentUser = getCurrentUser();
  return currentUser ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/medications"
          element={
            <PrivateRoute>
              <Layout>
                <Medications />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/vitals"
          element={
            <PrivateRoute>
              <Layout>
                <Vitals />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

