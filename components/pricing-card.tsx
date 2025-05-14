import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  title: string
  price: number
  priceText: string
  features: string[]
  spotsAvailable: number
  totalSpots: number
  popular?: boolean
  showSavingsBadge?: boolean
  savingsAmount?: number
  isLifetime?: boolean
  annualBilling?: boolean
  annualPrice?: number
  futurePrice?: number
  className?: string
}

export function PricingCard({
  title,
  price,
  priceText,
  features,
  spotsAvailable,
  totalSpots,
  popular = false,
  showSavingsBadge = false,
  savingsAmount = 0,
  isLifetime = false,
  annualBilling = false,
  annualPrice,
  futurePrice,
  className,
}: PricingCardProps) {
  // Função para formatar o preço com espaço entre milhares
  const formatPrice = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  return (
    <div
      className={cn(
        "relative flex flex-col p-4 sm:p-5 bg-white rounded-xl border shadow-sm transition-all",
        "hover:shadow-md hover:translate-y-[-2px]",
        className,
      )}
    >
      {popular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0eb49b] text-white">
            Popular
          </span>
        </div>
      )}

      {isLifetime && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-800 text-white">
            Vitalício
          </span>
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-2xl sm:text-3xl font-bold">{title}</h3>
      </div>

      <div className="mb-4 text-left">
        <div className="flex items-baseline">
          <span className="text-2xl sm:text-3xl font-bold">
            {isLifetime ? formatPrice(Math.round(price)) : Math.round(price)}€
          </span>
          <span className="ml-1 text-gray-500 text-sm">{priceText}</span>
        </div>

        {annualBilling && annualPrice && (
          <div className="mt-1 text-sm text-gray-500">Cobrança anual de {formatPrice(Math.round(annualPrice))}€</div>
        )}

        {showSavingsBadge && savingsAmount > 0 && (
          <div className="mt-1">
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
              Poupe {savingsAmount}% com pagamento anual
            </span>
          </div>
        )}
      </div>

      <ul className="space-y-2 mb-4 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-[#0eb49b] flex-shrink-0 mr-2" />
            <span className="text-sm sm:text-base text-gray-600">
              {isLifetime && feature === "Suporte Prioritário" ? "Suporte Prioritário Vitalício" : feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-2 mb-4 text-sm text-left">
        <div className="text-gray-500">
          <span>
            {title === "Plano Freelancer"
              ? "4 de 5 lugares disponíveis"
              : title === "Plano Agência"
                ? "8 de 10 lugares disponíveis"
                : "5 de 5 lugares disponíveis"}
          </span>
        </div>
        {futurePrice && (
          <div className="text-gray-500 mt-1">
            <span>
              {isLifetime
                ? `Depois passará para ${formatPrice(Math.round(futurePrice))}€`
                : `Depois passará para ${Math.round(futurePrice)}€/mês`}
            </span>
          </div>
        )}
      </div>

      <Button className="w-full bg-[#0eb49b] hover:bg-[#0ca38c] text-white text-lg py-5 sm:py-6">Pedir Demo</Button>
    </div>
  )
}
