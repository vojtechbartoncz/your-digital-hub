import { Headphones, Globe, MessageCircle, Instagram, Youtube } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const links = [
{
  title: "Podcast",
  description: "Poslechni si mé epizody",
  url: "https://www.youtube.com/watch?v=b5vrTFtoz2U&list=PLkOQbECU51UsJ7UmKFzwvm_kb9gbNqt_6",
  icon: Headphones
},
{
  title: "Sebevědomá komunikace",
  description: "Komunikační & prezentační dovednosti",
  url: "https://www.sebevedoma-komunikace.cz/",
  icon: MessageCircle
},
{
  title: "Boombrand",
  description: "Marketingová agentura",
  url: "https://www.instagram.com/boombrand_cz/",
  icon: Globe
}];


const socials = [
{
  icon: Instagram,
  url: "https://www.instagram.com/boombrand_cz/",
  label: "Instagram"
},
{
  icon: Youtube,
  url: "https://www.youtube.com/watch?v=b5vrTFtoz2U&list=PLkOQbECU51UsJ7UmKFzwvm_kb9gbNqt_6",
  label: "YouTube"
}];


const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md flex flex-col items-center gap-8">
        {/* Profile */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-lg">
            <img

              alt="Vojtěch Bartoň"
              className="w-full h-full object-cover object-top" src="/lovable-uploads/cf567b53-7d19-4c40-b314-08e0b324664c.png" />

          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Vojtěch Bartoň
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Marketing · Komunikace · Prezentace
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="w-full flex flex-col gap-3">
          {links.map((link) =>
          <a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 w-full rounded-xl border border-border bg-card px-5 py-4 transition-all duration-200 hover:border-primary hover:shadow-md hover:shadow-primary/10 hover:-translate-y-0.5">

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
        <div className="flex items-center gap-4">
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

        {/* Footer */}
        <p className="text-xs text-muted-foreground/60 tracking-wide">
          © {new Date().getFullYear()} Vojtěch Bartoň
        </p>
      </div>
    </main>);

};

export default Index;