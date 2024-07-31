import { Line } from "react-chartjs-2"

const GeneralBullCharts = () => {
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
        },
      responsive: true
    }
  
    const labels = ["2024-04-29", "2024-05-06", "2024-05-13", "2024-05-20", "2024-05-27", "2024-06-03", "2024-06-10", "2024-06-17", "2024-06-24", "2024-07-01", "2024-07-08", "2024-07-15"]
  
    const productASales = [5035.69, 5086.69, 5431.69, 5310.69, 5146.69, 5761.69, 5584.69, 5532.69, 5987.69, 6125.69, 5856.69, 5420.69]
  
    const productBSales = [5035.69, 5048.69, 5123.69, 5245.69, 5489.69, 5214.69, 5236.69, 5687.69, 5423.69, 5264.69, 5987.69, 6254.69]
  
    const data = {
      labels,
      datasets: [
        {
          label: "General Bull",
          data: productASales,
          borderColor: "#758698",
          backgroundColor: "rgba(255, 255, 255)",
        },
        {
          label: "S&P 500",
          data: productBSales,
          borderColor: "#e5e7eb",
          backgroundColor: "rgba(255, 255, 255)"
        },
      ],
    }
  
    return <Line options={options} data={data} />
  }
  
  export default GeneralBullCharts;