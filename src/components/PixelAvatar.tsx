"use client";

interface Palette {
  [key: string]: string;
}

interface AnimalData {
  palette: Palette;
  pixels: string[];
}

export const animalAvatars: Record<string, AnimalData> = {
  dolphin: {
    palette: {
      B: "#0c1e3a",
      L: "#7ec3e8",
      W: "#dbeafe",
    },
    pixels: [
      "........................",
      "........................",
      "............BB..........",
      "...........BLLB.........",
      "..........BLLLLB........",
      ".........BLLLLLLB.......",
      "B.....BBBBLLLLLLLBB.....",
      "BB...BLLLLLLLLLLLLLB....",
      "BLB.BLLLLLLLLLLLLLLLB...",
      "BLLLLLLLLLLLLLLLLLLLLB..",
      "BLLLLLLLLLLLLLLLLBLLLLB.",
      "BLLLLLLLLLLLLLLLLLLLLB..",
      ".BLLLLLLLLLLLLLLLLLLB...",
      "..BLLWWWWWLLLLLLLLLB....",
      "...BWWWWWWWWLLLLLLB.....",
      "....BBBWWWWWWWLLLB......",
      "........BBWWWWBB........",
      "..........BBBB..........",
      "........................",
      "........................",
      "........................",
      "........................",
      "........................",
      "........................",
    ],
  },
  eagle: {
    palette: {
      B: "#000000",
      W: "#ffffff",
      D: "#92400e",
      Y: "#fbbf24",
      "2": "#92400e",
    },
    pixels: [
      "........................",
      "........................",
      ".........BBBBB..........",
      "........BWWWWBBB........",
      ".......BWWWWWWWB........",
      ".......BWWBWWWBYY.......",
      ".......BWWBWWYYYYB......",
      ".......BWWWYYYYBBB......",
      "........BBYYBBB.........",
      ".........BB22B..........",
      ".........B2222B.........",
      "........B22222B.........",
      "........B222222B........",
      "........B222222B........",
      "........B22222B.........",
      ".........B2222B.........",
      ".........B222B..........",
      ".........B22BB..........",
      ".........BYYBB..........",
      ".........BBBB...........",
      "........................",
      "........................",
      "........................",
      "........................",
    ],
  },
  bee: {
    palette: {
      B: "#000000",
      Y: "#fbbf24",
      G: "#d1d5db",
    },
    pixels: [
      "........................",
      "........................",
      "........................",
      ".....BB......BB.........",
      "......B......B..........",
      "......B......B..........",
      ".....BBB....BBB.........",
      ".....BGGBBBBGGB.........",
      "....BGGGGGGGGGGB........",
      "....BGGGGGGGGGGB........",
      ".....BBGGGGGGBB.........",
      ".......BBYYYBB..........",
      "......BYYYYYYYB.........",
      ".....BYYBBYYBBYB........",
      ".....BYYYYYYYYYB........",
      "....BBYBBBYBBBYBB.......",
      ".....BYYYYYYYYYB........",
      ".....BYYBYYYYYYB........",
      ".....BYYYYYYYYB.........",
      "......BYYYYYB...........",
      ".......BBBBB............",
      "........................",
      "........................",
      "........................",
    ],
  },
  bear: {
    palette: {
      B: "#1c1917",
      D: "#92400e",
      L: "#d6a76b",
      E: "#000000",
    },
    pixels: [
      "........................",
      "........................",
      "....BB............BB....",
      "...BBBB..........BBBB...",
      "...BDDBB........BBDDB...",
      "...BDDDDBBBBBBBBDDDDB...",
      "...BDDDDDDDDDDDDDDDDDB..",
      "...BDDDDLLLLLLLLLDDDB...",
      "...BDDLLLLLLLLLLLLLDB...",
      "...BDLLLELLLLLLLELLDB...",
      "...BDDLLLLLLLLLLLLDB....",
      "...BDDLLLLBBBBLLLLDB....",
      "...BDDLLLLBBBBLLLLDB....",
      "...BDDDLLLLLLLLLLDDB....",
      "...BDDDDDDDDDDDDDDDB....",
      "...BDDDDDDDDDDDDDDDB....",
      "....BBDDDDDDDDDDDB......",
      ".....BDDDDDDDDDDB.......",
      ".....BDDDDDDDDDB........",
      ".....BDDBBBDDDB.........",
      "....BBB...BBBB..........",
      "....B........B..........",
      "........................",
      "........................",
    ],
  },
};

interface PixelAvatarProps {
  animal: keyof typeof animalAvatars;
  size?: number;
  className?: string;
}

export function PixelAvatar({
  animal,
  size = 24,
  className = "",
}: PixelAvatarProps) {
  const data = animalAvatars[animal];
  if (!data) return null;
  const { palette, pixels } = data;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      shapeRendering="crispEdges"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {pixels.map((row, y) =>
        row.split("").map((char, x) => {
          if (char === "." || char === " ") return null;
          const fill = palette[char];
          if (!fill) return null;
          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={fill}
            />
          );
        })
      )}
    </svg>
  );
}