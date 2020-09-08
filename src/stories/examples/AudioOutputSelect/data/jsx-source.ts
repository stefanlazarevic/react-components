export default `
function AudioOutputSelect() {
	const [choices, setChoices] = useState<SelectDataModel[]>([]);

	const [selected, setSelected] = useState({ label: "", value: "" });

	const getOutputDevices = useCallback(async () => {
		try {
			const stream = await navigator.mediaDevices.enumerateDevices();

			const options = [];

			for (let index = 0; index < stream.length; index++) {
				const device = stream[index];

				if (device.kind !== "audiooutput") {
					continue;
				}

				if (
					device.deviceId === "default" ||
					device.deviceId === "communications"
				) {
					continue;
				}

				options.push({
					value: device.deviceId,
					label: device.label,
				});
			}

			setChoices(options);

			if (
				!selected.value ||
				!options.find((option: any) => option.value === selected.value)
			) {
				setSelected(options[0]);
			}

			/* use the stream */
		} catch (error) {
			console.error("AudioOutputChoice", error);

			setChoices([]);
		}
	}, [selected]);

	const onChange = useCallback(
		(event: React.SyntheticEvent, selectedValue: string) => {
			setSelected(
				choices.find((option: any) => option.value === selectedValue)!
			);
		},
		[choices]
	);

	useLayoutEffect(() => {
		getOutputDevices();
	}, [getOutputDevices]);

	return (
		<div className="AudioOutputSelect">
			<Select
				options={choices}
				value={selected && selected.value}
				label={selected && selected.label}
				onChange={onChange}
			/>
			<IconButton onClick={getOutputDevices}>
				<SyncIcon />
			</IconButton>
		</div>
	);
}
`; 