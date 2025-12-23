// app/lib/markdown.ts
function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export function extractToc(md: string): TocItem[] {
  const lines = md.split("\n");
  const toc: TocItem[] = [];

  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+)\s*$/);
    const h3 = line.match(/^###\s+(.+)\s*$/);
    if (h2) toc.push({ id: slugify(h2[1]), text: h2[1].trim(), level: 2 });
    if (h3) toc.push({ id: slugify(h3[1]), text: h3[1].trim(), level: 3 });
  }
  return toc;
}

/**
 * Minimal markdown -> HTML for our guide content.
 * Supports:
 * - ## / ### headings (with ids for TOC)
 * - bullet lists
 * - paragraphs
 * - **bold**, `inline code`
 * - ``` code blocks ```
 */
export function renderMarkdown(md: string): string {
  // Normalize
  let src = md.replace(/\r\n/g, "\n").trim();

  // Extract code blocks first (protect them)
  const codeBlocks: string[] = [];
  src = src.replace(/```([\s\S]*?)```/g, (_, code) => {
    const idx = codeBlocks.push(code) - 1;
    return `@@CODEBLOCK_${idx}@@`;
  });

  // Escape everything (we’ll add tags after)
  src = escapeHtml(src);

  // Headings
  src = src.replace(/^###\s+(.+)$/gm, (_, t) => {
    const id = slugify(t);
    return `<h3 id="${id}" class="scroll-mt-28 mt-8 text-lg font-semibold tracking-tight text-zinc-900">${t}</h3>`;
  });

  src = src.replace(/^##\s+(.+)$/gm, (_, t) => {
    const id = slugify(t);
    return `<h2 id="${id}" class="scroll-mt-28 mt-10 text-2xl font-semibold tracking-tight text-zinc-900">${t}</h2>`;
  });

  // Bold + inline code
  src = src.replace(/\*\*(.+?)\*\*/g, `<strong class="font-semibold text-zinc-900">$1</strong>`);
  src = src.replace(/`([^`]+?)`/g, `<code class="rounded-md bg-zinc-100 px-1.5 py-0.5 text-[0.95em] text-zinc-900">$1</code>`);

  // Lists: group consecutive "- item" lines into <ul>
  const lines = src.split("\n");
  const out: string[] = [];
  let inList = false;

  const flushListClose = () => {
    if (inList) {
      out.push(`</ul>`);
      inList = false;
    }
  };

  for (const line of lines) {
    const li = line.match(/^\s*-\s+(.+)$/);
    const blank = line.trim() === "";

    if (li) {
      if (!inList) {
        inList = true;
        out.push(`<ul class="mt-4 space-y-2 pl-5 list-disc text-zinc-700">`);
      }
      out.push(`<li>${li[1]}</li>`);
      continue;
    }

    if (blank) {
      flushListClose();
      continue;
    }

    // If it's already a heading tag, keep it as is (but close any list first)
    const isHeading = line.startsWith("<h2") || line.startsWith("<h3");
    if (isHeading) {
      flushListClose();
      out.push(line);
      continue;
    }

    // Paragraph
    flushListClose();
    out.push(`<p class="mt-4 leading-7 text-zinc-700">${line}</p>`);
  }

  flushListClose();

  let html = out.join("\n");

  // Restore code blocks (already escaped)
  html = html.replace(/@@CODEBLOCK_(\d+)@@/g, (_, n) => {
    const code = (codeBlocks[Number(n)] ?? "").trimEnd();
    const escaped = escapeHtml(code);
    return `
<pre class="mt-6 overflow-x-auto rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-900"><code>${escaped}</code></pre>
    `.trim();
  });

  return html;
}

export function readingTimeMinutes(text: string) {
  const words = text.replace(/```[\s\S]*?```/g, " ").split(/\s+/).filter(Boolean).length;
  const wpm = 220;
  return Math.max(1, Math.round(words / wpm));
}