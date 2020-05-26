(function(){
  var accessPossibleHost = ['localhost', '127.0.0.1:4000', 'house-design.github.io', '여수인테리어.kr'];
  if (!accessPossibleHost.includes(location.host)) {
    alert('불법복제된 사이트입니다.');
    window.onload = function () {
      document.open();
      document.write('close site');
      document.close();
    }
  }
})()