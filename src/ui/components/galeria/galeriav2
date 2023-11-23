import React, { useCallback, useState } from "react";
import Gallery from "react-photo-gallery";
import Fotos from "./fotos";
import video01 from "./video/01.mp4";
import video02 from "./video/02.mp4";
import video03 from "./video/03.mp4";
import video04 from "./video/04.mp4";
import video05 from "./video/05.mp4";

import Carousel, { Modal, ModalGateway } from "react-images";
import "./style.css";
import { GaleriaVideo, Video } from "./style";

const Galeria: any = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event: any, { Fotos, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <div className="galeria">
        <Gallery photos={Fotos} margin={4} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={Fotos.map((x: any) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
      <GaleriaVideo>
        <Video controls>
          <source src={video01} type="video/mp4" />
        </Video>
        <Video controls>
          <source src={video02} type="video/mp4" />
        </Video>
        <Video controls>
          <source src={video03} type="video/mp4" />
        </Video>
        <Video controls>
          <source src={video04} type="video/mp4" />
        </Video>
        <Video controls>
          <source src={video05} type="video/mp4" />
        </Video>
      </GaleriaVideo>
    </>
  );
};

export default Galeria;
