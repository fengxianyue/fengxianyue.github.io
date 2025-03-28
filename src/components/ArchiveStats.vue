<template>
  <div class="archive-section">
    <div class="archive-title">
      <i class="fas fa-clock"></i>
      文章归档
    </div>
    <div class="archive-stats">
      <div class="archive-item" v-for="(count, date) in archiveData" :key="date">
        <div class="date">{{ date }}</div>
        <div class="count">{{ count }} 篇</div>
      </div>
    </div>
    
    <div class="site-data">
      <div class="data-item">
        <i class="fas fa-file-alt"></i>
        <span class="label">文章总数：</span>
        <span class="value">70</span>
      </div>
      <div class="data-item">
        <i class="fas fa-calendar-alt"></i>
        <span class="label">建站天数：</span>
        <span class="value">1456 天</span>
      </div>
      <div class="data-item">
        <i class="fas fa-font"></i>
        <span class="label">全站字数：</span>
        <span class="value">218.3k</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const archiveData = ref({
  '八月 2023': '4',
  '七月 2023': '4',
  '六月 2023': '3',
  '二月 2023': '3',
  '十二月 2022': '10',
  '十月 2022': '7',
  '十月 2022': '6',
  '九月 2022': '7'
})
</script>

<style scoped>
.archive-section {
  background: var(--card-background);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 4px 20px var(--shadow-color);
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.archive-title {
  padding: 15px 20px;
  font-size: 1.1rem;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 8px;
}

.archive-title i {
  color: var(--primary-color);
}

.archive-stats {
  padding: 20px;
  max-height: 250px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--primary-color) transparent;
}

.archive-stats::-webkit-scrollbar {
  width: 4px;
}

.archive-stats::-webkit-scrollbar-track {
  background: transparent;
}

.archive-stats::-webkit-scrollbar-thumb {
  background-color: var(--primary-color);
  border-radius: 4px;
}

.archive-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 8px;
  background: var(--card-background);
  transition: all 0.3s ease;
}

.archive-item:hover {
  background: var(--background-secondary);
}

.archive-item:last-child {
  margin-bottom: 0;
}

.date {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.count {
  color: var(--text-secondary);
  font-size: 0.9rem;
  background: var(--background-secondary);
  padding: 2px 8px;
  border-radius: 12px;
}

.site-data {
  padding: 20px;
  border-top: 1px solid var(--border-color);
}

.data-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  color: var(--text-secondary);
}

.data-item:last-child {
  margin-bottom: 0;
}

.data-item i {
  width: 20px;
  margin-right: 8px;
  color: var(--primary-color);
}

.data-item .label {
  margin-right: 4px;
  color: var(--text-secondary);
}

.data-item .value {
  color: var(--text-secondary);
  font-weight: 500;
}
</style> 