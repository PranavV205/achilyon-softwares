import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ReasonCardProps {
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    description: string;
}

function ReasonCard({ reason }: { reason: ReasonCardProps }) {
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