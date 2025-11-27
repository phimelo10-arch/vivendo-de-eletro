import { Volume2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center space-y-8 p-6 bg-background text-foreground">
      {/* Top Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
          Aprenda a consertar <strong className="font-bold">eletrodomésticos</strong>
        </h1>
        <div className="flex items-center justify-center gap-2 text-lg font-bold text-muted-foreground">
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
        
        <Link href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="Fale conosco no WhatsApp" className="inline-block transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-background rounded-full">
          {/* The user wants this image instead of the SVG button */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://i.imgur.com/bQSY8X7.png"
            alt="Fale conosco no WhatsApp"
            width={56} 
            height={56}
            className="w-14 h-14"
          />
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
