import * as React from 'react'
import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface HistoryItem {
  id: string
  reportType: string
  dateGenerated: string
  dateRange?: { from: string; to: string }
  projectId?: string
  fundId?: string
}

interface ReportHistoryProps {
  history: HistoryItem[]
  onViewReport: (report: HistoryItem) => void
}

export function ReportHistory({ history, onViewReport }: ReportHistoryProps) {
  const [expandedRow, setExpandedRow] = useState<string | null>(null)

  const toggleRowExpansion = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id)
  }

  return (
    <Card className="w-full mt-8">
      <CardHeader>
        <CardTitle>Report History</CardTitle>
        <CardDescription>Previously generated reports</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Report Type</TableHead>
              <TableHead>Date Generated</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.map((item) => (
              <React.Fragment key={item.id}>
                <TableRow className="cursor-pointer" onClick={() => toggleRowExpansion(item.id)}>
                  <TableCell>{item.reportType}</TableCell>
                  <TableCell>{item.dateGenerated}</TableCell>
                  <TableCell>
                    <Button onClick={(e) => {
                      e.stopPropagation()
                      onViewReport(item)
                    }}>
                      View Report
                    </Button>
                  </TableCell>
                </TableRow>
                {expandedRow === item.id && (
                  <TableRow>
                    <TableCell colSpan={3}>
                      <div className="p-2 bg-muted rounded-md">
                        <p><strong>Date Range:</strong> {item.dateRange ? `${item.dateRange.from} - ${item.dateRange.to}` : 'N/A'}</p>
                        {item.projectId && <p><strong>Project ID:</strong> {item.projectId}</p>}
                        {item.fundId && <p><strong>Fund ID:</strong> {item.fundId}</p>}
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

