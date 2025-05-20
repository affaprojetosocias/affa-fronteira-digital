
import { Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialIconsProps {
  className?: string;
}

const SocialIcons = ({ className }: SocialIconsProps) => {
  return (
    <div className={cn("flex space-x-4", className)}>
      <a
        href="https://www.instagram.com/affa_projetosociais"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
        aria-label="Instagram"
      >
        <Instagram className="h-6 w-6" />
      </a>
    </div>
  );
};

export default SocialIcons;
