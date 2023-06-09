// @ts-ignore
import { Config, createConfig } from '@umijs/test';

export default {
  displayName: 'tears-js',
  ...createConfig(),
  collectCoverageFrom: ['./**/*.{ts,js,tsx,jsx}'],
  moduleDirectories: ['node_modules', '../../node_modules'],
  testEnvironment: 'jsdom',

} as Config.InitialOptions;
