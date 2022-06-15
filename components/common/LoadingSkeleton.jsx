const LoadingSkeleton = () => {

    return <div id="loading">
        <div id="loading-center">
            <div id="loading-center-absolute">
                <svg id="loader">
                    <path
                        id="corners"
                        d="m 0 12.5 l 0 -12.5 l 50 0 l 0 50 l -50 0 l 0 -37.5"
                    />
                </svg>
            </div>
        </div>
    </div>
}

export default LoadingSkeleton;