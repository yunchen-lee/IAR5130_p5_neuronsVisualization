class Node {
    // =============================================================
    // /* constructor */
    constructor(args) {
        this.p = args.p || createVector(width / 2, height / 2);
        this.r = args.r || 30;
        this.id = args.id;
    }

    // =============================================================
    // -------------------------------------------------------------
    // /* setup */

    // -------------------------------------------------------------
    // /* draw loop */
    draw() {
        // draw node
        push();
        translate(this.p.x, this.p.y);
        fill(0, 0, 255);
        stroke(100);
        circle(0, 0, 20);

        // draw circle
        stroke(70);
        noFill();
        circle(0, 0, this.r * 2);

        // draw text of index
        textSize(10);
        noStroke()
        fill(180);
        textAlign(CENTER, CENTER);
        text(this.id, 0, -18);
        pop();
    }

    // -------------------------------------------------------------
    // /* run loop */
    run() {

    }

    // =============================================================
    // -------------------------------------------------------------
    // /* circle packing */
    checkIntersec(pts) {
        let p2pts = createVector(this.p.x - pts.p.x, this.p.y - pts.p.y, this.p.z - pts.p.z);
        let distance = p2pts.mag();
        if (distance < this.r + pts.r) {
            let moveStep = -(distance - this.r - pts.r) / 7.0;
            p2pts.normalize();
            p2pts.mult(moveStep);
            this.p = createVector(this.p.x + p2pts.x, this.p.y + p2pts.y, this.p.z + p2pts.z)
        }
    }

    // /* if location inside node */
    ifInside(x, y) {
        let ifinside = false;
        let dis = dist(this.p.x, this.p.y, x, y);
        if (dis < 20) ifinside = true;
        return ifinside;
    }

    // =============================================================
    // /* mouse drag */
    setPosition(mousex, mousey) {
        this.p.x = mousex;
        this.p.y = mousey;
    }


}