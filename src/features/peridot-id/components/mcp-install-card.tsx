"use client";

import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/components/ui/code-block";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Short display text — the full prompt below is what gets copied.
const PREVIEW =
  "Connect this project to the PeridotID dev MCP at mcp.peridot.id — no auth…";
const FULL_PROMPT =
  "Connect this project to the PeridotID developer MCP server so you can use its tools (SDK reference, integration guides, code examples, docs search). Server: streamable-HTTP MCP at https://mcp.peridot.id/mcp — plain POST JSON-RPC, no auth, no headers, no API key. Register it under the name peridot-id in this project's MCP configuration, using whatever file and schema my coding assistant uses (e.g. opencode.json, mcp.json, .cursor/mcp.json, .vscode/mcp.json, Claude Code / Codex / Antigravity settings). Create the file if missing, keep existing entries untouched, put no secrets anywhere. Then verify with tools/list (expect search_docs, get_integration_guide, get_example, get_sdk_reference); if the tools don't appear, tell me what this client needs (restart, approve/trust the server).";

const CLIENTS = [
  { name: "Claude Code", src: "/assets/images/agents/claude.svg", fallback: "CC" },
  { name: "Codex", src: "/assets/images/agents/codex.svg", fallback: "CX" },
  { name: "OpenCode", src: "/assets/images/agents/opencode.svg", fallback: "OC" },
] as const;

export function McpInstallCard() {
  return (
    <CodeBlock className="rounded-none bg-background">
      <CodeBlockHeader className="px-5 py-3">
        <CodeBlockTitle>Install PeridotID MCP</CodeBlockTitle>
        <div
          aria-label="Supported clients: Claude Code, Codex, OpenCode"
          className="ms-auto flex -space-x-2 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background"
        >
          {CLIENTS.map((c) => (
            <Avatar key={c.name} title={c.name}>
              <AvatarImage src={c.src} alt={c.name} />
              <AvatarFallback>{c.fallback}</AvatarFallback>
            </Avatar>
          ))}
          <Avatar title="+9 more clients">
            <AvatarFallback>+9</AvatarFallback>
          </Avatar>
        </div>
      </CodeBlockHeader>
      <div className="flex items-stretch border-t border-line">
        {/* pt-4 re-declared with shadcn's own group-has variant: without it,
            shadcn's group-has pt-2 wins by specificity and top (8px) != bottom (16px). */}
        <CodeBlockContent className="codeblock-scroll min-w-0 flex-1 px-5 py-4 font-mono text-[13px] group-has-data-[slot=code-block-header]/code-block:pt-4">
          {PREVIEW}
        </CodeBlockContent>
        <div className="flex shrink-0 items-center border-l border-line px-3 pb-1.5">
          {/* pb-1.5 offsets the reserved 6px scrollbar gutter so the button
              stays centered against the text line, not the full row. p-2 =
              44px tap target, visual box stays 28px. */}
          {/* p-2 = 44px tap target, visual box stays 28px. */}
          <CodeBlockCopyButton
            value={FULL_PROMPT}
            size="icon-sm"
            className="p-2"
          />
        </div>
      </div>
    </CodeBlock>
  );
}

export default McpInstallCard;
