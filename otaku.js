const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeAnimeSearch(query) {
  const url = `https://otakudesu.cloud/?s=${encodeURIComponent(query)}&post_type=anime`;
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const results = [];
    $("ul.chivsrc > li").each((_, element) => {
      const title = $(element).find("h2 > a").text().trim();
      const link = $(element).find("h2 > a").attr("href");
      const image = $(element).find("img").attr("src");
      const genres = $(element)
        .find(".set:contains('Genres') a")
        .map((_, genre) => $(genre).text().trim())
        .get();
      const status = $(element)
        .find(".set:contains('Status')")
        .text()
        .replace("Status :", "")
        .trim();
      const rating = $(element)
        .find(".set:contains('Rating')")
        .text()
        .replace("Rating :", "")
        .trim();

      results.push({ title, link, image, genres, status, rating });
    });

    return results;
  } catch (error) {
    console.error("Error scraping data:", error.message);
    return [];
  }
}

// Contoh penggunaan
(async () => {
  const query = "kubo"; // Kata kunci pencarian
  const animeList = await scrapeAnimeSearch(query);
  console.log(animeList);
})();
