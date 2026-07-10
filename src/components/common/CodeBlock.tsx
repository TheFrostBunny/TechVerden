import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = 'javascript',
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="rounded-lg overflow-hidden bg-slate-900 border border-slate-700/50 my-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700/50">
        <span className="text-xs font-mono text-slate-400">{language}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="text-slate-400 hover:text-white"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-1" />
              Kopiert
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-1" />
              Kopier
            </>
          )}
        </Button>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto p-4">
        <code className="text-sm font-mono text-slate-300">
          {lines.map((line, index) => (
            <div key={index} className="flex">
              {showLineNumbers && (
                <span className="inline-block w-8 text-right pr-4 text-slate-600 select-none">
                  {index + 1}
                </span>
              )}
              <span>{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}

