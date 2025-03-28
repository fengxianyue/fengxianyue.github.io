<script setup>
import { ref, onMounted } from 'vue'
import Hero from '@/components/Hero.vue'
import Carousel from '@/components/Carousel.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import SiteInfo from '@/components/SiteInfo.vue'
import ArchiveStats from '@/components/ArchiveStats.vue'
import TagCloud from '@/components/TagCloud.vue'
import Announcement from '@/components/Announcement.vue'

const fullText = 'A Web Developer passionate about creating beautiful and functional websites.'
const displayText = ref('')
const charIndex = ref(0)

const avatarImg = './public/avatar.jpg'

const articles = ref([
  {
    id: 1,
    title: 'Vue3 组合式 API 最佳实践',
    date: '2024-03-15',
    category: '前端开发',
    excerpt: '探索 Vue3 组合式 API 的最佳实践，包括响应式数据、生命周期钩子、组件通信等核心概念的实际应用。',
    cover: 'https://picsum.photos/id/237/800/450',
    tags: ['Vue3', 'JavaScript', '前端'],
    views: 1258,
    likes: 326,
    comments: 58
  },
  {
    id: 2,
    title: 'Spring Boot 3.0 新特性解析',
    date: '2024-03-12',
    category: '后端开发',
    excerpt: 'Spring Boot 3.0 带来了哪些重要更新？本文详细介绍新版本的核心特性和升级建议。',
    cover: 'https://picsum.photos/id/238/800/450',
    tags: ['Spring Boot', 'Java', '后端'],
    views: 986,
    likes: 245,
    comments: 42
  },
  {
    id: 3,
    title: '深入理解 Docker 容器化技术',
    date: '2024-03-10',
    category: '运维部署',
    excerpt: '从基础概念到实践应用，全面了解 Docker 容器化技术的核心原理和最佳实践。',
    cover: 'https://picsum.photos/id/239/800/450',
    tags: ['Docker', '运维', '容器化'],
    views: 875,
    likes: 198,
    comments: 35
  },
  {
    id: 4,
    title: 'TypeScript 高级类型编程',
    date: '2024-03-08',
    category: '前端开发',
    excerpt: '探索 TypeScript 中的高级类型特性，包括泛型、映射类型、条件类型等进阶用法。',
    cover: 'https://picsum.photos/id/240/800/450',
    tags: ['TypeScript', '前端', '编程语言'],
    views: 1102,
    likes: 287,
    comments: 46
  },
  {
    id: 5,
    title: 'Redis 性能优化实战指南',
    date: '2024-03-05',
    category: '数据库',
    excerpt: '深入解析 Redis 性能优化的关键技术点，从配置调优到架构设计的实战经验分享。',
    cover: 'https://picsum.photos/id/241/800/450',
    tags: ['Redis', '数据库', '性能优化'],
    views: 923,
    likes: 234,
    comments: 39
  },
  {
    id: 6,
    title: '微服务架构设计实践',
    date: '2024-03-03',
    category: '系统架构',
    excerpt: '基于实际项目经验，分享微服务架构的设计原则、技术选型和实施策略。',
    cover: 'https://picsum.photos/id/242/800/450',
    tags: ['微服务', '架构设计', '分布式'],
    views: 1567,
    likes: 389,
    comments: 67
  },
  {
    id: 7,
    title: 'React 18 新特性详解',
    date: '2024-02-28',
    category: '前端开发',
    excerpt: '深入解析 React 18 的并发渲染、自动批处理等重要特性，以及迁移指南。',
    cover: 'https://picsum.photos/id/243/800/450',
    tags: ['React', 'JavaScript', '前端'],
    views: 1345,
    likes: 312,
    comments: 54
  },
  {
    id: 8,
    title: 'MongoDB 索引优化技巧',
    date: '2024-02-25',
    category: '数据库',
    excerpt: '详细介绍 MongoDB 索引的类型、创建原则和优化方法，提升查询性能。',
    cover: 'https://picsum.photos/id/244/800/450',
    tags: ['MongoDB', '数据库', '性能优化'],
    views: 856,
    likes: 187,
    comments: 32
  },
  {
    id: 9,
    title: 'Flutter 3.0 跨平台开发指南',
    date: '2024-02-22',
    category: '移动开发',
    excerpt: '探索 Flutter 3.0 在跨平台开发中的新特性和最佳实践，实现高效开发。',
    cover: 'https://picsum.photos/id/245/800/450',
    tags: ['Flutter', '移动开发', '跨平台'],
    views: 978,
    likes: 245,
    comments: 41
  },
  {
    id: 10,
    title: 'Git 工作流程最佳实践',
    date: '2024-02-20',
    category: '开发工具',
    excerpt: '规范的 Git 工作流程对于团队协作至关重要，本文分享实际项目中的最佳实践。',
    cover: 'https://picsum.photos/id/246/800/450',
    tags: ['Git', '版本控制', '团队协作'],
    views: 1089,
    likes: 276,
    comments: 48
  },
  {
    id: 11,
    title: 'Next.js 13 服务端组件实践',
    date: '2024-02-18',
    category: '前端开发',
    excerpt: '深入探讨 Next.js 13 中的服务端组件，以及如何在实际项目中最大化其性能优势。',
    cover: 'https://picsum.photos/id/247/800/450',
    tags: ['Next.js', 'React', 'SSR'],
    views: 892,
    likes: 234,
    comments: 45
  },
  {
    id: 12,
    title: 'Kubernetes 集群监控方案',
    date: '2024-02-15',
    category: '运维部署',
    excerpt: '详细介绍 Kubernetes 集群的监控方案，包括 Prometheus、Grafana 的配置与使用。',
    cover: 'https://picsum.photos/id/248/800/450',
    tags: ['Kubernetes', '监控', 'DevOps'],
    views: 1023,
    likes: 289,
    comments: 52
  },
  {
    id: 13,
    title: 'AI 辅助编程工具探索',
    date: '2024-02-12',
    category: '开发工具',
    excerpt: '探索当前流行的 AI 辅助编程工具，提高开发效率的实践经验分享。',
    cover: 'https://picsum.photos/id/249/800/450',
    tags: ['AI', '效率工具', '编程'],
    views: 1567,
    likes: 445,
    comments: 78
  },
  {
    id: 14,
    title: 'GraphQL 性能优化指南',
    date: '2024-02-10',
    category: '后端开发',
    excerpt: '解析 GraphQL 查询性能优化的关键点，包括缓存策略和批处理技巧。',
    cover: 'https://picsum.photos/id/250/800/450',
    tags: ['GraphQL', 'API', '性能优化'],
    views: 876,
    likes: 198,
    comments: 34
  },
  {
    id: 15,
    title: 'Web 动画性能优化',
    date: '2024-02-08',
    category: '前端开发',
    excerpt: '探讨 Web 动画的性能优化技巧，确保流畅的用户体验。',
    cover: 'https://picsum.photos/id/251/800/450',
    tags: ['动画', 'CSS', '性能'],
    views: 945,
    likes: 256,
    comments: 41
  },
  {
    id: 16,
    title: 'PostgreSQL 高级特性详解',
    date: '2024-02-05',
    category: '数据库',
    excerpt: '深入探讨 PostgreSQL 的高级特性，包括 JSON 支持、全文搜索等功能。',
    cover: 'https://picsum.photos/id/252/800/450',
    tags: ['PostgreSQL', '数据库', '后端'],
    views: 1134,
    likes: 312,
    comments: 56
  },
  {
    id: 17,
    title: 'Rust 异步编程实践',
    date: '2024-02-03',
    category: '编程语言',
    excerpt: '分享 Rust 异步编程的实践经验，包括常见问题和解决方案。',
    cover: 'https://picsum.photos/id/253/800/450',
    tags: ['Rust', '异步编程', '系统编程'],
    views: 867,
    likes: 234,
    comments: 43
  },
  {
    id: 18,
    title: 'TensorFlow.js 实战指南',
    date: '2024-02-01',
    category: '人工智能',
    excerpt: '使用 TensorFlow.js 在浏览器中运行机器学习模型的实战教程。',
    cover: 'https://picsum.photos/id/254/800/450',
    tags: ['TensorFlow', 'AI', 'JavaScript'],
    views: 1289,
    likes: 367,
    comments: 62
  }
])

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

