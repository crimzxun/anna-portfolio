type TitleProps= {
    mini: string;
    heading: string;
};

export default function Title({ mini, heading }: TitleProps) {
    return (
        <div className="flex items-end gap-8">
            <p className="text-3xl">«/»</p>
            {/* inline-block shrinks the container to its needed width + no more */}
            <div className="md:inline-block"> 
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-xs md:self-center">
                        {mini}
                    </p>
                    <h1 className="text-3xl md:text-4xl font-semibold group relative inline-block">
                        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2
                            opacity-0 group-hover:opacity-100 group-hover:scale-110
                            transform origin-right transition-all duration-300 z-10 shadow-lg"
                        >
                            ˗ˋˏ
                        </span>
                        <span className="transition duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]">
                            {heading}
                        </span>
                        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2
                            opacity-0 group-hover:opacity-100 group-hover:scale-110
                            transform origin-left transition-all duration-300 z-10 shadow-lg"
                        >
                            ˎˊ-
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
}