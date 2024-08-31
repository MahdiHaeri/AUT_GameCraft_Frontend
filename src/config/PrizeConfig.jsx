import {useTranslation} from "react-i18next";
import firstPrizeLogo from '/src/assets/svg/prize-1.svg'
import secondPrizeLogo from '/src/assets/svg/prize-2.svg'
import thirdPrizeLogo from '/src/assets/svg/prize-3.svg'

export function usePrizes() {
    const {t} = useTranslation()
    const prizes = [
        {
            teamImage: firstPrizeLogo,
            teamTitle: t('app.prizes.firstTeam.title'),
            teamPrize: t('app.prizes.firstTeam.prize')
        },
        {
            teamImage: secondPrizeLogo,
            teamTitle: t('app.prizes.secondTeam.title'),
            teamPrize: t('app.prizes.secondTeam.prize')
        },
        {
            teamImage: thirdPrizeLogo,
            teamTitle: t('app.prizes.thirdTeam.title'),
            teamPrize: t('app.prizes.thirdTeam.prize')
        }
    ]
    return (
        prizes
    )
}
