export class ObjectAnimation {
  constructor(meshObject, renderScene, settings) {
    this.plusOrMinusX = true;
    this.plusOrMinusY = true;
    this.plusOrMinusZ = true;
    this.renderScene = renderScene;
    this.meshObject = meshObject;
    this.settings = settings;
  }

  animateXRotation(speed) {
    if (speed && typeof speed === "number") {
      this.meshObject.rotation.x += speed;
    }
  }

  animateYRotation(speed) {
    if (speed && typeof speed === "number") {
      this.meshObject.rotation.y += speed;
    }
  }

  animateZRotation(speed) {
    if (speed && typeof speed === "number") {
      this.meshObject.rotation.z += speed;
    }
  }

  animateXPosition(speed, edge) {
    if (
      speed &&
      typeof speed === "number" &&
      edge &&
      typeof edge === "number"
    ) {
      if (
        this.meshObject.position.x > edge ||
        this.meshObject.position.x < -edge
      ) {
        this.plusOrMinusX = !this.plusOrMinusX;
      }
      this.meshObject.position.x += this.plusOrMinusX ? speed : -speed;
    }
  }

  animateYPosition(speed, edge) {
    if (
      speed &&
      typeof speed === "number" &&
      edge &&
      typeof edge === "number"
    ) {
      if (
        this.meshObject.position.y > edge ||
        this.meshObject.position.y < -edge
      ) {
        this.plusOrMinusY = !this.plusOrMinusY;
      }
      this.meshObject.position.y += this.plusOrMinusY ? speed : -speed;
    }
  }

  animateZPosition(speed, edge) {
    if (
      speed &&
      typeof speed === "number" &&
      edge &&
      typeof edge === "number"
    ) {
      if (
        this.meshObject.position.z > edge / 4 ||
        this.meshObject.position.z < -edge
      ) {
        this.plusOrMinusZ = !this.plusOrMinusZ;
      }
      this.meshObject.position.z += this.plusOrMinusZ ? speed : -speed;
    }
  }

  animate = () => {
    window.requestAnimationFrame(this.animate);
    this.renderScene();
    this.animateXRotation(this.settings.rotateX);
    this.animateYRotation(this.settings.rotateY);
    this.animateZRotation(this.settings.rotateZ);
    this.animateXPosition(
      this.settings.positionX[0],
      this.settings.positionX[1]
    );
    this.animateYPosition(
      this.settings.positionY[0],
      this.settings.positionY[1]
    );

    this.animateZPosition(
      this.settings.positionZ[0],
      this.settings.positionZ[1]
    );
  };
}
