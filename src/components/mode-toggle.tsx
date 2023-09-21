"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const handleClick = ()=>{
    if(theme==='light'){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }
  return (
    <Button variant={'ghost'} onClick={handleClick}>{theme==='light'?<SunIcon/>:<MoonIcon/>}</Button>
  )
}

