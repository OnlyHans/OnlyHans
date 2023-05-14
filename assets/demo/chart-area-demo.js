// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
// Adjusting the chart options
var temperaturaChartOptions = {
  scales: {
    xAxes: [{
      time: {
        unit: 'date'
      },
      gridLines: {
        display: false
      },
      ticks: {
        maxTicksLimit: 7
      }
    }],
    yAxes: [{
      ticks: {
        min: 0,
        max: 100, // Adjust the maximum value according to your data
        maxTicksLimit: 5
      },
      gridLines: {
        color: "rgba(0, 0, 0, .125)",
      }
    }],
  },
  legend: {
    display: false
  }
};

// Adjusting the chart data structure
var temperaturaChartData = {
  labels: response.labels, // Assuming the server response includes an array of labels
  datasets: [{
    label: "Temperature",
    lineTension: 0.3,
    backgroundColor: "rgba(2,117,216,0.2)",
    borderColor: "rgba(2,117,216,1)",
    pointRadius: 5,
    pointBackgroundColor: "rgba(2,117,216,1)",
    pointBorderColor: "rgba(255,255,255,0.8)",
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(2,117,216,1)",
    pointHitRadius: 50,
    pointBorderWidth: 2,
    data: response.temperatura // Assuming the server response includes an array of temperature values
  }],
};

// Update temperatura chart options and data
myLineChartTemperatura.options = temperaturaChartOptions;
myLineChartTemperatura.data = temperaturaChartData;
myLineChartTemperatura.update();

// Adjusting the chart options
var temperaturaChartOptions = {
  scales: {
    xAxes: [{
      time: {
        unit: 'date'
      },
      gridLines: {
        display: false
      },
      ticks: {
        maxTicksLimit: 7
      }
    }],
    yAxes: [{
      ticks: {
        min: 0,
        max: 100, // Adjust the maximum value according to your data
        maxTicksLimit: 5
      },
      gridLines: {
        color: "rgba(0, 0, 0, .125)",
      }
    }],
  },
  legend: {
    display: false
  }
};


// Adjusting the chart data structure
var vlagaChartData = {
  labels: response.labels, // Assuming the server response includes an array of labels
  datasets: [{
    label: "Vlaga",
    lineTension: 0.3,
    backgroundColor: "rgba(2,117,216,0.2)",
    borderColor: "rgba(2,117,216,1)",
    pointRadius: 5,
    pointBackgroundColor: "rgba(2,117,216,1)",
    pointBorderColor: "rgba(255,255,255,0.8)",
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(2,117,216,1)",
    pointHitRadius: 50,
    pointBorderWidth: 2,
    data: response.vlaga // Assuming the server response includes an array of temperature values
  }],
};

// Update temperatura chart options and data
myLineChartVlaga.options = vlagaChartOptions;
myLineChartVlaga.data = vlagaChartData;
myLineChartVlaga.update();

// Adjusting the chart options
var temperaturaChartOptions = {
  scales: {
    xAxes: [{
      time: {
        unit: 'date'
      },
      gridLines: {
        display: false
      },
      ticks: {
        maxTicksLimit: 7
      }
    }],
    yAxes: [{
      ticks: {
        min: 0,
        max: 100, // Adjust the maximum value according to your data
        maxTicksLimit: 5
      },
      gridLines: {
        color: "rgba(0, 0, 0, .125)",
      }
    }],
  },
  legend: {
    display: false
  }
};

// Adjusting the chart data structure
var svetlostChartData = {
  labels: response.labels, // Assuming the server response includes an array of labels
  datasets: [{
    label: "Svetlost",
    lineTension: 0.3,
    backgroundColor: "rgba(2,117,216,0.2)",
    borderColor: "rgba(2,117,216,1)",
    pointRadius: 5,
    pointBackgroundColor: "rgba(2,117,216,1)",
    pointBorderColor: "rgba(255,255,255,0.8)",
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(2,117,216,1)",
    pointHitRadius: 50,
    pointBorderWidth: 2,
    data: response.svetlost // Assuming the server response includes an array of temperature values
  }],
};

// Update temperatura chart options and data
myLineChartSvetlost.options = svetlostChartOptions;
myLineChartSvetlost.data = svetlostChartData;
myLineChartSvetlost.update();


// Adjusting the chart options
var temperaturaChartOptions = {
  scales: {
    xAxes: [{
      time: {
        unit: 'date'
      },
      gridLines: {
        display: false
      },
      ticks: {
        maxTicksLimit: 7
      }
    }],
    yAxes: [{
      ticks: {
        min: 0,
        max: 100, // Adjust the maximum value according to your data
        maxTicksLimit: 5
      },
      gridLines: {
        color: "rgba(0, 0, 0, .125)",
      }
    }],
  },
  legend: {
    display: false
  }
};

// Adjusting the chart data structure
var glasnostChartData = {
  labels: response.labels, // Assuming the server response includes an array of labels
  datasets: [{
    label: "Glasnost",
    lineTension: 0.3,
    backgroundColor: "rgba(2,117,216,0.2)",
    borderColor: "rgba(2,117,216,1)",
    pointRadius: 5,
    pointBackgroundColor: "rgba(2,117,216,1)",
    pointBorderColor: "rgba(255,255,255,0.8)",
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(2,117,216,1)",
    pointHitRadius: 50,
    pointBorderWidth: 2,
    data: response.glasnost // Assuming the server response includes an array of temperature values
  }],
};

// Update temperatura chart options and data
myLineChartGlasnost.options = glasnostChartOptions;
myLineChartGlasnost.data = glasnostChartData;
myLineChartGlasnost.update();




