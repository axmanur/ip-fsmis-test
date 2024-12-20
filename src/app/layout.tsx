import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from '@/components/app-sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Financial Management System',
  description: 'Comprehensive financial management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider defaultOpen>
          <div className="flex w-full justify-center min-h-screen">
            <AppSidebar />
            <SidebarInset className="flex-1">
              <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                <SidebarTrigger />
                <div className="flex-1">
                  <h1 className="font-semibold">Financial Management System</h1>
                </div>
              </header>
              <main className="flex-1 p-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                  {children}
                </div>
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

