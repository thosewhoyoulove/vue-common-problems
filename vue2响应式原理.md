<!--
 * @Description:
 * @Author: 曹俊
 * @Date: 2022-06-09 17:27:01
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-11-03 20:24:59
-->

# 数据响应式：

## 是一种能够检测数据变化并且能对这种变化做出响应的机制

### Vue 使用了 MVVM 模型，最核心的问题就是怎么连接数据层和视图层，通过数据驱动应用，数据变化，通知视图更新，要做到这些就需要对数据做响应式处理，这样数据一旦变化就能做出更新处理。

### Vue2 的数据响应式会根据数据类型来做不同的处理：

- ### 对象：
  - Observer 负责将数据转换成 getter/setter 形式；Dep 负责管理数据的依赖列表；是一个发布订阅模式，上游对接 Observer，下游对接 Watcher；Watcher 是实际上的数据依赖，负责将数据的变化转发到外界(渲染、回调)；首先将 data 传入 Observer 转成 getter/setter 形式；当 Watcher 实例读取数据时，会触发 getter，收集到 Dep 仓库中；当数据更新时，触发 setter，通知 Dep 仓库中的所有 Watcher 实例更新，Watcher 例负责通知外界。缺点：不能检测对象的新增和删除，vue2 的做法是加入 vm.$set和vm.$delete 来解这个问题的。
  - 每个响应式属性都有 dep，dep 存放了依赖这个属性的 watcher（watcher 是观测数据变化的函数），如果数据发生变化，dep 就会通知所有的观察者 watcher 去调用更新方法。
- ### 数组：重写数组的七个方法(push pop shift unshift reverse sort splice)。缺点：通过下标操作数组，或通过修改数组长度清空数组，是无法观测到数据变化的。
