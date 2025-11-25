import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"

function DealCard({ deal }) {
    return (
        <Card className="w-[320px] sm:w-[380px] lg:w-[420px]">
            <CardContent className="px-0">
                <div className="w-full mb-1">
                    <AspectRatio
                        ratio={1 / 1}
                        className="overflow-hidden rounded-xs relative bg-muted"
                    >
                        <Image
                            src={deal.image}
                            alt={deal.title}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                            sizes="(max-width: 640px) 280px, 
                                   (max-width: 1024px) 320px, 
                                   360px"
                            priority={false}
                        />
                    </AspectRatio>
                </div>
                <CardHeader className="px-0 mb-2">
                    <p className="text-[10px] text-gray-700 font-bold uppercase">{deal.tag}</p>
                    <CardTitle className="text-lg">{deal.title}</CardTitle>
                </CardHeader>
                <div className="flex flex-row gap-5 items-center mb-2">
                    <div className="flex flex-row gap-1 items-center">
                        <Calendar size={14} />
                        <p className="text-sm font-medium">{`${deal.days} days`}</p>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <MapPin size={14} />
                        <p className="text-sm font-medium">{deal.route}</p>
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center mb-3 flex-wrap">
                    <p className="text-sm">From</p>
                    <p className="text-xs line-through text-muted-foreground">{`$${deal.priceOriginal}`}</p>
                    <p className="font-bold text-sm">{`$${deal.from}`}</p>
                    <span className="w-1.5 h-1.5 bg-[#4E348F] rounded-full inline-block"></span>
                    <p className="text-sm">{`on ${deal.start}`}</p>
                </div>
                <Separator orientation="horizontal" className="my-3 h-px" />
                <p className="text-[#4E348F] underline font-bold text-right cursor-pointer hover:text-[#3d2871] text-sm">View tour</p>
            </CardContent>
        </Card>
    )
}

export default DealCard