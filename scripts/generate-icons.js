const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
const path = require('path');

// 出力先ディレクトリ
const outputDir = path.join(__dirname, '../public');

// 生成するアイコンのサイズ（ピクセル）
const sizes = [192, 256, 384, 512];

// 入力SVGファイルのパス
const inputSvg = path.join(outputDir, 'icon.svg');

// アイコンを生成する関数
async function generateIcons() {
  try {
    // SVGを読み込む
    const svg = await loadImage(inputSvg);
    
    // 各サイズのアイコンを生成
    for (const size of sizes) {
      const canvas = createCanvas(size, size);
      const ctx = canvas.getContext('2d');
      
      // 背景を白で塗りつぶし
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, size, size);
      
      // SVGを描画
      ctx.drawImage(svg, 0, 0, size, size);
      
      // PNGとして保存
      const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
      const out = fs.createWriteStream(outputPath);
      const stream = canvas.createPNGStream();
      
      stream.pipe(out);
      await new Promise((resolve, reject) => {
        out.on('finish', resolve);
        out.on('error', reject);
      });
      
      console.log(`Generated: ${outputPath}`);
    }
    
    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

// 実行
generateIcons();
