var loadMap = function(x, y, elementId) {
  elementId = elementId || 'map';
  
  var latLng = new naver.maps.LatLng(x, y);
  var mapOptions = {
      center: latLng,
      zoom: 17,

      // 인터렉션 끄기
      draggable: false,
      pinchZoom: false,
      scrollWheel: false,
      keyboardShortcuts: false,
      disableDoubleTapZoom: true,
      disableDoubleClickZoom: true,
      disableTwoFingerTapZoom: true
  };

  var map = new naver.maps.Map(elementId, mapOptions);
  var marker = new naver.maps.Marker({
      position: latLng,
      map: map
  });

  var infowindow = new naver.maps.InfoWindow({
      content: [
          '<div class="iw_inner" style="width: 200px;height: 105px;padding:15px">',
          '   <img class="mb-2" src="assets/img/logo_title.png" style="max-height: 24px; width: auto;"><br />',
          '   <small style="margin:0px">전라남도 여수시 신기북 1길 9<br />',
          '       <a href="http://house-design.github.io/yeosu" target="_blank">21세기 하우스플랜</a>',
          '   </small>',
          '</div>'
      ].join('')
  });

  infowindow.open(map, marker);

}