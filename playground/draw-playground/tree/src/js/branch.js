import {Tree} from "./tree";

export class Branch {
    constructor(startX, startY, endX, endY, lineWidth) {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.color = '#000000';
        this.lineWidth = lineWidth;

    }

    animate(ctx) {

    }

    draw(ctx) {
        ctx.beginPath();
        // setInterval(function() {
        //     amount += 0.05;
        // let grad = ctx.createLinearGradient(this.startX, this.startY, this.endX, this.endY);
        // grad.addColorStop(0, 'black');
        // grad.addColorStop(0.5, 'black');
        // grad.addColorStop(1, 'gray');
        // ctx.fillStyle = grad;
        ctx.moveTo(this.startX, this.startY); // 선의 시작 위치 지정
        ctx.lineTo(this.endX, this.endY); // 선의 끝 위치 지정
        // ctx.lineTo(this.startX + (this.endX - this.startX) * amount, this.startY + (this.endY - this.startY) * amount);
        if (this.lineWidth < 3) {
            ctx.lineWidth = 0.5;
        } else if (this.lineWidth < 7) {
            ctx.lineWidth = this.lineWidth * 0.7;
        } else if (this.lineWidth < 10) {
            ctx.lineWidth = this.lineWidth * 0.9;
        } else {
            ctx.lineWidth = this.lineWidth;
        }

        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;

        ctx.stroke();
        // ctx.fillRect(this.startX, this.startY, this.endX, this.endY);
        // requestAnimationFrame(this.draw);

        // }, 30);
        ctx.closePath();
    }
}
