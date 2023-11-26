export const CONFIG = {
  name: 'Fresh Beginnings Publishing',

  origin: 'https://freshbeginningspublishing.com',
  basePathname: '/', // Change this if you need to deploy to Github Pages,
  trailingSlash: false, // Generate permalinks with or without "/" at the end

  // SEO
  defaultTitle: 'Fresh Beginnings Publishing',
  description:
    'Fresh Beginnings Publishing is a small, independent publishing company dedicated to bringing joy and inspiration to children through captivating storytelling. Our debut publication, "Rusty the Raccoon," is a heartwarming tale that follows Rusty\'s courageous journey of overcoming his fear of the dark.',

  language: 'en',
  textDirection: 'ltr',

  // sanity
  sanity: {
    projectId: '6g9k3q3x',
    dataset: 'development', // make dynamic later
    apiVersion: '2021-03-25',
  },
};
