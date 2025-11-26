import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { UserCircleIcon } from 'lucide-react'

interface ReasonCardProps {
    reason: any
}

function ReasonCard({ reason }: ReasonCardProps) {
    return (
        <Card className='bg-card p-4 md:p-8'>
            <CardHeader className='px-0'>
                <reason.icon className='text-secondary w-16 h-16' />
                <CardTitle className='px-0 text-lg'>
                    {reason.title}
                </CardTitle>
            </CardHeader>
            <CardContent className='px-0'>
                <CardDescription className='text-gray-800'>
                    {reason.description}
                </CardDescription>
            </CardContent>
        </Card>
    )
}

export default ReasonCard