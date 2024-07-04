'use client'
import CartCard from '@/components/cartitemscard';
import { Button, buttonVariants } from '@/components/ui/button';
import { CartItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default async function Cart() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [total, setTotal] = useState<number>(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/cart');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setCartItems(json);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])
    useEffect(() => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price;
        });
        setTotal(total);
    }, [cartItems])
    return (
        <div className="flex flex-col">
            <section className="bg-muted py-12 md:py-20">
                <div className="container">
                    <h2 className="text-2xl font-bold mb-8">Your Cart</h2>
                    <div className="grid gap-8">
                        {cartItems.map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <Image src={item.images[0]} alt={item.title} width={80} height={80} className="rounded-lg" />
                                <div className="flex-1">
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-muted-foreground">${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex justify-between items-center">
                        <p className="text-2xl font-bold">Total: ${total}</p>
                        <Button size="lg">Checkout</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}