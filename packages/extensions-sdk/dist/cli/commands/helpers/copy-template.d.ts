import type { ExtensionType } from '@directus/types';
import type { Language } from '../../types.js';
export default function copyTemplate(type: ExtensionType, extensionPath: string, sourcePath?: string, language?: Language): Promise<void>;
