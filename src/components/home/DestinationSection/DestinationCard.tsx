import { AspectRatio } from '@/components/ui/aspect-ratio'
import { CardTitle } from '@/components/ui/card'
import { Destination } from '@/lib/interfaces/destination.interface'
import Image from 'next/image'

function DestinationCard({ destination }: { destination: Destination }) {
    return (
        <div className="w-40 sm:w-[220px]">
            <AspectRatio
                ratio={4 / 5}
                className="overflow-hidden rounded-xs relative"
            >
                <Image
                    src={destination.image}
                    alt={"Peru"}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                    sizes="(max-width: 640px) 280px, 
                                   (max-width: 1024px) 320px, 
                                   360px"
                    priority={false}
                />
                <div className="absolute inset-0 flex items-start justify-center pt-[33%]">
                    <CardTitle className='text-white text-xl sm:text-4xl font-bold'>
                        {destination.name}
                    </CardTitle>
                </div>
            </AspectRatio>
        </div>
    )
}

export default DestinationCard
