import { writeFileSync } from "fs";

const data = { photos: [] };

// Generate 1000 image records
for (let i = 1; i <= 1000; i++) {
    data.photos.push({
        albumId: Math.ceil(i / 100),
        id: i,
        title: `Random Image ${i}`,
        url: `https://picsum.photos/600/400?random=${i}`,
        thumbnailUrl: `https://picsum.photos/150/150?random=${i}`,
    });
}

// Save to db.json
writeFileSync("db.json", JSON.stringify(data, null, 2));

console.log("✅ Successfully generated db.json with 1000 images!");
