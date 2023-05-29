import { createLocalStorageStateHook } from 'use-local-storage-state';

export const DEFAULT_MEASUREMENT_DURATION = 120;
export const MIN_MEASUREMENT_DURATION = 20;
export const MAX_MEASUREMENT_DURATION = 180;

export const useLicenseKey = createLocalStorageStateHook('licenseKey', '23695E-DDF5A5-49D5B8-81A974-716170-C8B268');
export const useProductId = createLocalStorageStateHook('productId', null);
export const useMeasurementDuration = createLocalStorageStateHook(
  'measurementDuration',
  DEFAULT_MEASUREMENT_DURATION,
);
