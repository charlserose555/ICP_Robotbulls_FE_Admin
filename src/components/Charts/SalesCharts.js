import { Line } from "react-chartjs-2"

const SalesCharts = () => {
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
  
    const labels = ["02 Jul", "03 Jul", "04 Jul", "05 Jul", "06 Jul", "07 Jul", "08 Jul", "09 Jul", "10 Jul", "11 Jul", "12 Jul", "13 Jul", "14 Jul", "15 Jul",
      "16 Jul", "17 Jul", "18 Jul", "19 Jul", "20 Jul", "21 Jul", "22 Jul", "23 Jul", "24 Jul", "25 Jul", "26 Jul", "27 Jul", "28 Jul", "29 Jul", "30 Jul", "31 Jul"
    ]
  
    const productASales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  
 
    const data = {
      labels,
      datasets: [
        {
          label: "Sales",
          data: productASales,
          borderColor: "#2c80ff",
          backgroundColor: "rgba(255, 255, 255)",
        },
      ],
    }
  
    return <Line options={options} data={data} />
  }
  
  export default SalesCharts;