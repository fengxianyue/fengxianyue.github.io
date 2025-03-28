<template>
  <div class="tag-cloud">
    <div class="tag-title">
      <i class="fas fa-tags"></i>
      标签
    </div>
    <div class="tag-list">
      <router-link to="/tags/C" class="tag-item">C</router-link>
      <router-link to="/tags/Docker" class="tag-item">Docker</router-link>
      <router-link to="/tags/Kubernetes" class="tag-item">Kubernetes</router-link>
      <router-link to="/tags/MongoDB" class="tag-item">MongoDB</router-link>
      <router-link to="/tags/MySQL" class="tag-item">MySQL</router-link>
      <router-link to="/tags/TCP" class="tag-item">TCP</router-link>
      <router-link to="/tags/Ubuntu" class="tag-item">Ubuntu</router-link>
      <router-link to="/tags/gdb" class="tag-item">gdb</router-link>
      <router-link to="/tags/hexo" class="tag-item">hexo</router-link>
      <router-link to="/tags/hexo-butterfly" class="tag-item">hexo-butterfly</router-link>
      <router-link to="/tags/linux" class="tag-item">linux</router-link>
      <router-link to="/tags/python" class="tag-item">python</router-link>
      <router-link to="/tags/redis" class="tag-item">redis</router-link>
      <router-link to="/tags/rust" class="tag-item">rust</router-link>
      <router-link to="/tags/scrapy" class="tag-item">scrapy</router-link>
      <router-link to="/tags/twisted" class="tag-item">twisted</router-link>
      <router-link to="/tags/二分查找" class="tag-item">二分查找</router-link>
      <router-link to="/tags/动态规划" class="tag-item">动态规划</router-link>
      <router-link to="/tags/友链朋友圈" class="tag-item">友链朋友圈</router-link>
      <router-link to="/tags/哲学" class="tag-item">哲学</router-link>
      <router-link to="/tags/嵌入式" class="tag-item">嵌入式</router-link>
      <router-link to="/tags/成语" class="tag-item">成语</router-link>
      <router-link to="/tags/指针" class="tag-item">指针</router-link>
      <router-link to="/tags/数学" class="tag-item">数学</router-link>
      <router-link to="/tags/数据分析" class="tag-item">数据分析</router-link>
      <router-link to="/tags/文学" class="tag-item">文学</router-link>
      <router-link to="/tags/机器学习" class="tag-item">机器学习</router-link>
      <router-link to="/tags/深度学习" class="tag-item">深度学习</router-link>
      <router-link to="/tags/爬虫" class="tag-item">爬虫</router-link>
      <router-link to="/tags/监督学习" class="tag-item">监督学习</router-link>
      <router-link to="/tags/矩阵分析" class="tag-item">矩阵分析</router-link>
      <router-link to="/tags/算法" class="tag-item">算法</router-link>
      <router-link to="/tags/编译原理" class="tag-item">编译原理</router-link>
      <router-link to="/tags/艺术" class="tag-item">艺术</router-link>
      <router-link to="/tags/诗词" class="tag-item">诗词</router-link>
    </div>
  </div>
</template>

<style scoped>
.tag-cloud {
  background: var(--card-background);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 4px 20px var(--shadow-color);
  overflow: hidden;
  margin-top: 20px;
}

.tag-title {
  padding: 15px 20px;
  font-size: 1.1rem;
  color: var(--text-color);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 8px;
}

.tag-title i {
  color: var(--primary-color);
}

.tag-list {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag-item {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  background: var(--background-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
}

.tag-item:hover {
  background: var(--primary-color);
  color: #fff;
  transform: translateY(-2px);
}
</style> 