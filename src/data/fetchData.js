import jobs from './jobs.json';

async function getJobs(page) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
  await promise;
  return { jobs: jobs.slice((page - 1) * 6, page * 6 - 1), pagesTotal: 3 };
}

export default { getJobs };
