const installedIds = () => {
  const getInstalledApps = localStorage.getItem("installed-apps");
  return getInstalledApps ? JSON.parse(getInstalledApps) : [];
};

const addToStoredDB = (id) => {
  const installData = installedIds();
  const idNum = parseInt(id);
  if (!installData.includes(idNum)) {
    installData.push(idNum);
    localStorage.setItem("installed-apps", JSON.stringify(installData));
  }
};


const removeFromStoredDB = (id) => {
  const installData = installedIds();
  const idNum = parseInt(id);
  const updated = installData.filter((appId) => appId !== idNum);
  localStorage.setItem("installed-apps", JSON.stringify(updated));
};

export { addToStoredDB, installedIds, removeFromStoredDB };
