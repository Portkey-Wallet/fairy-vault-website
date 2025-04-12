import { useScroll, useTransform, motion } from 'framer-motion'

export default function App() {
  // 1. 获取滚动信息
  const { scrollYProgress } = useScroll()
  
  // 2. 创建变换值
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]) // 当滚动进度在0-10%时，透明度从0过渡到1
  const backgroundColor = useTransform(scrollYProgress, 
    [0, 0.5, 1],
    ["#fff", "#f0f", "#000"]
  )

  return (
    <div style={{
      height: '300vh'
    }}>
      <motion.nav 
        style={{ 
          opacity,
          backgroundColor,
          position: "fixed",
          width: "100%"
        }}
      >
        Navigation Bar
      </motion.nav>
    </div>
  )
}