import { ChildProcess } from 'child_process';

const global = {
	superscribe: {} as { [vendor: string]: ChildProcess },
	superscribeNoCache: {} as { [vendor: string]: ChildProcess },
};

export default global;
