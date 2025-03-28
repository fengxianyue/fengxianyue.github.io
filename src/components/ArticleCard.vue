<script setup>
import { computed, ref, onMounted } from 'vue'

const props = defineProps({
  article: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const isEven = computed(() => props.index % 2 === 1)
const cardRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  })

  if (cardRef.value) {
    observer.observe(cardRef.value)
  }
})
</script>

<template>
  <article ref="cardRef" 
           class="article-card" 
           :class="{ 'visible': isVisible, 'reverse': isEven }">
    <div class="article-image">
      <router-link :to="'/article/' + article.id">
        <img :src="article.cover" :alt="article.title" loading="lazy">
      </router-link>
      <div class="image-overlay"></div>
    </div>
    <div class="article-content">
      <h2 class="article-title">
        <svg class="title-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
        </svg>
        <router-link :to="'/article/' + article.id">{{ article.title }}</router-link>
      </h2>
      <div class="article-meta">
        <div class="meta-item">
          <svg class="icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
          </svg>
          首页
        </div>
        <div class="divider"></div>
        <div class="meta-item">
          <svg class="icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
          </svg>
          {{ article.date }}
        </div>
        <div class="divider"></div>
        <div class="meta-item">
          <svg class="icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
          </svg>
          {{ article.category }}
        </div>
      </div>
      <div class="article-excerpt" v-html="article.excerpt"></div>
    </div>
  </article>
</template>

<style scoped>
.article-card {
  display: flex;
  background: var(--card-background);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px var(--shadow-color);
  margin-bottom: 3rem;
  position: relative;
  min-height: 200px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease-in-out;
  opacity: 0;
  transform: translateY(30px);
}

.article-card.reverse {
  flex-direction: row-reverse;
}

.article-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.article-card:hover {
  box-shadow: 0 8px 30px var(--shadow-color);
  transform: translateY(-5px);
  border-color: var(--primary-color);
}

.article-image {
  width: 300px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
}

.article-card.reverse .article-image {
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
}

.article-image img {
  width: 110%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  transform: translateX(-5%);
}

.article-card.reverse .article-image img {
  transform: translateX(-2%);
}

.article-card:hover .article-image img {
  transform: translateX(-5%) scale(1.1);
}

.article-card.reverse:hover .article-image img {
  transform: translateX(-2%) scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 0) 80%,
    rgba(0, 0, 0, 0.2) 100%
  );
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.article-card.reverse .image-overlay {
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 0) 80%,
    rgba(0, 0, 0, 0.2) 100%
  );
}

.article-content {
  flex: 1;
  padding: 1.8rem 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--card-background);
  transition: all 0.3s ease-in-out;
}

.article-title {
  font-size: 1.5rem;
  margin: 0 0 1.2rem;
  line-height: 1.4;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.title-icon {
  width: 1.4em;
  height: 1.4em;
  color: var(--primary-color);
  flex-shrink: 0;
}

.article-title a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-weight: 700;
  background: linear-gradient(120deg, var(--primary-color) 0%, var(--primary-color) 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: all 0.25s ease-in-out;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-word;
}

.article-title a:hover {
  color: var(--primary-color);
  background-size: 100% 0.4em;
}

.article-meta {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.2rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  max-height: calc(1.8em * 2 + 0.8rem);
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.3s ease;
  white-space: nowrap;
  padding: 0.2rem 0;
}

.meta-item:hover {
  color: var(--primary-color);
}

.icon {
  width: 1.2em;
  height: 1.2em;
  flex-shrink: 0;
}

.divider {
  width: 1px;
  height: 1rem;
  background: var(--border-color);
  margin: 0.2rem 0;
  flex-shrink: 0;
  transition: all 0.3s ease-in-out;
}

.article-excerpt {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  word-break: break-word;
  transition: all 0.3s ease-in-out;
}

.article-excerpt::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 100%;
  background: linear-gradient(to right, transparent, var(--card-background));
  transition: all 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .article-card,
  .article-card.reverse {
    flex-direction: column;
  }

  .article-image,
  .article-card.reverse .article-image {
    width: 100%;
    height: 200px;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }

  .article-content {
    padding: 1.5rem;
  }

  .article-title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .article-meta {
    max-height: calc(1.8em * 2);
    margin-bottom: 0.8rem;
  }

  .article-excerpt {
    font-size: 0.9rem;
  }

  .article-image img,
  .article-card.reverse .article-image img {
    width: 100%;
    transform: none;
  }

  .article-card:hover .article-image img,
  .article-card.reverse:hover .article-image img {
    transform: scale(1.08);
  }
}

/* 确保暗色主题下的样式也有过渡效果 */
:root.dark-mode .article-card,
:root.dark-mode .article-content,
:root.dark-mode .article-title a,
:root.dark-mode .article-meta,
:root.dark-mode .article-excerpt,
:root.dark-mode .divider {
  transition: all 0.5s ease-in-out;
}

/* 深色主题特定样式 */
:root.dark-mode .article-card,
:root.dark-mode .article-content {
  background: var(--card-background);
}

:root.dark-mode .article-title a {
  color: var(--text-secondary);
}

:root.dark-mode .article-meta,
:root.dark-mode .article-excerpt {
  color: var(--text-secondary);
}

:root.dark-mode .article-excerpt::after {
  background: linear-gradient(to right, transparent, var(--card-background));
}

:root.dark-mode .meta-item:hover {
  color: var(--primary-color);
}

:root.dark-mode .divider {
  background: var(--border-color);
}

:root.dark-mode .title-icon {
  color: var(--primary-color);
}

:root.dark-mode .icon {
  color: var(--text-secondary);
}

.site-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.site-stats {
  border-top: 1px solid var(--border-color);
}
</style> 