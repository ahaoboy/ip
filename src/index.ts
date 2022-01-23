import os from "os";
export const getIp = () => {
  for (const v of Object.values(os.networkInterfaces())) {
    if (!v) continue;
    for (const net of v) {
      const { family, address, internal } = net;
      if (family === "IPv4" && !internal) {
        return address;
      }
    }
  }
  return null;
};

console.log(getIp());
