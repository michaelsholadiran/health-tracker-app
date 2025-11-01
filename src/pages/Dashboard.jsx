import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, clearCurrentUser } from '../utils/storage';
import { getMedications } from '../utils/storage';
import { getVitals } from '../utils/storage';
import { useInactivity } from '../hooks/useInactivity';
import { useState } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const [medications, setMedications] = useState([]);
  const [vitals, setVitals] = useState([]);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  useInactivity(() => {
    clearCurrentUser();
    navigate('/login');
  }, 600000);

  useEffect(() => {
    if (currentUser) {
      setMedications(getMedications(currentUser));
      setVitals(getVitals(currentUser));
    }
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) return;

    const handleMedicationsUpdate = () => {
      setMedications(getMedications(currentUser));
    };

    const handleVitalsUpdate = () => {
      setVitals(getVitals(currentUser));
    };

    window.addEventListener('medicationsUpdated', handleMedicationsUpdate);
    window.addEventListener('vitalsUpdated', handleVitalsUpdate);

    return () => {
      window.removeEventListener('medicationsUpdated', handleMedicationsUpdate);
      window.removeEventListener('vitalsUpdated', handleVitalsUpdate);
    };
  }, [currentUser]);

  if (!currentUser) {
    return null;
  }

  const getLatestVital = () => {
    if (vitals.length === 0) return null;
    return vitals[0];
  };

  const latestVital = getLatestVital();

  const getAverageBP = () => {
    if (vitals.length === 0) return null;
    const avgSystolic = Math.round(
      vitals.reduce((sum, v) => sum + v.systolic, 0) / vitals.length
    );
    const avgDiastolic = Math.round(
      vitals.reduce((sum, v) => sum + v.diastolic, 0) / vitals.length
    );
    return { systolic: avgSystolic, diastolic: avgDiastolic };
  };

  const getAverageHeartRate = () => {
    if (vitals.length === 0) return null;
    return Math.round(
      vitals.reduce((sum, v) => sum + v.heartRate, 0) / vitals.length
    );
  };

  const getAverageWeight = () => {
    if (vitals.length === 0) return null;
    return (
      vitals.reduce((sum, v) => sum + v.weight, 0) / vitals.length
    ).toFixed(1);
  };

  const avgBP = getAverageBP();
  const avgHR = getAverageHeartRate();
  const avgWeight = getAverageWeight();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-gray-900 m-0 text-4xl mb-2 font-bold tracking-tight">
          Dashboard
        </h1>
        <p className="text-gray-600 m-0 text-base">
          Welcome back, {currentUser}
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mb-8">
        <div className="bg-white p-8 rounded-2xl border border-gray-200">
          <h3 className="m-0 mb-4 text-gray-600 text-sm font-semibold uppercase tracking-wider">
            Medications
          </h3>
          <p className="text-[56px] m-0 mb-2 text-primary font-bold leading-none">
            {medications.length}
          </p>
          <p className="m-0 text-gray-600 text-sm">
            Active medications
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-200">
          <h3 className="m-0 mb-4 text-gray-600 text-sm font-semibold uppercase tracking-wider">
            Vital Signs Logs
          </h3>
          <p className="text-[56px] m-0 mb-2 text-primary font-bold leading-none">
            {vitals.length}
          </p>
          <p className="m-0 text-gray-600 text-sm">
            Total entries
          </p>
        </div>

        {latestVital && (
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="m-0 mb-4 text-gray-600 text-sm font-semibold uppercase tracking-wider">
              Latest Entry
            </h3>
            <p className="text-2xl m-0 mb-1 text-gray-900 font-semibold">
              {latestVital.systolic}/{latestVital.diastolic}
            </p>
            <p className="m-0 text-gray-600 text-xs">
              {new Date(latestVital.timestamp).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>

      {vitals.length > 0 && (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          {avgBP && (
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="m-0 mb-4 text-gray-600 text-sm font-semibold uppercase tracking-wider">
                Average Blood Pressure
              </h3>
              <p className="text-3xl m-0 text-gray-900 font-semibold">
                {avgBP.systolic}/{avgBP.diastolic}
              </p>
            </div>
          )}

          {avgHR && (
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="m-0 mb-4 text-gray-600 text-sm font-semibold uppercase tracking-wider">
                Average Heart Rate
              </h3>
              <p className="text-3xl m-0 text-gray-900 font-semibold">
                {avgHR} BPM
              </p>
            </div>
          )}

          {avgWeight && (
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="m-0 mb-4 text-gray-600 text-sm font-semibold uppercase tracking-wider">
                Average Weight
              </h3>
              <p className="text-3xl m-0 text-gray-900 font-semibold">
                {avgWeight}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
