function canBuildSoftwareCamera(required, hardwareCameras) {
  const DISTANCE_STEP = 1; 
  const LIGHT_STEP = 1;

  for (
    let d = required.minDistance;
    d <= required.maxDistance;
    d += DISTANCE_STEP
  ) {
    for (
      let l = required.minLight;
      l <= required.maxLight;
      l += LIGHT_STEP
    ) {
      let covered = false;

      for (const camera of hardwareCameras) {
        if (
          d >= camera.minDistance &&
          d <= camera.maxDistance &&
          l >= camera.minLight &&
          l <= camera.maxLight
        ) {
          covered = true;
          break;
        }
      }

      if (!covered) {
        return false; 
      }
    }
  }

  return true; 
}


const softwareCameraRequirement = {
  minDistance: 1,
  maxDistance: 10,
  minLight: 1,
  maxLight: 10
};

const hardwareCameras = [
  { minDistance: 1, maxDistance: 5, minLight: 1, maxLight: 10 },
  { minDistance: 6, maxDistance: 10, minLight: 1, maxLight: 10 }
];

const result = canBuildSoftwareCamera(
  softwareCameraRequirement,
  hardwareCameras
);

console.log("Can build software camera?", result);