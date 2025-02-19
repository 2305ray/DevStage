import { Button } from "@/components/button";
import { IconButton } from '@/components/icon-button'
import { ArrowRight, Copy } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Button type="submit">
        enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>
    
    </main>
  );
}
