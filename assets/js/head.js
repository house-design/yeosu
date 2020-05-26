'use strict';
(function(){
  var accessPossibleHost = ['localhost:4000', '127.0.0.1:4000', 'house-design.github.io', '여수인테리어.kr'];
  if (!accessPossibleHost.includes(location.host)) {
    alert('코드불법 사용이 확인되었습니다.');
    window.onload = function () {
      document.open();
      document.write('close site');
      document.close();
    }
  }
})()