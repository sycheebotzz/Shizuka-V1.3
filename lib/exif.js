const { modul } = require('../module');
const { fs, ffmpeg, path, os } = modul;
const { tmpdir } = os;
const im = require('imagemagick');
const crypto = require('crypto');
const webp = require('node-webpmux');
async function imageToWebp(media) {
    const tmpFileOut = path.join(tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
    const tmpFileIn = path.join(tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`);

    fs.writeFileSync(tmpFileIn, media);
    return new Promise((resolve, reject) => {
        im.convert([tmpFileIn, tmpFileOut], (err) => {
            if (err) {
                reject(new Error(`Gagal mengonversi gambar ke WebP: ${err.message}`));
            } else {
                const buff = fs.readFileSync(tmpFileOut);
                fs.unlinkSync(tmpFileOut);
                fs.unlinkSync(tmpFileIn);
                resolve(buff);
            }
        });
    });
}
async function videoToWebp(media) {
    const tmpFileOut = path.join(tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
    const tmpFileIn = path.join(tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`);

    fs.writeFileSync(tmpFileIn, media);

    await new Promise((resolve, reject) => {
        ffmpeg(tmpFileIn)
            .on('error', (err) => reject(new Error(`Gagal mengonversi video ke WebP: ${err.message}`)))
            .on('end', () => resolve())
            .addOutputOptions([
                '-vcodec', 'libwebp',
                '-vf', 'scale=320:320:force_original_aspect_ratio=decrease,fps=15,pad=320:320:-1:-1:color=white@0.0',
                '-loop', '0',
                '-preset', 'default',
                '-an',
                '-vsync', '0'
            ])
            .toFormat('webp')
            .save(tmpFileOut);
    });

    const buff = fs.readFileSync(tmpFileOut);
    fs.unlinkSync(tmpFileOut);
    fs.unlinkSync(tmpFileIn);
    return buff;
}
async function writeExifImg(media, metadata) {
    let wMedia = await imageToWebp(media);
    const tmpFileIn = path.join(tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
    const tmpFileOut = path.join(tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
    fs.writeFileSync(tmpFileIn, wMedia);

    if (metadata.packname || metadata.author) {
        const img = new webp.Image();
        const json = {
            "sticker-pack-id": "https://github.com/KirBotz",
            "sticker-pack-name": metadata.packname,
            "sticker-pack-publisher": metadata.author,
            "emojis": metadata.categories || [""]
        };
        const exifAttr = Buffer.from([
            0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57,
            0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00
        ]);
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
        const exif = Buffer.concat([exifAttr, jsonBuff]);
        exif.writeUIntLE(jsonBuff.length, 14, 4);

        await img.load(tmpFileIn);
        fs.unlinkSync(tmpFileIn);
        img.exif = exif;
        await img.save(tmpFileOut);
        return tmpFileOut;
    }
}

// Fungsi untuk menulis metadata ke video WebP
async function writeExifVid(media, metadata) {
    let wMedia = await videoToWebp(media);
    const tmpFileIn = path.join(tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
    const tmpFileOut = path.join(tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
    fs.writeFileSync(tmpFileIn, wMedia);

    if (metadata.packname || metadata.author) {
        const img = new webp.Image();
        const json = {
            "sticker-pack-id": "https://github.com/KirBotz",
            "sticker-pack-name": metadata.packname,
            "sticker-pack-publisher": metadata.author,
            "emojis": metadata.categories || [""]
        };
        const exifAttr = Buffer.from([
            0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57,
            0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00
        ]);
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
        const exif = Buffer.concat([exifAttr, jsonBuff]);
        exif.writeUIntLE(jsonBuff.length, 14, 4);

        await img.load(tmpFileIn);
        fs.unlinkSync(tmpFileIn);
        img.exif = exif;
        await img.save(tmpFileOut);
        return tmpFileOut;
    }
}

module.exports = { imageToWebp, videoToWebp, writeExifImg, writeExifVid };