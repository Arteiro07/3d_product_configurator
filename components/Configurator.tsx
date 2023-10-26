import {
	chairColors,
	cushionColors,
	useConfigurations,
} from "@/contexts/Configurations";

export function Configurator() {
	const {
		material,
		setMaterial,
		legs,
		setLegs,
		chairColor,
		setChairColor,
		cushionColor,
		setCushionColor,
	} = useConfigurations();

	return (
		<>
			<div className="configurator">
				<div className="configurator_section">
					<div className="configurator_section_title">Chair Material</div>
					<div className="configurator_section_values">
						<div
							className={`item ${
								material === "leather" ? "item--active" : " "
							} `}
							onClick={() => setMaterial("leather")}
						>
							<div className="item_label">Leather</div>
						</div>
						<div
							className={`item ${
								material === "fabric" ? "item--active" : " "
							} `}
							onClick={() => setMaterial("fabric")}
						>
							<div className="item_label">Fabric</div>
						</div>
					</div>
				</div>
				<div className="configurator_section">
					<div className="configurator_section_title">Chair Colors</div>
					<div className="configurator_section_values">
						{chairColors.map((item, index) => (
							<>
								<div
									key={index}
									className={`item ${
										item.color === chairColor.color ? "item--active" : " "
									}`}
									onClick={() => {
										setChairColor(chairColors[index]);
									}}
								>
									<div className="item_label">{item.name}</div>
									<div
										className="item_dot"
										style={{ backgroundColor: item.color }}
									></div>
								</div>
							</>
						))}
					</div>
				</div>

				<div className="configurator_section">
					<div className="configurator_section_title">Cushion Colors</div>
					<div className="configurator_section_values">
						{cushionColors.map((item, index) => (
							<>
								<div
									key={index}
									className={`item ${
										item.color === cushionColor.color ? "item--active" : " "
									}`}
									onClick={() => {
										setCushionColor(cushionColors[index]);
									}}
								>
									<div className="item_label">{item.name}</div>
									<div
										className="item_dot"
										style={{ backgroundColor: item.color }}
									></div>
								</div>
							</>
						))}
					</div>
				</div>

				<div className="configurator_section">
					<div className="configurator_section_title">Leg type</div>
					<div className="configurator_section_values">
						<div
							className={`item ${legs === 1 ? "item--active" : " "} `}
							onClick={() => setLegs(1)}
						>
							<div className="item_label">Classic</div>
						</div>
						<div
							className={`item ${legs === 2 ? "item--active" : " "} `}
							onClick={() => setLegs(2)}
						>
							<div className="item_label">Contemporary</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
