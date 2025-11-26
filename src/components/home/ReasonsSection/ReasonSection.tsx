import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'
import ReasonCard from './ReasonCard'
import { Home, Sprout, UserCheck, Users } from 'lucide-react'
import { Binoculars, Handshake } from 'phosphor-react'

const reasons = [
    {
        "title": "Guides so good we call them CEOs",
        "description": "Our Chief Experience Officers have local smarts, big energy, and serious skills to make your trip unforgettable.",
        "icon": UserCheck
    },
    {
        "title": "Small groups, lots of passports",
        "description": "Small groups mean big connections. And with travellers from all over, every trip feels globally inspired.",
        "icon": Users
    },
    {
        "title": "As ungrouped as it gets",
        "description": "The safety of a group, with freedom to explore on your own terms.",
        "icon": Binoculars
    },
    {
        "title": "Immersive experiences are how we roll",
        "description": "Get hands-on with culture, food, and local life. No sidelines, just full-on adventure.",
        "icon": Handshake
    },
    {
        "title": "Doing good has never been so fun",
        "description": "Travel that helps people, places, and the planet – powered by our Community Tourism model.",
        "icon": Home
    },
    {
        "title": "Book with all the confidence in the world",
        "description": "No stress here. Flexible policies, guaranteed departures, and support whenever you need it.",
        "icon": Sprout
    }
]

function ReasonSection() {
    return (
        <Container variant="tertiary">
            <SectionHeader
                subtitle="Why travel with G Adventures"
                title="Six reasons you'll love us"
                buttonText='Learn more'
            />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-sm py-10'>
                {reasons.length > 0 && reasons.map(reason => (
                    <ReasonCard reason={reason} key={reason.title} />
                ))}
            </div>


        </Container>
    )
}

export default ReasonSection