"use client"

import { useState } from "react"
import { PricingCard } from "./pricing-card"
import { PriceToggle } from "./price-toggle"
import { cn } from "@/lib/utils"

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  const subscriptionPlans = [
    {
      title: "Plano Agência",
      monthlyPrice: 149,
      yearlyPrice: 1188, // 99 * 12
      monthlyPriceWithAnnual: 99,
      features: [
        "Chatbots Ilimitados",
        "Leads Ilimitados",
        "Exportação de Leads",
        "Integrações Automáticas & Universais",
        "Construtor de Chatbots Drag & Drop",
        "URL Scraper Incluído",
        "Suporte Prioritário",
        "Análise Avançada de Dados",
      ],
      spotsAvailable: 7,
      totalSpots: 10,
      futurePrice: 199,
      popular: true,
    },
  ]

  const lifetimeDeal = {
    title: "Licença Agência",
    price: 2999,
    features: [
      "Chatbots Ilimitados",
      "Leads Ilimitados",
      "Exportação de Leads",
      "Integrações Automáticas & Universais",
      "Construtor de Chatbots Drag & Drop",
      "URL Scraper Incluído",
      "Suporte Vitalício",
      "Análise Avançada de Dados",
      "Acesso a Todas as Funcionalidades Futuras",
    ],
    spotsAvailable: 3,
    totalSpots: 5,
    futurePrice: 3999,
  }

  return (
    <section className="w-full pt-2 pb-6 md:pt-5 md:pb-12 lg:pt-6 lg:pb-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex justify-center mt-2 mb-8">
          <PriceToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 max-w-4xl mx-auto">
          {subscriptionPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={isAnnual ? plan.monthlyPriceWithAnnual : plan.monthlyPrice}
              priceText="/mês"
              features={plan.features}
              spotsAvailable={plan.spotsAvailable}
              totalSpots={plan.totalSpots}
              popular={plan.popular}
              showSavingsBadge={isAnnual}
              savingsAmount={Math.round(((plan.monthlyPrice - plan.monthlyPriceWithAnnual) / plan.monthlyPrice) * 100)}
              annualBilling={isAnnual}
              annualPrice={plan.yearlyPrice}
              futurePrice={plan.futurePrice}
              className={cn(plan.popular ? "border-[#0eb49b] ring-2 ring-[#0eb49b]/20" : "border-gray-200")}
            />
          ))}

          <PricingCard
            title={lifetimeDeal.title}
            price={lifetimeDeal.price}
            priceText=" (pagamento único)"
            features={lifetimeDeal.features}
            spotsAvailable={lifetimeDeal.spotsAvailable}
            totalSpots={lifetimeDeal.totalSpots}
            popular={false}
            isLifetime={true}
            futurePrice={lifetimeDeal.futurePrice}
            className="border-gray-200 bg-gray-50/50"
          />
        </div>
      </div>
    </section>
  )
}
