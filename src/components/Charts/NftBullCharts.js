import { Line } from "react-chartjs-2"

const NftBullCharts = () => {
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
  
    const productASales = [63844.85, 63814.85, 62844.85, 64544.85, 63454.85, 63644.85, 69744.85, 63444.85, 67544.85, 69444.85, 65144.85, 68444.85]
  
    const productBSales = [63844.85, 63232.85, 63234.85, 63723.85, 63273.85, 69545.85, 65272.85, 67623.85, 68253.85, 69322.85, 63521.85, 66342.85]
  
    const data = {
      labels,
      datasets: [
        {
          label: "NFT Bull",
          data: productASales,
          borderColor: "#e6effb",
          backgroundColor: "rgba(255, 255, 255)",
        },
        {
          label: "International NFTs",
          data: productBSales,
          borderColor: "#e5e7eb",
          backgroundColor: "rgba(255, 255, 255)"
        },
      ],
    }
  
    return <Line options={options} data={data} />
  }
  
  export default NftBullCharts;