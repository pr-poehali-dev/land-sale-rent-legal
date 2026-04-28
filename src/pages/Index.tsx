import { useState } from "react";
import Icon from "@/components/ui/icon";

type Section = "home" | "services" | "contacts";

const NAV_ITEMS: { id: Section; label: string }[] = [
  { id: "home", label: "Главная" },
  { id: "services", label: "Юридические услуги" },
  { id: "contacts", label: "Контакты" },
];

const SERVICES = [
  {
    number: "01",
    title: "Сопровождение сделок",
    desc: "Полное юридическое сопровождение купли-продажи, мены, дарения недвижимости. Проверка объекта и участников сделки.",
  },
  {
    number: "02",
    title: "Проверка юридической чистоты",
    desc: "Анализ правоустанавливающих документов, истории объекта, проверка обременений и ограничений.",
  },
  {
    number: "03",
    title: "Регистрация права собственности",
    desc: "Подготовка пакета документов и сопровождение процедуры государственной регистрации в Росреестре.",
  },
  {
    number: "04",
    title: "Разрешение споров",
    desc: "Защита интересов в судах по делам о признании права, разделе имущества, оспаривании сделок.",
  },
  {
    number: "05",
    title: "Консультации",
    desc: "Устные и письменные консультации по любым вопросам, связанным с приобретением и владением недвижимостью.",
  },
  {
    number: "06",
    title: "Договорная работа",
    desc: "Составление и экспертиза договоров аренды, ипотеки, долевого участия и иных соглашений.",
  },
];

