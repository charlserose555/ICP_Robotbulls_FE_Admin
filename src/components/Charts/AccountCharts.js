import { Line } from "react-chartjs-2"

const AccountCharts = () => {
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
  
    const labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  
    const productASales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  
 
    const data = {
      labels,
      datasets: [
        {
          label: "Account",
          data: productASales,
          borderColor: "#e6effb",
          backgroundColor: "rgba(255, 255, 255)",
        },
      ],
    }
  
    return <Line options={options} data={data} />
  }
  
  export default AccountCharts;