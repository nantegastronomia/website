import React from "react"
import { H1 } from "ui/typo"
import Justus from "./justus.jpg"
import Musky from "./musky.jpg"
import Neymar from "./neymar.jpg"
import Xuxa from "./xuxa.jpg"

import { Avatar, BoxCard, Card, Container, Job, Name, Testimony } from "./style"

const Clientes = () => {
	return (
		<Container as={"div"}>
			<H1 as={"p"} color={"y2"} bold={"s"}>
				O QUE NOSSOS CLIENTES DIZEM
			</H1>
			<BoxCard>
				<Card>
					<Avatar src={Justus} alt='Cliente: Roberto Justus' />

					<Name>Roberto Justus</Name>
					<Job>Publicitário</Job>
					<Testimony>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
						maxime et, numquam sunt ipsum quos, dolores recusandae omnis eius
						quae sequi consequatur pariatur molestias vero!
					</Testimony>
				</Card>
				<Card>
					<Avatar src={Neymar} alt='Cliente: Roberto Justus' />
					<Name>Neymar Jr</Name>
					<Job>Jogador de Futebol</Job>
					<Testimony>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
						maxime et, numquam sunt ipsum quos, dolores recusandae omnis eius
						quae sequi consequatur pariatur molestias vero!
					</Testimony>
				</Card>
				<Card>
					<Avatar src={Musky} alt='Cliente: Elon Musky' />
					<Name>Elon Musky</Name>
					<Job>Empresário</Job>
					<Testimony>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
						maxime et, numquam sunt ipsum quos, dolores recusandae omnis eius
						quae sequi consequatur pariatur molestias vero!
					</Testimony>
				</Card>
				<Card>
					<Avatar src={Xuxa} alt='Cliente: Xuxa' />
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
