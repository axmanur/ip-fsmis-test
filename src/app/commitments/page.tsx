'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function CommitmentsPage() {
  const [commitmentData, setCommitmentData] = useState<Record<string, FormDataEntryValue>>({})

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log('Submitted data:', data)
    setCommitmentData(data)
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Commitment Voucher</h1>
      <Card>
        <CardHeader>
          <CardTitle>New Commitment Voucher</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="beneficiary">Beneficiary</Label>
                <Input id="beneficiary" name="beneficiary" placeholder="Enter beneficiary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fund">Fund</Label>
                <Input id="fund" name="fund" placeholder="Enter fund" />
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
                <Label htmlFor="date">Date</Label>
                <Input id="date" name="date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supplierReference">Supplier Reference</Label>
                <Input id="supplierReference" name="supplierReference" placeholder="Enter supplier reference" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cancelDate">Cancel Date</Label>
                <Input id="cancelDate" name="cancelDate" type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="comment">Comment</Label>
              <Textarea id="comment" name="comment" placeholder="Enter comment" />
            </div>
            <Button type="submit">Create Commitment</Button>
          </form>
        </CardContent>
      </Card>
      {commitmentData && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Submitted Commitment Data</CardTitle>
          </CardHeader>
          <CardContent>
            <pre>{JSON.stringify(commitmentData, null, 2)}</pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

