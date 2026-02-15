type OglCanvas = {
  width: number;
  height: number;
  style: Record<string, string>;
};

type OglContext = {
  canvas: OglCanvas;
  drawingBufferWidth: number;
  drawingBufferHeight: number;
  BLEND: number;
  SRC_ALPHA: number;
  ONE_MINUS_SRC_ALPHA: number;
  clearColor: (..._args: number[]) => void;
  enable: (..._args: number[]) => void;
  blendFunc: (..._args: number[]) => void;
  getExtension: (_name: string) => { loseContext: () => void } | null;
};

const createCanvas = (): OglCanvas => {
  if (typeof document !== "undefined") {
    return document.createElement("canvas") as unknown as OglCanvas;
  }
  return { width: 0, height: 0, style: {} };
};

const createContext = (): OglContext => {
  const canvas = createCanvas();
  return {
    canvas,
    drawingBufferWidth: 0,
    drawingBufferHeight: 0,
    BLEND: 0,
    SRC_ALPHA: 0,
    ONE_MINUS_SRC_ALPHA: 0,
    clearColor: () => {},
    enable: () => {},
    blendFunc: () => {},
    getExtension: () => ({ loseContext: () => {} }),
  };
};

export class Renderer {
  dpr: number;
  gl: OglContext;

  constructor(opts?: { dpr?: number }) {
    this.dpr = opts?.dpr ?? 1;
    this.gl = createContext();
  }

  setSize(width: number, height: number) {
    this.gl.canvas.width = width;
    this.gl.canvas.height = height;
    this.gl.drawingBufferWidth = width;
    this.gl.drawingBufferHeight = height;
  }

  render(_opts?: { scene?: unknown }) {}

  destroy() {}
}

export class Program {
  uniforms: Record<string, { value: unknown }>;

  constructor(_gl: unknown, opts?: { uniforms?: Record<string, { value: unknown }> }) {
    this.uniforms = opts?.uniforms ?? {};
  }

  remove() {}
}

export class Mesh {
  constructor(_gl: unknown, _opts?: { geometry?: unknown; program?: unknown }) {}

  remove() {}
}

export class Triangle {
  constructor(_gl: unknown) {}

  remove() {}
}

export class Color {
  r: number;
  g: number;
  b: number;

  constructor(r = 0, g = 0, b = 0) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}
