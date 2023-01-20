import React, { useCallback, useState } from "react"
import Gallery from "react-photo-gallery"
import Fotos from "./fotos"

import Carousel, { Modal, ModalGateway } from "react-images"
import "./style.css"

const Galeria: any = () => {
	const [currentImage, setCurrentImage] = useState(0)
	const [viewerIsOpen, setViewerIsOpen] = useState(false)

	const openLightbox = useCallback((event: any, { Fotos, index }) => {
		setCurrentImage(index)
		setViewerIsOpen(true)
	}, [])

	const closeLightbox = () => {
		setCurrentImage(0)
		setViewerIsOpen(false)
	}

	return (
		<div>
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
	)
}

export default Galeria
