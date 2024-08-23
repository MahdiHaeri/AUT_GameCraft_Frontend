import {useTranslation} from "react-i18next";

export function useStaffs() {
    const {t} = useTranslation()
    const organizingTeam = {
        teamTitle: t('app.staffs.organizingTeam.title'),
        teamMembers: [
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Project Manager'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/2',
                name: 'John Doe',
                role: 'Project Manager'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/3',
                name: 'John Doe',
                role: 'Project Manager'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/4',
                name: 'John Doe',
                role: 'Project Manager'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/5',
                name: 'John Doe',
                role: 'Project Manager'
            }
        ]
    }

    const technicalTeam = {
        teamTitle: t('app.staffs.technicalTeam.title'),
        teamMembers: [
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Software Engineer'
            },
        ]
    }

    const scientificTeam = {
        teamTitle: t('app.staffs.scientificTeam.title'),
        teamMembers: [
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Researcher'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Researcher'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Researcher'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Researcher'
            },
        ]
    }

    const marketingTeam = {
        teamTitle: t('app.staffs.marketingTeam.title'),
        teamMembers: [
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Marketing Manager'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Marketing Manager'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Marketing Manager'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Marketing Manager'
            },
        ]
    }

    const contentCreationTeam = {
        teamTitle: t('app.staffs.contentCreationTeam.title'),
        teamMembers: [
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Content Creator'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Content Creator'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Content Creator'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Content Creator'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Content Creator'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Content Creator'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Content Creator'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Content Creator'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Content Creator'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Content Creator'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Content Creator'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Content Creator'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Content Creator'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Content Creator'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Content Creator'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Content Creator'
            },
        ]
    }

    const operationsTeam = {
        teamTitle: t('app.staffs.operationsTeam.title'),
        teamMembers: [
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Operations Manager'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Operations Manager'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Operations Manager'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Operations Manager'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Operations Manager'
            },
            {
                imageUrl: 'https://avatar.iran.liara.run/public/1',
                name: 'John Doe',
                role: 'Operations Manager'
            },
        ]
    }

    return [
        organizingTeam,
        technicalTeam,
        scientificTeam,
        marketingTeam,
        contentCreationTeam,
        operationsTeam
    ]
}
