import Image from "next/image";

export default function SimbianLogo() {
    return (
        <div
            id="simbian-logo"
            className="opacity-0 absolute top-20 left-16"
        >
            <Image
                src="/simbian-logo.png"
                alt="logo"
                width={180}
                height={10}
                className="grayscale brightness-90"
            />
        </div>
    );
}
