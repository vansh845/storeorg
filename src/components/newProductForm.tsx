"use client"

import { ChangeEvent, ChangeEventHandler, useState } from "react"
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
import { set, z } from 'zod'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from '../firebase'


export function NewProductFrom({ storeId }: { storeId: number }) {
  const storage = getStorage(app);
  const [loading, setLoading] = useState(false)
  const [formData, setFormdata] = useState({ Name: '', Price: '', Images: [''] })
  const router = useRouter()
  const num = z.number()

  const mutation = useMutation({
    mutationFn: async ({ Name, Price, Images }: { Name: string, Price: string, Images: string[] }) => {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: Name,
          price: parseInt(Price),
          storeid: parseInt(`${storeId}`),
          images: Images
        })
      })
      const d = await res.json()
      console.log(d)
      return res
    },
    onSuccess: () => {
      toast({
        description: 'Product created successfully!',
      })
      router.back()
      router.refresh()
    }
  })

  const handleClick = () => {
    mutation.mutate(formData)

  }
  const [selectedFile, setSelectedFile] = useState<File | null | undefined>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    if (event.target.files && event.target.files.length > 0) {

      setSelectedFile(event?.target?.files?.[0]);
      const imageRef = ref(storage, `images/${event?.target?.files?.[0]?.name}`);

      // Upload file to Firestore
      const snapshot = await uploadBytes(imageRef, event?.target?.files?.[0])
      const downloadURL = await getDownloadURL(snapshot.ref)
      setFormdata({ ...formData, Images: [downloadURL] })
    }
    setLoading(false);
  };

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


        </div>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Product name" value={formData.Name} onChange={e => setFormdata({ ...formData, Name: e.target.value })} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="price">Price</Label>
          <Input id="price" placeholder="Price of your product..." value={formData.Price} onChange={e => { setFormdata({ ...formData, Price: e.target.value }) }} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="images">Images</Label>
          <Input id="images" type="file" placeholder="Upload file" onChange={handleFileChange} />
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <Button variant="ghost">Cancel</Button>
        <Button onClick={handleClick} disabled={loading}>Submit</Button>
      </CardFooter>
    </Card>
  )
}