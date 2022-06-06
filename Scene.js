class Scene {
    // =============================================================
    // /* constructor */
    constructor(args) {
        this.nodes = [];
    }

    // =============================================================
    // -------------------------------------------------------------
    // /* setup */
    setup() {
        // create nodes 
        // for (let i = 0; i < 3; i++) {
        //     let newNode = new Node({
        //             p: createVector(width / 2 + random(100), height / 2 + random(100)),
        //             r: random(30, 40),
        //             id: i
        //         })
        //         //newNode.setup();
        //     this.nodes.push(newNode);
        // }
    }

    // -------------------------------------------------------------
    // /* run loop */
    run() {
        // circle packing
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = 0; j < this.nodes.length; j++) {
                if (i == j) continue;
                else {
                    this.nodes[i].checkIntersec(this.nodes[j]);
                }
            }
        }
    }

    // -------------------------------------------------------------
    // /* draw loop */
    draw() {
        // draw nodes 
        this.nodes.forEach(p => {
            p.draw();
        })
    }

    // =============================================================
    // -------------------------------------------------------------
    // /* add new node */
    addNode(_id) {
        let notExisted = true;
        this.nodes.forEach(n => {
            if (n.id == _id) notExisted = false;
        })
        if (notExisted) {
            let newNode = new Node({
                p: createVector(width / 2 + random(100), height / 2 + random(100)),
                r: random(30, 40),
                id: _id
            })
            this.nodes.push(newNode);
        }
    }


}