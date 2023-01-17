import React from "react"
import { H1 } from "ui/typo"

import { StaticImage } from "gatsby-plugin-image"
import { BoxCard, Card, Container, Job, Name, Testimony } from "./style"

const Clientes = () => {
	return (
		<Container as={"div"}>
			<H1 as={"p"} color={"y2"} bold={"s"}>
				O QUE NOSSOS CLIENTES DIZEM
			</H1>
			<BoxCard>
				<Card>
					<StaticImage
						className='clientesImg'
						src={"./justus.jpg"}
						alt='Cliente: Roberto Justus'
					/>
					<Name>Roberto Justus</Name>
					<Job>Publicitário</Job>
					<Testimony>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
						maxime et, numquam sunt ipsum quos, dolores recusandae omnis eius
						quae sequi consequatur pariatur molestias vero!
					</Testimony>
				</Card>
				<Card>
					<StaticImage
						src={"./neymar.jpg"}
						alt='Cliente: Roberto Justus'
						className='clientesImg'
					/>
					<Name>Neymar Jr</Name>
					<Job>Jogador de Futebol</Job>
					<Testimony>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
						maxime et, numquam sunt ipsum quos, dolores recusandae omnis eius
						quae sequi consequatur pariatur molestias vero!
					</Testimony>
				</Card>
				<Card>
					<StaticImage
						src={"./musky.jpg"}
						alt='Cliente: Elon Musky'
						className='clientesImg'
					/>
					<Name>Elon Musky</Name>
					<Job>Empresário</Job>
					<Testimony>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
						maxime et, numquam sunt ipsum quos, dolores recusandae omnis eius
						quae sequi consequatur pariatur molestias vero!
					</Testimony>
				</Card>
				<Card>
					<StaticImage
						src={"./xuxa.jpg"}
						alt='Cliente: Xuxa'
						className='clientesImg'
					/>
					<Name>Xuxa Meneguel</Name>
					<Job>Apresentadora</Job>
					<Testimony>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
						maxime et, numquam sunt ipsum quos, dolores recusandae omnis eius
						quae sequi consequatur pariatur molestias vero!
					</Testimony>
				</Card>
			</BoxCard>
		</Container>
	)
}

export default Clientes
