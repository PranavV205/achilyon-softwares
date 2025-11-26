import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import DestinationCard from './DestinationCard'

function DestinationsSection({ destinations }) {
    console.log(destinations)
    return (
        <Container variant="tertiary">
            <SectionHeader
                title="Bucket list meets bold discoveries"
                subtitle="Popular Destinations"
            />
            <ScrollArea className="w-full mt-6 pb-2">
                <div className="flex gap-8">
                    {destinations.data.length > 0 && destinations.data.map(destination => (
                        <div key={destination.id}>
                            <DestinationCard destination={destination} key={destination.id} />
                        </div>
                    ))}
                </div>
                <ScrollBar orientation='horizontal' />
            </ScrollArea>
        </Container>
    )
}

export default DestinationsSection