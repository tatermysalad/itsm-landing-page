import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: import.meta.env.VITE_NAV1_NAME, href: import.meta.env.VITE_NAV1_URL },
    { name: import.meta.env.VITE_NAV2_NAME, href: import.meta.env.VITE_NAV2_URL },
    { name: import.meta.env.VITE_NAV3_NAME, href: import.meta.env.VITE_NAV3_URL },
];

type FAQ = {
    displayName: string;
    description: string;
    url: string;
};

const faqs = [
    {
        displayName: import.meta.env.VITE_FAQ1_NAME,
        description: import.meta.env.VITE_FAQ1_DESCRIPTION,
        url: import.meta.env.VITE_FAQ1_URL,
    },
    {
        displayName: import.meta.env.VITE_FAQ2_NAME,
        description: import.meta.env.VITE_FAQ2_DESCRIPTION,
        url: import.meta.env.VITE_FAQ2_URL,
    },
    {
        displayName: import.meta.env.VITE_FAQ3_NAME,
        description: import.meta.env.VITE_FAQ3_DESCRIPTION,
        url: import.meta.env.VITE_FAQ3_URL,
    },
];
const footerNavigation = {
    support: [{ name: import.meta.env.VITE_SUPPORT_NAME, href: "mailto:" + import.meta.env.VITE_SUPPORT_EMAIL }],
    company: [
        { name: "About", href: import.meta.env.VITE_ABOUT_URL },
        { name: "News", href: import.meta.env.VITE_NEWS_URL },
    ],
    legal: [
        { name: "Privacy Policy", href: import.meta.env.VITE_PRIVACY_POLICY_URL },
        { name: "Disclaimer", href: import.meta.env.VITE_DISCLAIMER_URL },
    ],
};

export default function HomePage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const logoPathWhite: string = import.meta.env.VITE_LOGO_HORIZONTAL_WHITE;
    const logoPath: string = import.meta.env.VITE_LOGO_HORIZONTAL;

    return (
        <div className="bg-white">
            {/* Header */}
            <header className="absolute inset-x-0 top-0 z-50 bg-[#00B6A0]">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 text-white">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">{import.meta.env.VITE_COMPANY_NAME}</span>
                            <a href={import.meta.env.VITE_LOGO_REDIRECT}>
                                <img alt="Logo" src={logoPathWhite} className="h-16" />
                            </a>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#00B6A0f0] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">{import.meta.env.VITE_COMPANY_NAME}</span>
                                <a href={import.meta.env.VITE_LOGO_REDIRECT}>
                                    <img alt="Logo" src={logoPathWhite} className="h-10" />
                                </a>
                            </a>
                            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-white">
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-white-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <main className="isolate mt-20">
                {/* Hero section */}
                <div
                    className="relative pt-20"
                    style={{ backgroundImage: `url(${import.meta.env.VITE_HERO_SECTION})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                    <div className="py-10 sm:py-16">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl text-center">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">{import.meta.env.VITE_COMPANY_NAME}</h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600">{import.meta.env.VITE_COMPANY_ABOUT}</p>
                                <div className="mt-8">
                                    <a
                                        href={import.meta.env.VITE_BUTTON1_URL}
                                        className="m-4 rounded-md bg-green-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                    >
                                        {import.meta.env.VITE_BUTTON1_NAME}
                                    </a>
                                    <a
                                        href={import.meta.env.VITE_BUTTON2_URL}
                                        className="m-4 rounded-md bg-green-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                    >
                                        {import.meta.env.VITE_BUTTON2_NAME}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div className="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-20">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    >
                        <div
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                            className="relative left-[calc(70%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00B6A0] to-[#00B6A0] opacity-20 sm:left-[calc(70%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                    <h2 className="pt-2 text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
                    <dl className="mt-2 space-y-8 divide-y divide-gray-900/10">
                        {faqs.map((faq: FAQ, index: number) => (
                            <a href={faq.url} key={index}>
                                <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                                    <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.displayName}</dt>
                                    <dd className="mt-4 lg:col-span-7 lg:mt-0">
                                        <p className="text-base leading-7 text-gray-600">{faq.description}</p>
                                    </dd>
                                </div>
                            </a>
                        ))}
                    </dl>
                </div>
            </main>

            {/* Footer */}
            <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
                <footer aria-labelledby="footer-heading" className="relative border-t border-gray-900/10 py-24 sm:mt-56 sm:py-32">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[calc(70%-33rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(50%-60rem)]"
                    >
                        <div
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                            className="relative left-[calc(70%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00B6A0] to-[#00B6A0] opacity-40 sm:left-[calc(30%+36rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                    <h2 id="footer-heading" className="sr-only">
                        Footer
                    </h2>
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <a href={import.meta.env.VITE_LOGO_REDIRECT}>
                            <img alt="Logo" src={logoPath} className="h-20" />
                        </a>
                        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.support.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.legal.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
