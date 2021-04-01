const MAIN_API_URL = 'https://bite-client-default-rtdb.europe-west1.firebasedatabase.app/';

export const AddPet = async (data) => {
  const response = await fetch(`${MAIN_API_URL}pets.json`, {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(data),
  });

  return response.json();
};

export const updatePet = async (data) => {
  const response = await fetch(`${MAIN_API_URL}pets/${data.id}.json`, {
    method: 'PATCH',
    'Content-Type': 'application/json',
    body: JSON.stringify(data),
  });

  return response.json();
};

export const getAllPet = async () => {
  const response = await fetch(`${MAIN_API_URL}pets.json`, {
    method: 'GET',
  });

  return response.json();
};

export const getPetById = async (id) => {
  const response = await fetch(`${MAIN_API_URL}pets/${id}.json`, {
    method: 'GET',
  });

  return response.json();
};
