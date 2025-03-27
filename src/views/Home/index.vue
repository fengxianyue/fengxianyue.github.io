<script setup>
import { ref, onMounted } from 'vue'
import ArticleCard from '@/components/ArticleCard.vue'

const fullText = 'A Web Developer passionate about creating beautiful and functional websites.'
const displayText = ref('')
const charIndex = ref(0)

// 使用固定的图片ID来确保每次加载相同的图片
const avatarImg = 'https://picsum.photos/id/64/300/300' // 使用正方形头像
const backgroundImg = 'https://picsum.photos/id/1039/1920/1080' // 使用风景图作为背景

const articles = ref([
  {
    id: 1,
    title: 'Mybatis各种技巧',
    date: '2023-05-08',
    category: '数据库',
    excerpt: '## Mybatis各种技巧 #### 使用Map传递参数 ```java Map params = new HashMap<>(); params.put("gender",gender); params.put("age",age); ```',
    cover: 'https://picsum.photos/id/237/800/450',
    tags: ['Mybatis', 'Java'],
    views: 26,
    likes: 22,
    comments: 9
  },
  {
    id: 2,
    title: '无重复字符最长子串',
    date: '2023-05-08',
    category: '算法',
    excerpt: '## 无重复字符最长子串 #### 题目说明 > 给定一个字符串 s，请你找出其中不含有重复字符的最长子串的长度。',
    cover: 'https://picsum.photos/id/238/800/450',
    tags: ['算法', '字符串'],
    views: 18,
    likes: 15,
    comments: 5
  },
  {
    id: 3,
    title: 'xshell6、Xshell7最新版永久使用(包更新)',
    date: '2023-05-08',
    category: '工具',
    excerpt: '@[TOC](xshell6、Xshell7最新版永久使用) # xshell6、Xshell7最新版使用 1[在这里加入图片描述]...',
    cover: 'https://picsum.photos/id/239/800/450',
    tags: ['工具', 'Xshell'],
    views: 30,
    likes: 25,
    comments: 8
  }
])

// 轮播图数据
const carouselItems = ref([
  {
    id: 1,
    image: 'https://picsum.photos/id/1033/1200/400',
    title: '探索编程的奥秘',
    description: '分享技术经验，探讨编程思想'
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/1042/1200/400',
    title: '算法之美',
    description: '深入理解算法，提升编程能力'
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/1047/1200/400',
    title: '工具效率',
    description: '提升开发效率的实用工具'
  }
])

const currentSlide = ref(0)
const autoPlayInterval = ref(null)

const startTyping = () => {
  const typingInterval = setInterval(() => {
    if (charIndex.value < fullText.length) {
      displayText.value += fullText.charAt(charIndex.value)
      charIndex.value++
    } else {
      clearInterval(typingInterval)
    }
  }, 100)
}

const scrollToNext = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  })
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselItems.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 
    ? carouselItems.value.length - 1 
    : currentSlide.value - 1
}

const setSlide = (index) => {
  currentSlide.value = index
}

const startAutoPlay = () => {
  autoPlayInterval.value = setInterval(nextSlide, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
  }
}

onMounted(() => {
  startTyping()
  startAutoPlay()
})
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <div class="hero">
      <div class="content">
        <div class="left-content">
          <h1 class="title">Hi! 👋</h1>
          <h2 class="subtitle">I'm LinMo</h2>
          <div class="typing-text">{{ displayText }}</div>
          <div class="social-links">
            <a href="#" class="social-link"><i class="fab fa-discord"></i></a>
            <a href="#" class="social-link"><i class="fab fa-github"></i></a>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-link"><i class="fas fa-envelope"></i></a>
          </div>
        </div>
        <div class="right-content">
          <div class="avatar-container">
            <img :src="avatarImg" alt="avatar" class="avatar" />
          </div>
        </div>
      </div>
      <div class="scroll-down" @click="scrollToNext">
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>

    <!-- Articles Section -->
    <div class="articles-section">
      <div class="articles-container">
        <!-- Main Content -->
        <div class="main-content">
          <!-- Carousel -->
          <div class="carousel" 
               @mouseenter="stopAutoPlay" 
               @mouseleave="startAutoPlay">
            <div class="carousel-container">
              <transition-group name="carousel">
                <div v-for="(item, index) in carouselItems" 
                     :key="item.id"
                     v-show="index === currentSlide"
                     class="carousel-item">
                  <img :src="item.image" :alt="item.title">
                  <div class="carousel-content">
                    <h2>{{ item.title }}</h2>
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </transition-group>
            </div>
            
            <button class="carousel-button prev" @click="prevSlide">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="carousel-button next" @click="nextSlide">
              <i class="fas fa-chevron-right"></i>
            </button>
            
            <div class="carousel-dots">
              <button v-for="(item, index) in carouselItems"
                      :key="item.id"
                      :class="['carousel-dot', { active: index === currentSlide }]"
                      @click="setSlide(index)">
              </button>
            </div>
          </div>

          <div class="article-grid">
            <ArticleCard v-for="article in articles" 
                        :key="article.id" 
                        :article="article" />
          </div>
        </div>

        <!-- Right Sidebar -->
        <div class="sidebar">
          <div class="site-info">
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
            <div class="site-avatar">
              <img :src="avatarImg" alt="Cheems" class="site-avatar-img">
              <h3 class="site-name">Cheems</h3>
              <p class="site-description">网站介绍</p>
            </div>
            <div class="announcement">
              <h3 class="announcement-title">
                <i class="fas fa-bullhorn"></i>
                公告
              </h3>
              <p class="announcement-content">后端基于SpringBoot开发，前端基于Vue3 Ts Naive UI开发！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}

