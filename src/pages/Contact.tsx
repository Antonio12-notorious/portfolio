import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Mail, MapPin, Phone, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "../utils/cn";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  subject: z.string().min(5, "O assunto deve ser mais descritivo"),
  message: z.string().min(10, "A mensagem deve ser mais longa"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const EMAILJS_SERVICE_ID = "service_orti21d";
const EMAILJS_TEMPLATE_ID = "template_6z1xw7l";
const EMAILJS_PUBLIC_KEY = "lUJrQCTdquUYNOlLu";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      console.log("EmailJS result:", result);

      setIsSuccess(true);
      toast.success("Mensagem enviada com sucesso!", {
        description: "Entrarei em contacto brevemente.",
      });
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Erro ao enviar mensagem.", {
        description: "Verifica a consola para mais detalhes.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12 pb-24">
      <div className="max-w-2xl">
        <h2 className="text-5xl font-display font-bold mb-6">
          Vamos <span className="text-brand-accent">Conversar?</span>
        </h2>
        <p className="text-lg text-brand-primary/60">
          Tem um projecto em mente ou precisa de uma consultoria especializada
          em redes e segurança? Preencha o formulário e entrarei em contacto o
          mais breve possível.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* ── Info lateral ── */}
        <div className="lg:col-span-1 space-y-4">
          {[
            {
              icon: <Mail className="text-brand-accent scale-90" />,
              title: "E-mail",
              value: "vanildoantonio19@gmail.com",
            },
            {
              icon: <MapPin className="text-brand-accent scale-90" />,
              title: "Localização",
              value: "Cidade da Beira, Moçambique",
            },
            {
              icon: <Phone className="text-brand-accent scale-90" />,
              title: "Telefone",
              value: "+258 878668672",
            },
          ].map((info) => (
            <div
              key={info.title}
              className="card flex gap-4 p-5 hover:bg-white/[0.02]"
            >
              <div className="p-3 bg-brand-accent/10 rounded-lg flex-shrink-0">
                {info.icon}
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-text-dim mb-1">
                  {info.title}
                </p>
                <p className="font-bold text-sm text-text-dim">{info.value}</p>
              </div>
            </div>
          ))}

          <div className="card border-brand-accent/20 bg-brand-accent/5 p-8 mt-4">
            <h3 className="text-xs font-bold uppercase tracking-[3px] text-brand-accent mb-4">
              Arquitetura CORE
            </h3>
            <p className="text-sm text-text-dim leading-relaxed">
              As suas informações são processadas via criptografia de
              ponta-a-ponta e integradas ao CRM corporativo.
            </p>
          </div>
        </div>

        {/* ── Formulário ── */}
        <div className="lg:col-span-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card p-8 md:p-12 space-y-6"
          >
            {/* Nome + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-text-dim px-1">
                  Nome Completo
                </label>
                <input
                  {...register("name")}
                  type="text"
                  className={cn(
                    "w-full px-5 py-3.5 bg-white/[0.03] border border-border-dim rounded-lg font-sans text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all",
                    errors.name
                      ? "border-red-500"
                      : "focus:border-brand-accent",
                  )}
                  placeholder="Ex: João Silva"
                  
                />
                {errors.name && (
                  <p className="text-[10px] text-red-500 px-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-text-dim px-1">
                  E-mail
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className={cn(
                    "w-full px-5 py-3.5 bg-white/[0.03] border border-border-dim rounded-lg font-sans text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all",
                    errors.email
                      ? "border-red-500"
                      : "focus:border-brand-accent",
                  )}
                  placeholder="joao@empresa.com"
                />
                {errors.email && (
                  <p className="text-[10px] text-red-500 px-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Assunto — estava em falta no teu código! */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-text-dim px-1">
                Assunto
              </label>
              <input
                {...register("subject")}
                className={cn(
                  "w-full px-5 py-3.5 bg-white/[0.03] border border-border-dim rounded-lg font-sans text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all",
                  errors.subject
                    ? "border-red-500"
                    : "focus:border-brand-accent",
                )}
                placeholder="Ex: Consultoria em redes, Projecto web..."
                type="subject"
              />
              {errors.subject && (
                <p className="text-[10px] text-red-500 px-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Mensagem */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-text-dim px-1">
                Mensagem
              </label>
              <textarea
                {...register("message")}
                rows={4}
                className={cn(
                  "w-full px-5 py-3.5 bg-white/[0.03] border border-border-dim rounded-lg font-sans text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all resize-none",
                  errors.message
                    ? "border-red-500"
                    : "focus:border-brand-accent",
                )}
                placeholder="Como posso ajudar na sua infraestrutura?"
              />
              {errors.message && (
                <p className="text-[10px] text-red-500 px-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 py-2">
              <div className="w-4 h-4 border border-brand-accent rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-brand-accent rounded-[1px] accent-glow" />
              </div>
              <span className="text-[10px] text-text-dim uppercase tracking-wider">
                Validação em tempo real ativa.
              </span>
            </div>

            {/* Botão corrigido com flex */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-sm uppercase tracking-[2px] transition-all cursor-pointer",
                isSuccess
                  ? "bg-green-500 text-white"
                  : "bg-brand-accent text-white hover:bg-brand-accent/90 accent-glow",
              )}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin text-white" size={18} /> Processando...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle2 size={18} /> Solicitação Enviada
                </>
              ) : (
                <>
                  <Send size={18} className="text-white" /> Enviar Solicitação
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
