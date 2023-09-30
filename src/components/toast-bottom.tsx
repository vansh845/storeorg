"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { ReactNode } from "react"

export function ToastSimple({title,desc}:{title:string,desc:string}) {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: desc,
        })
      }}
    >
      {title}
    </Button>
  )
}
