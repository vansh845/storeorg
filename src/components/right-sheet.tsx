import { Button } from "@/components/ui/button"
import { AlignJustify, Link } from 'lucide-react'
import { CategoriesType } from "@/types"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Command, CommandItem, CommandList, CommandGroup } from "./ui/command"

export function RightSheet({ categories }: { categories: CategoriesType[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button><AlignJustify /></button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Categories</SheetTitle>
          <SheetDescription>
            Click to explore.
          </SheetDescription>
        </SheetHeader>
        <div>
          <Command>
            <CommandList>
              <CommandGroup>
                {categories.map(x => <CommandItem key=''>{x.title}</CommandItem>)}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
        <SheetFooter>
          <SheetClose asChild>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
