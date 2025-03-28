<template>
  <div class="pagination" v-if="total > pageSize">
    <button 
      class="page-btn" 
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      <i class="fas fa-chevron-left"></i>
    </button>

    <button 
      v-if="showFirstPage" 
      class="page-btn"
      :class="{ active: currentPage === 1 }"
      @click="changePage(1)"
    >1</button>

    <span v-if="showLeftDots" class="dots">...</span>

    <button 
      v-for="page in visiblePages" 
      :key="page"
      class="page-btn"
      :class="{ active: currentPage === page }"
      @click="changePage(page)"
    >{{ page }}</button>

    <span v-if="showRightDots" class="dots">...</span>

    <button 
      v-if="showLastPage" 
      class="page-btn"
      :class="{ active: currentPage === totalPages }"
      @click="changePage(totalPages)"
    >{{ totalPages }}</button>

    <button 
      class="page-btn" 
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['update:currentPage'])

const totalPages = computed(() => Math.ceil(props.total / props.pageSize))

const visiblePages = computed(() => {
  const pages = []
  const maxVisiblePages = 5
  let start = Math.max(currentPage - 2, 1)
  let end = Math.min(start + maxVisiblePages - 1, totalPages.value)

  if (end - start + 1 < maxVisiblePages) {
    start = Math.max(end - maxVisiblePages + 1, 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

const showFirstPage = computed(() => !visiblePages.value.includes(1))
const showLastPage = computed(() => !visiblePages.value.includes(totalPages.value))
const showLeftDots = computed(() => visiblePages.value[0] > 2)
const showRightDots = computed(() => visiblePages.value[visiblePages.value.length - 1] < totalPages.value - 1)

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    emit('update:currentPage', page)
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem 0;
  padding: 1rem;
}

.page-btn {
  min-width: 40px;
  height: 40px;
  border: 1px solid var(--border-color);
  background: var(--card-background);
  color: var(--text-secondary);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.page-btn:hover:not(:disabled) {
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-2px);
}

.page-btn.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.dots {
  color: var(--text-secondary);
  padding: 0 0.5rem;
}

@media (max-width: 768px) {
  .page-btn {
    min-width: 36px;
    height: 36px;
  }
}
</style> 