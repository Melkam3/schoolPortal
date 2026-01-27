// Secure student data with encoded information
const secureData = [
  {id:1,n:"QUJEVUxBSElaIFNIRU1TRURJbg==",m:74,c:"NDkzMg=="},
  {id:2,n:"QUJEVUxLRVJJTQ==",m:95.3,c:"ODE1Ng=="},
  {id:3,n:"QUJFTCBUU0VHQVlF",m:91.3,c:"MjM3NA=="},
  {id:4,n:"QUJFTSBTSVNBWQ==",m:98.7,c:"NjkwMQ=="},
  {id:5,n:"QUJFTkVaRVIgVC9NSUtBRUw=",m:91.3,c:"MzI0Nw=="},
  {id:6,n:"QUJFVEVSRVQgQUJFQkU=",m:85.7,c:"NzY1NA=="},
  {id:7,n:"QUJSSUhFVCBFRFJJUw==",m:92.3,c:"Mjg5MA=="},
  {id:8,n:"QUJSTkVDSCBBSFRFUk9N",m:88.7,c:"NTEyMw=="},
  {id:9,n:"QUJSSUhFVCBCRVJJQU5V",m:94.7,c:"ODQ1Ng=="},
  {id:10,n:"QUJSSUhFVCBNSVJBVw==",m:89.3,c:"MzY3OA=="},
  {id:11,n:"QUJSSUhFVCBUSE9NQVM=",m:90.7,c:"NzI5MA=="},
  {id:12,n:"QUJSSUhFVCBZQU5ORVM=",m:87.3,c:"NDU2Nw=="},
  {id:13,n:"QUJSSUhFVCBWRUJFRU5B",m:93.7,c:"NjM0Mg=="},
  {id:14,n:"QUJSSU1BRUwgQUJCTw==",m:86.3,c:"ODE5Mg=="},
  {id:15,n:"QUJSSU1BRUwgSEFJMRQ==",m:91.7,c:"NTQzMg=="},
  {id:16,n:"QUJSSU1BRUwgSEFNTUQ=",m:88.3,c:"MjcwNQ=="},
  {id:17,n:"QUJSSU1BRUwgSEFNTUVE",m:95.7,c:"NzE0Mg=="},
  {id:18,n:"QUJSSU1BRUwgSEFNTUVE",m:89.7,c:"NDM1Ng=="},
  {id:19,n:"QUJSSU1BRUwgSEFNTUVE",m:92.7,c:"NjU0Mw=="},
  {id:20,n:"QUJSSU1BRUwgSEFNTUVE",m:90.3,c:"MzQ1Ng=="},
  {id:21,n:"QUJSSU1BRUwgSEFNTUVE",m:87.7,c:"Nzg5Mg=="},
  {id:22,n:"QUJSSU1BRUwgSEFNTUVE",m:94.3,c:"NTY3OA=="},
  {id:23,n:"QUJSSU1BRUwgSEFNTUVE",m:86.7,c:"MjM0NQ=="},
  {id:24,n:"QUJSSU1BRUwgSEFNTUVE",m:91.3,c:"ODkxMg=="},
  {id:25,n:"QUJSSU1BRUwgSEFNTUVE",m:88.7,c:"NDU2Nw=="},
  {id:26,n:"QUJSSU1BRUwgSEFNTUVE",m:93.7,c:"NzY1NA=="},
  {id:27,n:"QUJSSU1BRUwgSEFNTUVE",m:90.7,c:"MzQ1Ng=="},
  {id:28,n:"QUJSSU1BRUwgSEFNTUVE",m:87.3,c:"NTY3OA=="},
  {id:29,n:"QUJSSU1BRUwgSEFNTUVE",m:95.3,c:"MjM0NQ=="},
  {id:30,n:"QUJSSU1BRUwgSEFNTUVE",m:89.7,c:"ODkxMg=="},
  {id:31,n:"QUJSSU1BRUwgSEFNTUVE",m:92.7,c:"NDU2Nw=="},
  {id:32,n:"QUJSSU1BRUwgSEFNTUVE",m:86.3,c:"NzY1NA=="},
  {id:33,n:"VElOU0FFIEFCUkhBTQ==",m:90.3,c:"OTAzMQ=="},
  {id:34,n:"V09SS0lORVNIIEJJUkhBTg==",m:91.3,c:"NTE3OA=="},
  {id:35,n:"WUFCU0lSQSBURVdPRE9T",m:99,c:"MjY0Mw=="},
  {id:36,n:"WUlTQUsgI0dJUk1B",m:97.7,c:"ODM5Ng=="},
  {id:37,n:"WU9IQU5ORVMgREFHSU5FSA==",m:92.7,c:"NDcyNQ=="},
  {id:38,n:"WVVOQVNFIEFSQUlZTw==",m:89.3,c:"NjE4Mg=="},
  {id:39,n:"WVVOQVNFIEJFUkhBTQ==",m:94.7,c:"NTI5NA=="},
  {id:40,n:"WVVOQVNFIEtJUk9T",m:88.7,c:"NzE1Mg=="}
];

// Decode function
const decodeBase64 = (str) => {
  try {
    return atob(str);
  } catch {
    return str;
  }
};

// Disable console in production
if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
  console.info = () => {};
  console.debug = () => {};
  console.warn = () => {};
  console.error = () => {};
}

// Export decoded data with security
export const studentsData = (() => {
  const decoded = secureData.map(student => ({
    id: student.id,
    name: decodeBase64(student.n),
    mark: student.m,
    code: decodeBase64(student.c)
  }));
  
  // Freeze the object to prevent modifications
  return Object.freeze(decoded);
})();
