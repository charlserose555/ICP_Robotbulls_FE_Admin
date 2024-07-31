import { Doughnut } from "react-chartjs-2"

const KycCharts = () => {
    const options = {
      responsive: true,
      plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: false,
            text: "",
        },
        tooltips: {
            mode: "index",
            intersect: false,
        },
        hover: {
            mode: "nearest",
            intersect: true,
        }
      },
      hover: {
              mode: 'index',
              intersect: true,
      },
      interaction: {
              mode: "index",
              intersect: false,
      }
    }
  
    const labels = []
  
    const productASales = [0, 0, 0.8, 0.6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  
 
    const data = {
      labels: [
        'kyc countries',
      ],
      datasets: [{
        label: '',
        data: [300, 5],
        backgroundColor: [
          '#eef2f8',
          '#ffffff',
        ],
        hoverOffset: 4
      }]
    }
  
    return <Doughnut options={options} data={data} />
  }
  
  export default KycCharts;