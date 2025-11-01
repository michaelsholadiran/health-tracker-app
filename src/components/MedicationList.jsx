import { useState, useEffect } from 'react';
import { getCurrentUser } from '../utils/storage';
import { getMedications, saveMedications } from '../utils/storage';

const MedicationList = () => {
  const [medications, setMedications] = useState([]);
  const username = getCurrentUser();

  useEffect(() => {
    if (username) {
      const loadedMedications = getMedications(username);
      setMedications(loadedMedications);
    }
  }, [username]);

  useEffect(() => {
    if (!username) return;

    const handleUpdate = () => {
      const updatedMedications = getMedications(username);
      setMedications(updatedMedications);
    };

    window.addEventListener('medicationsUpdated', handleUpdate);

    return () => {
      window.removeEventListener('medicationsUpdated', handleUpdate);
    };
  }, [username]);

  const handleRemove = (id) => {
    const updatedMedications = medications.filter(med => med.id !== id);
    setMedications(updatedMedications);
    if (username) {
      saveMedications(username, updatedMedications);
    }
  };

  if (medications.length === 0) {
    return (
      <div className="py-10 px-5 text-center text-gray-500">
        No medications added yet.
      </div>
    );
  }

  return (
    <div>
      <h3 className="mb-5 text-gray-900 text-xl font-semibold">
        Your Medications
      </h3>
      <div className="flex flex-col gap-3">
        {medications.map(medication => (
          <div
            key={medication.id}
            className="p-5 border border-gray-200 rounded-lg bg-gray-50 flex justify-between items-center transition-all hover:border-primary"
          >
            <div>
              <div className="font-semibold text-gray-900 mb-1.5 text-base">
                {medication.name}
              </div>
              <div className="text-gray-600 text-sm">
                {medication.dosage} - {medication.frequency}
              </div>
            </div>
            <button
              onClick={() => handleRemove(medication.id)}
              className="px-4 py-2 bg-gray-600 text-white border-none rounded-lg cursor-pointer text-sm font-medium transition-all hover:bg-gray-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicationList;
