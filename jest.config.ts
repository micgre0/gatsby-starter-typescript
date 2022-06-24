import { pathsToModuleNameMapper } from 'ts-jest'
import type { Config as JestConfiguration } from '@jest/types'

import { compilerOptions } from './tsconfig.paths.json'

const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
})

const jestConfiguration: JestConfiguration.InitialOptions = {
  globals: {
    'ts-jest': {},
    __PATH_PREFIX__: '',
  },
  preset: 'ts-jest',
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby|gatsby-script)/)'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.ts',
    ...paths,
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/loadershim.ts'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
}

export default jestConfiguration
