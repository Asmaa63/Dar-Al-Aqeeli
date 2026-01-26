import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: {
      width: 1440,
      height: 900,
    },
  });

  const page = await browser.newPage();

  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle2",
    timeout: 0,
  });

  // استنى كل الصور (حتى الخارجية)
  await page.evaluate(async () => {
    const images = Array.from(document.images);
    await Promise.all(
      images.map((img) => {
        if (img.complete) return;
        return new Promise((resolve) => {
          img.onload = img.onerror = resolve;
        });
      })
    );
  });

  // استنى الخطوط
  await page.evaluateHandle("document.fonts.ready");

  // استنى شوية عشان Tailwind يظبط الـ layout
  await new Promise((r) => setTimeout(r, 3000));

  await page.pdf({
    path: "website.pdf",
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();
})();