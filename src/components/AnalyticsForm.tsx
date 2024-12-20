"use client"

import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"

const analyticsSchema = z.object({
  reportType: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  projectId: z.string().optional(),
  fundId: z.string().optional(),
})

export function AnalyticsForm({ onReportGenerated }: { onReportGenerated: (report: any) => void }) {
  const form = useForm<z.infer<typeof analyticsSchema>>({
    resolver: zodResolver(analyticsSchema),
  })

  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(values: z.infer<typeof analyticsSchema>) {
    setIsLoading(true)
    setTimeout(() => {
      const report = generateSampleReport({
        ...values,
        dateRange: {
          from: new Date(values.startDate).toISOString().split('T')[0],
          to: new Date(values.endDate).toISOString().split('T')[0]
        }
      })
      onReportGenerated(report)
      setIsLoading(false)
    }, 2000) // Increased delay to 2 seconds to show loading state
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {isLoading ? (
          <>
            <Skeleton className="h-10 w-full" />
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-28" />
          </>
        ) : (
          <>
            <FormField
              control={form.control}
              name="reportType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Report Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="budget_overview">Budget Overview</SelectItem>
                      <SelectItem value="expenditure_analysis">Expenditure Analysis</SelectItem>
                      <SelectItem value="project_performance">Project Performance</SelectItem>
                      <SelectItem value="fund_utilization">Fund Utilization</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input 
                        type="date" 
                        {...field} 
                        value={field.value || ""} 
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Date</FormLabel>
                    <FormControl>
                      <Input 
                        type="date" 
                        {...field} 
                        value={field.value || ""} 
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="projectId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project (Optional)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Project 1</SelectItem>
                      <SelectItem value="2">Project 2</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select a specific project for the report, or leave blank for all projects
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fundId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fund (Optional)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select fund" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Fund 1</SelectItem>
                      <SelectItem value="2">Fund 2</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select a specific fund for the report, or leave blank for all funds
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Generating Report..." : "Generate Report"}
            </Button>
          </>
        )}
      </form>
    </Form>
  )
}

function generateSampleReport(values: any) {
  const sampleData = {
    budget_overview: {
      totalBudget: 1000000,
      allocatedBudget: 750000,
      remainingBudget: 250000,
      budgetUtilization: 75,
    },
    expenditure_analysis: {
      totalExpenditure: 750000,
      categorizedExpenditures: [
        { category: 'Salaries', amount: 300000 },
        { category: 'Equipment', amount: 200000 },
        { category: 'Operations', amount: 250000 },
      ],
    },
    project_performance: {
      totalProjects: 5,
      completedProjects: 2,
      ongoingProjects: 3,
      projectDetails: [
        { name: 'Project A', budget: 200000, spent: 150000, progress: 75 },
        { name: 'Project B', budget: 300000, spent: 100000, progress: 33 },
      ],
    },
    fund_utilization: {
      totalFunds: 1500000,
      allocatedFunds: 1000000,
      remainingFunds: 500000,
      fundDetails: [
        { name: 'Fund 1', total: 1000000, allocated: 750000, remaining: 250000 },
        { name: 'Fund 2', total: 500000, allocated: 250000, remaining: 250000 },
      ],
    },
  }

  return {
    ...sampleData[values.reportType as keyof typeof sampleData],
    reportType: values.reportType,
    dateRange: values.dateRange,
    projectId: values.projectId,
    fundId: values.fundId,
  }
}

