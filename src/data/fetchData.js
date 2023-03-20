import jobs from './jobs.json';

// Function to get jobs that satisfy the search query
async function getJobs(page, q = null) {
  // eslint-disable-next-line no-unused-vars
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });

  await promise;

  if (q) {
    const filterJobs = jobs.filter(
      (job) => job.title.includes(q)
            || job.description.includes(q)
            || job.city.includes(q)
            || job.skills.some((skill) => skill.includes(q)),
    );
    return { jobs: filterJobs, pagesTotal: 1 };
  }
  return { jobs: jobs.slice((page - 1) * 6, page * 6 - 1), pagesTotal: 3 };
}

// Function to get a certain job matching the id
async function getJob(id) {
  // eslint-disable-next-line no-unused-vars
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });

  await promise;

  return jobs.find((job) => job.id === id);
}

export default { getJobs, getJob };
