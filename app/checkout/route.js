import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const items = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items.map((item) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.name,
        },
        unit_amount: parseFloat(item.price.replace("€", "")) * 100, // cents
      },
      quantity: 1,
    })),
    mode: "payment",
    success_url: "http://localhost:3000/thank-you",
    cancel_url: "http://localhost:3000/cart",
  });

  return Response.json({ url: session.url });
}
