import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-6 bg-cyan-300	">
    <div className="mx-auto max-w-screen-xl text-center">
        <Link href="/" className="flex justify-center items-center text-2xl font-semibold text-blue-600">
            <svg className="text-blue-600 mr-2 h-8" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG paths here */}
            </svg>
            Raise A Ticket
        </Link>
        <p className="my-4 text-gray-600">Your Trusted Software Solutions Provider</p>
        <ul className="flex justify-center items-center mb-6 text-gray-600">
            <li>
                <Link href="/about" className="mr-4 hover:text-blue-600">About</Link>
            </li>
            <li>
                <Link href="#" className="mr-4 hover:text-blue-600">Our Partners</Link>
            </li>
            <li>
                <Link href="/faqs" className="mr-4 hover:text-blue-600">FAQs</Link>
            </li>
            <li>
                <Link href="/contact" className="mr-4 hover:text-blue-600">Contact</Link>
            </li>
        </ul>
        <span className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} <Link href="/" className="hover:text-blue-600">Raise A Ticket</Link>. All Rights Reserved.
        </span>
    </div>
</footer>

    )
}
