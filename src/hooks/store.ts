// import {create} from 'zustand';
// import {devtools,persist} from 'zustand/middleware'
// import { cartLength } from '@/actions/getcartitems';
// import { useState } from 'react';

// interface cartState {
//     cartCount: number,
//     increaseCartCount: () => void
// }


// const useCartState = create<cartState>((set)=>({
//     cartCount: cartLength(),
//     increaseCartCount : ()=> set((state)=>({cartCount:state.cartCount+1}))
// }))

// export default useCartState