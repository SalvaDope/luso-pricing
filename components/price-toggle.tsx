import { Switch } from "@/components/ui/switch"

interface PriceToggleProps {
  isAnnual: boolean
  setIsAnnual: (value: boolean) => void
}

export function PriceToggle({ isAnnual, setIsAnnual }: PriceToggleProps) {
  return (
    <div className="flex items-center space-x-4">
      <span className={`text-lg font-medium ${!isAnnual ? "text-[#0eb49b]" : "text-gray-500"}`}>Mensal</span>
      <Switch
        checked={isAnnual}
        onCheckedChange={setIsAnnual}
        className="data-[state=checked]:bg-[#0eb49b] scale-[1.44]"
      />
      <span className={`text-lg font-medium ${isAnnual ? "text-[#0eb49b]" : "text-gray-500"}`}>Anual</span>
    </div>
  )
}
