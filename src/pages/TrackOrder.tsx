import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package, ExternalLink } from "lucide-react";

const TrackOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrackCourierGuy = () => {
    if (trackingNumber.trim()) {
      window.open(`https://www.thecourierguy.co.za/track/${trackingNumber}`, '_blank');
    }
  };

  const handleTrackPaxi = () => {
    if (trackingNumber.trim()) {
      window.open(`https://paxi.co.za/track-parcel/?tracking_number=${trackingNumber}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Package className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Track Your Order
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay updated on your parcel every step of the way
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-lg space-y-6">
            <div>
              <label htmlFor="tracking" className="block text-sm font-medium mb-2">
                Enter Your Tracking Number
              </label>
              <Input
                id="tracking"
                type="text"
                placeholder="e.g., TCG123456789 or PX123456"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="text-lg h-12"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Button 
                onClick={handleTrackCourierGuy}
                disabled={!trackingNumber.trim()}
                size="lg"
                className="w-full"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Track with Courier Guy
              </Button>
              <Button 
                onClick={handleTrackPaxi}
                disabled={!trackingNumber.trim()}
                variant="outline"
                size="lg"
                className="w-full"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Track with PAXI
              </Button>
            </div>

            <div className="border-t border-border pt-6 space-y-4 text-sm text-muted-foreground">
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium text-foreground mb-2">📧 Tracking Information</p>
                <p>
                  You'll receive your tracking number via email once your order ships.
                  Click the appropriate button above to open the courier's tracking portal.
                </p>
              </div>
              
              <div className="space-y-2">
                <p><strong className="text-foreground">Courier Guy:</strong> Door-to-door delivery, 2-3 business days</p>
                <p><strong className="text-foreground">PEP (PAXI):</strong> Collect from nearest PEP store, 3-6 business days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TrackOrder;
