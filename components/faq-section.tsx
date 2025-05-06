"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section className="w-full bg-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-[#E5E7EB]">
              <AccordionTrigger className="text-left text-2xl font-medium text-[#111827] hover:text-[#0eb49b] hover:bg-[#F9FAFB] py-4">
                O que é o LUSO?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-xl bg-[#F9FAFB] px-6 py-4 rounded-b-md">
                O LUSO é uma plataforma no-code que permite a empresas e agências criar, treinar e implementar chatbots
                inteligentes de forma rápida e sem necessidade de conhecimentos técnicos. Ideal para automatizar
                atendimento ao cliente, qualificar leads e melhorar a experiência digital dos utilizadores.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-[#E5E7EB]">
              <AccordionTrigger className="text-left text-2xl font-medium text-[#111827] hover:text-[#0eb49b] hover:bg-[#F9FAFB] py-4">
                Que tipos de chatbots posso criar?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-xl bg-[#F9FAFB] px-6 py-4 rounded-b-md">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Chatbots Clássicos: Baseados em regras e fluxos pré-definidos.</li>
                  <li>
                    Chatbots com IA: Treinados com dados específicos da sua empresa para responder de forma
                    contextualizada.
                  </li>
                  <li>Chatbots Híbridos: Combinação de lógica baseada em regras com inteligência artificial.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-[#E5E7EB]">
              <AccordionTrigger className="text-left text-2xl font-medium text-[#111827] hover:text-[#0eb49b] hover:bg-[#F9FAFB] py-4">
                Preciso de saber programar para usar o LUSO?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-xl bg-[#F9FAFB] px-6 py-4 rounded-b-md">
                Não. A plataforma foi concebida para utilizadores sem conhecimentos técnicos, oferecendo uma interface
                intuitiva de arrastar e largar para criar fluxos conversacionais.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-[#E5E7EB]">
              <AccordionTrigger className="text-left text-2xl font-medium text-[#111827] hover:text-[#0eb49b] hover:bg-[#F9FAFB] py-4">
                Como funciona o processo de treino com IA?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-xl bg-[#F9FAFB] px-6 py-4 rounded-b-md">
                <p>Pode treinar o seu chatbot com:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Documentos (PDF, Word, etc.)</li>
                  <li>Textos livres</li>
                  <li>URLs de websites</li>
                </ul>
                <p className="mt-2">
                  A IA do LUSO processa esta informação para responder de forma precisa às perguntas dos utilizadores.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-[#E5E7EB]">
              <AccordionTrigger className="text-left text-2xl font-medium text-[#111827] hover:text-[#0eb49b] hover:bg-[#F9FAFB] py-4">
                Que integrações estão disponíveis?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-xl bg-[#F9FAFB] px-6 py-4 rounded-b-md">
                <p>O LUSO integra-se com:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Zapier: Conecte-se a mais de 2.000 aplicações para automatizar fluxos de trabalho.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-b border-[#E5E7EB]">
              <AccordionTrigger className="text-left text-2xl font-medium text-[#111827] hover:text-[#0eb49b] hover:bg-[#F9FAFB] py-4">
                Posso personalizar o chatbot com a minha marca?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-xl bg-[#F9FAFB] px-6 py-4 rounded-b-md">
                <p>Sim. A plataforma permite:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Remover a marca LUSO</li>
                  <li>Personalizar cores, logótipos, mensagens e avatar do chatbot</li>
                  <li>[A preencher: Outras opções de personalização disponíveis]</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-b border-[#E5E7EB]">
              <AccordionTrigger className="text-left text-2xl font-medium text-[#111827] hover:text-[#0eb49b] hover:bg-[#F9FAFB] py-4">
                O LUSO é adequado para agências ou revendedores?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-xl bg-[#F9FAFB] px-6 py-4 rounded-b-md">
                <p>Absolutamente. Oferecemos:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Gestão multi-cliente</li>
                  <li>White-label completo</li>
                  <li>
                    [A preencher: Funcionalidades adicionais para agências, como relatórios detalhados ou suporte
                    dedicado]
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border-b border-[#E5E7EB]">
              <AccordionTrigger className="text-left text-2xl font-medium text-[#111827] hover:text-[#0eb49b] hover:bg-[#F9FAFB] py-4">
                Posso exportar dados e relatórios?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-xl bg-[#F9FAFB] px-6 py-4 rounded-b-md">
                <p>Sim. Pode exportar:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Conversas</li>
                  <li>Leads</li>
                  <li>Análises através de integrações com ferramentas externas</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border-b border-[#E5E7EB]">
              <AccordionTrigger className="text-left text-2xl font-medium text-[#111827] hover:text-[#0eb49b] hover:bg-[#F9FAFB] py-4">
                Como é garantida a segurança dos dados?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-xl bg-[#F9FAFB] px-6 py-4 rounded-b-md">
                <p>Implementamos:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Encriptação de dados</li>
                  <li>Conformidade com o RGPD</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border-b border-[#E5E7EB]">
              <AccordionTrigger className="text-left text-2xl font-medium text-[#111827] hover:text-[#0eb49b] hover:bg-[#F9FAFB] py-4">
                O LUSO oferece demonstrações gratuitas?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-xl bg-[#F9FAFB] px-6 py-4 rounded-b-md">
                Sim. Atualmente, estamos a oferecer demonstrações gratuitas. Por favor, preencha o{" "}
                <a href="https://www.luso.chat/#demo" className="text-[#0eb49b] hover:underline">
                  formulário de contacto aqui
                </a>
                .
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="border-b border-[#E5E7EB]">
              <AccordionTrigger className="text-left text-2xl font-medium text-[#111827] hover:text-[#0eb49b] hover:bg-[#F9FAFB] py-4">
                Como posso obter suporte?
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-xl bg-[#F9FAFB] px-6 py-4 rounded-b-md">
                <p>Disponibilizamos:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Email: [A preencher: Endereço de suporte]</li>
                  <li>Chat ao vivo: No nosso website</li>
                  <li>Centro de Ajuda: [A preencher: URL do centro de ajuda]</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
