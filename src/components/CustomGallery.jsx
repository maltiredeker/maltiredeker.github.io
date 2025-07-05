import {useEffect, useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import { Gallery } from "react-grid-gallery";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";


export default function CustomGallery({images}){

    //index is closed
    const [index, setIndex] = useState(-1);

    //map all the images to the Gallery required format (src, width, height)

    const [rowHeight, setRowHeight] = useState(getRowHeight());

    function getRowHeight() {
        const width = window.innerWidth;
        if (width < 600) return 150;
        if (width < 1024) return 250;
        return 300;
    }

    useEffect(() => {
        const handleResize = () => setRowHeight(getRowHeight());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        Promise.all(
            images.map(src => {
                return new Promise(resolve => {
                    const img = new Image();
                    img.onload = () => {
                        resolve({
                            src,
                            width: img.naturalWidth,
                            height: img.naturalHeight,
                        });
                    };
                    img.src = src;
                });
            })
        ).then(setPhotos);
    }, [images]);

    return(
        <div>
            <Gallery 
                images = {photos}
                onClick = {(index) => setIndex(index)}
                enableImageSelection = {false}
                rowHeight={rowHeight}
                margin = {5}
            />

            <Lightbox
                index = {index}
                open = {index > -1}
                close={() => setIndex(-1)}
                slides = {images.map((src) => ({src}))} 
                plugins={[Zoom]}
                zoom={{
                    maxZoomPixelRatio: 3,     // allows up to 3x image resolution
                    zoomInMultiplier: 1.5,
                }}
            />


        </div>
    );
}