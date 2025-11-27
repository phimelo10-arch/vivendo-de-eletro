'use client';

import { Volume2 } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { trackMetaEvent } from '@/components/meta-pixel';

function DelayedButton() {
  const [showButton, setShowButton] = useState(false);
  const searchParams = useSearchParams();
  const isAdmin = searchParams.get('admin') === 'true';

  useEffect(() => {
    if (isAdmin) {
      setShowButton(true);
      return;
    }

    const timer = setTimeout(() => {
      setShowButton(true);
    }, 9 * 60 * 1000); // 9 minutes

    return () => clearTimeout(timer);
  }, [isAdmin]);

  const handleAddToCart = () => {
    trackMetaEvent('AddToCart');
  };

  if (!showButton) {
    return null;
  }

  return (
    <div className="my-6 w-full max-w-2xl px-4">
      <Button
        size="lg"
        className="w-full h-auto py-4 text-xl font-bold bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg animate-pulse"
        onClick={handleAddToCart}
      >
        SIM! Quero Aprender a Consertar Eletrodoméstico!
      </Button>
    </div>
  );
}

export default function Home() {

  useEffect(() => {
    // Track ViewContent after 4 minutes
    const viewContentTimer = setTimeout(() => {
      trackMetaEvent('ViewContent');
    }, 4 * 60 * 1000);

    // Track Contact after 9 minutes
    const contactTimer = setTimeout(() => {
      trackMetaEvent('Contact');
    }, 9 * 60 * 1000);

    return () => {
      clearTimeout(viewContentTimer);
      clearTimeout(contactTimer);
    };
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center space-y-8 p-6 bg-background text-foreground">
      {/* Top Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
          Aprenda a consertar <strong className="font-bold">eletrodomésticos</strong>
        </h1>
        <div className="flex items-center justify-center gap-2 text-lg font-bold text-muted-foreground">
          <Volume2 className="h-5 w-5" />
          <span className="font-bold text-lg">Ative o som!</span>
        </div>
      </div>

      {/* Video Block */}
      <div className="w-full max-w-[900px] aspect-video rounded-lg overflow-hidden">
        <iframe
          id="panda-b1089a67-517c-4bd5-ba1d-33d3066c1b16"
          src="https://player-vz-4ef3af7c-6a9.tv.pandavideo.com.br/embed/?v=b1089a67-517c-4bd5-ba1d-33d3066c1b16"
          className="w-full h-full border-none"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
          allowFullScreen={true}
          width="720"
          height="360"
        ></iframe>
      </div>
      
      {/* Text Below Video */}
      <p className="text-center text-lg font-semibold italic text-white max-w-2xl">
        Assista a este vídeo até o final para obter acesso completo!
      </p>

      {/* Delayed Button */}
      <Suspense fallback={<div></div>}>
        <DelayedButton />
      </Suspense>

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
          MH Digital © 2025 Todos os direitos reservados – CNPJ : 46.213.929/0001-08
        </p>

        <div className="inline-block transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-background rounded-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://i.imgur.com/bQSY8X7.png"
            alt="Fale conosco no WhatsApp"
            width={56}
            height={56}
            className="w-14 h-14"
          />
        </div>

        <div className="flex justify-center gap-6 text-sm">
          <span className="text-muted-foreground no-underline transition-colors">
            Política de Privacidade
          </span>
          <span className="text-muted-foreground no-underline transition-colors">
            Termos de Uso
          </span>
        </div>
      </footer>
    </main>
  );
}
