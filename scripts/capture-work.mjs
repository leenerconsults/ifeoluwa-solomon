import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'public', 'work')

/** Standard desktop viewport: 1920×1080, above-the-fold only */
const shots = [
  { slug: 'dangote-ipo', url: 'https://ipo.dangote.com/', wait: 7000 },
  { slug: 'transgrid-enerco', url: 'https://transgridenerco.com/', wait: 10000 },
  { slug: 'studio-hive', url: 'https://studiohiveltd.com/', wait: 7000 },
  { slug: 'dangote-investors-hub', url: 'https://investors.dangote.com/', wait: 8000 },
  { slug: 'bukihq', url: 'https://bukihq.com/', wait: 9000 },
  { slug: 'dangote-refinery', url: 'https://refinery.dangote.com/', wait: 8000 },
  {
    slug: 'dangote-cement',
    url: 'https://cement-webapp-e3fhgxbubwfrg0e2.ukwest-01.azurewebsites.net/',
    wait: 8000,
  },
]

await mkdir(outDir, { recursive: true })

const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1,
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
})

for (const shot of shots) {
  const page = await context.newPage()
  const file = path.join(outDir, `${shot.slug}.jpg`)
  try {
    console.log('capturing', shot.slug)
    await page.goto(shot.url, { waitUntil: 'domcontentloaded', timeout: 120000 })
    await page.waitForTimeout(shot.wait)
    await page.keyboard.press('Escape').catch(() => {})
    await page.screenshot({
      path: file,
      type: 'jpeg',
      quality: 88,
      fullPage: false,
    })
    console.log('ok', shot.slug)
  } catch (err) {
    console.error('fail', shot.slug, err.message)
  } finally {
    await page.close()
  }
}

await browser.close()
console.log('done')
