const sheets = new Sheets({
    // old key: '1ct6USPp-JQQiDQhFlDQYzftwcR9OYNzPiqskQa8v36w',
    key: '1p2eZnHn-tVv1cosqBeWVy37hphWdQuyum-s-ljOSar4',
    query: 'order by A desc'
});

//new map
let map
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 30.9285096, lng: -95.261509},
      // @36.9285096,-115.261509,4z
      zoom: 4
    })


// get data from sheets
sheets.getData(data => {
    // loop through records and output to the screen:
    console.log(data)
    let num = 1
    // for each marker:
    data.records.forEach(record => {
      console.log(record)
          let infowindow = new google.maps.InfoWindow({
              content: record.total + ' Deported from ' + record.city_deported_from + ' (October 2002 through June 2017)'
          })
        // draw markers:
          let eachMarkers = new google.maps.Marker({
            position: {lat: record.lat, lng: record.long},
            map: map,
            title: record.city + ', ' + record.state  + '. Total Deported (October 2002 through June 2017) = ' + record.departures
            })
            eachMarkers.addListener('click', function() {
              infowindow.open(map, eachMarkers);
            })
    })


})
}
