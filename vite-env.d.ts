/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LLM_BASE_URL: string
  readonly VITE_DEFAULT_MODEL: string
  // add more VITE_… vars here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
