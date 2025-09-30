import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package, Truck, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TrackOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [orderStatus, setOrderStatus] = useState<string | null>(null);
  const { toast } = useToast();

  const handleTrack = () => {
    if (!trackingNumber.trim()) {
      toast({
        title: "Tracking Number Required",
        description: "Please enter your tracking number.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate tracking (in real implementation, this would call an API)
    setOrderStatus("in-transit");
    toast({
      title: "Order Found",
      description: "Your order details have been retrieved.",
    });
  };

  const statusSteps = [
    { id: "collected", label: "Order Collected", icon: Package, active: true },
    { id: "in-transit", label: "In Transit", icon: Truck, active: orderStatus === "in-transit" || orderStatus === "delivered" },
    { id: "delivered", label: "Delivered", icon: CheckCircle, active: orderStatus === "delivered" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container-custom py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Track Your Order
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Enter your tracking number to see real-time updates on your delivery.
          </p>

          <div className="flex gap-2 mb-12">
            <Input
              type="text"
              placeholder="Enter tracking number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleTrack}>Track</Button>
          </div>

          {orderStatus && (
            <div className="bg-card border border-border p-8 space-y-8 animate-fade-in">
              <h2 className="text-2xl font-bold">Order Status</h2>
              
              <div className="space-y-6">
                {statusSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.id} className="flex items-start gap-4">
                      <div
                        className={`rounded-full p-3 ${
                          step.active
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold ${step.active ? "" : "text-muted-foreground"}`}>
                          {step.label}
                        </h3>
                        {step.active && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {index === 0 && "Your order has been collected and is being prepared for shipping."}
                            {index === 1 && "Your order is on its way to you."}
                            {index === 2 && "Your order has been delivered successfully."}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-border pt-6 space-y-2 text-sm text-muted-foreground">
                <p><strong>Tracking Number:</strong> {trackingNumber}</p>
                <p><strong>Estimated Delivery:</strong> 3-5 business days</p>
                <p><strong>Courier:</strong> Courier Guy</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
