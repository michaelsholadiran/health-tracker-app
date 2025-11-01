import { useState } from 'react';
import { getCurrentUser } from '../utils/storage';
import { getVitals, saveVitals } from '../utils/storage';

const VitalsForm = ({ onClose }) => {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = getCurrentUser();
    if (!username) return;

    const vitals = getVitals(username);
    const newVital = {
      id: Date.now(),
      systolic: parseInt(systolic),
      diastolic: parseInt(diastolic),
      heartRate: parseInt(heartRate),
      weight: parseFloat(weight),
      timestamp: new Date().toISOString()
    };

    vitals.unshift(newVital);
    saveVitals(username, vitals);

    window.dispatchEvent(new CustomEvent('vitalsUpdated'));

    setSystolic('');
    setDiastolic('');
    setHeartRate('');
    setWeight('');
    
    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="systolic" className="block mb-2 font-semibold text-gray-900 text-sm">
            Blood Pressure (Systolic)
          </label>
          <input
            id="systolic"
            type="number"
            value={systolic}
            onChange={(e) => setSystolic(e.target.value)}
            required
            min="0"
            className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-[15px] text-gray-900 bg-gray-50 transition-all outline-none focus:border-primary"
            placeholder="e.g., 120"
          />
        </div>

        <div>
          <label htmlFor="diastolic" className="block mb-2 font-semibold text-gray-900 text-sm">
            Blood Pressure (Diastolic)
          </label>
          <input
            id="diastolic"
            type="number"
            value={diastolic}
            onChange={(e) => setDiastolic(e.target.value)}
            required
            min="0"
            className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-[15px] text-gray-900 bg-gray-50 transition-all outline-none focus:border-primary"
            placeholder="e.g., 80"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="heartRate" className="block mb-2 font-semibold text-gray-900 text-sm">
            Heart Rate (BPM)
          </label>
          <input
            id="heartRate"
            type="number"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
            required
            min="0"
            className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-[15px] text-gray-900 bg-gray-50 transition-all outline-none focus:border-primary"
            placeholder="e.g., 65"
          />
        </div>

        <div>
          <label htmlFor="weight" className="block mb-2 font-semibold text-gray-900 text-sm">
            Weight
          </label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            min="0"
            step="0.1"
            className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-[15px] text-gray-900 bg-gray-50 transition-all outline-none focus:border-primary"
            placeholder="e.g., 150"
          />
        </div>
      </div>

      <div className="flex gap-3 mt-7">
        <button
          type="submit"
          className="flex-1 py-3.5 bg-primary text-white border-none rounded-lg text-base cursor-pointer font-semibold transition-all hover:bg-primary-dark"
        >
          Log Vital Signs
        </button>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3.5 bg-gray-100 text-gray-600 border-2 border-gray-200 rounded-lg text-base cursor-pointer font-semibold transition-all hover:bg-gray-50 hover:border-text-tertiary"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default VitalsForm;
