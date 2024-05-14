import Container from '../Container/Container';
function Disclaimer() {
    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-md h-screen">
            <Container>
                <div className="flex flex-col space-y-6 bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4 text-center md:text-left">
                        Disclaimer for{' '}
                        <span className="text-sky-500">FloraSlim's Sales Page</span>
                    </h1>
                    <div className="text-sm">
                        <p className="mb-4 text-justify">
                            If you require any more information or have any questions about
                            our site's disclaimer, please feel free to contact us by email at
                            <a
                                href="mailto:sac@sevenorg.com"
                                className="text-sky-500 underline ml-1">
                                sac@sevenorg.com
                            </a>
                            .
                        </p>
                        <p className="mb-4 text-justify">
                            All the information on this website -
                            <a
                                href="https://floraslimofficial.com/"
                                className="text-sky-500 underline ml-1">
                                FloraSlim's Sales Page
                            </a>{' '}
                            - is published in good faith and for general information purpose
                            only. Slim Shape Blog does not make any warranties about the
                            completeness, reliability and accuracy of this information. Any
                            action you take upon the information you find on this website (
                            <span className="text-sky-500">FloraSlim's Sales Page</span>),
                            is strictly at your own risk.{' '}
                            <span className="text-sky-500">FloraSlim's Sales Page</span>{' '}
                            will not be liable for any losses and/or damages in connection
                            with the use of our website.
                        </p>
                        <p className="mb-4 text-justify">
                            From our website, you can visit other websites by following
                            hyperlinks to such external sites. While we strive to provide only
                            quality links to useful and ethical websites, we have no control
                            over the content and nature of these sites. These links to other
                            websites do not imply a recommendation for all the content found
                            on these sites. Site owners and content may change without notice
                            and may occur before we have the opportunity to remove a link
                            which may have gone 'bad'.
                        </p>
                        <p className="mb-4 text-justify">
                            Please be also aware that when you leave our website, other sites
                            may have different privacy policies and terms which are beyond our
                            control. Please be sure to check the Privacy Policies of these
                            sites as well as their "Terms of Service" before engaging in any
                            business or uploading any information.
                        </p>
                        <h2 className="text-2xl font-semibold mt-6 mb-2 text-center md:text-left">
                            Consent
                        </h2>
                        <p className="mb-4 text-justify">
                            By using our website, you hereby consent to our disclaimer and
                            agree to its terms.
                        </p>
                        <h2 className="text-2xl font-semibold mt-6 mb-2 text-center md:text-left">
                            Update
                        </h2>
                        <p className="mb-4 text-justify">
                            Should we update, amend or make any changes to this document,
                            those changes will be prominently posted here.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default Disclaimer;