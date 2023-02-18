import React, { useState } from "react";
import './MovieRow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { width } from "@mui/system";

export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let scrollValue = scrollX + Math.round(window.innerWidth / 2);
        if (scrollValue > 0) {
            scrollValue = 0
        }
        setScrollX(scrollValue)
    }

    const handleRightArrow = () => {
        let scrollValue = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 180;
        if ((window.innerWidth - listW) > scrollValue) {
            scrollValue = (window.innerWidth - listW) - 60
        }
        setScrollX(scrollValue)
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listArea">
                <div className="movieRow--left" onClick={handleLeftArrow}>
                    <NavigateBeforeIcon style={{ fontSize: 50 }} />
                </div>
                <div className="movieRow--right" onClick={handleRightArrow}>
                    <NavigateNextIcon style={{ fontSize: 50 }} />
                </div>

                <div className="movieRow--list"
                    style={{
                        marginLeft: scrollX,
                        width: items.results.length * 180
                    }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}