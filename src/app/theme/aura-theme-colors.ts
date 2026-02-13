import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import type { PaletteDesignToken } from '@primeuix/themes/types';

/**
 * Paletas de cor disponíveis no tema Aura (PrimeNG).
 * Troque PRIMARY_PALETTE abaixo para alterar a cor primária do app.
 */
export const AURA_PALETTE_NAMES = [
  'emerald', // padrão (verde)
  'green',
  'lime',
  'red',
  'orange',
  'amber',
  'yellow',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
] as const; 

export type AuraPaletteName = (typeof AURA_PALETTE_NAMES)[number];

/** Cor primária atual: mude aqui para testar outra paleta. */
export const PRIMARY_PALETTE: AuraPaletteName = 'sky';

function primaryPaletteFromName(name: AuraPaletteName): PaletteDesignToken {
  const scale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
  const token: PaletteDesignToken = {};
  for (const shade of scale) {
    token[shade] = `{${name}.${shade}}`;
  }
  return token;
}

/** Aura com a cor primária definida por PRIMARY_PALETTE. Use como preset no providePrimeNG. */
export const AuraWithPrimary = definePreset(Aura, {
  semantic: {
    primary: primaryPaletteFromName(PRIMARY_PALETTE),
  },
});
