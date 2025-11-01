import { useState, useEffect } from 'react';
import { getCurrentUser } from '../utils/storage';
import { getVitals } from '../utils/storage';

const VitalsLog = () => {
  const [vitals, setVitals] = useState([]);
  const username = getCurrentUser();

  useEffect(() => {
    if (username) {
      const userVitals = getVitals(username);
      setVitals(userVitals);
    }
  }, [username]);

  useEffect(() => {
    if (!username) return;

    const handleUpdate = () => {
      const userVitals = getVitals(username);
      setVitals(userVitals);
    };

    window.addEventListener('vitalsUpdated', handleUpdate);

    return () => {
      window.removeEventListener('vitalsUpdated', handleUpdate);
    };
  }, [username]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  if (vitals.length === 0) {
    return (
      <div className="py-10 px-5 text-center text-gray-500">
        No vital signs logged yet.
      </div>
    );
  }

  return (
    <div>
      <h3 className="mb-5 text-gray-900 text-xl font-semibold">
        Vital Signs History
      </h3>
      <div className="flex flex-col gap-3 max-h-[600px] overflow-y-auto">
        {vitals.map(vital => (
          <div
            key={vital.id}
            className="p-5 border border-gray-200 rounded-lg bg-gray-50 transition-all hover:border-primary"
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <span className="text-gray-600 text-sm font-medium">Blood Pressure: </span>
                <span className="font-semibold text-gray-900 text-base">
                  {vital.systolic}/{vital.diastolic}
                </span>
              </div>
              <div>
                <span className="text-gray-600 text-sm font-medium">Heart Rate: </span>
                <span className="font-semibold text-gray-900 text-base">
                  {vital.heartRate} BPM
                </span>
              </div>
              <div>
                <span className="text-gray-600 text-sm font-medium">Weight: </span>
                <span className="font-semibold text-gray-900 text-base">
                  {vital.weight}
                </span>
              </div>
            </div>
            <div className="text-[13px] text-gray-500 border-t border-gray-200 pt-3 mt-3">
              Logged: {formatTimestamp(vital.timestamp)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VitalsLog;
