// 파일 경로와 관련된 작업에 사용하는 코어 모듈

const path = require("node:path");
console.log(path);

// path.join 경로 구분자를 사용해 경로를 하나로 합침
const dirpath = path.join("jeong", "woo", "park");
console.log(dirpath);

// path.extname() 파일 이름 인자로 받아, 파일 확장자명 반환

console.log(path.extname("path.js"));
