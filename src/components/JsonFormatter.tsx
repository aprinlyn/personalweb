import { useState } from 'react';

const sampleJson = `{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "skills": ["JavaScript", "TypeScript", "Python"],
  "experience": {
    "years": 5,
    "company": "Tech Corp"
  }
}`;

export default function JsonFormatter() {
  const [input, setInput] = useState(sampleJson);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [indentSize, setIndentSize] = useState(2);
  const [copied, setCopied] = useState(false);

  function formatJson() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, indentSize));
      setError('');
    } catch (e) {
      setError((e as Error).message);
      setOutput('');
    }
  }

  function minifyJson() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError('');
    } catch (e) {
      setError((e as Error).message);
      setOutput('');
    }
  }

  function clearAll() {
    setInput('');
    setOutput('');
    setError('');
  }

  function copyOutput() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      {/* Controls bar */}
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-gray-200 bg-white/80 p-3 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
        <button
          onClick={formatJson}
          className="rounded-lg bg-[#243b53] px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-[#334e68] hover:shadow-lg"
        >
          Format
        </button>
        <button
          onClick={minifyJson}
          className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
        >
          Minify
        </button>
        <button
          onClick={clearAll}
          className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-red-300 hover:text-red-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-red-800 dark:hover:text-red-400"
        >
          Clear
        </button>
        <div className="ml-auto flex items-center gap-2">
          <label htmlFor="indent" className="font-mono text-xs text-gray-400">indent:</label>
          <select
            id="indent"
            value={indentSize}
            onChange={(e) => setIndentSize(Number(e.target.value))}
            className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 font-mono text-xs dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            <option value={2}>2</option>
            <option value={4}>4</option>
            <option value={1}>tab</option>
          </select>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs text-red-600 dark:bg-red-900/50 dark:text-red-400">!</span>
          <p className="font-mono text-sm text-red-700 dark:text-red-400">{error}</p>
        </div>
      )}

      {/* Editor panels */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Input */}
        <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/60"></div>
              <span className="font-mono text-xs text-gray-500">input.json</span>
            </div>
            <span className="font-mono text-[10px] text-gray-400">{input.length} chars</span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-80 w-full bg-white p-4 font-mono text-sm text-gray-900 focus:outline-none dark:bg-[#0f172a] dark:text-gray-100"
            placeholder="Paste your JSON here..."
            spellCheck={false}
          />
        </div>

        {/* Output */}
        <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-blue-500/60"></div>
              <span className="font-mono text-xs text-gray-500">output.json</span>
            </div>
            {output && (
              <button
                onClick={copyOutput}
                className="rounded-md px-2 py-0.5 font-mono text-[10px] text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              >
                {copied ? 'copied!' : 'copy'}
              </button>
            )}
          </div>
          <textarea
            value={output}
            readOnly
            className="h-80 w-full bg-gray-50 p-4 font-mono text-sm text-gray-900 dark:bg-[#0f172a] dark:text-gray-100"
            placeholder="Formatted output appears here..."
          />
        </div>
      </div>
    </div>
  );
}
