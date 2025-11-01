import { useState } from 'react';
import { getCurrentUser } from '../utils/storage';
import VitalsLog from '../components/VitalsLog';
import VitalsForm from '../components/VitalsForm';
import Modal from '../components/Modal';
import { PlusIcon } from '../components/Icons';

const Vitals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const username = getCurrentUser();

  if (!username) {
    return null;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-gray-900 m-0 text-4xl font-bold tracking-tight">
          Vital Signs
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-7 py-3.5 bg-primary text-white border-none rounded-lg text-base cursor-pointer font-semibold flex items-center gap-2 transition-all hover:bg-primary-dark"
        >
          <PlusIcon size={20} color="white" />
          Log Vital Signs
        </button>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-200">
        <VitalsLog />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Log Vital Signs"
      >
        <VitalsForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Vitals;
