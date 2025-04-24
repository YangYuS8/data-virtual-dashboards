import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import './assets/common.less'

// 创建应用实例
const app = createApp(App)

// Vue 3 方式添加插件
app.use(dataV)

// 挂载应用
app.mount('#app')
