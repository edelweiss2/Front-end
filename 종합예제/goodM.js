for ( var i=0; i<places.length; i++ ) {

    // 마커를 생성하고 지도에 표시합니다
    var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
        marker = addMarker(placePosition, i), 
        itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
    // LatLngBounds 객체에 좌표를 추가합니다
    bounds.extend(placePosition);

    // 마커와 검색결과 항목에 mouseover 했을때
    // 해당 장소에 인포윈도우에 장소명을 표시합니다
    // mouseout 했을 때는 인포윈도우를 닫습니다
    (function(marker, title) {
        kakao.maps.event.addListener(marker, 'mouseover', function() {
            displayInfowindow(marker, title);
        });

        kakao.maps.event.addListener(marker, 'mouseout', function() {
            infowindow.close();
        });

        itemEl.onmouseover =  function () {
            displayInfowindow(marker, title);
        };

        itemEl.onmouseout =  function () {
            infowindow.close();
        };
    })(marker, places[i].place_name);

    fragment.appendChild(itemEl);
}