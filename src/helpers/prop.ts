function extractAriaProperty<T>(props: T) {
	return function (ariaKey: string) {
		if (props[ariaKey] !== undefined && props[ariaKey] !== null) {
			return props[ariaKey];
		}

		return props[`aria-${ariaKey}`];
	};
}

export default {
  extractAriaProperty
}