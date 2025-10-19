import { Twitter, Github } from 'lucide-react';
import { MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 py-8 px-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          © 2024 EchoWidget. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://reddit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
            aria-label="Reddit"
          >
            <MessageSquare className="w-5 h-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
