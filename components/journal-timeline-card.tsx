import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, type LucideIcon } from "lucide-react"

interface JournalTimelineCardProps {
  title: string
  description: string
  date: string
  category: string
  categoryLabel: string
  categoryColor: string
  CategoryIcon: LucideIcon
  images?: string[]
  author: string
  authorRole: string
  isEven?: boolean
}

export function JournalTimelineCard({
  title,
  description,
  date,
  categoryLabel,
  categoryColor,
  CategoryIcon,
  images,
  author,
  authorRole,
}: JournalTimelineCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-sm">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <Badge className={`rounded-full ${categoryColor}`}>
                <CategoryIcon className="mr-1 h-3 w-3" />
                {categoryLabel}
              </Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(date).toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>

        {images && images.length > 0 && (
          <div className="grid gap-3 md:grid-cols-2">
            {images.map((image, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl bg-muted aspect-video">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${title} - imagen ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-muted text-xs">
              {author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-foreground">{author}</p>
            <p className="text-xs text-muted-foreground">{authorRole}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
