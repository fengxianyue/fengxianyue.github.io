<template>
  <header class="header" :class="{ 'header-hidden': isHidden, 'header-transparent': isTop }">
    <div class="logo">风衔月</div>
    <div class="right-section">
      <nav class="nav-menu">
        <router-link to="/" class="nav-item">
          <i class="fas fa-home"></i>
          <span>首页</span>
        </router-link>
        <router-link to="/blog" class="nav-item">
          <i class="fas fa-archive"></i>
          <span>归档</span>
        </router-link>
        <router-link to="/categories" class="nav-item">
          <i class="fas fa-folder"></i>
          <span>分类</span>
        </router-link>
        <router-link to="/tags" class="nav-item">
          <i class="fas fa-tags"></i>
          <span>说说</span>
        </router-link>
        <router-link to="/friends" class="nav-item">
          <i class="fas fa-user-friends"></i>
          <span>友链</span>
        </router-link>
        <router-link to="/about" class="nav-item">
          <i class="fas fa-user"></i>
          <span>关于我</span>
        </router-link>
      </nav>
      <div class="right-menu">
        <button class="search-btn" @click="toggleSearch" title="搜索 (按 / 键)">
          <i class="fas fa-search"></i>
        </button>
        <button class="theme-btn" @click="toggleDarkMode" title="切换主题">
          <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
        <div class="avatar">
          <img src="../assets/avatar.jpg" alt="avatar" />
        </div>
      </div>
    </div>
  </header>

  <!-- Search Modal -->
  <div class="search-modal" :class="{ active: isSearchActive }">
    <div class="search-container">
      <input
        type="text"
        class="search-input"
        v-model="searchQuery"
        placeholder="输入关键词搜索..."
        @keydown="handleKeyPress"
      >
      <div class="close-search" @click="toggleSearch">
        <i class="fas fa-times"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isDarkMode = ref(localStorage.getItem('darkMode') === 'dark')
const isSearchActive = ref(false)
const isHidden = ref(false)
const isTop = ref(true)
const lastScrollPosition = ref(0)
const searchQuery = ref('')

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
  } else if (currentScrollPosition > 50) {  // Only hide when scrolled down a bit
    isHidden.value = true
  }
  
  lastScrollPosition.value = currentScrollPosition
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', isDarkMode.value ? 'dark' : 'light')
  document.documentElement.setAttribute('data-theme', isDarkMode.value ? 'dark' : 'light')
}

const toggleSearch = () => {
  isSearchActive.value = !isSearchActive.value
  if (isSearchActive.value) {
    setTimeout(() => {
      document.querySelector('.search-input')?.focus()
    }, 100)
  }
}

const handleSearch = () => {
  if (!searchQuery.value.trim()) return
  // TODO: Implement search functionality
  console.log('Searching for:', searchQuery.value)
  isSearchActive.value = false
  searchQuery.value = ''
}

const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    handleSearch()
  } else if (e.key === 'Escape') {
    isSearchActive.value = false
  }
}

onMounted(() => {
  // 从 localStorage 读取主题设置
  const savedTheme = localStorage.getItem('darkMode')
  if (savedTheme === 'dark') {
    isDarkMode.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    isDarkMode.value = false
    document.documentElement.setAttribute('data-theme', 'light')
  }

  window.addEventListener('scroll', handleScroll)
  
  // Add keyboard shortcut for search
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !isSearchActive.value) {
      e.preventDefault()
      toggleSearch()
    }
  })
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
  z-index: 100;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

[data-theme='dark'] .header {
  background: rgba(0, 0, 0, 0.2);
}

.header-hidden {
  transform: translateY(-100%);
}

.header-transparent {
  background: transparent !important;
  backdrop-filter: none !important;
  border-bottom: none !important;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.right-section {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-menu {
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-item {
  color: #fff !important;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-item i {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.nav-item:hover i {
  transform: translateY(-2px);
}

.nav-item span {
  position: relative;
}

.nav-item:hover {
  color: var(--primary-color) !important;
}

.right-menu {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-btn, .theme-btn {
  background: none;
  border: none;
  color: #fff !important;
  cursor: pointer;
  font-size: 1.2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
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

.search-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.search-modal.active {
  opacity: 1;
  visibility: visible;
}

.search-container {
  width: 90%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  transform: translateY(-20px);
  transition: all 0.3s ease;
}

.search-modal.active .search-container {
  transform: translateY(0);
}

.search-input {
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1.2rem;
  outline: none;
  transition: all 0.3s ease;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.search-input:focus {
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.15);
}

.close-search {
  position: absolute;
  top: -50px;
  right: 0;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.close-search:hover {
  opacity: 1;
  transform: scale(1.1);
}

.theme-btn,
.search-btn {
  background: none;
  border: none;
  color: #fff !important;
  cursor: pointer;
  font-size: 1.2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.theme-btn:hover,
.search-btn:hover {
  transform: scale(1.1);
  color: var(--primary-color) !important;
}

/* 移除主题过渡相关样式 */
.theme-transition-overlay {
  display: none;
}

/* 移除其他主题过渡相关样式 */
:root.dark-mode .article-card {
  background: var(--card-background);
  border-color: var(--border-color);
}

.article-image {
  transition: clip-path 0.3s ease;
}

.image-overlay {
  transition: opacity 0.3s ease, background 0.3s ease;
}
</style>
