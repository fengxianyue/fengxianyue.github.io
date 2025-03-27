<template>
  <header class="header" :class="{ 'header-hidden': isHidden, 'header-transparent': isTop }">
    <div class="logo">Memory Blog</div>
    <div class="right-section">
      <nav class="nav-menu">
        <router-link to="/" class="nav-item">首页</router-link>
        <router-link to="/blog" class="nav-item">归档</router-link>
        <router-link to="/categories" class="nav-item">分类</router-link>
        <router-link to="/tags" class="nav-item">说说</router-link>
        <router-link to="/friends" class="nav-item">友链</router-link>
        <router-link to="/about" class="nav-item">关于我</router-link>
      </nav>
      <div class="right-menu">
        <button class="search-btn">
          <i class="fas fa-search"></i>
        </button>
        <button class="theme-btn">
          <i class="fas fa-moon"></i>
        </button>
        <div class="avatar">
          <img src="../assets/avatar.jpg" alt="avatar" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const lastScrollPosition = ref(0)
const isHidden = ref(false)
const isTop = ref(true)

const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  
  // Check if at top
  isTop.value = currentScrollPosition < 50

  // Handle header show/hide
  if (currentScrollPosition < 0) {
    return
  }
  
  // Show header when scrolling up, hide when scrolling down
  if (currentScrollPosition < lastScrollPosition.value) {
    isHidden.value = false
  } else {
    isHidden.value = true
  }
  
  lastScrollPosition.value = currentScrollPosition
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 100;
  transition: transform 0.3s ease, background-color 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header-hidden {
  transform: translateY(-100%);
}

.header-transparent {
  background: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  border-bottom: none;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.right-section {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-menu {
  display: flex;
  gap: 20px;
}

.nav-item {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.nav-item:hover {
  color: #a8a8ff;
}

.right-menu {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-btn, .theme-btn {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .header {
    padding: 0 20px;
  }
  
  .nav-menu {
    display: none;
  }

  .right-section {
    gap: 15px;
  }
}
</style>
