"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenPhrases?: number
}

export default function TypingAnimation({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 2000,
}: TypingAnimationProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // Current phrase we're typing/deleting
        const currentPhrase = phrases[currentPhraseIndex]

        // If deleting
        if (isDeleting) {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1))

          // If we've deleted everything, start typing the next phrase
          if (currentText.length === 0) {
            setIsDeleting(false)
            setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
          }
        }
        // If typing
        else {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1))

          // If we've typed the full phrase, wait and then start deleting
          if (currentText.length === currentPhrase.length) {
            setTimeout(() => {
              setIsDeleting(true)
            }, delayBetweenPhrases)
            return
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentPhraseIndex, isDeleting, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases])

  return (
    <h2 className="text-xl text-blue-300 inline-flex items-center">
      {currentText}
      <span className="ml-1 w-0.5 h-6 bg-blue-300 animate-blink"></span>
    </h2>
  )
}

