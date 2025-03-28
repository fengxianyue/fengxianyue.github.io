<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import { getRandomBackground, extractDominantColor, updateThemeColor } from './utils/background'

export default {
  name: 'App',
  components: {
    Header
  },
  async mounted() {
    try {
      // 设置随机背景
      const backgroundUrl = getRandomBackground()
      console.log('Setting background:', backgroundUrl) // 调试日志
      document.body.style.backgroundImage = `url(${backgroundUrl})`
      
      // 提取并设置主题色
      const dominantColor = await extractDominantColor(backgroundUrl)
      updateThemeColor(dominantColor)
    } catch (error) {
      console.error('Error setting up theme:', error)
    }
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

:root {
  --primary-color: #ff85a1;
  --secondary-color: #ff99c8;
  --primary-light: #ffb5c5;
  --primary-dark: #e66b85;
  --hover-color: var(--primary-light);
  --tag-background: var(--primary-light);
  --text-color: #2b3a4a;
  --text-secondary: #718096;
  --background-color: #ffffff;
  --background-secondary: #f8f9fa;
  --border-color: #e2e8f0;
  --shadow-color: rgba(0, 0, 0, 0.08);
  --hover-shadow-color: rgba(0, 0, 0, 0.12);
  --card-background: #ffffff;
  --card-border: #e2e8f0;
}

html[data-theme='dark'] {
  --text-color: rgba(255, 255, 255, 0.9);
  --text-secondary: rgba(255, 255, 255, 0.7);
  --background-color: #1a202c;
  --background-secondary: #2d3748;
  --border-color: rgba(255, 255, 255, 0.1);
  --shadow-color: rgba(0, 0, 0, 0.2);
  --hover-shadow-color: rgba(0, 0, 0, 0.3);
  --card-background: #2d3748;
  --card-border: rgba(255, 255, 255, 0.1);
  --tag-background: rgba(255, 255, 255, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-height: 100vh;
  color: var(--text-color);
  transition: background-color 0.3s ease;
}

#app {
  min-height: 100vh;
  position: relative;
  color: var(--text-color);
  transition: color 0.3s ease;
}

#app::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

html[data-theme='dark'] #app::before {
  background-color: rgba(0, 0, 0, 0.4);
}

.main-content {
  padding-top: 60px;
  min-height: calc(100vh - 60px);
  position: relative;
  z-index: 2;
}

/* 确保所有卡片使用正确的背景色和文字颜色 */
.card {
  background-color: var(--card-background);
  color: var(--text-color);
  border: 1px solid var(--card-border);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.card-title {
  color: var(--text-color);
  font-weight: bold;
  margin-bottom: 1rem;
}

.card-text {
  color: var(--text-secondary);
}

/* 确保链接颜色在深色主题下可见 */
a {
  text-decoration: none;
  color: var(--text-color);
  transition: color 0.3s ease;
}

a:hover {
  color: var(--primary-color);
}

button {
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
