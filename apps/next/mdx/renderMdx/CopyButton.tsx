import { useState } from 'react'
import { ClipboardCopy, CheckCircle } from '@tamagui/lucide-icons'

export function CopyButton({ text, className }: { text: string; className: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2500)
  }

  const Icon = isCopied ? CheckCircle : ClipboardCopy

  return (
    <button
      disabled={isCopied}
      onClick={copy}
      style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        fontSize: '12px',
        paddingLeft: '6px',
        paddingRight: '6px',
        paddingTop: '3px',
        paddingBottom: '3px',
      }}
      className={className}
    >
      <Icon
        style={{
          marginRight: 1,
          height: 16,
          width: 16,
        }}
      />
      &nbsp;
      <span>{isCopied ? 'Copied!' : 'Copy'}</span>
    </button>
  )
}
