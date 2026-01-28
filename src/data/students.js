// Secure student data with encoded information
const secureData = [
  {id:1,name:"ABDULHAFIZ SHEMSEDIN",mark:"NzQ=",c:"NDkzMg=="},
  {id:2,name:"ABDULKERIM",mark:"OTUuMw==",c:"ODE1Ng=="},
  {id:3,name:"ABEL TSEGAYE",mark:"OTEuMw==",c:"MjM3NA=="},
  {id:4,name:"ABEM SISAY",mark:"OTguNw==",c:"NjkwMQ=="},
  {id:5,name:"ABENEZER T/MIKAEL",mark:"OTEuMw==",c:"MzI0Nw=="},
  {id:6,name:"AMIR YASSIN",mark:"ODAuMw==",c:"NzU4OQ=="},
  {id:7,name:"AYNABEBA AYET",mark:"ODc=",c:"MTgyNg=="},
  {id:8,name:"BESUKAL GOBENA",mark:"MTAw",c:"NTQzOA=="},
  {id:9,name:"BETELEHEM YEHEYIS",mark:"NjkuMw==",c:"OTA3Mg=="},
  {id:10,name:"BETELHEM KEFYALEW",mark:"OTIuMw==",c:"NDYxOQ=="},
  {id:11,name:"BIRUK ASEFA",mark:"ODI=",c:"NzM1NA=="},
  {id:12,name:"DANIEL WONDIMU",mark:"OTU=",c:"MjA4NQ=="},
  {id:13,name:"DAWIT SHIMELIS",mark:"OTk=",c:"NjQyMw=="},
  {id:14,name:"DURETI BIRBIRSA",mark:"NzMuNw==",c:"Mzk3MQ=="},
  {id:15,name:"EBRAHIM MOHAMMED",mark:"OTQuNw==",c:"ODE2NA=="},
  {id:16,name:"EDOM DAGNACHEW",mark:"ODE=",c:"NTA5Nw=="},
  {id:17,name:"EKRAM HUSEN",mark:"OTEuNw==",c:"Mjc0Ng=="},
  {id:18,name:"ELIDANA MUEZ",mark:"NzguMw==",c:"NjMxOA=="},
  {id:19,name:"ESKEDAR G/GIYORGIS",mark:"OTUuNw==",c:"NDUyOQ=="},
  {id:20,name:"FIKER ASRES",mark:"NzMuMw==",c:"NzgzNQ=="},
  {id:21,name:"GIRUM DESALEGN",mark:"OTk=",c:"MTI0Nw=="},
  {id:22,name:"MAHILET G/EGZIABIHER",mark:"NzM=",c:"OTY1Mw=="},
  {id:23,name:"MAREM YENUS",mark:"NzQ=",c:"Mzg3Mg=="},
  {id:24,name:"MEKDES GETU",mark:"NzMuMw==",c:"NzE5NA=="},
  {id:25,name:"MERON GETACHEW",mark:"OTcuNw==",c:"MjU2OA=="},
  {id:26,name:"MILKI MENGISTU",mark:"ODguNw==",c:"ODQyMQ=="},
  {id:27,name:"MINTESINOT G/TSADIK",mark:"ODIuNw==",c:"NTczNg=="},
  {id:28,name:"NATNAEL ABEBE",mark:"NzQ=",c:"NDA1OQ=="},
  {id:29,name:"NATNAEL TSEHAY",mark:"OTguNw==",c:"NjgxNA=="},
  {id:30,name:"RUTH TESFAYE",mark:"OTcuMw==",c:"MzI5Nw=="},
  {id:31,name:"SAMUEL MESFIN",mark:"OTg=",c:"MTU2Mg=="},
  {id:32,name:"SIFEN SISAY",mark:"OTMuMw==",c:"NzQ4NQ=="},
  {id:33,name:"TINSAE ABRHAM",mark:"OTAuMw==",c:"OTAzMQ=="},
  {id:34,name:"WORKINESH BIRHAN",mark:"OTEuMw==",c:"NTE3OA=="},
  {id:35,name:"YABSIRA TEWODROS",mark:"OTk=",c:"MjY0Mw=="},
  {id:36,name:"YISHAK GIRMA",mark:"OTcuNw==",c:"ODM5Ng=="},
  {id:37,name:"YOHANNES DAGINEH",mark:"OTIuNw==",c:"NDcyNQ=="},
  {id:38,name:"YONATHAN DEMEKE",mark:"OTA=",c:"NjE1OQ=="},
  {id:39,name:"ZAKIR JEMAL",mark:"OTU=",c:"Mzg0Nw=="},
  {id:40,name:"ZELALEM MEBRATU",mark:"OTguMw==",c:"NzAyOA=="}
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
    mark: parseFloat(decodeBase64(student.mark)),
    code: decodeBase64(student.c)
  }));
  
  log("Students data:", decoded);
  log("Number of students:", decoded.length);
  
  return Object.freeze(decoded);
})();
