import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Budget } from "./budget-table"

interface BudgetDetailsProps {
  budget: Budget
}

export default function BudgetDetails({ budget }: BudgetDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Details</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <dt className="font-medium">Code</dt>
            <dd>{budget.code}</dd>
          </div>
          <div>
            <dt className="font-medium">Name</dt>
            <dd>{budget.name}</dd>
          </div>
          <div>
            <dt className="font-medium">Start Date</dt>
            <dd>{budget.startDate}</dd>
          </div>
          <div>
            <dt className="font-medium">End Date</dt>
            <dd>{budget.endDate}</dd>
          </div>
          <div>
            <dt className="font-medium">Currency</dt>
            <dd>{budget.currency}</dd>
          </div>
          <div>
            <dt className="font-medium">Control</dt>
            <dd>{budget.control}</dd>
          </div>
          <div>
            <dt className="font-medium">Status</dt>
            <dd className={budget.active ? "text-green-600" : "text-red-600"}>
              {budget.active ? "Active" : "Inactive"}
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}

