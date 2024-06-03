import { loadStripe } from "@stripe/stripe-js";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: add publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const Payment = () => {
  return (
    <div>
      <SectionHeader
        header="Payment"
        subHeader="Please Pay to Eat"
      ></SectionHeader>

      <div>
        <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
