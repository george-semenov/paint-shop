export enum PaintType {
    Matte,
    Glossy
}

export type PaintSet = Array<PaintType>;

export class Paint {
    color: number;
    paintType: PaintType;

    constructor(color: number, paintType: PaintType) {
        this.color = color;
        this.paintType = paintType;
    }
}
