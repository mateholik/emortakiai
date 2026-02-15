export function baseURL () {
  const fromEnv =
    process.env.NUXT_APP_BASE_URL ||
    process.env.NUXT_PUBLIC_APP_BASE_URL ||
    process.env.NUXT_PUBLIC_BASE_URL ||
    ''

  if (typeof fromEnv === 'string' && fromEnv.length > 0) {
    return fromEnv
  }

  return '/'
}

