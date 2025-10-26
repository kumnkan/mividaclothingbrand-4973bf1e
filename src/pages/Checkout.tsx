import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Package, Truck } from "lucide-react";

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [shippingMethod, setShippingMethod] = useState<"paxi-standard" | "paxi-express" | "courier">("courier");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

  const shippingCosts = {
    "paxi-standard": 60,
    "paxi-express": 110,
    courier: 150,
  };

  const totalAmount = getTotalPrice() + shippingCosts[shippingMethod];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate order processing
    toast({
      title: "Order Placed Successfully!",
      description: "You'll receive a confirmation email shortly with tracking details.",
    });
    
    clearCart();
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container-custom py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <Button onClick={() => navigate("/")}>Continue Shopping</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Checkout</h1>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className={`flex items-center gap-2 ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
                1
              </div>
              <span className="hidden sm:inline">Shipping</span>
            </div>
            <div className={`h-px w-12 ${step >= 2 ? "bg-primary" : "bg-secondary"}`} />
            <div className={`flex items-center gap-2 ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
                2
              </div>
              <span className="hidden sm:inline">Payment</span>
            </div>
            <div className={`h-px w-12 ${step >= 3 ? "bg-primary" : "bg-secondary"}`} />
            <div className={`flex items-center gap-2 ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
                3
              </div>
              <span className="hidden sm:inline">Confirm</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Shipping */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold">Shipping Information</h2>
                
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" name="address" required value={formData.address} onChange={handleInputChange} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" name="city" required value={formData.city} onChange={handleInputChange} />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input id="postalCode" name="postalCode" required value={formData.postalCode} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-lg font-bold mb-4 block">Delivery Method</Label>
                  <RadioGroup value={shippingMethod} onValueChange={(value: "paxi-standard" | "paxi-express" | "courier") => setShippingMethod(value)}>
                    <div className="flex items-center space-x-2 border border-border p-4 rounded-lg mb-3">
                      <RadioGroupItem value="courier" id="courier" />
                      <Label htmlFor="courier" className="flex items-center gap-3 cursor-pointer flex-1">
                        <Truck className="h-5 w-5" />
                        <div className="flex-1">
                          <p className="font-bold">Courier Guy - Door-to-door</p>
                          <p className="text-sm text-muted-foreground">3-5 business days</p>
                        </div>
                        <span className="font-bold">R 150.00</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border border-border p-4 rounded-lg mb-3">
                      <RadioGroupItem value="paxi-express" id="paxi-express" />
                      <Label htmlFor="paxi-express" className="flex items-center gap-3 cursor-pointer flex-1">
                        <Package className="h-5 w-5" />
                        <div className="flex-1">
                          <p className="font-bold">PAXI Express</p>
                          <p className="text-sm text-muted-foreground">3-5 business days</p>
                        </div>
                        <span className="font-bold">R 110.00</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border border-border p-4 rounded-lg">
                      <RadioGroupItem value="paxi-standard" id="paxi-standard" />
                      <Label htmlFor="paxi-standard" className="flex items-center gap-3 cursor-pointer flex-1">
                        <Package className="h-5 w-5" />
                        <div className="flex-1">
                          <p className="font-bold">PAXI Standard</p>
                          <p className="text-sm text-muted-foreground">5-7 business days</p>
                        </div>
                        <span className="font-bold">R 60.00</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="button" onClick={() => setStep(2)} className="w-full" size="lg">
                  Continue to Payment
                </Button>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold">Payment Details</h2>
                
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">We accept VISA, Mastercard, and all major debit/credit cards via Stripe & PayFast</p>
                  <p className="text-sm text-muted-foreground">Your payment is secure and encrypted</p>
                </div>

                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" required value={formData.cardNumber} onChange={handleInputChange} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cardExpiry">Expiry Date</Label>
                      <Input id="cardExpiry" name="cardExpiry" placeholder="MM/YY" required value={formData.cardExpiry} onChange={handleInputChange} />
                    </div>
                    <div>
                      <Label htmlFor="cardCVC">CVC</Label>
                      <Input id="cardCVC" name="cardCVC" placeholder="123" required value={formData.cardCVC} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button type="button" onClick={() => setStep(3)} className="flex-1" size="lg">
                    Review Order
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold">Order Summary</h2>
                
                <div className="border border-border rounded-lg p-6 space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">Items</h3>
                    {items.map((item) => (
                      <div key={`${item.id}-${item.size}-${item.color}`} className="flex justify-between text-sm mb-2">
                        <span>{item.name} ({item.size}, {item.color}) x{item.quantity}</span>
                        <span>R {(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4">
                    <h3 className="font-bold mb-2">Shipping Details</h3>
                    <p className="text-sm">{formData.name}</p>
                    <p className="text-sm">{formData.address}</p>
                    <p className="text-sm">{formData.city}, {formData.postalCode}</p>
                    <p className="text-sm mt-2 text-muted-foreground">
                      {shippingMethod === "courier" 
                        ? "Courier Guy - Door-to-door" 
                        : shippingMethod === "paxi-express"
                        ? "PAXI Express"
                        : "PAXI Standard"}
                    </p>
                  </div>

                  <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>R {getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>R {shippingCosts[shippingMethod].toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t border-border pt-2">
                      <span>Total</span>
                      <span>R {totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1">
                    Back
                  </Button>
                  <Button type="submit" className="flex-1" size="lg">
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;
