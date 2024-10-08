import cafeBazaarLogo from '/src/assets/images/2024/sponsors/cafeBazaar.png'
import dropoutLogo from "/src/assets/images/2024/sponsors/dropout.png";
import quizOfKingsLogo from "/src/assets/images/2024/sponsors/quizOfKings.png";
import paeezanLogo from "/src/assets/images/2024/sponsors/paeezan.png";
import incytelGamesLogo from "/src/assets/images/2024/sponsors/incytelGames.png";

export function useSponsors() {
    return [
        {
            name: "Bazar",
            description: "description",
            logo: cafeBazaarLogo,
            link: "https://cafebazaar.ir"
        },
        {
            name: "droupout",
            description: "description",
            logo: dropoutLogo,
            link: "https://dropout-games.com/"
        },
        {
            name: "Quiz of Kings",
            description: "description",
            logo: quizOfKingsLogo,
            link: "https://quizofkingsen.ir/"
        },
        {
            name: "Paeezan",
            description: "description",
            logo: paeezanLogo,
            link: "https://paeezanstudio.com/"
        },
        {
            name: "IncytelGames",
            description: "description",
            logo: incytelGamesLogo,
            link: "https://www.incytel.com/"
        },
    ]
}
