import puppeteer from "puppeteer-core";

const [, , width = "1440", height = "900", out = "shot.png", url = "http://localhost:3100"] =
  process.argv;

const browser = await puppeteer.launch({
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
});

const page = await browser.newPage();
await page.setViewport({ width: +width, height: +height });
await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });

// Scroll through the page to trigger every whileInView animation
await page.evaluate(async () => {
  document.documentElement.style.scrollBehavior = "auto";
  const step = window.innerHeight / 2;
  for (let y = 0; y <= document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 250));
  }
  window.scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 600));
});

// Let entrance animations settle
await new Promise((r) => setTimeout(r, 1500));

await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log("saved", out);
