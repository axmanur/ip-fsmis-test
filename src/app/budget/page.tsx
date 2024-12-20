"use client"

import { BudgetTable } from "@/components/budget-table"
import { NewBudgetForm } from "@/components/new-budget-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BudgetPage() {
  return (
    <div className="space-y-6 p-4 pb-16">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">Budget Management</h1>
        <Tabs defaultValue="list" className="w-full">
          <TabsList className="w-fit">
            <TabsTrigger value="list" className="px-6">Budget List</TabsTrigger>
            <TabsTrigger value="new" className="px-6">New Budget</TabsTrigger>
          </TabsList>
          <TabsContent value="list" className="space-y-4">
            <BudgetTable />
          </TabsContent>
          <TabsContent value="new">
            <NewBudgetForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

