// Secure student data with encoded information
const secureData = [
  {id:1,name:"ABDULHAFIZ SHEMSEDIN",mark:74,c:"NDkzMg=="},
  {id:2,name:"ABDULKERIM",mark:95.3,c:"ODE1Ng=="},
  {id:3,name:"ABEL TSEGAYE",mark:91.3,c:"MjM3NA=="},
  {id:4,name:"ABEM SISAY",mark:98.7,c:"NjkwMQ=="},
  {id:5,name:"ABENEZER T/MIKAEL",mark:91.3,c:"MzI0Nw=="},
  {id:6,name:"AMIR YASSIN",mark:80.3,c:"NzU4OQ=="},
  {id:7,name:"AYNABEBA AYET",mark:87,c:"MTgyNg=="},
  {id:8,name:"BESUKAL GOBENA",mark:100,c:"NTQzOA=="},
  {id:9,name:"BETELEHEM YEHEYIS",mark:69.3,c:"OTA3Mg=="},
  {id:10,name:"BETELHEM KEFYALEW",mark:92.3,c:"NDYxOQ=="},
  {id:11,name:"BIRUK ASEFA",mark:82,c:"NzM1NA=="},
  {id:12,name:"DANIEL WONDIMU",mark:95,c:"MjA4NQ=="},
  {id:13,name:"DAWIT SHIMELIS",mark:99,c:"NjQyMw=="},
  {id:14,name:"DURETI BIRBIRSA",mark:73.7,c:"Mzk3MQ=="},
  {id:15,name:"EBRAHIM MOHAMMED",mark:94.7,c:"ODE2NA=="},
  {id:16,name:"EDOM DAGNACHEW",mark:81,c:"NTA5Nw=="},
  {id:17,name:"EKRAM HUSEN",mark:91.7,c:"Mjc0Ng=="},
  {id:18,name:"ELIDANA MUEZ",mark:78.3,c:"NjMxOA=="},
  {id:19,name:"ESKEDAR G/GIYORGIS",mark:95.7,c:"NDUyOQ=="},
  {id:20,name:"FIKER ASRES",mark:73.3,c:"NzgzNQ=="},
  {id:21,name:"GIRUM DESALEGN",mark:99,c:"MTI0Nw=="},
  {id:22,name:"MAHILET G/EGZIABIHER",mark:73,c:"OTY1Mw=="},
  {id:23,name:"MAREM YENUS",mark:74,c:"Mzg3Mg=="},
  {id:24,name:"MEKDES GETU",mark:73.3,c:"NzE5NA=="},
  {id:25,name:"MERON GETACHEW",mark:97.7,c:"MjU2OA=="},
  {id:26,name:"MILKI MENGISTU",mark:88.7,c:"ODQyMQ=="},
  {id:27,name:"MINTESINOT G/TSADIK",mark:82.7,c:"NTczNg=="},
  {id:28,name:"NATNAEL ABEBE",mark:74,c:"NDA1OQ=="},
  {id:29,name:"NATNAEL TSEHAY",mark:98.7,c:"NjgxNA=="},
  {id:30,name:"RUTH TESFAYE",mark:97.3,c:"MzI5Nw=="},
  {id:31,name:"SAMUEL MESFIN",mark:98,c:"MTU2Mg=="},
  {id:32,name:"SIFEN SISAY",mark:93.3,c:"NzQ4NQ=="},
  {id:33,name:"TINSAE ABRHAM",mark:90.3,c:"OTAzMQ=="},
  {id:34,name:"WORKINESH BIRHAN",mark:91.3,c:"NTE3OA=="},
  {id:35,name:"YABSIRA TEWODROS",mark:99,c:"MjY0Mw=="},
  {id:36,name:"YISHAK GIRMA",mark:97.7,c:"ODM5Ng=="},
  {id:37,name:"YOHANNES DAGINEH",mark:92.7,c:"NDcyNQ=="},
  {id:38,name:"YONATHAN DEMEKE",mark:90,c:"NjE1OQ=="},
  {id:39,name:"ZAKIR JEMAL",mark:95,c:"Mzg0Nw=="},
  {id:40,name:"ZELALEM MEBRATU",mark:98.3,c:"NzAyOA=="}
];

// Decode function
const decodeBase64 = (str) => {
  try {
    return atob(str);
  } catch {
    return str;
  }
};

// DEBUG flag - set to true for development, false for production
const DEBUG = false;

// Professional logging with DEBUG flag
const log = (...args) => {
  if (DEBUG) {
    console.log(...args);
  }
};

// Export decoded data with security
export const studentsData = (() => {
  const decoded = secureData.map(student => ({
    id: student.id,
    name: student.name,
    mark: student.mark,
    code: decodeBase64(student.c)
  }));
  
  log("Students data:", decoded);
  log("Number of students:", decoded.length);
  
  return Object.freeze(decoded);
})();