const Index = () => {
  const [active, setActive] = useState<Section>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const navigate = (section: Section) => {
    setActive(section);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background font-ibm text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("home")}
            className="font-cormorant text-xl font-semibold tracking-wide text-foreground hover:text-gold transition-colors"
          >
            Консультация по земельным отношениям
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`text-sm tracking-wide transition-colors ${
                  active === item.id
                    ? "text-gold font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigate("contacts")}
              className="text-sm px-5 py-2 bg-foreground text-background hover:bg-gold transition-colors"
            >
              Получить консультацию
            </button>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground"
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4 animate-fade-in">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`text-left text-sm tracking-wide py-1 ${
                  active === item.id ? "text-gold font-medium" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* HOME */}
        {active === "home" && (
          <div>
            {/* Hero */}
            <section className="relative min-h-[92vh] flex items-center bg-foreground overflow-hidden">
              <div className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.15) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.15) 60px)",
                }}
              />
              <div className="max-w-6xl mx-auto px-6 py-24 w-full">
                <div className="max-w-3xl animate-fade-up">
                  <p className="text-gold font-ibm text-sm tracking-[0.2em] uppercase mb-6">
                    Консультация по земельным отношениям
                  </p>
                  <h1 className="font-cormorant text-5xl md:text-7xl font-light text-white leading-[1.1] mb-8">
                    Ваша сделка
                    <br />
                    <em>под защитой</em>
                  </h1>
                  <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl mb-12">
                    Помощь в покупке и аренде земельного участка. Поиск земельного участка под ваши задачи. Профессиональная консультация на каждом этапе.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => navigate("contacts")}
                      className="px-8 py-4 bg-gold text-white text-sm tracking-wide hover:opacity-90 transition-opacity"
                    >
                      Получить консультацию
                    </button>
                    <button
                      onClick={() => navigate("services")}
                      className="px-8 py-4 border border-white/30 text-white/80 text-sm tracking-wide hover:border-white hover:text-white transition-colors"
                    >
                      Наши услуги
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-px bg-white/10" />
              <div className="absolute right-16 top-24 bottom-24 w-px bg-gold/30" />
            </section>

            {/* Stats */}
            <section className="border-b border-border">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
                  {[
                    { value: "15+", label: "лет практики" },
                    { value: "800+", label: "сделок проведено" },
                    { value: "98%", label: "успешных дел" },
                    { value: "0", label: "случаев мошенничества" },
                  ].map((stat) => (
                    <div key={stat.label} className="px-8 py-10 text-center">
                      <div className="font-cormorant text-4xl font-semibold text-foreground mb-2">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Brief services */}
            <section className="py-24">
              <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-end justify-between mb-16">
                  <div>
                    <p className="text-gold text-xs tracking-[0.2em] uppercase mb-3">Что мы делаем</p>
                    <h2 className="font-cormorant text-4xl md:text-5xl font-light">Услуги</h2>
                  </div>
                  <button
                    onClick={() => navigate("services")}
                    className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Все услуги <Icon name="ArrowRight" size={16} />
                  </button>
                </div>
                <div className="grid md:grid-cols-3 gap-px bg-border">
                  {SERVICES.slice(0, 3).map((s) => (
                    <div key={s.number} className="bg-background p-8">
                      <div className="font-cormorant text-5xl font-light text-gold/30 mb-4">{s.number}</div>
                      <h3 className="font-cormorant text-2xl font-medium mb-3">{s.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-foreground">
              <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">Начать работу</p>
                <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-6">
                  Готовы обсудить вашу ситуацию?
                </h2>
                <p className="text-white/50 mb-10 max-w-md mx-auto">
                  Первичная консультация поможет оценить риски и выбрать оптимальный путь решения вашего вопроса.
                </p>
                <button
                  onClick={() => navigate("contacts")}
                  className="px-10 py-4 bg-gold text-white text-sm tracking-wide hover:opacity-90 transition-opacity"
                >
                  Написать нам
                </button>
              </div>
            </section>
          </div>
        )}

        {/* SERVICES */}
        {active === "services" && (
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="mb-16 border-b border-border pb-12">
              <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">Направления работы</p>
              <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">Юридические услуги</h1>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                Оказываем полный спектр юридических услуг в сфере недвижимости для физических и юридических лиц.
                Каждый случай рассматривается индивидуально.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-border mb-20">
              {SERVICES.map((s) => (
                <div key={s.number} className="bg-background p-10 hover:bg-secondary transition-colors">
                  <div className="flex items-start gap-6">
                    <span className="font-cormorant text-3xl font-light text-gold/40 leading-none mt-1">
                      {s.number}
                    </span>
                    <div>
                      <h3 className="font-cormorant text-2xl font-medium mb-3">{s.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-16">
              <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">Как мы работаем</p>
              <h2 className="font-cormorant text-4xl font-light mb-12">Процесс работы</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Обращение", desc: "Вы описываете ситуацию удобным способом" },
                  { step: "2", title: "Анализ", desc: "Изучаем документы и оцениваем риски" },
                  { step: "3", title: "Стратегия", desc: "Разрабатываем план действий" },
                  { step: "4", title: "Результат", desc: "Сопровождаем до достижения цели" },
                ].map((p) => (
                  <div key={p.step}>
                    <div className="w-10 h-10 border border-gold flex items-center justify-center font-cormorant text-lg text-gold mb-4">
                      {p.step}
                    </div>
                    <h4 className="font-medium mb-2">{p.title}</h4>
                    <p className="text-muted-foreground text-sm">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 p-8 bg-foreground text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="font-cormorant text-2xl font-light mb-1">Есть вопрос?</h3>
                <p className="text-white/50 text-sm">Расскажите о вашей ситуации — мы подберём оптимальное решение</p>
              </div>
              <button
                onClick={() => navigate("contacts")}
                className="shrink-0 px-8 py-3 bg-gold text-white text-sm tracking-wide hover:opacity-90 transition-opacity"
              >
                Связаться с нами
              </button>
            </div>
          </div>
        )}

        {/* CONTACTS */}
        {active === "contacts" && (
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="mb-16 border-b border-border pb-12">
              <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">Связь</p>
              <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">Контакты</h1>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                Напишите нам или позвоните — ответим в течение рабочего дня и запишем на удобное время.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="font-cormorant text-2xl font-medium mb-8">Реквизиты</h2>
                <div className="space-y-6">
                  {[
                    { icon: "Phone", label: "Телефон", value: "+7 (000) 000-00-00" },
                    { icon: "Mail", label: "Электронная почта", value: "info@example.ru" },
                    { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Примерная, д. 1, оф. 101" },
                    { icon: "Clock", label: "График работы", value: "Пн–Пт: 9:00–19:00" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
                        <Icon name={item.icon} size={16} className="text-gold" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1 tracking-wide">{item.label}</div>
                        <div className="text-sm font-medium">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-gold-light border-l-2 border-gold">
                  <p className="font-cormorant text-lg font-medium mb-2">Первичная консультация</p>
                  <p className="text-sm text-muted-foreground">
                    Мы проводим бесплатную первичную консультацию длительностью до 30 минут для оценки вашей ситуации.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-cormorant text-2xl font-medium mb-8">Написать нам</h2>
                {sent ? (
                  <div className="p-10 border border-gold/30 bg-gold-light text-center">
                    <div className="w-12 h-12 border border-gold mx-auto flex items-center justify-center mb-4">
                      <Icon name="Check" size={20} className="text-gold" />
                    </div>
                    <p className="font-cormorant text-2xl font-light mb-2">Сообщение отправлено</p>
                    <p className="text-muted-foreground text-sm">Свяжемся с вами в течение рабочего дня</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs text-muted-foreground tracking-wide mb-2">Ваше имя</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Иван Иванов"
                        className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground tracking-wide mb-2">Телефон или почта</label>
                      <input
                        type="text"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+7 (___) ___-__-__"
                        className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground tracking-wide mb-2">Опишите вашу ситуацию</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Расскажите о вашем вопросе..."
                        rows={5}
                        className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-foreground text-background text-sm tracking-wide hover:bg-gold transition-colors"
                    >
                      Отправить сообщение
                    </button>
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-border py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-cormorant text-lg font-medium">Консультация по земельным отношениям</p>
          <div className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">© 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;