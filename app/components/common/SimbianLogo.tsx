import Image from "next/image";

export default function SimbianLogo() {
    return (
        <div
            id="simbian-logo"
            className="opacity-0 absolute top-20 left-16"
        >
            <Image
                src="https://4bxg2e7sah.ufs.sh/f/fr48RyVaKIGoTtlLQCDc0hbe7ENy4BLnx9uzKaVsHFvtMOA6"
                alt="logo"
                width={180}
                height={10}
                className="grayscale brightness-90"
            />
        </div>
    );
}
