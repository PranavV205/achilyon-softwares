import DealCard from "./DealCard"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import SectionHeader from "@/components/common/SectionHeader"
import Container from "@/components/common/Container"
import { DealResponse } from "@/lib/interfaces/deal.interface"


function HeroDeals({ deals }: { deals: DealResponse | undefined }) {

    return (
        <Container variant="primary">

            <SectionHeader
                title="Our biggest sale of the year"
                subtitle="Black Friday travel deals"
                buttonText="Shop the deals"
            />

            <ScrollArea className="w-full mt-6 pb-2">
                <div className="flex gap-4">
                    {deals?.data?.map((deal) => (
                        <div key={deal.id}>
                            <DealCard deal={deal} />
                        </div>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>



        </Container>
    )
}

export default HeroDeals