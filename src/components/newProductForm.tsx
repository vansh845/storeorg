"use client"

import { ChangeEventHandler, useState } from "react"
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Textarea } from "./ui/textarea"
import { toast } from "./ui/use-toast"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import {z} from 'zod'

export function NewProductFrom({storeId}:{storeId:number}) {

  const [formData, setFormdata] = useState({Name:'',Price:'',Images:['']})
  const router = useRouter()
  const num = z.number()

  const mutation = useMutation({
    mutationFn: async ({Name,Price,Images}:{Name:string,Price:string,Images:string[]})=>{
      const res = await fetch('/api/products',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          name:Name,
          price:parseInt(Price),
          storeid:parseInt(`${storeId}`)
        })
      })
      const d = await res.json()
      console.log(d)
      return res
    },
    onSuccess:()=>{
      toast({
        description:'Product created successfully!',
      })
      
    }
  })

  const handleClick = () => {
      mutation.mutate(formData)
      router.back()
      router.refresh()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add product</CardTitle>
        <CardDescription>
          Enter product details
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="area">Area</Label>
            <Select defaultValue="billing">
              <SelectTrigger id="area">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="team">Team</SelectItem>
                <SelectItem value="billing">Billing</SelectItem>
                <SelectItem value="account">Account</SelectItem>
                <SelectItem value="deployments">Deployments</SelectItem>
                <SelectItem value="support">Support</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="security-level">Security Level</Label>
            <Select defaultValue="2">
              <SelectTrigger
                id="security-level"
                className="line-clamp-1 w-[160px] truncate"
              >
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Severity 1 (Highest)</SelectItem>
                <SelectItem value="2">Severity 2</SelectItem>
                <SelectItem value="3">Severity 3</SelectItem>
                <SelectItem value="4">Severity 4 (Lowest)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Product name" value={formData.Name} onChange={e=>setFormdata({...formData,Name:e.target.value})}/>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="price">Price</Label>
          <Input id="price" placeholder="Price of your product..." value={formData.Price}  onChange={e=>{setFormdata({...formData,Price:e.target.value})}}/>
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <Button variant="ghost">Cancel</Button>
        <Button onClick={handleClick}>Submit</Button>
      </CardFooter>
    </Card>
  )
}