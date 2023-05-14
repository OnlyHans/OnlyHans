var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      console.log(response);
      // Process the JSON data
      //var temp = response["temperatura"];
      //var vlaga = response["vlaznost"];
      //var glas = response["glasnost"];
      //var svetl = response["svetlost"];
      myLineChartTemperatura.data.datasets[0].data = response.temperatura;
      myLineChartTemperatura.update();

      myLineChartVlaga.data.datasets[0].data = response.vlaga;
      myLineChartVlaga.update();

      myLineChartGlasnost.data.datasets[0].data = response.glasnost;
      myLineChartGlasnost.update();

      myLineChartSvetlost.data.datasets[0].data = response.svetloba;
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