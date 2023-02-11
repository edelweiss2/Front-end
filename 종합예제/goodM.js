searchData.forEach(function(addr, index) {
    geocoder.addressSearch(addr, function(result, status) {
        if (status === daum.maps.services.Status.OK) {
            var coords = new daum.maps.LatLng(result[0].y, result[0].x);

            var marker = new daum.maps.Marker({
                map: map,
                position: coords
            });  
            
            map.setCenter(coords);
        } 
    });
});

searchData.forEach(function(addr, index) {
    geocoder.addressSearch(addr, );
});

function(result, status) {
    if (status === daum.maps.services.Status.OK) {
        var coords = new daum.maps.LatLng(result[0].y, result[0].x);

        var marker = new daum.maps.Marker({
            map: map,
            position: coords
        });  
        
        map.setCenter(coords);
    } 
}

function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출합니다
        displayPlaces(data);

        // 페이지 번호를 표출합니다
        displayPagination(pagination);

    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

        alert('검색 결과가 존재하지 않습니다.');
        return;

    } else if (status === kakao.maps.services.Status.ERROR) {

        alert('검색 결과 중 오류가 발생했습니다.');
        return;

    }
}


