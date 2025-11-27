import { Volume2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center space-y-8 p-6 bg-background text-foreground">
      {/* Top Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
          Aprenda a consertar <strong className="font-bold">eletrodomésticos</strong>
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Volume2 className="h-5 w-5" />
          <span>Ative o som!</span>
        </div>
      </div>

      {/* Video Block */}
      <div className="w-full max-w-[900px] aspect-video rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&rel=0"
          title="Vídeo de Apresentação"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Text Below Video */}
      <p className="text-center text-lg font-semibold italic text-white max-w-2xl">
        “Assista a este vídeo até o final para obter acesso completo!”
      </p>

      {/* Logo */}
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://i.imgur.com/gjewUFK.png" 
          alt="MH Digital Logo" 
          width="180" 
          height="46"
          className="max-w-[180px] h-auto"
          loading="lazy"
        />
      </div>

      {/* Footer */}
      <footer className="text-center space-y-6 pt-8 w-full max-w-lg">
        <p className="text-xs text-muted-foreground">
          MH Digital © 2022 Todos os direitos reservados – CNPJ : 46.213.929/0001-08
        </p>
        
        <Link href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="Fale conosco no WhatsApp" className="inline-flex items-center justify-center w-14 h-14 bg-accent rounded-full text-accent-foreground shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-background">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.896-9.896-9.896-5.46 0-9.887 4.434-9.889 9.896.001 2.265.654 4.395 1.876 6.22l-1.06 3.886 3.999-1.05z" />
            <path d="M15.271 14.385c-.073-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.273-.099-.471-.148-.67.148-.198.297-.768.967-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.172.198-.296.297-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-57-.01s-.5.074-.769.371c-.268.297-.966.941-.966 2.28 0 1.338.991 2.636 1.139 2.834.149.198 1.961 3.003 4.755 4.22.668.297 1.192.471 1.603.62.716.267 1.36.217 1.875.124.571-.101 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
          </svg>
        </Link>
        
        <div className="flex justify-center gap-6 text-sm">
          <Link href="#" className="text-muted-foreground no-underline hover:underline hover:text-white transition-colors">
            Política de Privacidade
          </Link>
          <Link href="#" className="text-muted-foreground no-underline hover:underline hover:text-white transition-colors">
            Termos de Uso
          </Link>
        </div>
      </footer>
    </main>
  );
}
