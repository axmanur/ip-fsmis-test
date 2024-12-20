"use client"

import { useState } from 'react'
import { AnalyticsForm } from "@/components/AnalyticsForm"
import { ReportDisplay } from "@/components/ReportDisplay"
import { ReportHistory } from "@/components/ReportHistory"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface HistoryItem {
  id: string
  reportType: string
  dateGenerated: string
  dateRange?: { from: string; to: string }
  projectId?: string
  fundId?: string
}

export default function AnalyticsPage() {
  const [report, setReport] = useState<any>(null)
  const [reportHistory, setReportHistory] = useState<HistoryItem[]>([])

  const handleReportGenerated = (generatedReport: any) => {
    setReport(generatedReport)
    const newHistoryItem: HistoryItem = {
      id: Date.now().toString(),
      reportType: generatedReport.reportType,
      dateGenerated: new Date().toLocaleString(),
      dateRange: generatedReport.dateRange,
      projectId: generatedReport.projectId,
      fundId: generatedReport.fundId,
    }
    setReportHistory(prevHistory => [newHistoryItem, ...prevHistory])
  }

  const handleViewHistoryReport = (historyItem: HistoryItem) => {
    // In a real application, you would fetch the report data from the backend
    // For this example, we'll just set a placeholder report
    setReport({
      ...historyItem,
      // Add some placeholder data based on the report type
      ...(historyItem.reportType === 'budget_overview' && {
        totalBudget: 1000000,
        allocatedBudget: 750000,
        remainingBudget: 250000,
        budgetUtilization: 75,
      }),
    })
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Generate Report</CardTitle>
        </CardHeader>
        <CardContent>
          <AnalyticsForm onReportGenerated={handleReportGenerated} />
        </CardContent>
      </Card>
      {report && <ReportDisplay report={report} />}
      <ReportHistory history={reportHistory} onViewReport={handleViewHistoryReport} />
    </div>
  )
}

