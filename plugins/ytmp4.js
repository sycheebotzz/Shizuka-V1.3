import fetch from 'node-fetch';

export async function all(m) {
    // Ambil data yang diperlukan dari pesan
    const { conn, text, command, usedPrefix } = m;

    // Memeriksa apakah perintah yang dikirim cocok
    if (!command.match('xxx')) return;

    // Memeriksa input
    let [url, resolution] = text.split(' ');
    if (!url) {
        return conn.reply(m.chat, `Gunakan format: ${usedPrefix}${command} <url> [resolusi]`, m);
    }

    try {
        // Ambil informasi video
        let res = await fetch(`https://ytdownloader.nvlgroup.my.id/info?url=${url}`);
        if (!res.ok) return conn.reply(m.chat, 'Gagal mengambil informasi video', m);

        let info = await res.json();
        let title = info.title;
        let duration = info.duration || 'Tidak diketahui';
        let usedResolution = resolution || '480';

        // URL download
        let downloadUrl = `https://ytdownloader.nvlgroup.my.id/download?url=${url}&resolution=${usedResolution}`;
        let videoRes = await fetch(downloadUrl);
        if (!videoRes.ok) return conn.reply(m.chat, 'Gagal mengunduh video', m);

        // Ambil video sebagai buffer
        let videoBuffer = await videoRes.buffer();
        let videoSize = videoBuffer.length / (1024 * 1024);

        // Kirim informasi video
        let message = `
[YTMP4 DOWNLOADER]
🎥 *Judul:* ${title}
🔗 *Link:* [Watch Here](${url})
⏱️ *Durasi:* ${duration} menit
📦 *Besar File:* ${videoSize.toFixed(2)} MB
🎨 *Resolusi yang Digunakan:* ${usedResolution}
`;

        await conn.reply(m.chat, message, m);

        // Kirim video
        if (videoSize > 100) {
            await conn.sendMessage(m.chat, {
                document: videoBuffer,
                mimetype: 'video/mp4',
                fileName: `${title}.mp4`
            });
        } else {
            await conn.sendMessage(m.chat, {
                video: videoBuffer,
                caption: title,
                mimetype: 'video/mp4'
            });
        }
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, `⚠️ Terjadi kesalahan: ${error.message}`, m);
    }
}

export const help = ['xxx'];
export const tags = ['main'];
export const command = 'xxx';
