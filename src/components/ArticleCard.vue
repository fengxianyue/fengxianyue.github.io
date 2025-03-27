<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="article-card">
    <div class="article-image">
      <router-link :to="'/article/' + article.id">
        <img :src="article.cover" :alt="article.title" loading="lazy">
      </router-link>
      <div class="diagonal-split"></div>
    </div>
    <div class="article-content">
      <div class="article-meta">
        <router-link to="/" class="article-home">
          <i class="fas fa-home"></i>
          首页
        </router-link>
        <span class="meta-divider">
          <i class="fas fa-clock"></i>
          {{ article.date }}
        </span>
        <span class="meta-divider">
          <i class="fas fa-folder"></i>
          {{ article.category }}
        </span>
      </div>
      <h2 class="article-title">
        <router-link :to="'/article/' + article.id">{{ article.title }}</router-link>
      </h2>
      <div class="article-excerpt" v-html="article.excerpt"></div>
      <div class="article-footer">
        <router-link :to="'/article/' + article.id" class="read-more">
          more...
        </router-link>
      </div>
    </div>
  </article>
</template>

<style scoped>
.article-card {
  display: flex;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
  height: 200px;
  position: relative;
  transition: all 0.3s ease;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.article-image {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.article-card:hover .article-image img {
  transform: scale(1.08);
}

.diagonal-split {
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 100%;
  background: #fff;
  transform: skewX(-15deg) translateX(75px);
  box-shadow: -10px 0 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.article-card:hover .diagonal-split {
  transform: skewX(-15deg) translateX(85px);
}

.article-content {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(to right, #fff, #f8f9fa);
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 1rem;
}

.article-home {
  color: #666;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  background: rgba(64, 158, 255, 0.1);
}

.article-home:hover {
  color: #409eff;
  background: rgba(64, 158, 255, 0.15);
}

.meta-divider {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
}

.meta-divider:hover {
  background: rgba(0, 0, 0, 0.05);
}

.article-title {
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  line-height: 1.4;
}

.article-title a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
  font-weight: 600;
}

.article-title a:hover {
  color: #409eff;
}

.article-excerpt {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  opacity: 0.85;
}

.article-footer {
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
}

.read-more {
  color: #409eff;
  text-decoration: none;
  font-size: 0.95rem;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: rgba(64, 158, 255, 0.1);
  transition: all 0.3s ease;
}

.read-more:hover {
  background: rgba(64, 158, 255, 0.15);
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .article-card {
    flex-direction: column;
    height: auto;
  }

  .article-image {
    height: 180px;
  }

  .diagonal-split {
    display: none;
  }

  .article-content {
    padding: 1.5rem;
    background: #fff;
  }

  .article-meta {
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .article-title {
    font-size: 1.3rem;
  }
}
</style> 