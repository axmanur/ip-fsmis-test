'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function ProjectsPage() {
  const [projectData, setProjectData] = useState(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log('Submitted data:', data)
    setProjectData(data)
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Project Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>New Project</CardTitle>
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
                <Input id="belongsTo" name="belongsTo" placeholder="Enter parent project" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="funderClient">Funder/Client</Label>
                <Input id="funderClient" name="funderClient" placeholder="Enter funder or client" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fund">Fund</Label>
                <Input id="fund" name="fund" placeholder="Enter fund" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ministryAgency">Ministry/Agency</Label>
                <Input id="ministryAgency" name="ministryAgency" placeholder="Enter ministry or agency" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" name="category" placeholder="Enter category" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sector">Sector</Label>
                <Input id="sector" name="sector" placeholder="Enter sector" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="component">Component</Label>
                <Input id="component" name="component" placeholder="Enter component" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="area">Area</Label>
                <Input id="area" name="area" placeholder="Enter area" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bankAccount">Bank Account</Label>
                <Input id="bankAccount" name="bankAccount" placeholder="Enter bank account" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input id="startDate" name="startDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input id="endDate" name="endDate" type="date" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="enabled" name="enabled" />
              <Label htmlFor="enabled">Enabled</Label>
            </div>
            <Button type="submit">Create Project</Button>
          </form>
        </CardContent>
      </Card>
      {projectData && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Submitted Project Data</CardTitle>
          </CardHeader>
          <CardContent>
            <pre>{JSON.stringify(projectData, null, 2)}</pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

