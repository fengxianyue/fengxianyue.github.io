import ColorThief from 'colorthief'

// 背景图片列表
const backgrounds = [
  new URL('../assets/bg/background_1.jpg', import.meta.url).href,
  new URL('../assets/bg/background_2.jpg', import.meta.url).href,
  new URL('../assets/bg/background_3.png', import.meta.url).href
]

// 获取随机背景图片
export const getRandomBackground = () => {
  const randomIndex = Math.floor(Math.random() * backgrounds.length)
  return backgrounds[randomIndex]
}

// 从图片中提取主色调
export const extractDominantColor = (imageUrl) => {
  return new Promise((resolve) => {
    const img = new Image()
    
    img.onload = () => {
      const colorThief = new ColorThief()
      const [r, g, b] = colorThief.getColor(img)
      const color = `rgb(${r}, ${g}, ${b})`
      console.log('Extracted color:', color)
      resolve(color)
    }
    
    img.onerror = (error) => {
      console.error('Error loading image:', error)
      resolve('#ff85a1')
    }
    
    img.src = imageUrl
  })
}

// 计算主题色
const calculateThemeColor = (color) => {
  const rgb = color.match(/\d+/g).map(Number)
  
  // 计算亮度
  const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000
  
  // 如果颜色太暗，调整为亮色
  if (brightness < 128) {
    return `rgb(${Math.min(255, rgb[0] + 100)}, ${Math.min(255, rgb[1] + 100)}, ${Math.min(255, rgb[2] + 100)})`
  }
  
  // 如果颜色太亮，调整为暗色
  if (brightness > 200) {
    return `rgb(${Math.max(0, rgb[0] - 50)}, ${Math.max(0, rgb[1] - 50)}, ${Math.max(0, rgb[2] - 50)})`
  }
  
  return color
}

// 更新主题色
export const updateThemeColor = (color) => {
  console.log('Updating theme color to:', color)
  const root = document.documentElement
  
  // 计算主题色
  const themeColor = calculateThemeColor(color)
  const rgb = themeColor.match(/\d+/g).map(Number)
  
  // 计算亮色和暗色变体
  const lightColor = `rgb(${Math.min(255, rgb[0] + 50)}, ${Math.min(255, rgb[1] + 50)}, ${Math.min(255, rgb[2] + 50)})`
  const darkColor = `rgb(${Math.max(0, rgb[0] - 50)}, ${Math.max(0, rgb[1] - 50)}, ${Math.max(0, rgb[2] - 50)})`
  
  // 设置主题色
  root.style.setProperty('--primary-color', themeColor)
  root.style.setProperty('--secondary-color', lightColor)
  root.style.setProperty('--primary-light', lightColor)
  root.style.setProperty('--primary-dark', darkColor)
  
  // 设置导航栏悬停颜色
  root.style.setProperty('--nav-hover-color', lightColor)
  
  // 设置文字颜色
  root.style.setProperty('--text-color', '#2b3a4a')
  root.style.setProperty('--text-secondary', '#718096')
  
  // 设置其他相关颜色
  root.style.setProperty('--hover-color', lightColor)
  root.style.setProperty('--tag-background', lightColor)
} 