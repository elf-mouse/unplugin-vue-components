/**
 * Plugin options.
 */
export interface Options {
  /**
   * Relative paths to the directory to search for components.
   * @default 'src/components'
   */
  dirs: string | string[]
  /**
   * Valid file extensions for components.
   * @default ['vue']
   */
  extensions: string | string[]
  /**
   * Search for subdirectories
   * @default true
   */
  deep: boolean
}

export interface ComponentsInfo {
  name: string
  path: string
}
export type ComponentsImportMap = Record<string, string[] | undefined>
