<!--
 * @Description:
 * @Author: 曹俊
 * @Date: 2022-09-19 09:47:58
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-11-05 19:43:32
-->

# hash 模式 和 history 模式

## hash 模式：主要用的方法时 hashChange 事件

### 特点：

- hash 模式的所有工作都是有前端完成的，不需要后端的配合
- hash 模式的实现方法是通过监听 URL 中的 hash 部分的变化，从而做出对应的渲染逻辑
- hash 模式下，URL 中会带有#，看起来不太美观

## history 模式：主要依靠于 pushState 与 replaceState 实现

### 特点：

- 都会改变当前页面显示的 url，但都不会刷新页面
- pushState 是压入浏览器的会话历史栈中，会使得 history.length 加 1，而 replaceState 是替换当前的这条会话历史，因此不会增加 history.length
- 刷新会 404
