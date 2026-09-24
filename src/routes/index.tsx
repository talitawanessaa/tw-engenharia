import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Flame,
  FileCheck2,
  FileSearch,
  Fuel,
  ArrowRight,
  Phone,
  Clock,
  Mail,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import plantaHero from "@/assets/planta-hero-2.png.asset.json";
import perfil from "@/assets/perfil-2.png.asset.json";
import logoMarkRed from "@/assets/logo-mark-red.png.asset.json";
import logoWordWhite from "@/assets/logo-word-white.png.asset.json";

// ============================================================
// DADOS DE CONTATO — dados reais.
// ============================================================
const WHATSAPP_NUMBER = "5581998982408";
const WHATSAPP_DISPLAY = "(81) 99898-2408";
const EMAIL = "talitaw.engg@gmail.com";
const CREA = "CREA 1822120098/PE";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Talita Wanessa · Engenharia de Incêndio, AVCB e CLCB" },
      {
        name: "description",
        content:
          "Projetos de combate a incêndio e pânico, AVCB por termo de compromisso e definitivo, CLCB, vistoria de sistemas e assessoria junto ao Corpo de Bombeiros.",
      },
      {
        property: "og:title",
        content: "Talita Wanessa · Engenharia de Incêndio, AVCB e CLCB",
      },
      {
        property: "og:description",
        content:
          "Projetos de combate a incêndio e pânico, AVCB e CLCB, vistoria de sistemas e assessoria para AVCB.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function waLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{children}</p>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logoMarkRed.url}
            alt="Logomarca TW — Talita Wanessa"
            className="size-9 rounded-md object-contain"
          />
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold tracking-tight">
              Talita Wanessa
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Eng. Civil · Segurança do Trabalho
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#sobre" className="transition-colors hover:text-foreground">
            Sobre
          </a>
          <a href="#servicos" className="transition-colors hover:text-foreground">
            Serviços
          </a>
          <a href="#processo" className="transition-colors hover:text-foreground">
            Processo
          </a>
          <a href="#contato" className="transition-colors hover:text-foreground">
            Contato
          </a>
          <a href="#duvidas" className="transition-colors hover:text-foreground">
            Dúvidas
          </a>
        </nav>
        <a
          href={waLink("Olá, Talita! Gostaria de solicitar um orçamento.")}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-md bg-ink px-4 py-2 text-sm font-semibold text-ink-foreground transition-colors hover:bg-primary sm:inline-flex"
        >
          Solicitar orçamento
        </a>

      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-primary/10 blur-3xl" />
      {/* Prancha como marca d'água cobrindo todo o fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none"
      >
        <img
          src={plantaHero.url}
          alt=""
          className="h-full w-full object-cover opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"
        />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 sm:py-24">
        <div className="lg:col-span-9">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            {CREA} · Registro ativo
          </span>
          <h1 className="mt-6 max-w-[24ch] font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Projetos que conectam{" "}
            <span className="text-primary">segurança e conformidade</span>
          </h1>
          <p className="mt-6 max-w-[52ch] text-pretty text-base text-muted-foreground sm:text-lg">
            Projetos de Combate a Incêndio e Pânico, AVCB, DLCB, Vistoria dos Sistemas e
            Assessoria com responsabilidade técnica assinada do início ao fim.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={waLink("Olá, Talita! Gostaria de solicitar um orçamento.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Solicitar orçamento
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>

            <a
              href={waLink("Olá, Talita! Gostaria de solicitar um orçamento.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/40"
            >
              <MessageCircle className="size-4 text-primary" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] text-muted-foreground">
            {["Combate a incêndio e pânico", "AVCB & CLCB", "Vistoria de sistemas", "Assessoria"].map(
              (item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="text-primary">✓</span> {item}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:order-2">
          <img
            src={perfil.url}
            alt="Talita Wanessa agachada ao lado de notebook, trena e projetos técnicos"
            loading="lazy"
            className="w-full rounded-2xl border border-white/10 object-cover"
          />
        </div>
        <div className="lg:col-span-7 lg:order-1">

          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            (01) Sobre
          </p>
          <h2 className="mt-4 max-w-[26ch] font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
            Engenharia que transforma segurança em prevenção.
          </h2>
          <p className="mt-5 max-w-[56ch] text-pretty leading-relaxed text-ink-foreground/75">
            Sou Talita Wanessa, engenheira civil e de segurança do trabalho, e atuo com projetos e
            regularização de edificações na área de segurança contra incêndio.
          </p>
          <p className="mt-4 max-w-[56ch] text-pretty leading-relaxed text-ink-foreground/75">
            Desenvolvo projetos de prevenção e combate a incêndio e pânico, adequações e processos
            de regularização junto ao Corpo de Bombeiros, buscando soluções técnicas, seguras e
            adequadas às necessidades de cada empreendimento.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Registro", value: "CREA ativo", detail: "Responsabilidade técnica nos serviços realizados" },
              { label: "Formação", value: "Engenharia Civil + Segurança do Trabalho", detail: "Atuação integrada entre projeto, segurança e conformidade" },
              { label: "Foco", value: "Segurança contra incêndio", detail: "Projetos e regularização de edificações" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-foreground/50">
                  {item.label}
                </p>
                <p className="mt-2 font-display text-base font-bold">{item.value}</p>
                <p className="mt-1 text-sm text-ink-foreground/60">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Flame,
    title: "Projeto de Prevenção e Combate a Incêndio e Pânico (PPCIP)",
    description:
      "Elaboração técnica conforme as normas do Corpo de Bombeiros: pranchas, memoriais descritivos, rotas de fuga, sinalização e dimensionamento dos sistemas.",
  },
  {
    icon: Fuel,
    title: "Projeto de Gás (GLP ou GN)",
    description:
      "Dimensionamento da rede de gás GLP ou GN conforme normas de segurança e requisitos técnicos.",
  },
  {
    icon: FileCheck2,
    title: "AVCB/DLCB",
    description:
      "Condução do processo do Alvará de Vistoria do Corpo de Bombeiros. Condução do processo de Dispensa de licença do Corpo de Bombeiros. Acompanhamento do começo ao fim: orientação normativa, organização da documentação e apoio durante a análise e a fiscalização do Corpo de Bombeiros.",
  },
  {
    icon: FileSearch,
    title: "Vistoria Técnica",
    description:
      "Verificação no local para conferir se os sistemas de segurança contra incêndio estão em ordem e funcionando, com apontamento das adequações necessárias.",
  },
];

function Servicos() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <SectionLabel>(02) Serviços</SectionLabel>
          <h2 className="mt-4 max-w-[24ch] font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
            Da planta ao documento, tudo em um só lugar.
          </h2>
        </div>
        <p className="max-w-[36ch] text-pretty text-sm text-muted-foreground">
          Escopos técnicos completos, com pranchas, memoriais e acompanhamento junto ao órgão.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, description }, i) => (
          <article
            key={title}
            className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40"
          >
            <div className="flex items-center justify-between">
              <span className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="font-mono text-xs text-muted-foreground/60">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-4 font-display text-lg font-bold tracking-tight">{title}</h3>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </article>
        ))}
        <a
          href="#contato"
          className="group flex flex-col justify-between rounded-2xl border border-primary/40 bg-primary/5 p-6 transition-all hover:-translate-y-0.5 hover:bg-primary/10"
        >
          <span className="grid size-11 place-items-center rounded-lg bg-primary text-primary-foreground">
            <ArrowRight className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-primary">
              Não sei por onde começar
            </h3>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
              Descreva seu imóvel e eu indico o documento certo para regularizá-lo.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

const STEPS: {
  title: string;
  description: string;
}[] = [
  {
    title: "Contato inicial",
    description: "Você nos apresenta a sua necessidade.",
  },
  {
    title: "Proposta Comercial",
    description:
      "Apresentamos o escopo detalhado, os prazos de entrega e o investimento de forma clara e transparente.",
  },
  {
    title: "Reunião de Validação",
    description: "Realizo uma reunião presencial ou totalmente online.",
  },
  {
    title: "Entrega Final",
    description:
      "Você recebe toda a documentação completa, pranchas detalhadas, memoriais e arquivos prontos para a execução na obra.",
  },
  {
    title: "Pós-Venda e Suporte",
    description:
      "Meu compromisso não acaba na entrega. Dou suporte consultivo para tirar dúvidas da equipe de execução até a obra sair do papel.",
  },
];

function Processo() {
  return (
    <section id="processo" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionLabel>(03) Processo</SectionLabel>
        <h2 className="mt-4 max-w-[24ch] font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
          Como funciona
        </h2>
        <div className="relative mt-12">
          <div className="absolute top-2 bottom-2 left-[19px] w-px bg-white/10 sm:block" />
          <ol className="space-y-5">
            {STEPS.map((step, i) => (
              <li key={step.title} className="relative flex gap-5">
                <span className="z-10 grid size-10 shrink-0 place-items-center rounded-full border border-border bg-card font-mono text-xs font-semibold text-black">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 rounded-xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="font-display font-bold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}



function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    imovel: "Comercial",
    mensagem: "",
  });

  const set = (field: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = [
      `Olá, Talita! Meu nome é ${form.nome || "—"}.`,
      `Tipo de imóvel: ${form.imovel}.`,
      form.telefone && `Telefone: ${form.telefone}.`,
      form.email && `E-mail: ${form.email}.`,
      form.mensagem && `Preciso de: ${form.mensagem}.`,
      "Gostaria de solicitar um orçamento.",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(message), "_blank", "noopener");
  };

  const inputClass =
    "mt-2 w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Nome *
          </span>
          <input
            type="text"
            required
            value={form.nome}
            onChange={(e) => set("nome")(e.target.value)}
            placeholder="Seu nome"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Telefone / WhatsApp *
          </span>
          <input
            type="tel"
            required
            value={form.telefone}
            onChange={(e) => set("telefone")(e.target.value)}
            placeholder="(00) 00000-0000"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            E-mail
          </span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            placeholder="voce@email.com"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Tipo de imóvel
          </span>
          <select
            value={form.imovel}
            onChange={(e) => set("imovel")(e.target.value)}
            className={inputClass}
          >
            <option>Comercial</option>
            <option>Residencial</option>
            <option>Industrial</option>
            <option>Evento / Temporário</option>
            <option>Outro</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Mensagem
          </span>
          <textarea
            rows={4}
            value={form.mensagem}
            onChange={(e) => set("mensagem")(e.target.value)}
            placeholder="Descreva o que você precisa resolver..."
            className={`${inputClass} resize-none`}
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        Enviar e receber orçamento
      </button>
      <p className="mt-3 text-center font-mono text-[10px] text-muted-foreground">
        Ao enviar, sua mensagem abre direto no WhatsApp da Talita. Seus dados não são armazenados.
      </p>
    </form>
  );
}

function Contato() {
  return (
    <section id="contato" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel>(04) Contato</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
            Solicite seu orçamento
          </h2>
          <p className="mt-4 max-w-[40ch] text-pretty text-muted-foreground">
            Preencha o formulário e receba retorno em até 1 dia útil. Prefere falar agora? Chame no
            WhatsApp.
          </p>
          <div className="mt-8 space-y-3">
            <a
              href={waLink("Olá, Talita! Gostaria de solicitar um orçamento.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/40"
            >
              <MessageCircle className="size-4 text-primary" aria-hidden="true" />
              WhatsApp · {WHATSAPP_DISPLAY}
            </a>
            <p className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail className="size-4" aria-hidden="true" />
              {EMAIL}
            </p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    question: "Os projetos têm responsabilidade técnica?",
    answer:
      "Sim, pela responsável técnica (CREA 1822120098/PE) com sua respectiva ART.",
  },
  {
    question: "Quanto tempo leva para entrega do projeto?",
    answer:
      "O prazo varia conforme o porte e a complexidade do empreendimento e é definido na proposta comercial. As condições e os prazos acordados são formalizados em contrato, garantindo clareza e compromisso com a entrega.",
  },
  {
    question: "O que preciso fornecer para iniciar o projeto?",
    answer:
      "São solicitados os documentos e informações necessários sobre o empreendimento, como plantas existentes, dados da edificação e demais documentos conforme o serviço contratado.",
  },
  {
    question: "Você cuida da aprovação junto ao CBM?",
    answer:
      "Sim. Quando a aprovação estiver incluída no serviço contratado, acompanho o processo junto ao CBM até a conclusão da etapa prevista na proposta.",
  },
  {
    question: "Já tenho um projeto antigo. Preciso fazer outro?",
    answer:
      "Não necessariamente. Primeiro analiso o projeto existente e as condições atuais da edificação para verificar se é possível utilizá-lo, atualizá-lo ou se será necessária uma nova elaboração.",
  },
  {
    question: "Depois da aprovação do projeto, o que preciso fazer?",
    answer:
      "Após a aprovação, devem ser executadas as medidas de segurança previstas no projeto. Conforme o serviço contratado, também posso realizar a assessoria nas etapas de regularização e obtenção do AVCB.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-card shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-display font-bold tracking-tight text-foreground">
          {question}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          {answer}
        </p>
      )}
    </div>
  );
}

function Duvidas() {
  return (
    <section id="duvidas" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
          (05) Dúvidas Frequentes
        </p>
        <h2 className="mt-4 max-w-[26ch] font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
          Perguntas que sempre aparecem.
        </h2>
        <div className="mt-10 space-y-3">
          {FAQS.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div className="flex flex-col items-start gap-3">
          <img
            src={logoWordWhite.url}
            alt="Talita Wanessa"
            className="h-10 w-auto"
          />
          <p className="font-mono text-[11px] text-ink-foreground/70">
            Engenheira Civil e de Segurança do Trabalho
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-foreground/50">
            Informações de contato
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/80">
            <li>
              <a
                href={waLink("Olá, Talita! Vim pelo site e gostaria de mais informações.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-ink-foreground"
              >
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-ink-foreground"
              >
                <Mail className="size-4 text-primary" aria-hidden="true" />
                {EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              Seg. a Sex. – Das 9h às 18h
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-end">
          <div className="space-y-1 font-mono text-[11px] text-ink-foreground/50">
            <p>{CREA}</p>
            <p>CNPJ 64.476.545/0001-51</p>
            <p>© 2026</p>
            <p>Todos os direitos reservados</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={waLink("Olá, Talita! Vim pelo site e gostaria de mais informações.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Processo />
        <Contato />
        <Duvidas />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
