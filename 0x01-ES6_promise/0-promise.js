function getFullResponseFromAPI(apiEndpoint) {
  return new Promise((resolve, reject) => {
    if (apiEndpoint) resolve({ status: 200, body: 'Success' });
    reject(Error('Failed to fetch API'));
  });
}
// Export response kit
export default getFullResponseFromAPI;
