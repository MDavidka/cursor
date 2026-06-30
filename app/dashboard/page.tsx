import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Server,
  Globe,
  Database,
  Zap,
  Settings,
  CreditCard,
  Bell,
  ArrowUpRight,
  HardDrive,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your NexHost hosting services.",
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Alex</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
          <Button size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {[
          { label: "Active Services", value: "4", icon: Server, color: "text-primary" },
          { label: "Domains", value: "7", icon: Globe, color: "text-chart-2" },
          { label: "Bandwidth Used", value: "142 GB", icon: Activity, color: "text-chart-3" },
          { label: "Storage Used", value: "68 GB", icon: HardDrive, color: "text-chart-4" },
        ].map((stat) => (
          <Card key={stat.label} className="border-border/50">
            <CardContent className="flex items-center gap-4 py-6">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="services" className="space-y-6">
        <TabsList>
          <TabsTrigger value="services">My Services</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
        </TabsList>

        <TabsContent value="services" className="space-y-4">
          {[
            {
              name: "Business VPS",
              plan: "4 vCPU · 8 GB RAM · 160 GB NVMe",
              status: "Active",
              usage: 62,
              ip: "198.51.100.14",
            },
            {
              name: "Shared Hosting",
              plan: "Starter Plan · 50 GB NVMe",
              status: "Active",
              usage: 34,
              ip: "—",
            },
            {
              name: "Cloud Node",
              plan: "3 nodes · Auto-scaling",
              status: "Active",
              usage: 78,
              ip: "203.0.113.42",
            },
          ].map((svc) => (
            <Card key={svc.name} className="border-border/50">
              <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6">
                <div className="flex items-start gap-4">
                  <Server className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold">{svc.name}</p>
                      <Badge variant="secondary" className="text-xs">{svc.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{svc.plan}</p>
                    {svc.ip !== "—" && (
                      <p className="text-xs text-muted-foreground mt-1">IP: {svc.ip}</p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <Progress value={svc.usage} className="h-2 w-32" />
                      <span className="text-xs text-muted-foreground">{svc.usage}% used</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Manage
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="billing">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Billing Overview</CardTitle>
              <CardDescription>Your next invoice is on Mar 15, 2025</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-sm">Visa ending in 4242</p>
                    <p className="text-xs text-muted-foreground">Expires 06/2027</p>
                  </div>
                </div>
                <Badge variant="secondary">Default</Badge>
              </div>
              <Separator />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Current monthly total</span>
                <span className="font-bold">$44.98/mo</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View billing history
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="support">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Support Tickets</CardTitle>
              <CardDescription>You have 1 open ticket</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { id: "#TKT-48291", subject: "SSL certificate renewal issue", status: "Open", date: "Mar 8" },
                { id: "#TKT-48102", subject: "Migration from previous host", status: "Resolved", date: "Feb 22" },
              ].map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{ticket.subject}</p>
                    <p className="text-xs text-muted-foreground">{ticket.id} · {ticket.date}</p>
                  </div>
                  <Badge variant={ticket.status === "Open" ? "default" : "secondary"}>
                    {ticket.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Open new ticket
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
