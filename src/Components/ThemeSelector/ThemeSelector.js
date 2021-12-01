
import { useTheme } from '../../Hooks/useTheme'
import './ThemeSelector.css';
import modeIcon from '../../Assets/mode-icon.svg'

const themeColors = ['#7FFFD4', '#FAEBD7', '#F0F8FF']
export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme();
    const toggleMode = () => {
        changeMode( mode === 'dark' ? 'light' : 'dark')
    }
    return (
        <div className="theme-selector">
            <div className="mode-toggle">
                <img 
                    onClick={toggleMode}
                    src={modeIcon} 
                    alt="shutup"
                    style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
                />
            </div>
            <div className="theme-buttons">
                {themeColors.map(color => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{ background: color}}
                    />
                ))}
            </div>
        </div>
    )
}
