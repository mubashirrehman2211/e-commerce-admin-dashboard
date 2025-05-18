<script setup lang="ts">
import {Line} from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title, Tooltip, Legend,
  LineElement, PointElement, CategoryScale, LinearScale
} from 'chart.js';
import type {ChartOptions} from 'chart.js';

ChartJS.register(
    Title, Tooltip, Legend,
    LineElement, PointElement, CategoryScale, LinearScale
);

interface ChartDataset {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
  tension?: number;
}

interface RevenueChartData {
  labels: string[];
  datasets: ChartDataset[];
}

defineProps<{
  chartData: RevenueChartData;
}>();

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: 'index'
  },
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
      labels: {
        color: '#22c55e',
        font: {
          family: "'Inter', sans-serif",
          size: 14,
          weight: 600
        },
        padding: 20,
        boxWidth: 12,
        usePointStyle: true
      }
    },
    tooltip: {
      backgroundColor: '#1F2937',
      titleColor: '#F9FAFB',
      bodyColor: '#F9FAFB',
      titleFont: {
        weight: 600,
        size: 14
      },
      bodyFont: {
        size: 12
      },
      borderColor: '#333',
      borderWidth: 1,
      padding: 12,
      cornerRadius: 8,
      displayColors: true,
      boxPadding: 4,
      callbacks: {
        label: (context) => {
          return ` ${context.dataset.label}: $${context.raw?.toLocaleString()}`;
        }
      }
    }
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#999',
        font: {
          size: 12
        }
      }
    },
    y: {
      grid: {
        color: '#555',
        tickLength: 0
      },
      ticks: {
        color: '#999',
        font: {
          size: 12
        },
        callback: (value) => `$${value}`
      }
    }
  },
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 2,
      color: 'green',
    },
    point: {
      radius: 0,
      hoverRadius: 6,
      hitRadius: 10,
      backgroundColor: 'rgba(34, 197, 94, 0.5)',
      borderWidth: 2
    }
  }
};
</script>

<template>
  <div class="chart-container">
    <Line
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<style scoped>
.chart-container {
  position: relative;
  height: 100%;
  min-height: 300px;
}
</style>