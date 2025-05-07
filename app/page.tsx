"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Flattened FAQ data without categories
const faqItems = [
  {
    question: "O que é o LUSO?",
    answer:
      "O LUSO é uma plataforma no-code que permite a empresas e agências criar, treinar e implementar chatbots inteligentes de forma rápida e sem necessidade de conhecimentos técnicos. Ideal para automatizar atendimento ao cliente, qualificar leads e melhorar a experiência digital dos utilizadores.",
  },
  {
    question: "Que tipos de chatbots posso criar?",
    answer:
      "•	Chatbots Clássicos: Baseados em regras e fluxos pré-definidos.\n•	Chatbots com IA: Treinados com dados específicos da sua empresa para responder de forma contextualizada.\n•	Chatbots Híbridos: Combinação de lógica baseada em regras com inteligência artificial.",
  },
  {
    question: "Preciso de saber programar para usar o LUSO?",
    answer:
      "Não. A plataforma foi concebida para utilizadores sem conhecimentos técnicos, oferecendo uma interface intuitiva de arrastar e largar para criar fluxos conversacionais.",
  },
  {
    question: "Como funciona o processo de treino com IA?",
    answer:
      "Pode treinar o seu chatbot com:\n•	Documentos (PDF, Word, etc.)\n•	Textos livres\n•	URLs de websites\nA IA do LUSO processa esta informação para responder de forma precisa às perguntas dos utilizadores.",
  },
  {
    question: "Que integrações estão disponíveis?",
    answer:
      "O LUSO integra-se com:\n•	Google Sheets\n•	Zapier: Conecte-se a mais de 2.000 aplicações para automatizar fluxos de trabalho.",
  },
  {
    question: "Posso personalizar o chatbot com a minha marca?",
    answer:
      "Sim. A plataforma permite:\n•	Remover a marca LUSO\n•	Personalizar cores, logótipos, mensagens e avatar do chatbot",
  },
  {
    question: "O LUSO é adequado para agência?",
    answer: "Absolutamente. Oferecemos:\n•	Gestão multi-cliente\n•	White-label completo",
  },
  {
    question: "Posso exportar dados e relatórios?",
    answer: "Sim. Pode exportar:\n•	Conversas\n•	Leads\n•	Análises através de integrações com ferramentas externas",
  },
  {
    question: "Como é garantida a segurança dos dados?",
    answer: "Implementamos:\n•	Encriptação de dados\n•	Conformidade com o RGPD",
  },
  {
    question: "O LUSO oferece demonstrações gratuitas?",
    answer:
      "Sim. Atualmente, estamos a oferecer demonstrações gratuitas. Por favor, preencha o formulário de contacto aqui.",
  },
  {
    question: "Como posso obter suporte?",
    answer:
      "Disponibilizamos:\n•	Email: [A preencher: Endereço de suporte]\n•	Chat ao vivo: No nosso website\n•	Centro de Ajuda: [A preencher: URL do centro de ajuda]",
  },
]

export default function Home() {
  return (
    <div className="bg-white p-4 pb-0">
      <div className="max-w-4xl mx-auto mb-0">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:text-[#0eb49b] text-2xl py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                <div className="prose dark:prose-invert max-w-none prose-xl">
                  {item.answer.split("•").map((part, i) => {
                    if (i === 0)
                      return (
                        <p key={i} className="text-xl">
                          {part}
                        </p>
                      )
                    return (
                      <p key={i} className="text-xl">
                        • {part}
                      </p>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
