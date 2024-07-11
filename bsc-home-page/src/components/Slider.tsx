import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { color: '#ff6347', text: 'Slide 1: Soluções Personalizadas' },
        { color: '#4caf50', text: 'Slide 2: Consultoria Especializada' },
        { color: '#2196f3', text: 'Slide 3: Integração de Sistemas' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <Box
                sx={{
                    display: 'flex',
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: 'transform 0.5s ease-in-out'
                }}
            >
                {slides.map((slide, index) => (
                    <Box
                        key={index}
                        sx={{
                            minWidth: '100%',
                            padding: 4,
                            backgroundColor: slide.color,
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: '1.5em'
                        }}
                    >
                        {slide.text}
                    </Box>
                ))}
            </Box>
            <Button
                sx={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            >
                &#10094;
            </Button>
            <Button
                sx={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            >
                &#10095;
            </Button>
        </Box>
    );
};

export default Slider;
