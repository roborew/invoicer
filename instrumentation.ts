export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Disable automatic Vercel Analytics instrumentation
    // The error is caused by timing issues with performance metrics
    // Uncomment the line below if you want to use analytics properly
    // await import('@vercel/analytics').then((mod) => mod.register());
  }
}
