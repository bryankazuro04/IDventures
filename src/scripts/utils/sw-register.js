import * as WorkboxWindow from "workbox-window";

const swRegister = async () => {
  if (!("serviceWorker" in navigator)) {
    console.log("Service worker not supported in the browser");
    return;
  }

  const wb = new WorkboxWindow.Workbox("./sw.bundle.js");

  try {
    wb.register();
    console.log("service worker registered");
  } catch (error) {
    console.log("Failed to register service worker", error);
  }
};

export default swRegister;