onMounted(() => {
  startTyping()
  startAutoPlay()
})
</script>

<template>
  <div class="home">
    <div class="hero-section">
      <Hero />
    </div>
    <div class="articles-section">
      <div class="articles-container">
        <div class="main-content">
          <Carousel :items="carouselItems" />
          <div class="article-grid">
            <ArticleCard v-for="(article, index) in articles" 
                        :key="article.id" 
                        :article="article"
                        :index="index" />
          </div>
        </div>

        <div class="right-sidebar">
          <SiteInfo />
          <Announcement />
          <ArchiveStats />
          <TagCloud />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}

.hero-section {
  height: 100vh;
  width: 100%;
}

.articles-section {
  padding: 2rem 5%;
  position: relative;
  background: transparent;
}

.articles-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.main-content {
  flex: 1;
  min-width: 0;
  max-width: 800px;
  padding-right: 2rem;
}

.article-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.right-sidebar {
  width: 300px;
  flex-shrink: 0;
  position: sticky;
  top: 80px;
}

@media (max-width: 1024px) {
  .articles-container {
    flex-direction: column;
  }

  .main-content {
    padding-right: 0;
    max-width: 100%;
  }

  .right-sidebar {
    position: relative;
    top: 0;
    width: 100%;
  }
}
</style>