<template>
  <div class="carousel" 
       @mouseenter="stopAutoPlay" 
       @mouseleave="startAutoPlay">
    <div class="carousel-container">
      <div v-for="(item, index) in items" 
           :key="item.id"
           class="carousel-item"
           :style="{ opacity: index === currentSlide ? 1 : 0 }">
        <img :src="item.image" :alt="item.title">
        <div class="carousel-content">
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    
    <button class="carousel-button prev" @click="prevSlide">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button class="carousel-button next" @click="nextSlide">
      <i class="fas fa-chevron-right"></i>
    </button>
    
    <div class="carousel-dots">
      <button v-for="(item, index) in items"
              :key="item.id"
              :class="['carousel-dot', { active: index === currentSlide }]"
              @click="setSlide(index)">
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const currentSlide = ref(0)
const autoPlayInterval = ref(null)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.items.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 
    ? props.items.length - 1 
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
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.carousel {
  position: relative;
  margin-bottom: 2rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(var(--shadow-color-rgb), 0.15);
  background: var(--card-background);
  border: 1px solid var(--border-color);
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 400px;
  background: #000;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.8s ease;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.01);
  transition: transform 0.8s ease;
}

.carousel:hover .carousel-item img {
  transform: scale(1.05);
}

.carousel-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4rem 3rem 2.5rem;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8));
  color: #fff;
  transform: translateY(0);
  transition: transform 0.3s ease;
}

.carousel:hover .carousel-content {
  transform: translateY(-10px);
}

.carousel-content h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 600;
}

.carousel-content p {
  font-size: 1.1rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  line-height: 1.6;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
}

.carousel:hover .carousel-button {
  opacity: 1;
}

.carousel-button:hover {
  background: rgba(255, 255, 255, 0.3);
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
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  z-index: 10;
}

.carousel-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.carousel-dot:hover {
  background: rgba(255, 255, 255, 0.5);
}

.carousel-dot.active {
  background: #fff;
  transform: scale(1.2);
  border-color: #fff;
}

@media (max-width: 1024px) {
  .carousel-container {
    height: 300px;
  }
  
  .carousel-content h2 {
    font-size: 1.8rem;
  }
  
  .carousel-content p {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .carousel-container {
    height: 240px;
  }
  
  .carousel-content {
    padding: 2rem 1.5rem 1.5rem;
  }
  
  .carousel-content h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .carousel-content p {
    font-size: 0.9rem;
  }
  
  .carousel-button {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .carousel-dots {
    bottom: 20px;
    right: 20px;
    gap: 8px;
  }
}
</style> 