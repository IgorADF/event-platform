import { Logo } from "./Logo";

export function Header() {
    return (
        <header className="w-full py-5 flex item items-center justify-center border-b border-gray-600 bg-gray-700">
            <Logo />
        </header>
    )
}