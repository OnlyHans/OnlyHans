var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      console.log(response);
      // Process the JSON data
      var temperaturaData = [];
      var vlagaData = [];
      var glasnostData = [];
      var svetlostData = [];
      for (var i = 0; i < response.length; i++) {
        temperaturaData.push(response[i].temperatura);
        vlagaData.push(response[i].vlaga);
        glasnostData.push(response[i].glasnost);
        svetlostData.push(response[i].svetlost);
      }
      myLineChartTemperatura.data.datasets[0].data = temperaturaData;
      myLineChartTemperatura.update();

      myLineChartVlaga.data.datasets[0].data = vlagaData;
      myLineChartVlaga.update();

      myLineChartGlasnost.data.datasets[0].data = glasnostData;
      myLineChartGlasnost.update();

      myLineChartSvetlost.data.datasets[0].data = svetlostData;
      myLineChartSvetlost.update();
    } else {
      console.error('Error:', xhr.status);
      // Handle the error
    }
  }
};
xhr.open('GET', '/api', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();