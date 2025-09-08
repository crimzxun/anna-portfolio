type Link = {
    href: string;
    label: string;
};

export default function Hyperlink({ href, label }: Link) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-yellow-300 hover:underline transition-transform hover:scale-125"
        >
            {label}
        </a>
    );
}