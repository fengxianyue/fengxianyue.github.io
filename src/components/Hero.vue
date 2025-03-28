<template>
  <div class="hero">
    <div class="content">
      <div class="left-content">
        <h1 class="title">Hi! 👋</h1>
        <h2 class="subtitle">I'm 风衔月</h2>
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
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fullText = 'A Web Developer passionate about creating beautiful and functional websites.'
const displayText = ref('')
const charIndex = ref(0)
const avatarImg = './public/avatar.jpg'

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

onMounted(() => {
  startTyping()
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
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
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.typing-text {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
  min-height: 3rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-link {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-link:hover {
  color: var(--primary-color);
}

.right-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-container {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: 15px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.avatar-container::before {
  content: '';
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 50%;
  z-index: 1;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
}

.scroll-down {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.85);
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

@media (max-width: 768px) {
  .avatar-container {
    width: 150px;
    height: 150px;
  }
  
  .avatar-container::before {
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
  }
}
</style> 