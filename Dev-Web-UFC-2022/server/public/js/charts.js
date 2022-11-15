function createChartBar(contextHTML, name, labels, values){
    new Chart(contextHTML, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: name,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            data: values,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
}

function createChartLine(contextHTML, name, labels, values){
    new Chart(contextHTML, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: name,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            data: values,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
}