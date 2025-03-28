<template>
  <aside class="sidebar">
    <div class="archive-stats">
      <div class="archive-item" v-for="(count, date) in archiveData" :key="date">
        <div class="date">{{ date }}</div>
        <div class="count">{{ count }} 篇</div>
      </div>
    </div>
    
    <div class="site-stats">
      <div class="stat-item">
        <i class="fas fa-file-alt"></i>
        <span class="label">文章总数：</span>
        <span class="value">70</span>
      </div>
      <div class="stat-item">
        <i class="fas fa-calendar-alt"></i>
        <span class="label">建站天数：</span>
        <span class="value">1456 天</span>
      </div>
      <div class="stat-item">
        <i class="fas fa-font"></i>
        <span class="label">全站字数：</span>
        <span class="value">218.3k</span>
      </div>
    </div>
  </aside>
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
.sidebar {
  width: 300px;
  padding: 20px;
  background: var(--card-background);
  border-radius: 16px;
  box-shadow: 0 4px 12px var(--shadow-color);
  border: 1px solid var(--border-color);
}

.archive-stats {
  margin-bottom: 30px;
}

.archive-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 8px;
  background: var(--background-secondary);
  transition: all 0.3s ease;
}

.archive-item:hover {
  transform: translateX(5px);
  background: var(--hover-color);
}

.date {
  color: var(--text-color);
  font-size: 0.95rem;
}

.count {
  color: var(--text-secondary);
  font-size: 0.9rem;
  background: var(--tag-background);
  padding: 2px 8px;
  border-radius: 12px;
}

.site-stats {
  padding: 16px;
  background: var(--background-secondary);
  border-radius: 12px;
}

.stat-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  color: var(--text-color);
}

.stat-item:last-child {
  margin-bottom: 0;
}

.stat-item i {
  width: 20px;
  margin-right: 8px;
  color: var(--primary-color);
}

.stat-item .label {
  margin-right: 4px;
}

.stat-item .value {
  color: var(--primary-color);
  font-weight: 500;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    margin-top: 20px;
  }
}
</style> 