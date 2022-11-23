<template>
  <div class="flex items-center justify-center py-8 px-4">
    <div class="">
      <canvas id="myChart" width="1200" height="500" legend="false"></canvas>
    </div>
  </div>
</template>

<script>

import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineController, LineElement, PointElement, Chart, Filler} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, LineController,Filler)

export default {
  name: "index",
  data() {
    return {
      chartId: "myChart",
      chartData: {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July", "Aug", "Sep", "Nov", "Dec"],
          datasets: [
            {
              label: 'Previous Period',
              borderColor: "4262FF",
              data: [600, 400, 620, 300, 200, 600, 230, 300, 200, 200, 100, 1200],
              fill: true,
              backgroundColor: "rgba(10, 10, 0, 0.1)",
              pointBackgroundColor: "#4A5568",
              borderWidth: "3",
              pointBorderWidth: "4",
              pointHoverRadius: "0",
              pointHoverBorderWidth: "8",
              pointHoverBorderColor: "rgb(74,85,104,0.2)",
            },
            {
              label: 'Current Period',
              borderColor: "E1E6FE",
              data: [500, 200, 820, 100, 290, 300, 210, 390, 300, 280, 200, 1100],
              fill: true,
              backgroundColor: "rgba(0, 10, 0, 0.1)",
              pointBackgroundColor: "blue",
              borderWidth: "3",
              pointBorderWidth: "4",
              pointHoverRadius: "6",
              pointHoverBorderWidth: "8",
              pointHoverBorderColor: "rgb(74,85,104,0.2)",
            },

          ],
        },
        options: {
          legend: {
            display: false,
          },
          scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
              grid: {
                display: false
              }
            }
          },
        },
      }
    };
  },
  mounted() {
    this.createChart(this.chartId, this.chartData);
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    },
  },
};</script>
