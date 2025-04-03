
import { useState } from "react";
import { Star, StarHalf, StarOff } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface RatingProps {
  id: string;
  initialRating?: number;
  max?: number;
  onChange?: (rating: number) => void;
  readOnly?: boolean;
  className?: string;
}

export function Rating({
  id,
  initialRating = 0,
  max = 5,
  onChange,
  readOnly = false,
  className,
}: RatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingChange = (newRating: number) => {
    if (readOnly) return;
    setRating(newRating);
    onChange?.(newRating);
  };

  const getRatingIcon = (position: number) => {
    const activeRating = hoverRating || rating;
    
    if (position <= activeRating) {
      return <Star className="fill-primary text-primary" />;
    } else if (position - 0.5 <= activeRating) {
      return <StarHalf className="fill-primary text-primary" />;
    } else {
      return <StarOff className="text-muted-foreground" />;
    }
  };

  return (
    <div
      className={cn("flex items-center", className)}
      onMouseLeave={() => !readOnly && setHoverRating(0)}
    >
      {Array.from({ length: max }).map((_, index) => {
        const position = index + 1;
        return (
          <TooltipProvider key={`${id}-star-${index}`}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "p-1 focus:outline-none transition-transform hover:scale-110",
                    readOnly && "cursor-default"
                  )}
                  onClick={() => handleRatingChange(position)}
                  onMouseEnter={() => !readOnly && setHoverRating(position)}
                >
                  {getRatingIcon(position)}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{position} Star{position !== 1 ? "s" : ""}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
      {!readOnly && (
        <span className="ml-2 text-sm text-muted-foreground">
          {rating > 0 ? `${rating}/${max}` : "Rate this skill"}
        </span>
      )}
    </div>
  );
}
