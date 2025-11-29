import React, { useState } from 'react';
import { Palette, X } from 'lucide-react';

const ColorCustomizer = ({ onColorChange, darkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [customColor, setCustomColor] = useState({
        hue: 217, // Blue default
        saturation: 91,
        lightness: 60
    });

    const presetColors = [
        { name: 'Blue', hue: 217, saturation: 91, lightness: 60 },
        { name: 'Purple', hue: 271, saturation: 76, lightness: 53 },
        { name: 'Green', hue: 142, saturation: 76, lightness: 36 },
        { name: 'Orange', hue: 24, saturation: 95, lightness: 53 },
        { name: 'Pink', hue: 330, saturation: 81, lightness: 60 },
        { name: 'Teal', hue: 174, saturation: 72, lightness: 56 },
        { name: 'Red', hue: 0, saturation: 84, lightness: 60 },
        { name: 'Yellow', hue: 45, saturation: 93, lightness: 47 }
    ];

    const handlePresetClick = (preset) => {
        setCustomColor(preset);
        onColorChange(preset);
    };

    const handleSliderChange = (property, value) => {
        const newColor = { ...customColor, [property]: parseInt(value) };
        setCustomColor(newColor);
        onColorChange(newColor);
    };

    const getColorPreview = (color) => {
        return `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`;
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed top-24 right-8 z-50 p-3 rounded-full glass-panel transition-all duration-300 hover:scale-110 ${darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-gray-700 hover:text-gray-900'
                    }`}
                aria-label="Color Customizer"
            >
                <Palette size={24} />
            </button>

            {/* Color Customizer Panel */}
            {isOpen && (
                <div className={`fixed top-24 right-24 z-50 w-80 p-6 rounded-2xl glass-panel border-2 ${darkMode ? 'border-blue-400/50 shadow-lg shadow-blue-500/20' : 'border-gray-600/50 shadow-lg shadow-gray-600/20'
                    } transition-all duration-300`}>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Color Palette
                        </h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className={`p-1 rounded-full hover:bg-white/10 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Preset Colors */}
                    <div className="mb-6">
                        <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Quick Presets
                        </p>
                        <div className="grid grid-cols-4 gap-2">
                            {presetColors.map((preset) => (
                                <button
                                    key={preset.name}
                                    onClick={() => handlePresetClick(preset)}
                                    className="group relative w-full aspect-square rounded-lg border-2 border-white/20 hover:border-white/50 transition-all duration-200 hover:scale-110"
                                    style={{ backgroundColor: getColorPreview(preset) }}
                                    title={preset.name}
                                >
                                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 rounded-lg">
                                        {preset.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Color Sliders */}
                    <div className="space-y-4">
                        <div>
                            <label className={`text-sm mb-2 block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Hue: {customColor.hue}°
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="360"
                                value={customColor.hue}
                                onChange={(e) => handleSliderChange('hue', e.target.value)}
                                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                                style={{
                                    background: `linear-gradient(to right, 
                                        hsl(0, 100%, 50%), 
                                        hsl(60, 100%, 50%), 
                                        hsl(120, 100%, 50%), 
                                        hsl(180, 100%, 50%), 
                                        hsl(240, 100%, 50%), 
                                        hsl(300, 100%, 50%), 
                                        hsl(360, 100%, 50%))`
                                }}
                            />
                        </div>

                        <div>
                            <label className={`text-sm mb-2 block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Saturation: {customColor.saturation}%
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={customColor.saturation}
                                onChange={(e) => handleSliderChange('saturation', e.target.value)}
                                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                                style={{
                                    background: `linear-gradient(to right, 
                                        hsl(${customColor.hue}, 0%, 50%), 
                                        hsl(${customColor.hue}, 100%, 50%))`
                                }}
                            />
                        </div>

                        <div>
                            <label className={`text-sm mb-2 block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Lightness: {customColor.lightness}%
                            </label>
                            <input
                                type="range"
                                min="20"
                                max="80"
                                value={customColor.lightness}
                                onChange={(e) => handleSliderChange('lightness', e.target.value)}
                                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                                style={{
                                    background: `linear-gradient(to right, 
                                        hsl(${customColor.hue}, ${customColor.saturation}%, 0%), 
                                        hsl(${customColor.hue}, ${customColor.saturation}%, 50%), 
                                        hsl(${customColor.hue}, ${customColor.saturation}%, 100%))`
                                }}
                            />
                        </div>
                    </div>

                    {/* Color Preview */}
                    <div className="mt-6">
                        <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Current Color
                        </p>
                        <div
                            className="w-full h-16 rounded-lg border-2 border-white/20"
                            style={{ backgroundColor: getColorPreview(customColor) }}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ColorCustomizer;
