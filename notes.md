## 生命周期（16.x 之前全部可使用，16.x使用“部分”会进行提示，预计17版本之后会删除部分生命周期）
1. constructor
    1. 同一个组件只会渲染一次
    2. 不能在第一次挂在之前调用setState，为了避免出现bug构造函数中严禁使用setState
2. componentWillMount
    1. 正常情况下和构造函数一样，仅执行一次
    2. 可以使用setState，为了避免出现bug同样严禁使用setState，该函数可能会被调用多次（比如可以打断当前组件的渲染进度重新再次加载组件）
3. **render**
    1. 返回一个虚拟dom，会被挂在到dom树中，最终渲染到真实dom中
    2. render函数俄能不止运行一次，只要需要重新渲染就会重新执行
    3. 严禁使用setState，因为会导致无限递归渲染
4. **componentDidMount**
    1. 该函数只会执行一次
    2. 可以使用setState
    3. 通常情况下会将网络请求，计时器开始等一开始需要的操作写到这里
<!-- 组件进入活跃状态 -->
5. componentWillReceiveProps
    1. 即将接收新的属性值（并非属性值一定变化）
    2. 参数为新的属性对象，当前组件内的属性值还未发生变化，this.props还未当前为变化的属性值
    3. 该函数可能会导致一些bug，不推荐使用（新版本中被标记）
6. **shouldComponentUpdate**
    1. 指示React是否需要重新渲染该组件，通过返回true、false来实现，默认直接返回true，此处为一个新能优化点
    2. 参数为新的属性和新的状态，当前属性和当前状态通过this.props\this.state来获取
    3. 组件内的state变化后运行此生命周期函数
7. componentWillUpdate
    1. 组件即将被重新渲染
    2. 参数为新的属性和新的状态
    3. 下一步为render，触发渲染
8. componentDidUpdate
    1. 组件已经被重新更新
    2. 参数为之前的属性和之前的状态
    3. 往往在此函数中做一些额外的dom操作，改变元素
<!-- 组件结尾 -->
9. componentWillUnmount
    1. 组件已将被销毁
    2. 通常在此函数中清除定时器等组件依赖的资源
## 新版生命周期函数（>=16.x）
1. constructor
    1. 与之前相同
2. static getDerivedStateFromProps
    1. 从组件中获取新的状态，此函数在属性被改变或则状态被改变时都会执行此函数（此函数用处不太大，特殊情况下会使用）
    2. 该方法为构造函数中的静态方法，不能获取当前的属性（props）和状态（state），this.setState无法再使用
    3. 参数为当前的属性和状态
    4. 该方法返回的返回新的对象替换掉状态（state）
3. render
    1. 与之前相同
4. getSnapshotBeforeUpdate
    1. 真实的dom构建完成，但是还未实际渲染到页面中。
    2. 该函数中通常使用一些附加的dom操作（例如调整滚动条位置等）
    3. 参数为之前的属性和之前的状态
    4. 该函数必须要有一个返回值，该函数的返回值会作为下一个生命周期函数的第三个参数，该函数需要与componentDidUpdate一同使用
5. componentDidUpdate
    1. 与之前相同
    2. 第三个参数为前一个生命周期的返回值
6. componentWillUnmount
    1. 与之前相同
## 属性汇合
1. defaultProps生命周期开始前将汇合至props中
## 属性类型验证
```js
// 需要先引入PropTypes(import PropTypes from 'react-types')，再调用静态属性 static propTypes
PropTypes.any // 任意类型的数据
PropTypes.string // 字符串类型
PropTypes.number // 数字类型
PropTypes.boolean // 布尔类型
PropTypes.symbol // symbol类型
PropTypes.func // 函数类型
PropTypes.array // 数组类型
PropTypes.object // 对象类型

PropTypes.node // 节点类型（包含文字节点）
PropTypes.element // react元素节点类型
PropTypes.elementType // react的元素类型（构造器）
PropTypes.instanceOf(构造函数) // 属性为构造器的实例
PropTypes.oneOf([xxx, xxx]) // 属性为当前枚举值中的一个
PropTypes.oneOfType([xxx, xxx]) // 传入的类型为当前枚举值中的一个
PropTypes.arrayOf(PropTypes.xxx) // 当前数组的每一位元素类型为xxx
PropTypes.objectOf(PropTypes.xxx) // 当前对象的每一个属性型为xxx
PropTypes.shape({xx: PropTypes.xxx}) // 当前对象的xx属性类型为xxx，可以传多的属性
PropTypes.exact({xx: PropTypes.xxx}) // 精确定义对象类型，不能传多的属性
// 自定义类型检测
function (props, propsName, componentName) {
    // 判断props[propsName]
    return new Error('错误信息')
}
```