"Use client";

import { Configurator } from "@/components/Configurator";
import Experience from "@/components/Experience";
import { ConfigurationsProvider } from "@/contexts/Configurations";
import { Canvas } from "@react-three/fiber";

const MainScene: React.FunctionComponent = () => {
	return (
		<ConfigurationsProvider>
			<Canvas dpr={[1, 2]}>
				<color attach="background" args={["#213547"]} />
				<fog attach="fog" args={["#213547", 10, 20]} />
				<Experience />
			</Canvas>
			<Configurator />
		</ConfigurationsProvider>
	);
};

export default MainScene;
