import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Stake() {
  return (
    <Tabs defaultValue="account" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account" className="">
          STAKE
        </TabsTrigger>
        <TabsTrigger value="password">UNSTAKE</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex w-full justify-between space-x-2 font-mono">
              <h1 className="">Amount</h1>
              <h1>My balance: $1560</h1>
            </div>
            <div className="flex w-full  items-center space-x-1">
              <Button type="submit">$BRB</Button>

              <Input type="email" placeholder="1508096830" />
              <Button type="submit">Max</Button>
            </div>
            <div className="space-y-1 flex flex-start font-thin font-mono text-sm">
              <h1>Min token Amount: $100</h1>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button>ENABLE STAKING</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex w-full justify-between space-x-2 font-mono">
              <h1 className="">Amount</h1>
              <h1>My balance: $1560</h1>
            </div>
            <div className="flex w-full  items-center space-x-1">
              <Button type="submit">$BRB</Button>

              <Input type="email" placeholder="1508096830" />
              <Button type="submit">Max</Button>
            </div>
            <div className="space-y-1 flex flex-start font-thin font-mono text-sm">
              <h1>Min token Amount: $100</h1>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button>UNSTAKE</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
