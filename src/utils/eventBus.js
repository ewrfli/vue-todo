//EventBus方法一 event-bus.js
// EventBus是一个不具备 DOM 的组件，它具有的仅仅只是它实例方法而已，因此它非常的轻便。
import Vue from 'vue'
export const eventBus = new Vue()


// // 发送消息
// EventBus.$emit(channel: string, callback(payload1,…))

// // 监听接收消息
// EventBus.$on(channel: string, callback(payload1,…))

// // 移除事件的监听
// EventBus.$off('aMsg')

// // 移除所有事件的监听
// EventBus.$off()