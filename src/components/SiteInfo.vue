<template>
  <div class="site-info">
    <div class="site-avatar">
      <img :src="avatarImg" alt="Cheems" class="site-avatar-img">
      <h3 class="site-name">Cheems</h3>
      <p class="site-description">网站介绍</p>
      <div class="site-stats">
        <div class="stat-item">
          <div class="stat-value">26</div>
          <div class="stat-label">文章</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">9</div>
          <div class="stat-label">分类</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">22</div>
          <div class="stat-label">标签</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const avatarImg = './public/avatar.jpg'
</script>

<style scoped>
.site-info {
  background: var(--card-background);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px var(--shadow-color);
  margin-bottom: 20px;
}

.site-avatar-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid var(--border-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.site-name {
  font-size: 1.25rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.site-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.site-stats {
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-color);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
}
</style> 