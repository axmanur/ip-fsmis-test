import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ReportDisplay({ report }: { report: any }) {
  if (!report) return null

  const reportComponents = {
    budget_overview: <BudgetOverview data={report} />,
    expenditure_analysis: <ExpenditureAnalysis data={report} />,
    project_performance: <ProjectPerformance data={report} />,
    fund_utilization: <FundUtilization data={report} />,
  }

  return (
    <Card className="w-full mt-8">
      <CardHeader>
        <CardTitle>{getReportTitle(report.reportType)}</CardTitle>
        <CardDescription>
          Generated report based on the selected criteria
          {report.dateRange && (
            <span>
              {' '}for the period: {formatDate(report.dateRange.from)} - {formatDate(report.dateRange.to)}
            </span>
          )}
          {report.projectId && <span>{' '}| Project ID: {report.projectId}</span>}
          {report.fundId && <span>{' '}| Fund ID: {report.fundId}</span>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {reportComponents[report.reportType as keyof typeof reportComponents]}
      </CardContent>
    </Card>
  )
}

function getReportTitle(reportType: string) {
  const titles = {
    budget_overview: "Budget Overview",
    expenditure_analysis: "Expenditure Analysis",
    project_performance: "Project Performance",
    fund_utilization: "Fund Utilization",
  }
  return titles[reportType as keyof typeof titles] || "Report"
}

function formatDate(date: string | Date | undefined) {
  if (!date) return 'N/A';
  if (typeof date === 'string') {
    return new Date(date).toLocaleDateString();
  }
  if (date instanceof Date) {
    return date.toLocaleDateString();
  }
  return 'Invalid Date';
}

function BudgetOverview({ data }: { data: any }) {
  if (!data) return <p>No data available</p>;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${data.totalBudget.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Allocated Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${data.allocatedBudget.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Remaining Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${data.remainingBudget.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Budget Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{data.budgetUtilization}%</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ExpenditureAnalysis({ data }: { data: any }) {
  if (!data) return <p>No data available</p>;
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Expenditure</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">${data.totalExpenditure.toLocaleString()}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Categorized Expenditures</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {data.categorizedExpenditures.map((item: any, index: number) => (
              <li key={index} className="flex justify-between">
                <span>{item.category}</span>
                <span className="font-bold">${item.amount.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

function ProjectPerformance({ data }: { data: any }) {
  if (!data) return <p>No data available</p>;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{data.totalProjects}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Completed Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{data.completedProjects}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ongoing Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{data.ongoingProjects}</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {data.projectDetails && data.projectDetails.length > 0 ? (
              data.projectDetails.map((project: any, index: number) => (
                <li key={index} className="border-b pb-2">
                  <h4 className="font-bold">{project.name}</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <p>Budget: ${project.budget.toLocaleString()}</p>
                    <p>Spent: ${project.spent.toLocaleString()}</p>
                    <p>Progress: {project.progress}%</p>
                  </div>
                </li>
              ))
            ) : (
              <li>No project details available</li>
            )}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

function FundUtilization({ data }: { data: any }) {
  if (!data) return <p>No data available</p>;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Funds</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${data.totalFunds.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Allocated Funds</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${data.allocatedFunds.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Remaining Funds</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${data.remainingFunds.toLocaleString()}</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Fund Details</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {data.fundDetails.map((fund: any, index: number) => (
              <li key={index} className="border-b pb-2">
                <h4 className="font-bold">{fund.name}</h4>
                <div className="grid grid-cols-3 gap-2">
                  <p>Total: ${fund.total.toLocaleString()}</p>
                  <p>Allocated: ${fund.allocated.toLocaleString()}</p>
                  <p>Remaining: ${fund.remaining.toLocaleString()}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

