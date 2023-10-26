import {
	ReactElement,
	ReactNode,
	createContext,
	useContext,
	useState,
	Dispatch,
	SetStateAction,
	PropsWithChildren,
} from "react";

export const chairColors = [
	{
		name: "yellow",
		color: "#FFFF00",
	},
	{
		name: "purple",
		color: "#800080",
	},
	{
		name: "beige",
		color: "#f5f5dc",
	},
	{
		name: "cyan",
		color: "#00FFFF",
	},
	{
		name: "teal",
		color: "#008080",
	},
];
export const cushionColors = [
	{
		name: "yellow",
		color: "#FFFF00",
	},
	{
		name: "purple",
		color: "#800080",
	},
	{
		name: "beige",
		color: "#f5f5dc",
	},
	{
		name: "cyan",
		color: "#00FFFF",
	},
	{
		name: "teal",
		color: "#008080",
	},
];

type ColorType = {
	name: string;
	color: string;
};

type ConfigurationsContextType = {
	material: string;
	setMaterial: Dispatch<SetStateAction<string>>;
	legs: number;
	setLegs: Dispatch<SetStateAction<number>>;
	chairColor: ColorType;
	setChairColor: Dispatch<SetStateAction<ColorType>>;
	cushionColor: ColorType;
	setCushionColor: Dispatch<SetStateAction<ColorType>>;
};
const defaultConfigurations: ConfigurationsContextType = {
	material: "leather",
	setMaterial: () => {},
	legs: 2, //classic set
	setLegs: () => {},
	chairColor: { ...chairColors[0] },
	setChairColor: () => {},
	cushionColor: { ...cushionColors[0] },
	setCushionColor: () => {},
};

const ConfigurationsContext = createContext<ConfigurationsContextType>(
	defaultConfigurations
);

export const ConfigurationsProvider = ({ children }: PropsWithChildren<{}>) => {
	const [material, setMaterial] = useState("leather");
	const [legs, setLegs] = useState(1);
	const [chairColor, setChairColor] = useState(chairColors[0]);
	const [cushionColor, setCushionColor] = useState(chairColors[0]);

	return (
		<ConfigurationsContext.Provider
			value={{
				material,
				setMaterial,
				legs,
				setLegs,
				chairColor,
				setChairColor,
				cushionColor,
				setCushionColor,
			}}
		>
			{children}
		</ConfigurationsContext.Provider>
	);
};

export const useConfigurations = () => {
	const context = useContext(ConfigurationsContext);
	return context;
};
