import { Headphones, Globe, MessageCircle, Gem, Instagram, Youtube, Mail, Phone } from "lucide-react";

const links = [
{
  title: "Marketingová Agentura @boombrand_cz 💣",
  description: "Budování osobních a firemních značek na sociálních sítích",
  url: "https://www.instagram.com/boombrand_cz/",
  icon: Globe
},
{
  title: "Komunita Podnikatelů @joinbru 💎",
  description: "Networking & mastermind",
  url: "https://www.instagram.com/joinbru/",
  icon: Gem
},
{
  title: "Komunikační a Prezentační Dovednosti 🤝",
  description: "Sebevědomá komunikace jako nástroj pro šťastnější život",
  url: "https://www.sebevedoma-komunikace.cz/",
  icon: MessageCircle
},
{
  title: "Podcast @talktowin_podcast 🎙️",
  description: "Poslechni si mé epizody",
  url: "https://www.youtube.com/watch?v=b5vrTFtoz2U&list=PLkOQbECU51UsJ7UmKFzwvm_kb9gbNqt_6",
  icon: Headphones
}];


const socials = [
{
  icon: Instagram,
  url: "https://www.instagram.com/vojta__barton/",
  label: "Instagram"
},
{
  icon: Youtube,
  url: "https://www.youtube.com/@vojtabarton",
  label: "YouTube"
}];


const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 border-secondary-foreground bg-primary">
      <div className="w-full max-w-md flex flex-col items-center gap-8">
        {/* Profile */}
        <div className="flex flex-col items-center gap-4 opacity-0 animate-scale-fade" style={{ animationDelay: '0.1s' }}>
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/40 shadow-xl shadow-primary/20 border-[3px] border-solid border-secondary-foreground">
            <img
              alt="Vojtěch Bartoň"
              className="w-full h-full object-cover object-top" src="/lovable-uploads/be687977-e974-4b14-8dbc-bbf03509c14f.png" />
          </div>
          <div className="text-center">
            <h1 className="tracking-tight text-4xl font-sans font-extrabold text-secondary-foreground">
              Vojtěch Bartoň
            </h1>
            <p className="mt-1 text-secondary-foreground text-base font-mono font-extrabold">
              Marketingová agentura 💣 · Komunita podnikatelů 💎 · Komunikační a prezentační dovednosti 🤝 · Podcast 🎙️       
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="w-full flex flex-col gap-3">
          {links.map((link, i) =>
          <a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 w-full rounded-xl border border-border bg-card px-5 py-4 transition-all duration-200 hover:border-primary hover:shadow-md hover:shadow-primary/10 hover:-translate-y-0.5 opacity-0 animate-fade-up"
            style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <link.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block font-semibold text-foreground text-sm">
                  {link.title}
                </span>
                <span className="block text-xs text-muted-foreground truncate">
                  {link.description}
                </span>
              </div>
              <svg
              className="w-4 h-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          )}
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          {socials.map((s) =>
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="flex items-center justify-center w-11 h-11 rounded-full border border-border bg-card text-muted-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-md hover:shadow-primary/10">
              <s.icon className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Contact */}
        <div className="w-full rounded-xl bg-primary/10 px-6 py-5 flex flex-col items-center gap-3 border-2 border-solid border-secondary-foreground opacity-0 animate-fade-up" style={{ animationDelay: '0.9s' }}>
          <p className="text-base font-bold text-foreground font-mono text-center">
            Kontaktujte mě přes e-mail nebo telefonní číslo
          </p>
          <a
            href="mailto:vojtechbarton2004@gmail.com"
            className="flex items-center gap-2 text-base font-semibold hover:underline transition-colors text-secondary-foreground font-mono bg-primary">
            <Mail className="w-5 h-5" />
            vojtechbarton2004@gmail.com
          </a>
          <a
            href="tel:+420775133711"
            className="flex items-center gap-2 text-base font-semibold hover:underline transition-colors text-secondary-foreground font-mono">
            <Phone className="w-5 h-5" />
            +420 775 133 711
          </a>
        </div>

        {/* Footer */}
        <p className="text-xs tracking-wide text-secondary-foreground opacity-0 animate-fade-up" style={{ animationDelay: '1s' }}>
          © {new Date().getFullYear()} Vojtěch Bartoň
        </p>
      </div>
    </main>);

};

export default Index;