"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"
import ReactMarkdown from "react-markdown"

const items = [
  {
    label: "What services do you provide?",
    icon: "help-circle",
    content:
      "We offer services including social media marketing, website development, graphic design, video editing, business branding, SEO, and more.",
  },
  {
    label: "How can I get started with your services?",
    icon: "help-circle",
    content:
      "Simply contact us via email, phone or our website, and we will schedule a consultation to discuss your needs.",
  },
  {
    label: "Do you offer customized packages?",
    icon: "help-circle",
    content:
      "Yes, all our services are fully customizable to align with your business goals and requirements.",
  },
  {
    label: "What industries do you work with?",
    icon: "help-circle",
    content:
      "We work with clients across various industries, including e-commerce, healthcare, real estate, technology, and more.",
  },
  {
    label: "How do you measure success?",
    icon: "help-circle",
    content:
      "We use data-driven metrics such as website traffic, conversion rates, engagement, and ROI to track and measure success.",
  },
  {
    label: "How long does it take to see results?",
    icon: "help-circle",
    content:
      "It depends on the service. SEO and branding may take a few months, while paid ads or social media campaigns often yield quicker results.",
  },
  {
    label: "Can you help with content creation?",
    icon: "help-circle",
    content:
      "Yes, we offer content strategy and creation services, including blog posts, social media content, videos, and more.",
  },
  {
    label: "Do you provide ongoing support?",
    icon: "help-circle",
    content:
      "Yes, we provide ongoing support, including maintenance, updates, and consultations, depending on your service package.",
  },
  {
    label: "What is your pricing structure?",
    icon: "help-circle",
    content:
      "Our pricing depends on the services you choose and your business requirements. Contact us for a custom quote.",
  },
  {
    label: "Can I cancel or modify my service plan?",
    icon: "help-circle",
    content:
      "Yes, our plans are flexible. You can upgrade, downgrade, or cancel your plan with prior notice.",
  },
  {
    label: "Do you manage social media accounts?",
    icon: "help-circle",
    content:
      "Yes, we offer full social media management, including content posting, audience engagement, and campaign optimization.",
  },
  {
    label: "What platforms do you develop websites for?",
    icon: "help-circle",
    content:
      "We develop websites for platforms like WordPress, Shopify, Wix, and custom solutions tailored to your needs.",
  },
  {
    label: "Do you provide video editing for promotional content?",
    icon: "help-circle",
    content:
      "Yes, we specialize in editing videos for promotional campaigns, social media, and brand storytelling.",
  },
  {
    label: "How do you handle advertising campaigns?",
    icon: "help-circle",
    content:
      "We create, manage, and optimize advertising campaigns on platforms like Facebook, Instagram, and Google to ensure the best ROI.",
  },
  {
    label: "Can you help improve my brand visibility online?",
    icon: "help-circle",
    content:
      "Absolutely. Our SEO, branding, and social media strategies are designed to boost your online presence effectively.",
  },
  {
    label: "Do you work with startups?",
    icon: "help-circle",
    content:
      "Yes, we work with businesses of all sizes, including startups, to help them establish and grow their presence.",
  },
  {
    label: "How do you ensure quality in your work?",
    icon: "help-circle",
    content:
      "We follow a structured process involving research, planning, implementation, and continuous evaluation to deliver quality results.",
  },
  {
    label: "What is your refund policy?",
    icon: "help-circle",
    content:
      "Refund policies vary depending on the service and project scope. Please contact us for specific details.",
  },
  {
    label: "Can I request revisions?",
    icon: "help-circle",
    content:
      "Yes, we offer revisions as part of our service packages to ensure client satisfaction.",
  },
  {
    label: "How can I contact you for more details?",
    icon: "help-circle",
    content:
      "You can reach us through our contact form, email, or phone, and we will get back to you promptly.",
  },
]

export function FAQAccordion() {
  return (
    <div>
      <div className="section-heading">
        <div className="flex justify-center">
          <div className="tag">FAQ'S Section</div>
        </div>
        <h2 className="section-title mt-5">Frequently Asked Questions</h2>
        <p className="section-description mt-5 mb-10">
          Find answers to the most common questions about our services, processes, and how we can help your business grow. If you do not see your question here, feel free to contact us!
        </p>
      </div>
      <Accordion type="single" defaultValue="1" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={String(index)}>
            <AccordionTrigger className="flex items-center gap-2 text-left">
              <HelpCircle className="h-5 w-5 flex-shrink-0" />
              <span>{item.label}</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm dark:prose-invert">
                <ReactMarkdown>{item.content}</ReactMarkdown>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

