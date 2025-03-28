<template>
  <div class="announcement">
    <h3 class="announcement-title">
      <i class="fas fa-bullhorn"></i>
      公告
    </h3>
    <p class="announcement-content">后端基于SpringBoot开发，前端基于Vue3 Ts Naive UI开发！</p>
  </div>
</template>

<style scoped>
.announcement {
  background: var(--card-background);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px var(--shadow-color);
  margin-bottom: 20px;
}

.announcement-title {
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.announcement-title i {
  color: #ff4b4b;
}

.announcement-content {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
</style> 