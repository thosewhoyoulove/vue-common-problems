const targetMap = new WeakMap()

function track(target, key) {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()))
    }
    let dep = depsMap.get(key)
    if (!dep) {
        depsMap.set(key, (dep = new Set()))
    }
    dep.add(effect)
    console.log('执行了track');
}

function trigger(target, key) {
    const depsMap = targetMap.get(target)
    if (!depsMap) return
    let dep = depsMap.get(key)
    if (dep) {
        dep.forEach(effect => effect())
    }

    console.log('执行了trigger');
}
// let product = {
//     price: 5,
//     quantity: 2
// }
let total = 0
let effect = () => {
    total = product.price * product.quantity
    console.log('执行了effect');
}

function reactive(target) {
    const handler = {
        get(target, key, receiver) {
            let result = Reflect.get(target, key, receiver)
            track(target, key)
            return result
        },
        set(target, key, value, receiver) {
            let oldValue = target[key]
            let result = Reflect.set(target, key, value, receiver)
            if (oldValue !== value) {
                trigger(target, key)
            }
            return result
        },
    }
    return new Proxy(target, handler)
}
let product = reactive({
        price: 5,
        quantity: 2
    })
    // track(product, "quantity")
effect()
console.log(total);
product.quantity = 3
    // trigger(product, 'quantity')