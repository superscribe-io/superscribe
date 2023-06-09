import type { AppExtensionConfigs, RefRecord } from '@superscribe/types';
import type { AxiosInstance } from 'axios';
export declare function useStores(): Record<string, any>;
export declare function useApi(): AxiosInstance;
export declare function useExtensions(): RefRecord<AppExtensionConfigs>;
