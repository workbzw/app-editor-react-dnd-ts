import { createSlice, configureStore } from '@reduxjs/toolkit'
type TestState={
    value:number
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            // Redux Toolkit 允许在 reducers 中编写 "mutating" 逻辑。
            // 它实际上并没有改变 state，因为使用的是 Immer 库，检测到“草稿 state”的变化并产生一个全新的
            // 基于这些更改的不可变的 state。
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})

export const { incremented, decremented } = counterSlice.actions

export const store = configureStore({
    reducer: counterSlice.reducer
})
export type RootState = ReturnType<typeof store.getState>
// 可以订阅 store
store.subscribe(() => console.log(store.getState()))

// 将我们所创建的 action 对象传递给 `dispatch`
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}