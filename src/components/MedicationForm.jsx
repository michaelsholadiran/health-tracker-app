import { useState } from 'react';
import { getCurrentUser } from '../utils/storage';
import { getMedications, saveMedications } from '../utils/storage';

const MedicationForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = getCurrentUser();
    if (!username) return;

    const medications = getMedications(username);
    const newMedication = {
      id: Date.now(),
      name: name.trim(),
      dosage: dosage.trim(),
      frequency: frequency.trim()
    };

    medications.push(newMedication);
    saveMedications(username, medications);

    window.dispatchEvent(new CustomEvent('medicationsUpdated'));

    setName('');
    setDosage('');
    setFrequency('');
    
    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="medName" className="block mb-2 font-semibold text-gray-900 text-sm">
          Medication Name
        </label>
        <input
          id="medName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-[15px] text-gray-900 bg-gray-50 transition-all outline-none focus:border-primary"
          placeholder="e.g., Lisinopril"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="dosage" className="block mb-2 font-semibold text-gray-900 text-sm">
          Dosage
        </label>
        <input
          id="dosage"
          type="text"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
          required
          className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-[15px] text-gray-900 bg-gray-50 transition-all outline-none focus:border-primary"
          placeholder="e.g., 20mg"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="frequency" className="block mb-2 font-semibold text-gray-900 text-sm">
          Frequency
        </label>
        <input
          id="frequency"
          type="text"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          required
          className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-[15px] text-gray-900 bg-gray-50 transition-all outline-none focus:border-primary"
          placeholder="e.g., Once daily in the morning"
        />
      </div>

      <div className="flex gap-3 mt-7">
        <button
          type="submit"
          className="flex-1 py-3.5 bg-primary text-white border-none rounded-lg text-base cursor-pointer font-semibold transition-all hover:bg-primary-dark"
        >
          Add Medication
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

export default MedicationForm;
