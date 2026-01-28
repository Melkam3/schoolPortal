// Secure student data with encoded information
const secureData = [
  {id:1,n:"QUJEVUxBSElaIFNIRU1TRURJbg==",m:74,c:"NDkzMg=="},
  {id:2,n:"QUJEVUxLRVJJTQ==",m:95.3,c:"ODE1Ng=="},
  {id:3,n:"QUJFTCBUU0VHQVlF",m:91.3,c:"MjM3NA=="},
  {id:4,n:"QUJFTSBTSVNBWQ==",m:98.7,c:"NjkwMQ=="},
  {id:5,n:"QUJFTkVaRVIgVC9NSUtBRUw=",m:91.3,c:"MzI0Nw=="},
  {id:6,n:"QU1JUiBZQVNTSU4=",m:80.3,c:"NzU4OQ=="},
  {id:7,n:"QVlOQUJFQkEgQVlFVA==",m:87,c:"MTgyNg=="},
  {id:8,n:"QkVTVUtBTCBHT0JFTkE=",m:100,c:"NTQzOA=="},
  {id:9,n:"QkVURUxFSEVNIFlFSEVZSVM=",m:69.3,c:"OTA3Mg=="},
  {id:10,n:"QkVURUxIRU0gS0VGWUFMRVc=",m:92.3,c:"NDYxOQ=="},
  {id:11,n:"QklSVUsgQVNGQQ==",m:82,c:"NzM1NA=="},
  {id:12,n:"RkFOSUVMIFdPTkRJTVU=",m:95,c:"MjA4NQ=="},
  {id:13,n:"REFXSVQgU0hJTUVMU1M=",m:99,c:"NjQyMw=="},
  {id:14,n:"RFVSRVRJIEJJUkJJUlNB",m:73.7,c:"Mzk3MQ=="},
  {id:15,n:"RUJSQUhJTSBNT0hBTU1FRQ==",m:94.7,c:"ODE2NA=="},
  {id:16,n:"RURPTSBEQUdOQUNIRVc=",m:81,c:"NTA5Nw=="},
  {id:17,n:"RUtSQU0gSFVTRU4=",m:91.7,c:"Mjc0Ng=="},
  {id:18,n:"RUxJREFOQSBNVUVa",m:78.3,c:"NjMxOA=="},
  {id:19,n:"RVNLREFSIEcvR0lZT1JHSVM=",m:95.7,c:"NDUyOQ=="},
  {id:20,n:"RklLRVIgQVNSRVM=",m:73.3,c:"NzgzNQ=="},
  {id:21,n:"R0lSVU0gREVTRUFFR04=",m:99,c:"MTI0Nw=="},
  {id:22,n:"TUFISUxFVCBHL0VHWklBQkhFUg==",m:73,c:"OTY1Mw=="},
  {id:23,n:"TUFJRU0gWUVOVVM=",m:74,c:"Mzg3Mg=="},
  {id:24,n:"TUVLREVTIEdFVFU=",m:73.3,c:"NzE5NA=="},
  {id:25,n:"TUVST04gR0VUQUNIRVc=",m:97.7,c:"MjU2OA=="},
  {id:26,n:"TUtJTEkgTUVOR0lTVFU=",m:88.7,c:"ODQyMQ=="},
  {id:27,n:"TUlOVEVTSU5PVCBHL1RTQURJSw==",m:82.7,c:"NTczNg=="},
  {id:28,n:"TkFUTkFFTCBBQkVCRQ==",m:74,c:"NDA1OQ=="},
  {id:29,n:"TkFUTkFFTCBUU0VIQVk=",m:98.7,c:"NjgxNA=="},
  {id:30,n:"SVVUSCBURVNGQVlF",m:97.3,c:"MzI5Nw=="},
  {id:31,n:"U0FNVUVMIE1FU0ZJTg==",m:98,c:"MTU2Mg=="},
  {id:32,n:"U0lGRU4gU0lTQVk=",m:93.3,c:"NzQ4NQ=="},
  {id:33,n:"VElOU0FFIEFCUkhBTQ==",m:90.3,c:"OTAzMQ=="},
  {id:34,n:"V09SS0lORVNIIEJJUkhBTg==",m:91.3,c:"NTE3OA=="},
  {id:35,n:"WUFCU0lSQSBURVdPRE9T",m:99,c:"MjY0Mw=="},
  {id:36,n:"WUlTQUsgR0lSTUE=",m:97.7,c:"ODM5Ng=="},
  {id:37,n:"WU9IQU5ORVMgREFHSU5FSA==",m:92.7,c:"NDcyNQ=="},
  {id:38,n:"WVVOQVNFIERFTUVLRQ==",m:90,c:"NjE1OQ=="},
  {id:39,n:"WVVOQVNFIEpFTUFM",m:95,c:"Mzg0Nw=="},
  {id:40,n:"WVVOQVNFIE1FQlJBVFU=",m:98.3,c:"NzAyOA=="}
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
    name: decodeBase64(student.n),
    mark: student.m,
    code: decodeBase64(student.c)
  }));
  
  // Professional debug logging
  log("Students data:", decoded);
  log("Number of students:", decoded.length);
  
  // Freeze the object to prevent modifications
  return Object.freeze(decoded);
})();
