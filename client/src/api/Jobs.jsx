const BASE_URL =
  import.meta.env.PROD
    ? 'https://my-api-jsbh.onrender.com'
    : 'http://localhost:9000';

export const addJob = async (newJob) => {
  await fetch(`${BASE_URL}/jobs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newJob),
  });
};

export const deleteJob = async (id) => {
  await fetch(`${BASE_URL}/jobs/${id}`, {
    method: 'DELETE',
  });
};

export const updateJob = async (job) => {
  await fetch(`${BASE_URL}/jobs/${job.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(job),
  });
};
console.log('Is production?', import.meta.env.PROD);
