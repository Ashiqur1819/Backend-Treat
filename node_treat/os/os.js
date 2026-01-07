const os = require("os");

const osPlatform = os.platform();
console.log("This is os platform: ", osPlatform);

const userInfo = os.userInfo();
console.log("User: ", userInfo);

const osArch = os.arch();
console.log("CPU architecture: ", osArch);

const osFreeMemory = os.freemem();
console.log("Free memory: ", osFreeMemory, " bytes");

const totalMemory = os.totalmem();
console.log("Total memory: ", totalMemory, " bytes");

const upTime = os.uptime();
console.log("Uptime: ", upTime, " second");

const homeDir = os.homedir();
console.log("Home directory: ", homeDir);

const hostName = os.hostname();
console.log("Host name: ", hostName);

const networkInterfaces = os.networkInterfaces();
console.log("Network interfaces: ", networkInterfaces);

const cpus = os.cpus();
console.log("CPUS: ", cpus);

const tpmDir = os.tmpdir();
console.log("Temporary directory: ", tpmDir);
