import { Collection as CollectionRaw, CollectionType } from '@superscribe/types';
import { TranslateResult } from 'vue-i18n';

export interface Collection extends CollectionRaw {
	name: string | TranslateResult;
	icon: string;
	type: CollectionType;
	color?: string | null;
}
