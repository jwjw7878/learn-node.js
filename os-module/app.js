const os = require("node:os");
console.log(os);

const currentOS = {
  // 현재 사용하는 컴퓨터의 운영 체제 이름
  name: os.type(),
  // 현재 프로세서의 아키텍처를 나타내는 문자열 반환
  architecture: os.arch(),
  // node.js가 실행되고 있는 운영 체제의 플랫폼을 나타내는 문자열
  platform: os.platform(),
  //   운영 체제 버전에 대한 추가 정보를 문자열로 반환
  release: os.release(),
};

console.log(currentOS);
console.log(`총 메모리 ${os.totalmem()}`);
console.log(`남은 메모리 ${os.freemem()}`);
