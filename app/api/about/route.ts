// pages/api/user.ts
import { NextResponse } from 'next/server'

interface UserData {
    name: string;
    birthdate: string;
    residence: string;
    email: string;
    title: string;
    freelance: string;
}

interface TechData {
    id: number;
    path: string;
    width: number;
    height: number;
}

function calculateAge(otherDateProp: string): number {
    const birthDate: Date = new Date(otherDateProp);
    const otherDate: Date = new Date();

    let years: number = otherDate.getFullYear() - birthDate.getFullYear();

    if (
        otherDate.getMonth() < birthDate.getMonth() ||
        (otherDate.getMonth() === birthDate.getMonth() &&
            otherDate.getDate() < birthDate.getDate())
    ) {
        years--;
    }

    return years;
}

export async function GET() {
    try {
        const data: UserData = {
            name: 'Francies Feranandes',
            birthdate: '10/21/1998',
            residence: 'London, United Kingdom',
            email: 'francies.quebert@gmail.com',
            title: 'Front End / Full Stack Developer',
            freelance: 'Available',
        };
        const tech: TechData[] = [
            { id: 1, path: '/icons/next.svg', width: 100, height: 100 },
            { id: 2, path: '/icons/js.svg', width: 100, height: 100 },
            { id: 3, path: '/icons/react.svg', width: 100, height: 100 },
            { id: 4, path: '/icons/pgsql.svg', width: 100, height: 60 },
            { id: 5, path: '/icons/ts.svg', width: 100, height: 100 },
            { id: 6, path: '/icons/node.svg', width: 90, height: 100 }
        ]

        const formattedData = [
            { label: 'Name', text: data.name },
            {
                label: 'Age',
                text: `${calculateAge(data.birthdate)} Years`,
            },
            { label: 'Residence', text: data.residence },
            { label: 'Email', text: data.email },
            { label: 'Title', text: data.title },
            { label: 'Freelance', text: data.freelance },
        ];

        return new NextResponse(JSON.stringify({ data: formattedData, tech: tech }), { status: 200 });
    } catch (error) {
        return new NextResponse("Failed to fetch all prompts", { status: 500 })
    }
}
