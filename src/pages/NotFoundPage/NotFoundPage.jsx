import {Helmet} from "react-helmet-async";

export function NotFoundPage() {
    return (
        <>
            <Helmet>
                <title> 404 Page Not Found </title>
            </Helmet>

            <h1>
                Not Found Page 404
            </h1>
        </>
    )
}
