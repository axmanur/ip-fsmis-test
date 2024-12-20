'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function FundsPage() {
  const [fundData, setFundData] = useState<{ [key: string]: FormDataEntryValue } | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log('Submitted data:', data)
    setFundData(data)
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Fund Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>New Fund</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="code">Code</Label>
                <Input id="code" name="code" placeholder="Enter code" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Enter name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="belongsTo">Belongs to</Label>
                <Input id="belongsTo" name="belongsTo" placeholder="Enter parent fund" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fundedBy">Funded By</Label>
                <Input id="fundedBy" name="fundedBy" placeholder="Enter funder" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="account">Account</Label>
                <Input id="account" name="account" placeholder="Enter account" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bankAccount">Bank Account</Label>
                <Input id="bankAccount" name="bankAccount" placeholder="Enter bank account" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Select name="currency">
                  <SelectTrigger>
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">US Dollars</SelectItem>
                    <SelectItem value="eur">Euros</SelectItem>
                    <SelectItem value="gbp">British Pounds</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="rate">Rate</Label>
                <Input id="rate" name="rate" type="number" step="0.01" placeholder="Enter exchange rate" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fiscalYearStarts">Fiscal Year Starts</Label>
                <Select name="fiscalYearStarts">
                  <SelectTrigger>
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">January</SelectItem>
                    <SelectItem value="4">April</SelectItem>
                    <SelectItem value="7">July</SelectItem>
                    <SelectItem value="10">October</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fundType">Fund Type</Label>
                <Select name="fundType">
                  <SelectTrigger>
                    <SelectValue placeholder="Select fund type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grant">Grant</SelectItem>
                    <SelectItem value="loan">Loan</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="enabled" name="enabled" />
              <Label htmlFor="enabled">Enabled</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="printAuditorCode" name="printAuditorCode" />
              <Label htmlFor="printAuditorCode">Print Auditor Code</Label>
            </div>
            <Button type="submit">Create Fund</Button>
          </form>
        </CardContent>
      </Card>
      {fundData && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Submitted Fund Data</CardTitle>
          </CardHeader>
          <CardContent>
            <pre>{JSON.stringify(fundData, null, 2)}</pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

