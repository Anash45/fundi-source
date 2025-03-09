import React, { useEffect, useRef } from 'react';

const Video = ({ videoSrc }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const videoElement = videoRef.current;
            if (videoElement) {
                const rect = videoElement.getBoundingClientRect();
                const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
                if (isVisible) {
                    videoElement.play().catch(() => {
                        // Handle autoplay restrictions gracefully
                        videoElement.muted = true;
                        videoElement.play();
                    });
                } else {
                    videoElement.pause();
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='py-10 px-4'>
            <div className='mx-auto'>
                <h1 className='text-2xl md:text-4xl text-[#1c1d24] leading-[125%] font-axiforma-r text-center mb-8'>See how easy it is for your supporters</h1>
                <div className='overflow-hidden mx-auto max-w-[800px]'>
                    <video
                        ref={videoRef}
                        src={videoSrc}
                        controls
                        className="w-full object-cover h-auto mx-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Video;