.hero {
  min-height: 100vh;
  background-image: url(../../assets/background.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  position: relative;
}

.content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  margin-top: 60px;
}

.left-content {
  flex: 1;
  padding-right: 50px;
}

.title {
  font-size: 4rem;
  color: #fff;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 3rem;
  color: #a8a8ff;
  margin-bottom: 2rem;
}

.typing-text {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 2rem;
  min-height: 3rem;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-link {
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-link:hover {
  color: #a8a8ff;
}

.right-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-container {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.scroll-down {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

/* 文章区域样式 */
.articles-section {
  background: #f8f9fa;
  padding: 2rem 5%;
  min-height: 100vh;
}

.articles-container {
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* 侧边栏样式 */
.sidebar {
  width: 300px;
  flex-shrink: 0;
}

.site-info {
  position: sticky;
  top: 20px;
}

.site-stats {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.25rem;
}

.site-avatar {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.site-avatar-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.site-name {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.site-description {
  font-size: 0.9rem;
  color: #666;
}

.announcement {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.announcement-title {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.announcement-content {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
}

/* 主内容区样式 */
.main-content {
  flex: 1;
  min-width: 0;
  max-width: 800px;
  padding-right: 2rem;
}

.article-grid {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* 轮播图样式 */
.carousel {
  position: relative;
  margin-bottom: 2rem;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  background: #fff;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 200px;
}

.carousel-item {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.carousel-item[v-show="true"] {
  opacity: 1;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.01);
  transition: transform 0.8s ease;
}

.carousel-item:hover img {
  transform: scale(1.05);
}

.carousel-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem 2rem 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: #fff;
  transform: translateY(0);
  transition: transform 0.3s ease;
}

.carousel-item:hover .carousel-content {
  transform: translateY(-10px);
}

.carousel-content h2 {
  font-size: 2rem;
  margin-bottom: 0.8rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  font-weight: 600;
}

.carousel-content p {
  font-size: 1.1rem;
  opacity: 0.95;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  max-width: 600px;
  line-height: 1.6;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scale(0.9);
  background: rgba(255, 255, 255, 0.25);
  border: 2px solid rgba(255, 255, 255, 0.4);
  width: 46px;
  height: 46px;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
  opacity: 0;
}

.carousel:hover .carousel-button {
  opacity: 1;
  transform: translateY(-50%) scale(1);
}

.carousel-button:hover {
  background: rgba(255, 255, 255, 0.4);
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-50%) scale(1.1);
}

.carousel-button.prev {
  left: 20px;
}

.carousel-button.next {
  right: 20px;
}

.carousel-dots {
  position: absolute;
  bottom: 25px;
  right: 25px;
  display: flex;
  gap: 10px;
  z-index: 10;
}

.carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.carousel-dot:hover {
  background: rgba(255, 255, 255, 0.6);
}

.carousel-dot.active {
  background: #fff;
  transform: scale(1.2);
  border-color: #fff;
}

/* 轮播图过渡动画 */
.carousel-enter-active,
.carousel-leave-active {
  transition: all 0.8s ease;
}

.carousel-enter-from {
  opacity: 0;
  transform: scale(1.1);
}

.carousel-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

@media (max-width: 1024px) {
  .articles-container {
    flex-direction: column;
  }

  .main-content {
    padding-right: 0;
    max-width: 100%;
  }

  .sidebar {
    width: 100%;
    max-width: 100%;
  }

  .carousel-container {
    height: 200px;
  }
}

@media (max-width: 768px) {
  .carousel-container {
    height: 180px;
  }

  .carousel-content h2 {
    font-size: 1.5rem;
  }

  .carousel-content p {
    font-size: 1rem;
  }

  .carousel-button {
    width: 40px;
    height: 40px;
  }
}
</style>