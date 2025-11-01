import { useState } from 'react';
import { getCurrentUser } from '../utils/storage';
import MedicationList from '../components/MedicationList';
import MedicationForm from '../components/MedicationForm';
import Modal from '../components/Modal';
import { PlusIcon } from '../components/Icons';

const Medications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const username = getCurrentUser();

  if (!username) {
    return null;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-gray-900 m-0 text-4xl font-bold tracking-tight">
          Medications
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-7 py-3.5 bg-primary text-white border-none rounded-lg text-base cursor-pointer font-semibold flex items-center gap-2 transition-all hover:bg-primary-dark"
        >
          <PlusIcon size={20} color="white" />
          Add Medication
        </button>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-200">
        <MedicationList />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Medication"
      >
        <MedicationForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Medications;
