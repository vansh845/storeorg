import {create} from 'zustand';
import {devtools,persist} from 'zustand/middleware'

interface cartState {
    cartCount: number,
    increaseCartCount: () => void
}

const useCartState = create<cartState>((set)=>({
    cartCount: 0,
    increaseCartCount : ()=> set((state)=>({cartCount:state.cartCount+1}))
}))

export default useCartState