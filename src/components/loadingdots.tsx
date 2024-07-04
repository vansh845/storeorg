export default function LoadingDots() {
    return (
        <div className="flex flex-col text-center min-h-screen justify-center items-center">
            <div className="flex">
                <div className="animate-bounce w-3 h-3 bg-primary rounded-full mr-1"></div>
                <div className="animate-bounce200 w-3 h-3 bg-primary rounded-full mr-1"></div>
                <div className="animate-bounce400 w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <style jsx>{`
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }
                .animate-bounce {
                    animation: bounce 0.6s infinite alternate;
                }
                .animate-bounce200 {
                    animation: bounce 0.6s infinite alternate 0.2s;
                }
                .animate-bounce400 {
                    animation: bounce 0.6s infinite alternate 0.4s;
                }
            `}</style>
        </div>
    )
}