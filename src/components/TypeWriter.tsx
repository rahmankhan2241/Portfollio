
import { useEffect, useState } from "react";

interface TypeWriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

export function TypeWriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 2000
}: TypeWriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
      return () => clearTimeout(timeout);
    }

    const currentFullText = texts[currentTextIndex];
    
    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        return;
      }
      
      timeout = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else {
      if (displayText === currentFullText) {
        setIsWaiting(true);
        return;
      }
      
      timeout = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
      }, typingSpeed);
    }
    
    return () => clearTimeout(timeout);
  }, [currentTextIndex, delayBetweenTexts, deletingSpeed, displayText, isDeleting, isWaiting, texts, typingSpeed]);

  return (
    <span className="inline-flex">
      {displayText}
      <span className="ml-1 border-r-2 border-primary animate-[blink_0.7s_infinite]">&nbsp;</span>
    </span>
  );
}
