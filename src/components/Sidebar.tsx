"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, DollarSign, FileText, Briefcase, Database } from 'lucide-react'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed top-0 left-0 h-screen w-[280px] border-r bg-gray-100/40 dark:bg-gray-800/40">
      <div className="flex flex-col h-full">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Financial Management
            </h2>
            <div className="space-y-1">
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link
                  href="/"
                  className={cn(
                    "flex items-center",
                    pathname === "/" && "text-blue-500"
                  )}
                >
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link
                  href="/budget"
                  className={cn(
                    "flex items-center",
                    pathname === "/budget" && "text-blue-500"
                  )}
                >
                  <DollarSign className="mr-2 h-4 w-4" />
                  Budget
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link
                  href="/commitments"
                  className={cn(
                    "flex items-center",
                    pathname === "/commitments" && "text-blue-500"
                  )}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Commitments
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link
                  href="/projects"
                  className={cn(
                    "flex items-center",
                    pathname === "/projects" && "text-blue-500"
                  )}
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  Projects
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link
                  href="/funds"
                  className={cn(
                    "flex items-center",
                    pathname === "/funds" && "text-blue-500"
                  )}
                >
                  <Database className="mr-2 h-4 w-4" />
                  Funds
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

