import { ICancelable } from "../interfaces/Cancelable";
import { IPausable } from "../interfaces/Pausable";

export type TimeoutController = ICancelable & IPausable;