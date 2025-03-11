export const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
export const canvas2d: CanvasRenderingContext2D = canvas.getContext('2d', { willReadFrequently: true })!;
export const iconCanvas: HTMLCanvasElement = document.getElementById('iconCanvas') as HTMLCanvasElement;
export const icon2d: CanvasRenderingContext2D = iconCanvas.getContext('2d', { willReadFrequently: true })!;

export const jpegCanvas: HTMLCanvasElement = document.createElement('canvas');
export const jpegImg: HTMLImageElement = document.createElement('img');
export const jpeg2d: CanvasRenderingContext2D = jpegCanvas.getContext('2d', { willReadFrequently: true })!;
