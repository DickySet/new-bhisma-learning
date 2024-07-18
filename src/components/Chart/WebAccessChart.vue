<template>
  <div class="chart-container">
    <Line :data="datacollection" :options="chartOptions"/>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend)

export default {
  name: 'WebAccessLineChart',
  components: {
    Line
  },
  data() {
    return {
      // jika dari response data
      // datacollection: {
      //   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      //   datasets: [
      //     {
      //       label: 'Web Access',
      //       backgroundColor: '#1E1E1F',
      //       borderColor: '#1E1E1F',
      //       data: [],
      //       fill: false
      //     }
      //   ]
      // },
      datacollection: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'Web Access',
            backgroundColor: '#1E1E1F',
            borderColor: '#1E1E1F',
            data: [40, 160, 70, 280, 39,  20, 340],
            fill: false
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  methods: {
    //jika data diambil dari response
    // fetchData() {
    //   axios.get('https://api.example.com/web-access')  // Ganti dengan endpoint API Anda
    //     .then(response => {
    //       const data = response.data;  // Asumsikan response adalah array objek
    //       this.datacollection.labels = data.map(item => item.day);
    //       this.datacollection.datasets[0].data = data.map(item => item.accessCount);
    //       this.loaded = true;
    //     })
    //     .catch(error => {
    //       console.error('Error fetching data', error);
    //     });
    // }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
}
</style>
