const isLocalStorageAvailable = () => {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

export const getMedications = (username) => {
  if (!isLocalStorageAvailable() || !username) return [];
  try {
    const key = `meds-${username}`;
    const data = localStorage.getItem(key);
    if (!data) return [];
    const parsed = JSON.parse(data);
    return parsed;
  } catch (e) {
    console.error('Error reading medications from localStorage:', e);
    return [];
  }
};

export const saveMedications = (username, medications) => {
  if (!isLocalStorageAvailable() || !username) return;
  try {
    const key = `meds-${username}`;
    const value = JSON.stringify(medications);
    localStorage.setItem(key, value);
  } catch (e) {
    console.error('Error saving medications to localStorage:', e);
  }
};

export const getVitals = (username) => {
  if (!isLocalStorageAvailable() || !username) return [];
  try {
    const key = `vitals-${username}`;
    const data = localStorage.getItem(key);
    if (!data) return [];
    const parsed = JSON.parse(data);
    return parsed;
  } catch (e) {
    console.error('Error reading vitals from localStorage:', e);
    return [];
  }
};

export const saveVitals = (username, vitals) => {
  if (!isLocalStorageAvailable() || !username) return;
  try {
    const key = `vitals-${username}`;
    const value = JSON.stringify(vitals);
    localStorage.setItem(key, value);
  } catch (e) {
    console.error('Error saving vitals to localStorage:', e);
  }
};

export const getCurrentUser = () => {
  if (!isLocalStorageAvailable()) return null;
  try {
    return localStorage.getItem('currentUser');
  } catch (e) {
    console.error('Error reading current user from localStorage:', e);
    return null;
  }
};

export const setCurrentUser = (username) => {
  if (!isLocalStorageAvailable() || !username) return;
  try {
    localStorage.setItem('currentUser', username);
  } catch (e) {
    console.error('Error saving current user to localStorage:', e);
  }
};

export const clearCurrentUser = () => {
  if (!isLocalStorageAvailable()) return;
  try {
    localStorage.removeItem('currentUser');
  } catch (e) {
    console.error('Error clearing current user from localStorage:', e);
  }
};
