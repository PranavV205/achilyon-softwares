import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'
import { Buildings, GlobeHemisphereWest, Heart } from "phosphor-react"

function SmallgroupSection() {
    return (
        <Container variant="secondary">
            <SectionHeader
                title="Small group adventures that bring the world closer"
            />

            <div className='flex flex-row items-center pt-12'>
                <div className='flex flex-row items-center gap-4'>
                    <Buildings className="text-purple-600 w-16 h-16" />
                    <p>Building community and redefining travel since 1990.</p>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <GlobeHemisphereWest className="text-purple-600 w-16 h-16" />
                    <p>For every traveller. On every continent. Yup, even Antarctica.</p>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <Heart className="text-purple-600 w-16 h-16" />
                    <p>Uplifting communities everywhere we go. Period.</p>
                </div>
            </div>
        </Container>
    )
}

export default SmallgroupSection