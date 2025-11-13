export function parseMarkdownToHtml(markdown: string): string {
  let html = markdown

  // Convert headers (with proper spacing)
  html = html.replace(/^### (.*$)/gim, '<h3 class="mt-8 mb-4">$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2 class="mt-10 mb-6">$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1 class="mt-12 mb-8">$1</h1>')

  // Convert bold text (**text** or __text__)
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>')

  // Convert italic text (*text* or _text_)
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')
  html = html.replace(/_(.+?)_/g, '<em>$1</em>')

  // Convert links [text](url) with data-link attribute for client-side navigation
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" data-link="true" class="text-primary hover:underline font-medium cursor-pointer">$1</a>')

  // Convert unordered lists (with proper spacing)
  html = html.replace(/^\- (.+)$/gim, '<li class="mb-2">$1</li>')
  html = html.replace(/(<li[\s\S]*<\/li>)/g, '<ul class="my-6 space-y-2 list-disc pl-6">$1</ul>')

  // Convert numbered lists
  html = html.replace(/^\d+\.\s+(.+)$/gim, '<li class="mb-2">$1</li>')
  
  // Convert checkmarks
  html = html.replace(/✅/g, '<span class="text-green-500">✅</span>')
  html = html.replace(/❌/g, '<span class="text-red-500">❌</span>')

  // Split into paragraphs (double line breaks)
  const paragraphs = html.split('\n\n')
  html = paragraphs
    .map(para => {
      para = para.trim()
      // Don't wrap if it's already a block element
      if (para.startsWith('<h') || para.startsWith('<ul') || para.startsWith('<ol') || para.startsWith('<li') || para === '') {
        return para
      }
      // Wrap in paragraph with spacing
      return `<p class="mb-6 leading-relaxed">${para.replace(/\n/g, '<br />')}</p>`
    })
    .filter(p => p !== '')
    .join('\n')

  return html
}
