import React, { useCallback, useState, useEffect } from "react";

import "./AudioInputSelect.scss";

import { Select, IconButton, SyncIcon } from "../../../../components";

export default function AudioInputSelect() {
	const [options, setOptions] = useState<any[]>([]);

	const [selected, setSelected] = useState(options[0]);

	const onChange = useCallback(
		(event, selectedValue) => {
			setSelected(
				options.find((option: any) => option.value === selectedValue)!
			);
		},
		[options]
	);

	const getAvailableMicrophones = useCallback(async () => {
		let stream;

		try {
			stream = await navigator.mediaDevices.enumerateDevices();

      console.log(stream);
      
      const microphones = stream.filter(
        input => input.kind === 'audioinput' && input.deviceId !== 'default' && input.deviceId !== 'communications'
      );

      console.log(microphones);

			const microphoneOptions = microphones.map((microphone) => {
				return {
					value: microphone.deviceId,
					label: microphone.label,
				};
			});

			setOptions(microphoneOptions);

			/* use the stream */
		} catch (err) {
			/* handle the error */
		}
	}, []);

	useEffect(() => {
		getAvailableMicrophones();
	}, [getAvailableMicrophones]);

	return (
    <div className="AudioInputSelect">
      <Select options={options} value={selected && selected.value} label={selected && selected.label} onChange={onChange} />
      <IconButton onClick={getAvailableMicrophones}>
        <SyncIcon />
      </IconButton>
    </div>
  );
}